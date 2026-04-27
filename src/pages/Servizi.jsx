import Section from "../components/Section";
import ServiceCard from "../components/ServiceCard";
import services from "../../assets/services/services";

export default function Servizi() {
  const left = services.filter((_, i) => i % 2 === 0);
  const right = services.filter((_, i) => i % 2 !== 0);

  return (
    <>
      <Section>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
          I nostri servizi
        </h1>

        <div className="relative">
          <div
            className="pointer-events-none absolute inset-0 flex justify-center opacity-60"
            style={{
              backgroundImage: `url("/logo-fisio-no-text.svg")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top center",
              backgroundSize: "cover",
            }}
          >
          </div>
            <div className="overlay-services relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 md:grid-cols-2 md:gap-32">
              {/* LEFT COLUMN */}
              <div className="flex flex-col gap-8">
                {left.map((s, i) => (
                  <ServiceCard key={i} {...s} align="right" delay={i*100} />
                ))}
              </div>

              {/* RIGHT COLUMN */}
              <div className="flex flex-col gap-8">
                {right.map((s, i) => (
                  <ServiceCard key={i} {...s} align="left" delay={i*100} />
                ))}
              </div>
            </div>
        </div>
      </Section>
    </>
  );
}
