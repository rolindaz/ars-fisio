import Section from "../components/Section";
import ServiceCard from "../components/ServiceCard";
import services from "../../assets/services/services";

export default function Servizi() {
  return (
    <>
      <h1>
        I nostri servizi
      </h1>

      <Section>
        <div className="services-container">
          <div className="services-column">
            {
              services.slice(0, 5).map((s, i) => {
                return <ServiceCard key={i} title={s.title} description={s.description} img={s.image}/>
              })
            }
          </div>
          <div className="services-column">
            {
              services.slice(5, 10).map((s, i) => {
                return <ServiceCard key={i} title={s.title} description={s.description} img={s.image}/>
              })
            }
          </div>
        </div>
      </Section>
    </>
  )
}