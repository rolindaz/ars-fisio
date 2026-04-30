import Section from "./Section";
import HexCard from "./HexCard";
import SecondaryButton from "./SecondaryButton";
import services from "../../assets/services/services.js";
import { Link } from "react-router-dom";

const ServicesPreview = () => {
  const mobileServices = services.slice(0, 8);
  const mobileRows = Array.from(
    { length: Math.ceil(mobileServices.length / 2) },
    (_, rowIndex) => mobileServices.slice(rowIndex * 2, rowIndex * 2 + 2),
  );

  return (
    <Section id="servizi-home">
      <h2 className="font-heading">
        I nostri servizi
      </h2>

      <div className="mobile-grid services-preview-content services-preview-mobile">
        {mobileRows.map((row, rowIndex) => {
          const rowClassName = [
            "services-preview-mobile__row",
            rowIndex % 2 === 1 ? "services-preview-mobile__row--side" : "",
            rowIndex > 0 ? "neg-mar-top" : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <div key={`mobile-row-${rowIndex}`} className={rowClassName}>
              {row.map((service) => (
                <Link
                  key={service.slug}
                  to={`/servizi#${service.slug}`}
                  className="hex-link"
                  aria-label={`Vai al servizio ${service.title}`}
                >
                  <HexCard {...service} />
                </Link>
              ))}
            </div>
          );
        })}
      </div>

      <div className="services-preview-cta services-preview-cta--mobile">
        <span className="services-preview-cta__eyebrow">... e molto altro!</span>
        <SecondaryButton to="/servizi" className="booking-button--full home-section-button services-preview-cta__button">
          Scopri tutti i nostri servizi
        </SecondaryButton>
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
          <SecondaryButton to="/servizi" className="booking-button--full home-section-button services-preview-cta__button">
            Scopri tutti i nostri servizi
          </SecondaryButton>
        </div>

      </div>
    </Section>
  );
};

export default ServicesPreview;