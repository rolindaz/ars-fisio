export default function ServiceCard({ title, description, image, align, delay }) {
  return (
    <>
      <div style={{ animationDelay: `${delay}ms` }} className={`${align === "right" ? "animate-slide-right" : "animate-slide-left"}`}>
      <div className={`inner-card group flex justify-between items-center gap-4 rounded-xl bg-white/30 backdrop-blur-md shadow-md transition-all min-h-40 duration-500 hover:shadow-lg hover:translate-y-1 ${align === "right" ? "flex-row-reverse text-right" : ""}`}>
        {/* Text */}
        <div className="p-3">
          <h3 className={`text-base font-heading font-semibold text-gray-800 mb-1 ${align === "right" ? "text-right" : "text-left"}`}>
            {title}
          </h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>

        {/* Image */}
        <div
          className={`w-28 min-h-32 self-stretch bg-cover bg-center shrink-0 ${align === "right" ? "rounded-l-lg" : "rounded-r-lg"}`}
          style={{ backgroundImage: `url(${image})` }}
        />
        </div>
      </div>

    </>
  );
}
