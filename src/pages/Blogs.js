import React from "react";
import Layout from "../components/Layouts/Layout";
import { useSiteContent } from "../hooks/useSiteContent";

const Blogs = () => {
  const { content, loading } = useSiteContent({ preloadImages: true });

  return (
    <Layout
      title="ASME NITR | Journal"
      description="Read ASME NIT Rourkela journal posts, build logs, event recaps, technical updates, and chapter stories."
      keywords="ASME journal, NIT Rourkela blog, build log, chapter updates, engineering articles"
      canonicalPath="/blogs"
      isScrolled
    >
      <section className="blogs-page">
        <div className="page-shell-heading">
          <p className="eyebrow">Build logs and chapter updates</p>
          <h1>Journal</h1>
          <span>
            A place for competition diaries, event recaps, technical writeups, alumni notes, and
            project-team knowledge transfer.
          </span>
        </div>

        {loading ? (
          <div className="readonly-panel">Preparing journal</div>
        ) : (
          <div className="blog-grid">
            {content.blogs.map((blog) => (
              <article className="blog-card" key={blog.id}>
                {blog.cover && <img src={blog.cover} alt={blog.title} />}
                <div>
                  <span>{blog.date} / {blog.author}</span>
                  <h2>{blog.title}</h2>
                  <p>{blog.excerpt}</p>
                  <details>
                    <summary>Read update</summary>
                    <p>{blog.body}</p>
                  </details>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Blogs;
