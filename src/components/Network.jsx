import Section from "./Section";

const networkItems = [
  {
    title: "Assicurazioni in forma diretta",
    eyebrow: "Network sanitario",
    description:
      "Collaboriamo con network assicurativi che consentono di accedere ai trattamenti in forma diretta, con un percorso amministrativo piu semplice e un supporto chiaro fin dal primo contatto.",
    imageLabel: "Spazio logo assicurazioni",
  },
  {
    title: "Convenzioni",
    eyebrow: "Agevolazioni dedicate",
    description:
      "Mettiamo a disposizione convenzioni pensate per aziende, enti e realta partner, cosi da offrire condizioni dedicate e un accesso piu agevole ai nostri servizi.",
    imageLabel: "Spazio logo convenzioni",
  },
];

export default function Network() {
  return (
    <Section id="network-home">
      <h2 className="font-heading">Network</h2>

      <div className="flex flex-col gap-8 md:gap-10">
        {networkItems.map((item) => (
          <article
            key={item.title}
            className="grid overflow-hidden rounded-[1.75rem] border border-[rgba(44,103,160,0.12)] bg-[linear-gradient(180deg,rgba(248,252,255,0.98)_0%,rgba(232,242,249,0.92)_100%)] shadow-[0_24px_46px_-34px_rgba(18,50,80,0.4)]"
          >
            <div className="flex flex-col md:flex-row">
              <div className="flex min-h-[15rem] flex-1 items-stretch justify-stretch border-b border-[rgba(44,103,160,0.12)] md:min-h-[18rem] md:border-b-0 md:border-r">
                <div className="flex w-full items-center justify-center bg-[radial-gradient(circle_at_top_left,rgba(120,173,216,0.5)_0%,rgba(120,173,216,0.16)_34%,rgba(120,173,216,0)_72%),linear-gradient(135deg,#f7fbfe_0%,#ddecf7_52%,#c2dced_100%)] px-6 py-8 text-center">
                  <div className="flex max-w-[16rem] flex-col items-center gap-3 rounded-[1.4rem] border border-dashed border-[rgba(44,103,160,0.26)] bg-white/55 px-6 py-7 text-[var(--logo-main)] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
                    <span className="font-heading text-[1.25rem] leading-6">{item.imageLabel}</span>
                    <span className="font-sans text-sm text-[var(--text-info)]">
                      Inserisci qui il logo o l'immagine del partner
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-center gap-4 px-6 py-7 md:px-8 md:py-8">
                <span className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-[var(--logo-main)]/80">
                  {item.eyebrow}
                </span>
                <h3 className="font-heading text-left text-[1.7rem] leading-8 text-[var(--logo-main)] md:text-[2rem] md:leading-9">
                  {item.title}
                </h3>
                <p className="font-sans text-[1.02rem] leading-7 text-[var(--text-info)]">
                  {item.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}