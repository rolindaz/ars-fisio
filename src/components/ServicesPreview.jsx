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
      <h2>
        I nostri servizi
      </h2>

      <div className="mobile-grid">
        {services.map((s, i) => (
          <HexCard key={i} {...s} />
        ))}
      </div>

      <div className="hex-grid">

        {/* Row 1 */}
        <div className="hex-row">
          {services.slice(0, 3).map((s, i) => (
            <HexCard key={i} {...s} />
          ))}
        </div>
        
        {/* Row 2 (offset) */}
        <div className="hex-row hex-row-offset">
          {services.slice(3, 6).map((s, i) => (
            <HexCard key={i} {...s} />
          ))}
        </div>

      </div>
    </Section>
  );
};

export default ServicesPreview;