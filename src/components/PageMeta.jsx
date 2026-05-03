import { useEffect } from "react";

const SITE_URL = "https://www.arsfisio.com";

function updateMetaTag(name, content) {
  let metaTag = document.querySelector(`meta[name="${name}"]`);
  const existed = Boolean(metaTag);
  const previousContent = metaTag?.getAttribute("content") ?? "";

  if (!metaTag) {
    metaTag = document.createElement("meta");
    metaTag.setAttribute("name", name);
    document.head.appendChild(metaTag);
  }

  metaTag.setAttribute("content", content);

  return () => {
    if (existed) {
      metaTag.setAttribute("content", previousContent);
      return;
    }

    metaTag.remove();
  };
}

function updatePropertyMetaTag(property, content) {
  let metaTag = document.querySelector(`meta[property="${property}"]`);
  const existed = Boolean(metaTag);
  const previousContent = metaTag?.getAttribute("content") ?? "";

  if (!metaTag) {
    metaTag = document.createElement("meta");
    metaTag.setAttribute("property", property);
    document.head.appendChild(metaTag);
  }

  metaTag.setAttribute("content", content);

  return () => {
    if (existed) {
      metaTag.setAttribute("content", previousContent);
      return;
    }

    metaTag.remove();
  };
}

function updateCanonicalLink(href) {
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  const existed = Boolean(canonicalLink);
  const previousHref = canonicalLink?.getAttribute("href") ?? "";

  if (!canonicalLink) {
    canonicalLink = document.createElement("link");
    canonicalLink.setAttribute("rel", "canonical");
    document.head.appendChild(canonicalLink);
  }

  canonicalLink.setAttribute("href", href);

  return () => {
    if (existed) {
      canonicalLink.setAttribute("href", previousHref);
      return;
    }

    canonicalLink.remove();
  };
}

export default function PageMeta({
  title,
  description,
  robots,
  path = "/",
  ogTitle,
  ogDescription,
  ogImage = `${SITE_URL}/logos/logo-fisio.svg`,
  twitterTitle,
  twitterDescription,
  twitterImage,
}) {
  useEffect(() => {
    const canonicalUrl = new URL(path, SITE_URL).toString();
    const previousTitle = document.title;
    document.title = title;

    const restoreDescription = updateMetaTag("description", description);
    const restoreRobots = robots ? updateMetaTag("robots", robots) : null;
    const restoreTwitterTitle = updateMetaTag("twitter:title", twitterTitle ?? ogTitle ?? title);
    const restoreTwitterDescription = updateMetaTag(
      "twitter:description",
      twitterDescription ?? ogDescription ?? description,
    );
    const restoreTwitterImage = updateMetaTag("twitter:image", twitterImage ?? ogImage);
    const restoreOgTitle = updatePropertyMetaTag("og:title", ogTitle ?? title);
    const restoreOgDescription = updatePropertyMetaTag(
      "og:description",
      ogDescription ?? description,
    );
    const restoreOgUrl = updatePropertyMetaTag("og:url", canonicalUrl);
    const restoreOgImage = updatePropertyMetaTag("og:image", ogImage);
    const restoreCanonical = updateCanonicalLink(canonicalUrl);

    return () => {
      document.title = previousTitle;
      restoreDescription();
      restoreRobots?.();
      restoreTwitterTitle();
      restoreTwitterDescription();
      restoreTwitterImage();
      restoreOgTitle();
      restoreOgDescription();
      restoreOgUrl();
      restoreOgImage();
      restoreCanonical();
    };
  }, [description, ogDescription, ogImage, ogTitle, path, robots, title, twitterDescription, twitterImage, twitterTitle]);

  return null;
}