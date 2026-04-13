import Section from "./Section";
import { Link } from "react-router-dom";

const staff = [
  {
    title: "Alessio Papaianopol",
    description: "Alessio fisioterapista, specializzato in terapia manuale e tecniche osteopatiche. Mi occupo del trattamento di atleti, professionisti e non, per il recupero e la prevenzione degli infortuni. Specializzato negli atleti di Crossfit, Calisthenics, Sport da combattimento (MMA, judo, BJJ)",
  },
  {
    title: "Flaminia D’Isa",
    description: "Flaminia d’Isa, fisioterapista, mi sono specializzata in posturale secondo Mézières e riabilitazione di spalla. Occupandomi anche di pazienti sportivi, coniugo il trattamento delle problematiche dovute alla postura al ricondizionamento muscolare per contrastare i disturbi durante le attività sportive e della vita quotidiana. Specializzata nelle patologie di spalla e di colonna, ho approfondito lo studio di alcune tecniche osteopatiche come Strain Counterstrain.",
  },
  {
    title: "Edoardo Sgammini",
    description: "Specializzato in tecniche di terapia manuale e osteopatiche. Ho acquisito esperienze nel mondo calcistico spagnolo ed italiano e attualmente lavoro a stretto contatto con atleti professionisti e non, del tennis, calcio e nuoto.",
  },
];

export default function StaffPreview() {
  return (
    <Section>
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-10">
        Our Staff
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {staff.map((staffMember, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-heading font-semibold mb-2">
              {staffMember.title}
            </h3>
            <p className="text-gray-600">
              {staffMember.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/staff"
          className="inline-block bg-primary text-white px-6 py-3 rounded-full"
        >
          View all staff
        </Link>
      </div>
    </Section>
  );
};