import Section from "./Section";
import { Link } from "react-router-dom";
import SmoothImage from "./SmoothImage";

export default function StaffPreview({ text, image }) {
  return (
    <Section id="chi-siamo-home">
      <h2>Chi siamo</h2>
      
      <div className="staff-preview-container">
        <div className="staff-preview-text">
          <p className="staff-preview-copy">
            {text}
          </p>
        </div>
        <div className="staff-preview-visual">
          <div className="staff-preview-bg" />
          <SmoothImage
            wrapperClassName="staff-preview-img-shell"
            className="staff-preview-img"
            src={image}
            alt="Il team Ars Fisio"
          />
        </div>
        <div className="button-container">
          <Link to="/chi-siamo" className="base-btn btn-secondary booking-button--full home-section-button">
            Conosciamoci meglio
          </Link>
          <Link
            to="/lavora-con-noi" className="base-btn btn-secondary booking-button--full home-section-button">
            Unisciti al team
          </Link>
        </div>
      </div>
    </Section>
  );
}
