import MapSection from "../components/MapSection";
import Section from "../components/Section";

const contacts = [
  {
    label: "Email",
    value: "arsfisio.grottarossa@gmail.com",
    href: "mailto:arsfisio.grottarossa@gmail.com",
  },
  {
    label: "WhatsApp",
    value: "+39 347 223 5423",
    href: "https://wa.me/393472235423",
  },
];

export default function Contatti() {
  return (
    <>
      <Section className="max-w-6xl space-y-10 py-14">
        <header className="max-w-3xl space-y-4">
          <h1 className="mb-0 font-heading text-logo leading-10">
            Siamo a disposizione per informazioni e appuntamenti
          </h1>
          <p className="text-base leading-7 text-[var(--subtitle-info)] md:text-lg">
            Puoi scriverci via email, telefonarci oppure
            raggiungerci nelle nostre sedi. Qui trovi anche gli orari di
            apertura aggiornati.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="rounded-[30px] border border-[rgba(44,103,160,0.12)] bg-white/90 p-6 shadow-[0_24px_50px_-36px_rgba(18,50,80,0.55)] md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.label === "WhatsApp" ? "_blank" : undefined}
                  rel={contact.label === "WhatsApp" ? "noreferrer" : undefined}
                  className="group rounded-[24px] border border-[rgba(44,103,160,0.12)] bg-[linear-gradient(180deg,rgba(240,247,253,0.95)_0%,rgba(232,241,249,0.9)_100%)] p-5 transition hover:-translate-y-0.5 hover:shadow-[0_18px_35px_-30px_rgba(18,50,80,0.7)]"
                >
                  <p className="font-heading text-sm uppercase tracking-[0.16em] text-[var(--logo-main)]">
                    {contact.label}
                  </p>
                  <p className="mt-3 text-lg font-medium text-slate-800 break-words group-hover:text-[var(--logo-dark)]">
                    {contact.value}
                  </p>
                </a>
              ))}
            </div>
          </div>

          <aside className="rounded-[30px] border border-[rgba(44,103,160,0.12)] bg-[linear-gradient(145deg,rgba(18,50,80,0.96)_0%,rgba(44,103,160,0.96)_100%)] p-6 text-white shadow-[0_24px_50px_-36px_rgba(18,50,80,0.75)] md:p-8">
            <p className="font-heading text-sm uppercase tracking-[0.18em] text-white/70">
              Orari
            </p>
            <h2 className="mt-3 mb-4 text-white">Orari di apertura</h2>
            <p className="text-base leading-7 text-white/88">
              Lunedì - Venerdì
            </p>
            <p className="mt-2 text-2xl font-semibold tracking-[0.02em] text-white">
              8:00 - 13:00
            </p>
            <p className="text-2xl font-semibold tracking-[0.02em] text-white">
              14:00 - 20:00
            </p>
          </aside>
        </div>
      </Section>

      <MapSection />
    </>
  );
}
