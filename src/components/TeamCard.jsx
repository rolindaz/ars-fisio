export default function TeamCard({
  name,
  caption,
  image,
  description,
  socials,
  variant,
  margin
}) {
  const descriptionParagraphs = Array.isArray(description)
    ? description
    : description
      ? [description]
      : [];

  return (
    <>
      <div className="group perspective w-full">
        <div className="flex flex-col items-center">
          <div className={`team-card-inner corners transform-style flex items-end justify-center overflow-visible bg-transparent
          ${variant === "large" ? "w-[380px] h-[480px] shadow-2xl mb-6" : "w-[350px] h-[450px] shadow-xl mb-4"} ${margin === "start" ? "ml-14" : margin === "end" ? "mr-14" : ""}
        `}>
            <div className="team-card-inner-front backface-hidden">
              <div className="team-card-inner-front-bg corners" />

              <img className="relative z-10 object-contain max-h-full px-8" src={image} alt="" />
            </div>

            <div className="absolute corners-inverted inset-0 backface-hidden rotate-y-180 flex flex-col justify-center px-5 bg-[#2c68a059]">
              <div className="absolute top-0 left-0 text-[#2C67A0]/10 text-[400px] font-quote">
                “
              </div>
              <div className="text-base text-gray-700">
                {descriptionParagraphs.map((paragraph, index) => (
                  <p
                    key={`${name}-paragraph-${index}`}
                    className={index < descriptionParagraphs.length - 1 ? "mb-3" : ""}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {socials && (
                <div className="flex gap-3 mt-4">
                  {socials.map((s, i) => (
                    <a key={i} href={s.link} target="_blank" rel="noreferrer">
                      {s.icon}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="team-card-caption">
            <h3 className="font-heading text-lg text-center">
              {name}
            </h3>
            <h4 className="text-center text-[var(--subtitle-info)]">
              {caption}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
