export default function ServiceCard({
  title,
  description,
  image,
  align,
  delay,
}) {
  return (
    <>
      <div
        style={{ animationDelay: `${delay}ms` }}
        className={`${align === "right" ? "animate-slide-right" : "animate-slide-left"}`}
      >
        <div
          className={`inner-card group flex justify-between items-center gap-2 rounded-xl bg-white/30 backdrop-blur-md shadow-md transition-all min-h-44 duration-500 hover:shadow-lg hover:-translate-y-1 ${align === "right" ? "flex-row-reverse text-right" : ""}`}
        >
          {/* Text */}
          <div className={`py-5 ${align === "right" ? "pe-6" : "ps-6"}`}>
            <h3
              className={`text-base font-heading font-semibold text-gray-800 mb-2 ${align === "right" ? "text-right" : "text-left"}`}
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
