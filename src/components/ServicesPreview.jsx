import Section from "./Section";
import HexCard from "./HexCard";
import services from "../../assets/services/services.js";

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
        
        {/* Row 2 */}
        <div className="hex-row hex-row-closer">
          {services.slice(3, 7).map((s, i) => (
            <HexCard key={i} {...s} />
          ))}
        </div>

        {/* Row 3 */}
        <div className="hex-row hex-row-closer">
          {services.slice(7, 10).map((s, i) => (
            <HexCard key={i} {...s} />
          ))}
        </div>

      </div>
    </Section>
  );
};

export default ServicesPreview;