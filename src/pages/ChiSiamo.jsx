import Section from "../components/Section";
import TeamCard from "../components/TeamCard";
import terapisti from "../../assets/staff/terapisti";
import reception from "../../assets/staff/reception";

export default function ChiSiamo() {
  const firstRow = terapisti.slice(0, 2);
  const rest = terapisti.slice(2);

  return (
    <Section>
      <div className="mx-auto max-w-7xl space-y-20 px-4 md:px-6">
        {/* THERAPISTS */}
        <div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">
            Terapisti
          </h2>
          <p className="team-section-intro mx-auto max-w-3xl text-center">
            Un team multidisciplinare che unisce esperienza clinica, esercizio terapeutico e attenzione al percorso individuale di ogni paziente.
          </p>

          <div className="space-y-10 md:space-y-12">
            {/* FIRST ROW (Ale&Flami) */}
            <div className="team-pair-row flex flex-col items-center gap-8 md:flex-row md:justify-center">
              {firstRow.map((p, i) => (
                <TeamCard
                  key={i}
                  {...p}
                  variant="large"
                />
              ))}
            </div>

            {/* REST (3 per row) */}
            <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {rest.map((p, i) => (
                <TeamCard key={i} {...p} />
              ))}
            </div>
          </div>
        </div>

        {/* RECEPTIONISTS */}
        <div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">
            Reception
          </h2>
          <p className="team-section-intro mx-auto max-w-2xl text-center">
            Il primo contatto con Ars Fisio: accoglienza, organizzazione e ascolto per rendere ogni percorso piu semplice fin dall'inizio.
          </p>

          <div className="team-pair-row flex flex-col items-center justify-center gap-8 pt-4 md:flex-row">
            {reception.map((p, i) => (
              <TeamCard key={i} {...p} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
