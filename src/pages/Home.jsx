import Hero from "../components/Hero";
import MapSection from "../components/MapSection";
import Network from "../components/Network";
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
        subtitle={"Professionalità, competenza e un approccio giovane per il tuo benessere."}
        ctaText="Prenota ora"
      />
      <ServicesPreview/>
      <ReviewsSection/>
      <Network/>
      <StaffPreview image={'/staff/staff_preview_no_bg_crop.webp'} text={"Con Ars Fisio portiamo la fisioterapia di alto livello a Roma Nord."}/>
      <MapSection/>
    </>
  )
}