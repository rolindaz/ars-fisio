import Section from "../components/Section";
import TeamCard from "../components/TeamCard";
import terapisti from "../../assets/staff/terapisti";
import reception from "../../assets/staff/reception";

export default function ChiSiamo() {
  const firstRow = terapisti.slice(0, 2);
  const rest = terapisti.slice(2);

  return (
    <Section>
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        {/* THERAPISTS */}
        <div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">
            Terapisti
          </h2>

          <div className="space-y-8">
            {/* FIRST ROW (Ale&Flami) */}
            <div className="flex justify-center">
              {firstRow.map((p, i) => (
                <TeamCard key={i} {...p} variant="large" />
              ))}
            </div>

            {/* REST (3 per row) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-14 gap-y-6 mt-12">
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

          <div className="flex gap-10 mt-12 justify-center">
            {reception.map((p, i) => (
              <TeamCard key={i} {...p} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
