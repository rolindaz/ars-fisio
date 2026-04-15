import Section from "./Section";
import HexCard from "./HexCard";

const services = [
  { title: "Physiotherapy", image: "/services/physio.jpg" },
  { title: "Postural Analysis", image: "/services/posture.jpg" },
  { title: "Massage Therapy", image: "/services/massage.jpg" },
  { title: "Rehabilitation", image: "/services/rehab.jpg" },
  { title: "Sports Therapy", image: "/services/sport.jpg" },
  { title: "Manual Therapy", image: "/services/manual.jpg" },
];

const ServicesPreview = () => {
  return (
    <Section>
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
        Our Services
      </h2>

      <div className="grid grid-cols-2 md:hidden gap-4">
        {services.map((s, i) => (
          <HexCard key={i} {...s} />
        ))}
      </div>

      <div className="hidden md:flex flex-col items-center gap-6">

        {/* Row 1 */}
        <div className="flex gap-4">
          {services.slice(0, 3).map((s, i) => (
            <HexCard key={i} {...s} />
          ))}
        </div>

        {/* Row 2 (offset) */}
        <div className="flex gap-4 ml-20">
          {services.slice(3, 6).map((s, i) => (
            <HexCard key={i} {...s} />
          ))}
        </div>

      </div>
    </Section>
  );
};

export default ServicesPreview;