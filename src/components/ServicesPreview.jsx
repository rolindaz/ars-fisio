import Section from "./Section";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Physiotherapy",
    description: "Personalized rehabilitation programs.",
  },
  {
    title: "Postural Analysis",
    description: "Improve posture and prevent injuries.",
  },
  {
    title: "Massage Therapy",
    description: "Relaxation and muscle recovery.",
  },
];

export default function ServicesPreview() {
  return (
    <Section>
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-10">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-heading font-semibold mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/services"
          className="inline-block bg-primary text-white px-6 py-3 rounded-full"
        >
          View all services
        </Link>
      </div>
    </Section>
  );
};