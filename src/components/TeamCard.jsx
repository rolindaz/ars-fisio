export default function TeamCard({
  name,
  caption,
  image,
  description,
  socials,
  variant,
}) {
  const descriptionParagraphs = Array.isArray(description)
    ? description
    : description
      ? [description]
      : [];

  return (
    <>
      <div className="group perspective mx-auto w-fit">
        <div className="flex flex-col items-center">
          <div className={`team-card-inner corners transform-style flex items-end justify-center overflow-visible bg-transparent
          ${variant === "large" ? "h-[462px] w-[360px] shadow-2xl mb-6" : "h-[442px] w-[342px] shadow-xl mb-4"}
        `}>
            <div className="team-card-inner-front corners backface-hidden">
              <div className="team-card-inner-front-bg corners" />

              <img className="relative z-10 object-contain max-h-full px-8" src={image} alt="" />
            </div>

            <div className="team-card-back absolute corners-inverted inset-0 backface-hidden rotate-y-180 flex flex-col justify-center px-5">
              <div className="team-card-quote absolute top-0 left-0 font-quote">
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
