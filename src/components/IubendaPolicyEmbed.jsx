import { useEffect } from "react";

const IUBENDA_WIDGET_SRC = "https://embeds.iubenda.com/widgets/f4bbf8a5-a9fb-4f2b-9ada-53f8712d1773.js";
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
    ensureScript("iubenda-policy-widget", IUBENDA_WIDGET_SRC);
    ensureScript("iubenda-loader-script", IUBENDA_LOADER_SRC);
  }, []);

  return (
    <a
      href={href}
      className={`iubenda-white iubenda-noiframe iubenda-embed ${className}`.trim()}
      title={title}
    >
      {title}
    </a>
  );
}