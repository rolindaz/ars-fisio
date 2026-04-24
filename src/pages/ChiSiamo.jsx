import Section from "../components/Section";
import TeamCard from "../components/TeamCard";

export default function ChiSiamo() {

  return (
    <Section>
      <div className="max-w-6xl mx-auto px-4 space-y-16">

        {/* THERAPISTS */}
        <div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">
            Terapisti
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {therapists.map((p, i) => (
              <TeamCard key={i} {...p} />
            ))}
          </div>
        </div>

        {/* RECEPTIONISTS */}
        <div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">
            Reception
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {receptionists.map((p, i) => (
              <TeamCard key={i} {...p} />
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}