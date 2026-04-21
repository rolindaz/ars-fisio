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

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-40 max-w-6xl mx-auto"  style={{ backgroundImage: `url("/logo-fisio-no-text.svg")`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6">
          {left.map((s, i) => (
            <ServiceCard key={i} {...s} align="right" />
          ))}
        </div>

        {/* SPINE */}
        {/* <div className="hidden md:flex justify-center relative">
          <img
            src="/logo-fisio-no-text.svg"
            alt=""
            className="h-full max-h-[900px] object-contain opacity-20"
          />
        </div> */}

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-6">
          {right.map((s, i) => (
            <ServiceCard key={i} {...s} align="left" />
          ))}
        </div>

      </div>
    </Section>
    </>
  )
}