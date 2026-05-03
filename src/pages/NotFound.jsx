import PageMeta from "../components/PageMeta";
import SecondaryButton from "../components/SecondaryButton";
import Section from "../components/Section";

export default function NotFound() {
  return (
    <Section className="max-w-4xl py-16">
      <PageMeta
        title="Pagina non trovata | Ars Fisio"
        description="La pagina richiesta non e disponibile. Torna alla home Ars Fisio per continuare la navigazione."
        robots="noindex, nofollow"
      />
      <div className="overflow-hidden rounded-[32px] border border-[rgba(44,103,160,0.12)] bg-white/90 shadow-[0_30px_60px_-40px_rgba(18,50,80,0.55)]">
        <div className="bg-[linear-gradient(180deg,rgba(240,247,252,0.96)_0%,rgba(223,237,247,0.92)_100%)] space-y-6 px-6 py-8 md:px-8 md:py-10">
          <h1 className="mb-0 text-[var(--logo-dark)] text-[2.7rem] leading-[1.05] md:text-[3rem]">
            Siamo spiacenti...
          </h1>
          <p className="max-w-2xl text-base leading-7 text-[var(--logo-dark)] md:text-lg">
            Il contenuto che stai cercando non è disponibile, oppure il link non è corretto.
            Puoi tornare alla home page e continuare la navigazione da lì.
          </p>

          <SecondaryButton to="/" className="booking-button--full inline-flex">
            Torna alla home
          </SecondaryButton>
        </div>
      </div>
    </Section>
  );
}