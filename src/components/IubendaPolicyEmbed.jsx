export default function IubendaPolicyEmbed({ href, title, className = "" }) {
  return (
    <div className={`space-y-4 ${className}`.trim()}>
      <div className="overflow-hidden rounded-[24px] border border-[rgba(44,103,160,0.12)] bg-white shadow-[0_20px_45px_-35px_rgba(18,50,80,0.35)]">
        <iframe
          src={href}
          title={title}
          loading="lazy"
          className="h-[70vh] min-h-[780px] w-full border-0 bg-white"
        />
      </div>

      <p className="text-center text-sm leading-6 text-[var(--subtitle-info)]">
        Se il contenuto non viene caricato correttamente, puoi aprire la policy anche su{" "}
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-[var(--logo-main)] underline underline-offset-4"
        >
          iubenda
        </a>
        .
      </p>
    </div>
  );
}