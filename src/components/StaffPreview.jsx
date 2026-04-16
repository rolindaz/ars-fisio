import Section from "./Section";
import { Link } from "react-router-dom";

export default function StaffPreview({text, image}) {
  return (
    <Section>
      <h2>
        Chi siamo
      </h2>

      <div className="staff-preview-container">
        <div className="staff-preview-visual">
          <div className="staff-preview-bg"></div>
          <img className="staff-preview-img" src={image} alt="" />
        </div>
        <div className="staff-preview-text">
          <p>
            {text}
          </p>
          <div className="button-container">
            <Link to="/chi-siamo">
              <button className="standard-btn">
                Conosciamoci meglio!
              </button>
            </Link>
            <Link to="/lavora-con-noi">
              <button className="inverted-btn">
                Unisciti al team!
              </button>
            </Link>
          </div>
        </div>
      </div>

    </Section>
  );
};