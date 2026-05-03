import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Section from "../components/Section";
import ServiceCard from "../components/ServiceCard";
import services from "../../assets/services/services";

export default function Servizi() {
  const location = useLocation();
  const [highlightedService, setHighlightedService] = useState("");
  const hasOddServiceCount = services.length % 2 !== 0;

  useEffect(() => {
    if (!location.hash) {
      setHighlightedService("");
      return undefined;
    }

    const slug = decodeURIComponent(location.hash.slice(1));
    const target = document.getElementById(slug);

    if (!target) {
      setHighlightedService("");
      return undefined;
    }

    setHighlightedService(slug);

    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    });

    const timeoutId = window.setTimeout(() => {
      setHighlightedService((current) => (current === slug ? "" : current));
    }, 1800);

    return () => window.clearTimeout(timeoutId);
  }, [location.hash]);

  return (
    <>
      <Section>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-center text-[var(--logo-main)] mb-0">
          I nostri servizi
        </h1>

        <div className="relative">
          <div className="servizi-page-bg pointer-events-none absolute inset-0 flex justify-center opacity-40"></div>
            <div className="overlay-services relative mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-32 md:gap-y-12">
              {services.map((service, index) => {
                const isLastOddCard = hasOddServiceCount && index === services.length - 1;
                const align = isLastOddCard ? "left" : index % 2 === 0 ? "right" : "left";

                return (
                  <div
                    key={service.slug}
                    className={isLastOddCard ? "md:col-span-2 md:flex md:justify-center" : ""}
                  >
                    <div className={isLastOddCard ? "w-full md:max-w-[36rem]" : "w-full"}>
                      <ServiceCard
                        {...service}
                        align={align}
                        delay={index * 100}
                        isHighlighted={highlightedService === service.slug}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
        </div>
      </Section>
    </>
  );
}
