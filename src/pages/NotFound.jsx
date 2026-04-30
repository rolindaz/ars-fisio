import { Link } from "react-router-dom";
import Section from "../components/Section";

export default function NotFound() {
  return (
    <Section className="max-w-4xl py-16">
      <div className="overflow-hidden rounded-[32px] border border-[rgba(44,103,160,0.12)] bg-white/90 shadow-[0_30px_60px_-40px_rgba(18,50,80,0.55)]">
        <div className="bg-[var(--logo-gradient)] px-6 py-6 text-white md:px-8">
          <p className="font-heading text-sm uppercase tracking-[0.2em] text-white/75">
            Errore 404
          </p>
          <h1 className="mb-0 text-white">Pagina non trovata</h1>
        </div>

        <div className="space-y-6 px-6 py-8 md:px-8 md:py-10">
          <p className="max-w-2xl text-base leading-7 text-slate-700 md:text-lg">
            Il contenuto che stai cercando non e disponibile oppure il link non e corretto.
            Puoi tornare alla home page e continuare la navigazione da li.
          </p>

          <Link
            to="/"
            className="base-btn btn-secondary booking-button--full inline-flex"
          >
            Torna alla home
          </Link>
        </div>
      </div>
    </Section>
  );
}