import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Section from "../components/Section";
import ServiceCard from "../components/ServiceCard";
import services from "../../assets/services/services";

export default function Servizi() {
  const location = useLocation();
  const [highlightedService, setHighlightedService] = useState("");
  const left = services.filter((_, i) => i % 2 === 0);
  const right = services.filter((_, i) => i % 2 !== 0);

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
          <div
            className="pointer-events-none absolute inset-0 flex justify-center opacity-40"
            style={{
              backgroundImage: `url("/logo-fisio-no-text.svg")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top center",
              backgroundSize: "cover",
            }}
          >
          </div>
            <div className="overlay-services relative mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-32">
              {/* LEFT COLUMN */}
              <div className="flex flex-col gap-10 md:gap-12">
                {left.map((s, i) => (
                  <ServiceCard key={s.slug} {...s} align="right" delay={i*100} isHighlighted={highlightedService === s.slug} />
                ))}
              </div>

              {/* RIGHT COLUMN */}
              <div className="flex flex-col gap-10 md:gap-12">
                {right.map((s, i) => (
                  <ServiceCard key={s.slug} {...s} align="left" delay={i*100} isHighlighted={highlightedService === s.slug} />
                ))}
              </div>
            </div>
        </div>
      </Section>
    </>
  );
}
