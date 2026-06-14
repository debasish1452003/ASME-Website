const crypto = require("crypto");
const fs = require("fs");
const http = require("http");
const path = require("path");

const PORT = Number(process.env.PORT || 5050);
const DB_PATH = path.join(__dirname, "data", "content.json");
const TOKEN_SECRET = process.env.ASME_TOKEN_SECRET || "asme-local-dev-secret";

function readDb() {
  return JSON.parse(fs.readFileSync(DB_PATH, "utf8"));
}

function writeDb(nextDb) {
  fs.writeFileSync(DB_PATH, JSON.stringify(nextDb, null, 2));
}

function hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

function base64url(input) {
  return Buffer.from(input).toString("base64url");
}

function sign(payload) {
  const body = base64url(JSON.stringify(payload));
  const signature = crypto.createHmac("sha256", TOKEN_SECRET).update(body).digest("base64url");
  return `${body}.${signature}`;
}

function verify(token) {
  if (!token || !token.includes(".")) return null;
  const [body, signature] = token.split(".");
  const expected = crypto.createHmac("sha256", TOKEN_SECRET).update(body).digest("base64url");
  if (Buffer.byteLength(signature) !== Buffer.byteLength(expected)) return null;
  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return null;
  const payload = JSON.parse(Buffer.from(body, "base64url").toString("utf8"));
  if (payload.expiresAt && Date.now() > payload.expiresAt) return null;
  return payload;
}

function send(res, status, body) {
  res.writeHead(status, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "GET, POST, PUT, OPTIONS",
  });
  res.end(JSON.stringify(body));
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 10_000_000) {
        reject(new Error("Request body too large"));
      }
    });
    req.on("end", () => {
      if (!body) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(new Error("Invalid JSON"));
      }
    });
  });
}

function publicContent(db) {
  const { users, ...content } = db;
  return content;
}

function requireAdmin(req, db) {
  const token = req.headers.authorization?.replace("Bearer ", "");
  const payload = verify(token);
  if (!payload) return null;
  const user = db.users.find((item) => item.id === payload.id);
  return user?.role === "admin" ? user : null;
}

const server = http.createServer(async (req, res) => {
  if (req.method === "OPTIONS") return send(res, 200, { ok: true });

  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const db = readDb();

    if (req.method === "GET" && url.pathname === "/api/health") {
      return send(res, 200, { ok: true, service: "asme-content-api" });
    }

    if (req.method === "GET" && url.pathname === "/api/content") {
      return send(res, 200, publicContent(db));
    }

    if (req.method === "POST" && url.pathname === "/api/login") {
      const body = await parseBody(req);
      const user = db.users.find((item) => item.email.toLowerCase() === String(body.email || "").toLowerCase());
      if (!user || user.passwordHash !== hashPassword(String(body.password || ""))) {
        return send(res, 401, { message: "Invalid email or password" });
      }

      const token = sign({ id: user.id, role: user.role, expiresAt: Date.now() + 1000 * 60 * 60 * 8 });
      return send(res, 200, {
        token,
        user: { id: user.id, name: user.name, email: user.email, role: user.role },
      });
    }

    if (req.method === "PUT" && url.pathname.startsWith("/api/content/")) {
      const admin = requireAdmin(req, db);
      if (!admin) return send(res, 403, { message: "Admin access required" });

      const section = url.pathname.split("/").pop();
      const allowed = ["projects", "events", "achievements", "announcements", "team", "gallery", "blogs", "quickStats"];
      if (!allowed.includes(section)) return send(res, 404, { message: "Unknown content section" });

      const body = await parseBody(req);
      db[section] = body;
      writeDb(db);
      return send(res, 200, { ok: true, section, content: publicContent(db) });
    }

    return send(res, 404, { message: "Route not found" });
  } catch (error) {
    return send(res, 500, { message: error.message || "Server error" });
  }
});

server.listen(PORT, () => {
  console.log(`ASME content API running on http://localhost:${PORT}`);
  console.log("Default local credentials: admin@asme.local / asme123");
});
