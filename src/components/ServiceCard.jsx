const serviceCardCtaHref = "tel:+390696040737";

export default function ServiceCard({
  slug,
  title,
  description,
  image,
  align,
  delay,
  isHighlighted = false,
}) {
  return (
    <>
      <div
        id={slug}
        data-service-slug={slug}
        style={{ animationDelay: `${delay}ms` }}
        className={`service-card-target w-full ${isHighlighted ? "service-card-target--highlighted" : ""} ${align === "right" ? "animate-slide-right" : "animate-slide-left"}`}
      >
        <div
          className={`service-card-surface inner-card group flex w-full items-center justify-between gap-2 rounded-xl backdrop-blur-md shadow-md transition-all min-h-44 duration-500 hover:-translate-y-1 hover:shadow-lg ${align === "right" ? "flex-row-reverse text-right" : ""}`}
        >
          {/* Text */}
          <div className={`service-card-copy py-5 ${align === "right" ? "pe-6 items-end" : "ps-6 items-start"}`}>
            <h3
              className={`service-card-title text-base font-heading font-semibold mb-2 ${align === "right" ? "text-right" : "text-left"}`}
            >
              {title}
            </h3>
            <p className="service-card-description text-sm">{description}</p>
            <a
              href={serviceCardCtaHref}
              className={`service-card-cta ${align === "right" ? "self-end" : "self-start"}`}
            >
              Richiedi informazioni
            </a>
          </div>

          <div
            className={`relative w-40 min-h-32 overflow-hidden self-stretch shrink-0 ${align === "right" ? "rounded-l-lg" : "rounded-r-lg"}`}
          >
            {/* Image */}
            <div
              className="bg-cover bg-center absolute inset-0"
              style={{ backgroundImage: `url(${image})` }}
            />
            {/* Gradient fade */}
            <div
              className={`absolute inset-0 ${align === "right" ? "bg-gradient-to-l from-white/100 to-transparent" : "bg-gradient-to-r from-white/100 to-transparent"}`}
            />
          </div>
        </div>
      </div>
    </>
  );
}
