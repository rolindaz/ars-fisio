import Section from "./Section";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 41.9947, // Center between the two locations
  lng: 12.4076,
};

const locations = [
  {
    position: { lat: 41.9728017, lng: 12.4415325 },
    label: "Studio 1",
  },
  {
    position: { lat: 42.0167025, lng: 12.3736546 },
    label: "Studio 2",
  },
];

export default function MapSection() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAaUwXcNHVrH_mgIMAqS5QX6OuJWO7ihWk"
  });

  return (
    <Section bg="bg-neutral">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-10">
        Dove siamo
      </h2>

      {/* Location cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="font-heading text-xl font-semibold mb-2">
            Ars Fisio Grottarossa
          </h3>
          <p className="text-gray-600">Via di Grottarossa, 194 - 00189 Roma</p>
          <a href="tel:+39123456789" className="text-primary mt-2 block">Chiamaci ora</a>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="font-heading text-xl font-semibold mb-2">
            Ars Fisio Cassia
          </h3>
          <p className="text-gray-600">Via Cassia, 1839 - 00123 Roma</p>
          <a href="tel:+39123456789" className="text-primary mt-2 block">Chiamaci ora</a>
        </div>
      </div>

      {/* Map */}
      <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-md">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={11}
          >
            {locations.map((loc, idx) => (
              <Marker key={idx} position={loc.position} label={loc.label} />
            ))}
          </GoogleMap>
        ) : (
          <div>
            Caricamento...
          </div>
        )}
      </div>
    </Section>
  );
}