import { achievements, announcements, events, projects, quickStats } from "../data/siteContent";
import { defaultTeamData } from "../data/teamData";

const API_BASE =
  process.env.REACT_APP_API_URL ||
  (process.env.NODE_ENV === "development" ? "http://localhost:5050" : "");

function apiUrl(path) {
  return `${API_BASE}${path}`;
}

async function fetchWithTimeout(url, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), options.timeout || 1200);

  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

export const fallbackContent = {
  projects,
  events,
  achievements,
  announcements,
  quickStats,
  team: defaultTeamData,
  gallery: [],
  blogs: [
    {
      id: "blog-legacy",
      title: "Building an ASME Chapter Culture",
      author: "ASME NITR",
      date: "2026-06-14",
      cover: "https://i.postimg.cc/brPvNpfc/velomobile.jpg",
      excerpt:
        "A chapter grows when students document, build, compete, and hand over knowledge with care.",
      body:
        "Use this space for build logs, event recaps, competition diaries, sponsor updates, alumni notes, and technical explainers from project teams.",
    },
  ],
};

function normalizeContent(content = {}) {
  return {
    ...fallbackContent,
    ...content,
    projects: Array.isArray(content.projects) ? content.projects : fallbackContent.projects,
    events: Array.isArray(content.events) ? content.events : fallbackContent.events,
    achievements: Array.isArray(content.achievements) ? content.achievements : fallbackContent.achievements,
    announcements: Array.isArray(content.announcements) ? content.announcements : fallbackContent.announcements,
    quickStats: Array.isArray(content.quickStats) ? content.quickStats : fallbackContent.quickStats,
    team: Array.isArray(content.team) && content.team.length ? content.team : fallbackContent.team,
    gallery: Array.isArray(content.gallery) ? content.gallery : fallbackContent.gallery,
    blogs: Array.isArray(content.blogs) ? content.blogs : fallbackContent.blogs,
  };
}

export async function fetchContent() {
  try {
    const response = await fetchWithTimeout(apiUrl("/api/content"));
    if (!response.ok) return normalizeContent();
    const content = await response.json();
    return normalizeContent(content);
  } catch (error) {
    return normalizeContent();
  }
}

export async function loginMember(credentials) {
  const response = await fetch(apiUrl("/api/login"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: "Login failed" }));
    throw new Error(error.message || "Login failed");
  }

  return response.json();
}

export async function saveContentSection(section, data, token) {
  const response = await fetch(apiUrl(`/api/content/${section}`), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: "Update failed" }));
    throw new Error(error.message || "Update failed");
  }

  return response.json();
}
