import Hero from "../components/Hero";
import MapSection from "../components/MapSection";
import ReviewsSection from "../components/ReviewsSection";
import ServicesPreview from "../components/ServicesPreview";
import StaffPreview from "../components/StaffPreview";

export default function Home() {
  return (
    <>
      <Hero title={'I tuoi fisioterapisti a Roma Nord'}/>
      <div className="home-spine-divider" aria-hidden="true">
        <span className="home-spine-divider__glow" />
        <span className="home-spine-divider__line" />
      </div>
      <ReviewsSection/>
      <ServicesPreview/>
      <StaffPreview image={'/staff/staff_preview_no_bg_crop.png'} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sequi et commodi tempora harum officia nisi voluptatum saepe vitae eius, quod veritatis culpa molestias deserunt doloribus recusandae corrupti quidem natus numquam. Necessitatibus similique repellendus culpa ipsa fugit consectetur iusto, voluptas consequuntur asperiores quo illo ad inventore facilis! Iusto voluptas deserunt fugiat quibusdam, hic ab amet iste architecto ullam repellendus esse, blanditiis quasi dicta inventore sunt voluptatum vero labore et reiciendis molestiae magni a. Qui magni iure explicabo corrupti corporis dignissimos adipisci rem quaerat odio tempore, sequi ducimus molestiae saepe officia libero eius nesciunt doloremque provident temporibus veritatis? Corporis, eum laudantium."}/>
      <MapSection/>
    </>
  )
}