import Section from "../components/Section";
import ServiceCard from "../components/ServiceCard";
import services from "../../assets/services/services";
import InvertedServiceCard from "../components/InvertedServiceCard";

export default function Servizi() {
  return (
    <>
      <h1>
        I nostri servizi
      </h1>

      <section>
        <div className="services-container">
          <div className="bg-column"/>
          <div className="services-column">
              {
                services.map((s, i) => {
                  return i === 0 || i % 2 === 0 ? <ServiceCard key={i} title={s.title} description={s.description} img={s.image}/> : <InvertedServiceCard key={i} title={s.title} description={s.description} img={s.image}/>
                })
              }
          </div>
          {/* <div className="services-column">
            {
              services.slice(5, 10).map((s, i) => {
                return <ServiceCard key={i} title={s.title} description={s.description} img={s.image}/>
              })
            }
          </div> */}
        </div>
      </section>
    </>
  )
}