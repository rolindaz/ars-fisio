import Hero from "../components/Hero";
import MapSection from "../components/MapSection";
import ReviewsSection from "../components/ReviewsSection";
import ServicesPreview from "../components/ServicesPreview";
import StaffPreview from "../components/StaffPreview";

export default function Home() {
  return (
    <>
      <Hero title={'I tuoi fisioterapisti a Roma Nord'} ctaText="Prenota ora" ctaLink="tel:+390696040737" />
      <div className="home-spine-divider" aria-hidden="true">
        <span className="home-spine-divider__glow" />
        <span className="home-spine-divider__line" />
      </div>
      <ReviewsSection/>
      <ServicesPreview/>
      <StaffPreview image={'/staff/staff_preview_no_bg_crop.png'} text={"Lo studio nasce dalla collaborazione tra due colleghi esperti, ma soprattutto due amici che hanno deciso di lavorare insieme. La nostra mission è quella di portare la fisioterapia di alto livello a Roma Nord."}/>
      <MapSection/>
    </>
  )
}