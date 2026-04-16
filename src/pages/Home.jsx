import Hero from "../components/Hero";
import MapSection from "../components/MapSection";
import ReviewsSection from "../components/ReviewsSection";
import ServicesPreview from "../components/ServicesPreview";
import StaffPreview from "../components/StaffPreview";

export default function Home() {
  return (
    <>
      <Hero title={'I tuoi fisioterapisti a Roma Nord'}/>
      <ReviewsSection/>
      <ServicesPreview/>
      <StaffPreview image={'/staff/staff_preview_no_bg_crop.png'}/>
      <MapSection/>
    </>
  )
}