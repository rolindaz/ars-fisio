import Section from "../components/Section";

export default function PrivacyPolicy() {
  return (
    <Section className="max-w-3xl space-y-6 py-12">
      <header className="space-y-3">
        <p className="font-heading uppercase tracking-[0.18em] text-[var(--logo-main)]">
          Legal
        </p>
        <h1 className="mb-0">Privacy Policy</h1>
        <p className="text-base leading-7 text-[var(--subtitle-info)]">
          Questa pagina e un segnaposto per l&apos;informativa privacy definitiva del sito.
          Sostituisci questo testo con il contenuto legale approvato dal cliente o dal consulente privacy.
        </p>
      </header>

      <div className="rounded-[28px] border border-[rgba(44,103,160,0.12)] bg-white/80 p-6 shadow-[0_20px_45px_-35px_rgba(18,50,80,0.55)]">
        <p className="text-base leading-7 text-slate-700">
          Inserisci qui finalita del trattamento, base giuridica, tempi di conservazione,
          diritti dell&apos;interessato e riferimenti del titolare del trattamento.
        </p>
      </div>
    </Section>
  );
}