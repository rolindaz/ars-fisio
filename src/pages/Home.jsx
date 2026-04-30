import Hero from "../components/Hero";
import MapSection from "../components/MapSection";
import ReviewsSection from "../components/ReviewsSection";
import ServicesPreview from "../components/ServicesPreview";
import StaffPreview from "../components/StaffPreview";

export default function Home() {
  return (
    <>
      <Hero
        title={(
          <>
            <span className="block">I tuoi fisioterapisti</span>
            <span className="block">a Roma Nord</span>
          </>
        )}
        subtitle={"Professionalità, competenza e un approccio giovane per accompagnarti verso il tuo benessere."}
        ctaText="Prenota ora"
        ctaLink="tel:+390696040737"
      />
      <ServicesPreview/>
      <ReviewsSection/>
      <StaffPreview image={'/staff/staff_preview_no_bg_crop.webp'} text={"Abbiamo aperto Ars Fisio per portare la fisioterapia di alto livello a Roma Nord."}/>
      <MapSection/>
    </>
  )
}