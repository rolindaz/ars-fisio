import Section from "./Section";
import { Link } from "react-router-dom";

export default function StaffPreview({ text, image }) {
  return (
    <Section id="chi-siamo-home" desktopAlign="start">
      <h2>Chi siamo</h2>

      <div className="staff-preview-container">
        <div className="staff-preview-visual">
          <div className="staff-preview-bg" />
          <img className="staff-preview-img" src={image} alt="" />
        </div>
        <div className="staff-preview-text">
          <p className="staff-preview-copy">{text}</p>
        </div>
        <div className="button-container">
          <Link to="/chi-siamo" className="booking-button booking-button--full home-section-button">
            Conosciamoci meglio
          </Link>
          <Link
            to="/lavora-con-noi" className="booking-button booking-button--full home-section-button">
            Unisciti al team
          </Link>
        </div>
      </div>
    </Section>
  );
}
