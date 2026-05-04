import { useEffect } from "react";

const IUBENDA_LOADER_SRC = "https://cdn.iubenda.com/iubenda.js";

function ensureScript(scriptId, src) {
  if (document.getElementById(scriptId)) {
    return;
  }

  const script = document.createElement("script");
  script.id = scriptId;
  script.src = src;
  script.async = true;
  document.body.appendChild(script);
}

export default function IubendaPolicyEmbed({ href, title, className = "" }) {
  useEffect(() => {
    ensureScript("iubenda-loader-script", IUBENDA_LOADER_SRC);
  }, []);

  return (
    <a
      href={href}
      className={`iubenda-white no-brand iubenda-noiframe iubenda-embed ${className}`.trim()}
      title={title}
    >
      {title}
    </a>
  );
}