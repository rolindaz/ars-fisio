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
        {network.map((item) => {
          const matchingEnti = convenzioni.filter((ente) => ente.type === item.type);
          const hasOddLogos = matchingEnti.length % 2 !== 0;

          return (
            <article
              key={item.title}
              className="overflow-hidden rounded-[1.75rem]"
            >
              <div className="flex flex-col">
                <div className="flex flex-1 flex-wrap justify-center gap-4 rounded-[1.75rem] border border-[rgba(44,103,160,0.12)] bg-[linear-gradient(180deg,rgba(248,252,255,0.98)_0%,rgba(232,242,249,0.92)_100%)] px-4 py-6 shadow-[0_24px_46px_-34px_rgba(18,50,80,0.4)] md:px-8 md:py-8">
                  {matchingEnti.map((ente, index) => {
                    const isOddLastCard = hasOddLogos && index === matchingEnti.length - 1;
                    const imageCard = (
                      <div
                        className="flex h-28 w-full items-center justify-center rounded-[1.2rem] border border-[rgba(44,103,160,0.12)] bg-white/80 px-4 py-3 shadow-[0_12px_28px_-22px_rgba(18,50,80,0.28)] md:h-32"
                      >
                        <img
                          src={ente.image}
                          alt={ente.title}
                          className="max-h-full w-auto max-w-full object-contain"
                        />
                      </div>
                    );

                    const wrapperClassName = [
                      "w-[calc(50%-0.5rem)] min-w-0 max-w-[11rem] md:w-auto md:max-w-none md:flex-1 md:basis-[12rem]",
                      isOddLastCard ? "flex basis-full justify-center md:basis-[12rem]" : "",
                    ]
                      .filter(Boolean)
                      .join(" ");

                    if (ente.type === "assicurazioni-dirette" && ente.website) {
                      return (
                        <a
                          key={ente.title}
                          href={ente.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Apri il sito di ${ente.title}`}
                          className={`${wrapperClassName} transition-transform duration-200 ease-out md:hover:scale-[1.02]`}
                        >
                          {imageCard}
                        </a>
                      );
                    }

                    return (
                      <div key={ente.title} className={wrapperClassName}>
                        {imageCard}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 px-2">
                  <h3 className="font-heading text-center text-2xl font-bold leading-8 text-[var(--logo-dark)] md:text-3xl md:leading-9">
                    {item.title}
                  </h3>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
