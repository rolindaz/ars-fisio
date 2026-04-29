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
          h-[430px] w-[310px] shadow-xl mb-4 sm:h-[447px] sm:w-[332px] md:h-[477px] md:w-[362px] md:shadow-2xl md:mb-6
        `}>
            <div className="team-card-inner-front corners backface-hidden">
              <div className="team-card-inner-front-bg corners" />

              <img className="relative z-10 object-contain max-h-full px-6" src={image} alt="" />
            </div>

            <div className="team-card-back absolute corners-inverted inset-0 backface-hidden rotate-y-180 flex flex-col justify-center px-5">
              <div className="team-card-quote absolute top-0 left-0 font-quote">
                “
              </div>
              <div className="team-card-description text-base">
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
            <h3 className="team-card-name font-heading text-lg text-center">
              {name}
            </h3>
            <h4 className="team-card-caption-role text-center">
              {caption}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
