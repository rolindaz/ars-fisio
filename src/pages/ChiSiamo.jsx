import PageMeta from "../components/PageMeta";
import Section from "../components/Section";
import TeamCard from "../components/TeamCard";
import terapisti from "../../assets/staff/terapisti";
import reception from "../../assets/staff/reception";

export default function ChiSiamo() {
  const firstRow = terapisti.slice(0, 2);
  const rest = terapisti.slice(2);

  return (
    <Section>
      <PageMeta
        title="Chi Siamo | Ars Fisio"
        description="Scopri il team Ars Fisio: fisioterapisti e reception uniti da competenza clinica, formazione continua e attenzione personalizzata al paziente."
      />
      <div className="mx-auto max-w-7xl space-y-20">
        {/* THERAPISTS */}
        <div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">
            I terapisti
          </h2>
          <p className="team-section-intro mx-auto max-w-3xl text-center">
            Un team giovane, dinamico e multidisciplinare che unisce esperienza clinica, formazione costante e attenzione individuale nella ricerca della miglior soluzione per ogni paziente.
          </p>

          <div className="space-y-16 md:space-y-20">
            {/* FIRST ROW (Ale&Flami) */}
            <div className="team-pair-row flex flex-col items-center gap-14 md:flex-row md:justify-center md:gap-20">
              {firstRow.map((p, i) => (
                <TeamCard
                  key={i}
                  {...p}
                  variant="large"
                />
              ))}
            </div>

            {/* REST (2 per row) */}
            <div className="grid grid-cols-1 justify-items-center gap-14 md:grid-cols-2 md:gap-x-20 md:gap-y-16">
              {rest.map((p, i) => (
                <TeamCard key={i} {...p} />
              ))}
            </div>
          </div>
        </div>

        {/* RECEPTIONISTS */}
        <div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">
            La reception
          </h2>
          <p className="team-section-intro mx-auto max-w-2xl text-center">
            L'accoglienza di Ars Fisio: cortesia, ascolto e flessibilità.
          </p>

          <div className="team-pair-row flex flex-col items-center justify-center gap-14 pt-4 md:flex-row md:gap-20">
            {reception.map((p, i) => (
              <TeamCard key={i} {...p} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
