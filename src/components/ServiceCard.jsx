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
          className={`service-card-surface inner-card group flex w-full items-stretch justify-between gap-2 rounded-xl backdrop-blur-md shadow-md transition-all min-h-44 duration-500 hover:-translate-y-1 hover:shadow-lg ${align === "right" ? "md:flex-row-reverse md:text-right" : ""}`}
        >
          <div
            className="service-card-bg absolute inset-0"
            style={{ backgroundImage: `url(${image})` }}
            aria-hidden="true"
          />

          {/* Text */}
          <div className={`service-card-copy self-stretch px-5 py-5 items-start text-left md:px-0 ${align === "right" ? "md:pe-6 md:items-end" : "md:ps-6 md:items-start"}`}>
            <h3
              className={`service-card-title mb-2 text-base font-heading font-semibold text-left ${align === "right" ? "md:text-right" : "md:text-left"}`}
            >
              {title}
            </h3>
            <div className="service-card-description-wrap">
              <p className="service-card-description text-sm">{description}</p>
            </div>
            <a
              href={serviceCardCtaHref}
              className={`service-card-cta self-start ${align === "right" ? "md:self-end" : "md:self-start"}`}
            >
              Richiedi informazioni
            </a>
          </div>

          <div
            className={`service-card-media relative hidden w-40 min-h-32 overflow-hidden self-stretch shrink-0 md:block ${align === "right" ? "rounded-l-lg" : "rounded-r-lg"}`}
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
