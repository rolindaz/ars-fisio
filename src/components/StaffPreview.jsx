import Section from "./Section";
import SecondaryButton from "./SecondaryButton";
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
          <SecondaryButton to="/chi-siamo" className="booking-button--full home-section-button">
            Conosciamoci meglio
          </SecondaryButton>
          <SecondaryButton to="/lavora-con-noi" className="booking-button--full home-section-button">
            Unisciti al team
          </SecondaryButton>
        </div>
      </div>
    </Section>
  );
}
