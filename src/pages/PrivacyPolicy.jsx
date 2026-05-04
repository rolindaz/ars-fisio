import IubendaPolicyEmbed from "../components/IubendaPolicyEmbed";
import PageMeta from "../components/PageMeta";
import Section from "../components/Section";

export default function PrivacyPolicy() {
  return (
    <Section className="max-w-3xl space-y-6 py-12">
      <PageMeta
        title="Privacy Policy | Ars Fisio"
        description="Consulta l'informativa privacy di Ars Fisio con le informazioni sul trattamento dei dati personali raccolti tramite il sito."
        path="/privacy-policy"
      />
      <header className="space-y-3">
        <p className="font-heading uppercase tracking-[0.18em] text-[var(--logo-main)]">
          Legal
        </p>
        <h1 className="mb-0">Privacy Policy</h1>
        <p className="text-base leading-7 text-[var(--subtitle-info)]">
          L&apos;informativa privacy ufficiale di Ars Fisio e fornita tramite iubenda.
          Puoi aprirla direttamente qui sotto.
        </p>
      </header>

      <div className="rounded-[28px] border border-[rgba(44,103,160,0.12)] bg-white/80 p-6 shadow-[0_20px_45px_-35px_rgba(18,50,80,0.55)] md:p-8">
        <div className="space-y-4 text-center">
          <p className="text-base leading-7 text-slate-700">
            Se il contenuto non viene visualizzato automaticamente, puoi aprire la policy
            sul sito iubenda dal link seguente.
          </p>
          <IubendaPolicyEmbed
            href="https://www.iubenda.com/privacy-policy/39818566"
            title="Privacy Policy"
            className="inline-flex items-center justify-center rounded-full border border-[rgba(35,82,127,0.24)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(239,246,251,0.94)_100%)] px-6 py-3 font-semibold text-[var(--logo-dark)] no-underline shadow-[0_12px_24px_-22px_rgba(18,50,80,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_26px_-20px_rgba(18,50,80,0.32)]"
          />
        </div>
      </div>
    </Section>
  );
}