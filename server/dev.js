const { spawn } = require("child_process");
const path = require("path");

const isWindows = process.platform === "win32";
const npmCommand = isWindows ? "npm.cmd" : "npm";
const root = path.join(__dirname, "..");
const cleanEnv = Object.fromEntries(Object.entries(process.env).filter(([, value]) => value !== undefined));

const processes = [
  spawn(process.execPath, ["server/index.js"], { cwd: root, stdio: "inherit" }),
  spawn(npmCommand, ["run", "start"], {
    cwd: root,
    stdio: "inherit",
    env: { ...cleanEnv, BROWSER: "none" },
    shell: isWindows,
  }),
];

function stopAll(signal) {
  for (const child of processes) {
    if (!child.killed) child.kill(signal);
  }
}

process.on("SIGINT", () => {
  stopAll("SIGINT");
  process.exit(0);
});

process.on("SIGTERM", () => {
  stopAll("SIGTERM");
  process.exit(0);
});

for (const child of processes) {
  child.on("exit", (code) => {
    if (code && code !== 0) {
      stopAll("SIGTERM");
      process.exit(code);
    }
  });
}
