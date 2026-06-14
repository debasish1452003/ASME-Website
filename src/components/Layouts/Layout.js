import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const Layout = ({
  children,
  title,
  description,
  keywords,
  author,
  canonicalPath,
  image = "/asme-favicon.png",
  type = "website",
  noIndex = false,
  isScrolled,
}) => {
  const siteName = "ASME NITR";
  const fallbackDescription =
    "ASME NIT Rourkela is a student chapter focused on mechanical design, human-powered vehicles, workshops, competitions, and engineering outreach.";
  const metaDescription = description || fallbackDescription;
  const metaKeywords =
    keywords ||
    "ASME NITR, ASME NIT Rourkela, student chapter, mechanical engineering, human powered vehicle, workshops, competitions, engineering club";
  const robots = noIndex ? "noindex,nofollow" : "index,follow";

  const canonicalUrl = (() => {
    if (typeof window === "undefined") {
      return canonicalPath || undefined;
    }

    if (canonicalPath === null) {
      return undefined;
    }

    if (!canonicalPath) {
      return window.location.href.split("#")[0].split("?")[0];
    }

    if (/^https?:\/\//i.test(canonicalPath)) {
      return canonicalPath;
    }

    const publicUrl =
      process.env.NODE_ENV === "development" ? window.location.origin : process.env.PUBLIC_URL || window.location.origin;
    const normalizedBase = publicUrl.endsWith("/") ? publicUrl.slice(0, -1) : publicUrl;
    const normalizedPath = canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`;

    return `${normalizedBase}${normalizedPath}`;
  })();

  const imageUrl = (() => {
    if (!image || typeof window === "undefined") return image;
    if (/^https?:\/\//i.test(image) || /^data:/i.test(image)) return image;

    const publicUrl =
      process.env.NODE_ENV === "development" ? window.location.origin : process.env.PUBLIC_URL || window.location.origin;
    const normalizedBase = publicUrl.endsWith("/") ? publicUrl.slice(0, -1) : publicUrl;
    const normalizedImage = image.startsWith("/") ? image : `/${image}`;

    return `${normalizedBase}${normalizedImage}`;
  })();

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta name="author" content={author || siteName} />
        <meta name="robots" content={robots} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        <meta property="og:site_name" content={siteName} />
        <meta property="og:title" content={title || siteName} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content={type} />
        {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
        {imageUrl && <meta property="og:image" content={imageUrl} />}
        <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
        <meta name="twitter:title" content={title || siteName} />
        <meta name="twitter:description" content={metaDescription} />
        {imageUrl && <meta name="twitter:image" content={imageUrl} />}
        <title>{title || siteName}</title>
      </Helmet>
      <Header isScrolled={isScrolled} />

      <main style={{ minHeight: "80vh" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
