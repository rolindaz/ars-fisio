import PageMeta from "../components/PageMeta";
import Section from "../components/Section";

export default function CookiePolicy() {
  return (
    <Section className="max-w-3xl space-y-6 py-12">
      <PageMeta
        title="Cookie Policy | Ars Fisio"
        description="Consulta la cookie policy di Ars Fisio con i dettagli su cookie, tecnologie di tracciamento e gestione del consenso sul sito."
      />
      <header className="space-y-3">
        <p className="font-heading uppercase tracking-[0.18em] text-[var(--logo-main)]">
          Legal
        </p>
        <h1 className="mb-0">Cookie Policy</h1>
        <p className="text-base leading-7 text-[var(--subtitle-info)]">
          Questa pagina e un segnaposto per la cookie policy definitiva del sito.
          Sostituisci questo testo con l&apos;elenco aggiornato dei cookie e delle tecnologie di tracciamento utilizzate.
        </p>
      </header>

      <div className="rounded-[28px] border border-[rgba(44,103,160,0.12)] bg-white/80 p-6 shadow-[0_20px_45px_-35px_rgba(18,50,80,0.55)]">
        <p className="text-base leading-7 text-slate-700">
          Inserisci qui categorie dei cookie, durata, finalita, terze parti coinvolte
          e istruzioni per la gestione del consenso.
        </p>
      </div>
    </Section>
  );
}