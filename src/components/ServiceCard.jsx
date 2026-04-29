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
          <div className={`py-5 ${align === "right" ? "pe-6" : "ps-6"}`}>
            <h3
              className={`service-card-title text-base font-heading font-semibold mb-2 ${align === "right" ? "text-right" : "text-left"}`}
            >
              {title}
            </h3>
            <p className="text-sm text-gray-600">{description}</p>
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
