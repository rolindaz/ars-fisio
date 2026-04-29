import Section from "./Section";
import HexCard from "./HexCard";
import services from "../../assets/services/services.js";
import { Link } from "react-router-dom";

const ServicesPreview = () => {
  return (
    <Section id="servizi-home">
      <h2 className="font-heading">
        I nostri servizi
      </h2>

      <div className="mobile-grid services-preview-content">
        {services.map((s, i) => (
          <Link key={i} to={`/servizi#${s.slug}`} className="hex-link" aria-label={`Vai al servizio ${s.title}`}>
            <HexCard {...s} />
          </Link>
        ))}
      </div>

      <div className="hex-grid services-preview-content">

        {/* Row 1 */}
        <div className="hex-row">
          {services.slice(0, 3).map((s, i) => (
            <Link key={i} to={`/servizi#${s.slug}`} className="hex-link" aria-label={`Vai al servizio ${s.title}`}>
              <HexCard {...s} />
            </Link>
          ))}
        </div>
        
        {/* Row 2 */}
        <div className="hex-row hex-row-closer">
          {services.slice(3, 7).map((s, i) => (
            <Link key={i} to={`/servizi#${s.slug}`} className="hex-link" aria-label={`Vai al servizio ${s.title}`}>
              <HexCard {...s} />
            </Link>
          ))}
        </div>

        <div className="services-preview-cta services-preview-cta--lower">
          <span className="services-preview-cta__eyebrow">... e molto altro!</span>
          <Link to="/servizi" className="booking-button booking-button--full services-preview-cta__button">
            Scopri tutti i nostri servizi
          </Link>
        </div>

      </div>
    </Section>
  );
};

export default ServicesPreview;