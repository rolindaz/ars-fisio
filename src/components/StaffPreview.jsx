import Section from "./Section";
import { Link } from "react-router-dom";

export default function StaffPreview({text, image}) {
  return (
    <Section>
      <h2>
        Lo Staff
      </h2>

      <div className="staff-preview-container">
        <div className="staff-preview-visual">
          <div className="staff-preview-bg"></div>
          <img className="staff-preview-img" src={image} alt="" />
        </div>
        <div className="staff-preview-text">
          {text}
        </div>
      </div>

      <div className="text-center mt-10">
        <Link
          to="/staff"
          className="inline-block bg-primary text-white px-6 py-3 rounded-full"
        >
          Conosciamoci meglio!
        </Link>
      </div>
    </Section>
  );
};