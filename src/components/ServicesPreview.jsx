import Section from "./Section";
import HexCard from "./HexCard";

const services = [
  { title: "Fisioterapia", image: "/services/fisioterapia.png" },
  { title: "Manipolazione Vertebrale", image: "/services/manipolazione-vertebrale.png" },
  { title: "Terapia Manuale", image: "/services/terapia-manuale.png" },
  { title: "Magneto-Terapia", image: "/services/magneto-terapia.png" },
  { title: "Elettroterapia", image: "/services/elettroterapia.png" },
  { title: "Onde d'Urto", image: "/services/shock-wave.png" },
  { title: "Ultrasuoni", image: "/services/ultrasuoni.png" },
  { title: "Laserterapia", image: "/services/laser.png" },
  { title: "Tecarterapia", image: "/services/tecarterapia.jpg" },
  { title: "Osteopatia", image: "/services/osteopathy.png" },
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