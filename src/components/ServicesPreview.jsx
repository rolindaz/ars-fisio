import Section from "./Section";
import HexCard from "./HexCard";
import services from "../../assets/services/services.js";
import { Link } from "react-router-dom";

const ServicesPreview = () => {
  const mobileServices = services.slice(0, 8);

  return (
    <Section id="servizi-home">
      <h2 className="font-heading">
        I nostri servizi
      </h2>

      <div className="mobile-grid services-preview-content services-preview-mobile">
        <div className="services-preview-mobile__row services-preview-mobile__row--center">
          {mobileServices.slice(0, 2).map((s, i) => (
            <Link key={i} to={`/servizi#${s.slug}`} className="hex-link" aria-label={`Vai al servizio ${s.title}`}>
              <HexCard {...s} />
            </Link>
          ))}
        </div>

        <div className="services-preview-mobile__row services-preview-mobile__row--side neg-mar-top">
          {mobileServices.slice(2, 4).map((s, i) => (
            <Link key={i} to={`/servizi#${s.slug}`} className="hex-link" aria-label={`Vai al servizio ${s.title}`}>
              <HexCard {...s} />
            </Link>
          ))}
        </div>

        <div className="services-preview-mobile__row services-preview-mobile__row--center neg-mar-top">
          {mobileServices.slice(4, 6).map((s, i) => (
            <Link key={i} to={`/servizi#${s.slug}`} className="hex-link" aria-label={`Vai al servizio ${s.title}`}>
              <HexCard {...s} />
            </Link>
          ))}
        </div>

        <div className="services-preview-mobile__row services-preview-mobile__row--side neg-mar-top">
          {mobileServices.slice(6, 8).map((s, i) => (
            <Link key={i} to={`/servizi#${s.slug}`} className="hex-link" aria-label={`Vai al servizio ${s.title}`}>
              <HexCard {...s} />
            </Link>
          ))}
        </div>
      </div>

      <div className="services-preview-cta services-preview-cta--mobile">
        <span className="services-preview-cta__eyebrow">... e molto altro!</span>
        <Link to="/servizi" className="booking-button booking-button--full home-section-button services-preview-cta__button">
          Scopri tutti i nostri servizi
        </Link>
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
          <Link to="/servizi" className="booking-button booking-button--full home-section-button services-preview-cta__button">
            Scopri tutti i nostri servizi
          </Link>
        </div>

      </div>
    </Section>
  );
};

export default ServicesPreview;