import IubendaPolicyEmbed from "../components/IubendaPolicyEmbed";
import PageMeta from "../components/PageMeta";
import Section from "../components/Section";

export default function CookiePolicy() {
  return (
    <Section className="max-w-3xl space-y-6 py-12">
      <PageMeta
        title="Cookie Policy | Ars Fisio"
        description="Consulta la cookie policy di Ars Fisio con i dettagli su cookie, tecnologie di tracciamento e gestione del consenso sul sito."
        path="/cookie-policy"
      />
      <header className="text-center space-y-3">
        <h1 className="mb-0 text-logo text-5xl">
          Cookie Policy
          </h1>
      </header>

      <div className="rounded-[28px] border border-[rgba(44,103,160,0.12)] bg-white/80 p-6 shadow-[0_20px_45px_-35px_rgba(18,50,80,0.55)] md:p-8">
        <IubendaPolicyEmbed
          href="https://www.iubenda.com/privacy-policy/39818566/cookie-policy"
          title="Cookie Policy"
        />
      </div>
    </Section>
  );
}