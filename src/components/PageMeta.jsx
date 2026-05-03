import { useEffect } from "react";

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

export default function PageMeta({ title, description, robots }) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const restoreDescription = updateMetaTag("description", description);
    const restoreRobots = robots ? updateMetaTag("robots", robots) : null;

    return () => {
      document.title = previousTitle;
      restoreDescription();
      restoreRobots?.();
    };
  }, [description, robots, title]);

  return null;
}