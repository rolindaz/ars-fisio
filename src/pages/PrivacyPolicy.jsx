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
      <header className="space-y-3 text-center">
        <h1 className="mb-0 text-logo text-5xl">Privacy Policy</h1>
      </header>

      <div className="rounded-[28px] border border-[rgba(44,103,160,0.12)] bg-white/80 p-6 shadow-[0_20px_45px_-35px_rgba(18,50,80,0.55)] md:p-8">
        <IubendaPolicyEmbed
          href="https://www.iubenda.com/privacy-policy/39818566"
          title="Privacy Policy"
        />
      </div>
    </Section>
  );
}