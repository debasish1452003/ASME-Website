import React, { useEffect, useMemo, useState } from "react";
import Layout from "../components/Layouts/Layout";
import Loader from "../components/Loader/Loader";
import { useSiteContent } from "../hooks/useSiteContent";

const Team = () => {
  const { content, loading: contentLoading } = useSiteContent({ preloadImages: true });
  const [loading, setLoading] = useState(process.env.NODE_ENV !== "production");
  const [activeYearId, setActiveYearId] = useState("");
  const [activeTeamId, setActiveTeamId] = useState("");

  const teamData = useMemo(() => content.team || [], [content.team]);
  const activeYear = useMemo(
    () => teamData.find((year) => year.id === activeYearId) || teamData[0],
    [activeYearId, teamData]
  );
  const activeTeam = useMemo(
    () => activeYear?.teams?.find((team) => team.id === activeTeamId) || activeYear?.teams?.[0],
    [activeTeamId, activeYear]
  );

  const leaders = activeTeam?.members?.filter((member) => member.special) || [];
  const members = activeTeam?.members?.filter((member) => !member.special) || [];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 250);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!teamData.length) return;
    setActiveYearId((current) => current || teamData[0].id);
  }, [teamData]);

  useEffect(() => {
    if (!activeYear?.teams?.length) return;
    setActiveTeamId(activeYear.teams[0].id);
  }, [activeYear]);

  if (loading || contentLoading) {
    return <Loader label="Preparing members" />;
  }

  return (
    <Layout
      title="ASME NITR | Team"
      description="Meet the ASME NIT Rourkela leadership and project teams across sessions, from executives to technical members."
      keywords="ASME team, NIT Rourkela members, leadership, executive team, project teams"
      canonicalPath="/our-team"
      isScrolled
    >
      <section className="members-page">
        <div className="page-shell-heading">
          <p className="eyebrow">Chapter directory</p>
          <h1>Our Members</h1>
          <span>
            Explore the leadership and project teams that carry ASME NIT Rourkela through design,
            fabrication, documentation, events, and competitions.
          </span>
        </div>

        <div className="member-controls">
          <div className="control-group">
            <span>Session</span>
            <div className="pill-row">
              {teamData.map((year) => (
                <button
                  className={activeYear?.id === year.id ? "filter-pill active" : "filter-pill"}
                  key={year.id}
                  onClick={() => setActiveYearId(year.id)}
                >
                  {year.title}
                </button>
              ))}
            </div>
          </div>
          <div className="control-group">
            <span>Team</span>
            <div className="pill-row">
              {activeYear?.teams?.map((team) => (
                <button
                  className={activeTeam?.id === team.id ? "filter-pill active" : "filter-pill"}
                  key={team.id}
                  onClick={() => setActiveTeamId(team.id)}
                >
                  {team.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="team-overview-panel">
          <div>
            <p className="eyebrow">{activeYear?.title} Team</p>
            <h2>{activeTeam?.title}</h2>
            <p>
              {leaders.length} lead role{leaders.length === 1 ? "" : "s"} and {members.length} member
              {members.length === 1 ? "" : "s"} archived for this unit.
            </p>
          </div>
          <div className="team-metrics">
            <div>
              <strong>{leaders.length}</strong>
              <span>Leads</span>
            </div>
            <div>
              <strong>{members.length}</strong>
              <span>Members</span>
            </div>
            <div>
              <strong>{(activeTeam?.members || []).length}</strong>
              <span>Total</span>
            </div>
          </div>
        </div>

        {leaders.length > 0 && (
          <section className="member-section">
            <div className="section-heading compact">
              <p className="eyebrow">Leadership</p>
              <h2>Core Roles</h2>
            </div>
            <div className="member-grid leaders">
              {leaders.map((member) => (
                <MemberCard member={member} key={`${member.name}-${member.role}`} featured />
              ))}
            </div>
          </section>
        )}

        {members.length > 0 && (
          <section className="member-section">
            <div className="section-heading compact">
              <p className="eyebrow">Members</p>
              <h2>Team Roster</h2>
            </div>
            <div className="member-grid">
              {members.map((member) => (
                <MemberCard member={member} key={`${member.name}-${member.role}`} />
              ))}
            </div>
          </section>
        )}
      </section>
    </Layout>
  );
};

const MemberCard = ({ member, featured = false }) => {
  const initials = member.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <article className={featured ? "member-card featured" : "member-card"}>
      <div className="member-avatar">
        {member.img ? <img src={member.img} alt={member.name} /> : <span>{initials || "AS"}</span>}
      </div>
      <div>
        <h3>{member.name}</h3>
        <p>{member.role}</p>
      </div>
    </article>
  );
};

export default Team;
