import React, { useEffect, useMemo, useState } from "react";
import Layout from "../components/Layouts/Layout";
import { fetchContent, fallbackContent, loginMember, saveContentSection } from "../services/contentApi";

const editableSections = ["projects", "events", "achievements", "announcements", "team", "gallery", "blogs"];

const emptyGallery = { title: "", url: "", category: "Chapter" };
const emptyBlog = { title: "", author: "", cover: "", excerpt: "", body: "" };
const emptyMember = { name: "", role: "", img: "", special: false };

const AdminPanel = () => {
  const [auth, setAuth] = useState(() => {
    const stored = localStorage.getItem("asme-auth");
    return stored ? JSON.parse(stored) : null;
  });
  const [login, setLogin] = useState({ email: "admin@asme.local", password: "asme123" });
  const [loginError, setLoginError] = useState("");
  const [content, setContent] = useState(fallbackContent);
  const [activeSection, setActiveSection] = useState("projects");
  const [jsonDraft, setJsonDraft] = useState("");
  const [status, setStatus] = useState("");
  const [galleryDraft, setGalleryDraft] = useState(emptyGallery);
  const [blogDraft, setBlogDraft] = useState(emptyBlog);
  const [memberDraft, setMemberDraft] = useState(emptyMember);
  const [teamTarget, setTeamTarget] = useState({ yearId: "", teamId: "" });

  const isAdmin = auth?.user?.role === "admin";
  const selectedYear = useMemo(
    () => content.team?.find((year) => year.id === teamTarget.yearId) || content.team?.[0],
    [content.team, teamTarget.yearId]
  );
  const selectedTeam = useMemo(
    () => selectedYear?.teams?.find((team) => team.id === teamTarget.teamId) || selectedYear?.teams?.[0],
    [selectedYear, teamTarget.teamId]
  );

  useEffect(() => {
    fetchContent().then(setContent);
  }, []);

  useEffect(() => {
    setJsonDraft(JSON.stringify(content[activeSection] || [], null, 2));
  }, [activeSection, content]);

  useEffect(() => {
    if (!content.team?.length) return;
    setTeamTarget((current) => ({
      yearId: current.yearId || content.team[0].id,
      teamId: current.teamId || content.team[0].teams?.[0]?.id || "",
    }));
  }, [content.team]);

  useEffect(() => {
    if (!selectedYear?.teams?.length) return;
    setTeamTarget((current) => ({
      ...current,
      teamId: selectedYear.teams.some((team) => team.id === current.teamId)
        ? current.teamId
        : selectedYear.teams[0].id,
    }));
  }, [selectedYear]);

  const refresh = async () => {
    const nextContent = await fetchContent();
    setContent(nextContent);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoginError("");
    try {
      const nextAuth = await loginMember(login);
      setAuth(nextAuth);
      localStorage.setItem("asme-auth", JSON.stringify(nextAuth));
      setStatus(`Welcome, ${nextAuth.user.name}.`);
      await refresh();
    } catch (error) {
      setLoginError(`${error.message}. Start the API with npm run api or npm run dev.`);
    }
  };

  const logout = () => {
    setAuth(null);
    localStorage.removeItem("asme-auth");
  };

  const saveSection = async (section, data) => {
    if (!isAdmin) return;
    const result = await saveContentSection(section, data, auth.token);
    setContent(result.content);
    setStatus(`${section} updated successfully.`);
  };

  const saveJson = async () => {
    try {
      await saveSection(activeSection, JSON.parse(jsonDraft));
    } catch (error) {
      setStatus(`Could not save ${activeSection}: ${error.message}`);
    }
  };

  const addGallery = async (event) => {
    event.preventDefault();
    const nextGallery = [
      {
        ...galleryDraft,
        id: `gallery-${Date.now()}`,
        createdAt: new Date().toISOString(),
      },
      ...(content.gallery || []),
    ];
    await saveSection("gallery", nextGallery);
    setGalleryDraft(emptyGallery);
  };

  const addBlog = async (event) => {
    event.preventDefault();
    const nextBlogs = [
      {
        ...blogDraft,
        id: `blog-${Date.now()}`,
        date: new Date().toISOString().slice(0, 10),
      },
      ...(content.blogs || []),
    ];
    await saveSection("blogs", nextBlogs);
    setBlogDraft(emptyBlog);
  };

  const addMember = async (event) => {
    event.preventDefault();
    const nextTeam = content.team.map((year) => {
      if (year.id !== selectedYear?.id) return year;
      return {
        ...year,
        teams: year.teams.map((team) => {
          if (team.id !== selectedTeam?.id) return team;
          return { ...team, members: [{ ...memberDraft }, ...team.members] };
        }),
      };
    });
    await saveSection("team", nextTeam);
    setMemberDraft(emptyMember);
  };

  return (
    <Layout
      title="ASME NITR | Admin Panel"
      description="Private content management console for ASME NIT Rourkela."
      canonicalPath={null}
      noIndex
      isScrolled
    >
      <section className="admin-page">
        <div className="page-shell-heading">
          <p className="eyebrow">Member workspace</p>
          <h1>Club Console</h1>
          <span>
            A lightweight backend-backed console for content updates. Run `npm run dev` to start the
            API and React app together.
          </span>
        </div>

        {!auth ? (
          <form className="login-panel" onSubmit={handleLogin}>
            <h2>Member Login</h2>
            <p>Default local admin: admin@asme.local / asme123</p>
            <label>
              Email
              <input
                value={login.email}
                onChange={(event) => setLogin({ ...login, email: event.target.value })}
                type="email"
              />
            </label>
            <label>
              Password
              <input
                value={login.password}
                onChange={(event) => setLogin({ ...login, password: event.target.value })}
                type="password"
              />
            </label>
            {loginError && <p className="form-error">{loginError}</p>}
            <button className="club-button primary" type="submit">
              Sign in
            </button>
          </form>
        ) : (
          <>
            <div className="console-bar">
              <div>
                <p className="eyebrow">{auth.user.role}</p>
                <h2>{auth.user.name}</h2>
              </div>
              <div className="console-actions">
                <button className="club-button secondary" onClick={refresh}>
                  Refresh content
                </button>
                <button className="club-button secondary" onClick={logout}>
                  Logout
                </button>
              </div>
            </div>

            {status && <div className="status-note">{status}</div>}

            {!isAdmin ? (
              <div className="readonly-panel">
                <h2>Member access active</h2>
                <p>
                  Your account can view the console. Ask an admin to promote your role before editing
                  site content.
                </p>
              </div>
            ) : (
              <div className="admin-console-grid">
                <form className="quick-panel" onSubmit={addGallery}>
                  <h2>Add Gallery Photo</h2>
                  <input
                    placeholder="Photo title"
                    value={galleryDraft.title}
                    onChange={(event) => setGalleryDraft({ ...galleryDraft, title: event.target.value })}
                    required
                  />
                  <input
                    placeholder="Image URL"
                    value={galleryDraft.url}
                    onChange={(event) => setGalleryDraft({ ...galleryDraft, url: event.target.value })}
                    required
                  />
                  <input
                    placeholder="Category"
                    value={galleryDraft.category}
                    onChange={(event) => setGalleryDraft({ ...galleryDraft, category: event.target.value })}
                  />
                  <button className="club-button primary" type="submit">
                    Add photo
                  </button>
                </form>

                <form className="quick-panel" onSubmit={addMember}>
                  <h2>Add Team Member</h2>
                  <div className="form-row">
                    <select
                      value={selectedYear?.id || ""}
                      onChange={(event) => setTeamTarget({ yearId: event.target.value, teamId: "" })}
                    >
                      {content.team?.map((year) => (
                        <option value={year.id} key={year.id}>
                          {year.title}
                        </option>
                      ))}
                    </select>
                    <select
                      value={selectedTeam?.id || ""}
                      onChange={(event) => setTeamTarget({ ...teamTarget, teamId: event.target.value })}
                    >
                      {selectedYear?.teams?.map((team) => (
                        <option value={team.id} key={team.id}>
                          {team.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <input
                    placeholder="Member name"
                    value={memberDraft.name}
                    onChange={(event) => setMemberDraft({ ...memberDraft, name: event.target.value })}
                    required
                  />
                  <input
                    placeholder="Role"
                    value={memberDraft.role}
                    onChange={(event) => setMemberDraft({ ...memberDraft, role: event.target.value })}
                    required
                  />
                  <input
                    placeholder="Image URL"
                    value={memberDraft.img}
                    onChange={(event) => setMemberDraft({ ...memberDraft, img: event.target.value })}
                  />
                  <label className="checkbox-line">
                    <input
                      type="checkbox"
                      checked={memberDraft.special}
                      onChange={(event) => setMemberDraft({ ...memberDraft, special: event.target.checked })}
                    />
                    Leadership role
                  </label>
                  <button className="club-button primary" type="submit">
                    Add member
                  </button>
                </form>

                <form className="quick-panel wide" onSubmit={addBlog}>
                  <h2>Add Blog / Update</h2>
                  <div className="form-row">
                    <input
                      placeholder="Title"
                      value={blogDraft.title}
                      onChange={(event) => setBlogDraft({ ...blogDraft, title: event.target.value })}
                      required
                    />
                    <input
                      placeholder="Author"
                      value={blogDraft.author}
                      onChange={(event) => setBlogDraft({ ...blogDraft, author: event.target.value })}
                      required
                    />
                  </div>
                  <input
                    placeholder="Cover image URL"
                    value={blogDraft.cover}
                    onChange={(event) => setBlogDraft({ ...blogDraft, cover: event.target.value })}
                  />
                  <textarea
                    placeholder="Excerpt"
                    value={blogDraft.excerpt}
                    onChange={(event) => setBlogDraft({ ...blogDraft, excerpt: event.target.value })}
                    required
                  />
                  <textarea
                    placeholder="Body"
                    value={blogDraft.body}
                    onChange={(event) => setBlogDraft({ ...blogDraft, body: event.target.value })}
                    required
                  />
                  <button className="club-button primary" type="submit">
                    Publish update
                  </button>
                </form>

                <div className="json-panel wide">
                  <div className="json-panel-header">
                    <div>
                      <p className="eyebrow">Advanced editor</p>
                      <h2>Structured Content</h2>
                    </div>
                    <select value={activeSection} onChange={(event) => setActiveSection(event.target.value)}>
                      {editableSections.map((section) => (
                        <option key={section} value={section}>
                          {section}
                        </option>
                      ))}
                    </select>
                  </div>
                  <textarea value={jsonDraft} onChange={(event) => setJsonDraft(event.target.value)} />
                  <button className="club-button primary" onClick={saveJson}>
                    Save {activeSection}
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </section>
    </Layout>
  );
};

export default AdminPanel;
