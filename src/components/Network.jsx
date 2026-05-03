import Section from "./Section";
import convenzioni from "../../assets/convenzioni/convenzioni";

const network = [
  {
    title: "Assicurazioni in forma diretta",
    eyebrow: "Network sanitario",
    type: "assicurazioni-dirette",
    description:
      "Collaboriamo con network assicurativi che consentono di accedere ai trattamenti in forma diretta, con un percorso amministrativo piu semplice e un supporto chiaro fin dal primo contatto.",
  },
  {
    title: "Convenzioni",
    eyebrow: "Agevolazioni dedicate",
    type: "convenzione",
    description:
      "Mettiamo a disposizione convenzioni pensate per aziende, enti e realta partner, cosi da offrire condizioni dedicate e un accesso piu agevole ai nostri servizi.",
  },
];

export default function Network() {
  return (
    <Section id="network-home">
      <h2 className="font-heading">La nostra rete</h2>

      <div className="flex flex-col gap-8 md:gap-10">
        {network.map((item) => (
          <article
            key={item.title}
            className="overflow-hidden rounded-[1.75rem]"
          >
            <div className="flex flex-col">
              <div className="flex flex-1 rounded-[1.75rem] justify-center gap-4 px-6 py-7 md:px-8 md:py-8 border border-[rgba(44,103,160,0.12)] bg-[linear-gradient(180deg,rgba(248,252,255,0.98)_0%,rgba(232,242,249,0.92)_100%)] shadow-[0_24px_46px_-34px_rgba(18,50,80,0.4)]">
                {convenzioni
                  .filter((ente) => ente.type === item.type)
                  .map((ente) => (
                    <div
                      key={ente.title}
                      className="flex h-32 w-[12rem] items-center justify-center rounded-[1.2rem] border border-[rgba(44,103,160,0.12)] bg-white/80 px-4 py-3 shadow-[0_12px_28px_-22px_rgba(18,50,80,0.28)]"
                    >
                      <img
                        src={ente.image}
                        alt={ente.title}
                        className="max-h-full w-auto max-w-full object-contain"
                      />
                    </div>
                  ))}
              </div>

              <div className="mt-6">
                <h3 className="font-sans text-center text-[1.7rem] leading-8 text-[var(--logo-dark)] md:text-[2rem] md:leading-9">
                  {item.title}
                </h3>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
