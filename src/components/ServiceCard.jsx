export default function ServiceCard({ title, description, image, align }) {
  return (
    <>
      <div
        className={`
        flex items-center gap-4 p-4 rounded-xl
        bg-white/30 backdrop-blur-md border border-white/40
        shadow-md transition hover:shadow-lg
        ${align === "right" ? "flex-row-reverse text-right" : ""}
      `}
      >
        {/* Image */}
        <div className="w-20 h-20 rounded-lg bg-cover bg-center shrink-0"
        style={{ backgroundImage: `url(${image})` }}/>

        {/* Text */}
        <div>
          <h3 className={`text-base font-heading font-semibold text-gray-800 mb-1 ${align === "right" ? "text-right" : "text-left"}`}>
            {title}
          </h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </>
  );
}
