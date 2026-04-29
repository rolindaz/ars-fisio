import { useState } from "react";
import Section from "./Section";
import { Link } from "react-router-dom";

const locations = [
  {
    name: "Ars Fisio - Grottarossa",
    address: "Via di Grottarossa, 194 - 00189 Roma (RM)",
    map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13858.014976000197!2d12.4421594!3d41.9731397!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f67619971b349%3A0x825a842c657fbf57!2sArs%20Fisio%20Grottarossa!5e1!3m2!1sen!2sit!4v1776339830058!5m2!1sen!2sit",
  },
  {
    name: "Ars Fisio - Olgiata",
    address: "Via Cassia, 1839 - 00123 Roma (RM)",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.1332154541674!2d12.37365461198444!3d42.01670245660437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f5d1beab88a69%3A0x565ca23d44998575!2sArs%20Fisio%20Cassia!5e1!3m2!1sen!2sit!4v1776339922100!5m2!1sen!2sit",
  },
];

export default function MapSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Section id="dove-siamo-home" desktopAlign="start">
      <h2>Dove siamo</h2>

      {/* Tabs */}
      <div className="tabs-container">
        {locations.map((loc, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`
              tabs-button
              ${activeTab === index ? "active-tab" : "inactive-tab"}
            `}
          >
            {loc.name}
          </button>
        ))}
      </div>

      {/* Map */}
      <div className="map-container">
        <iframe
          key={activeTab} // forces reload on tab change
          src={locations[activeTab].map}
          className="map-iframe"
          loading="lazy"
        ></iframe>
      </div>

      {/* Contatti connection */}
      <div className="map-button-container flex justify-center mt-8">
        <Link to="/contatti" className="booking-button booking-button--full home-section-button">
          Vieni a trovarci
        </Link>
      </div>
    </Section>
  );
}
