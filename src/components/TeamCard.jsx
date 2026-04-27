export default function TeamCard({
  name,
  caption,
  image,
  description,
  socials,
  variant = "normal",
}) {
  return (
    /* Old version */
    /* <div className="group perspective mx-12">
      <div>
        <div className="team-card-inner transform-style">
          <div className="team-card-inner-front backface-hidden">
            <div className="team-card-inner-front-bg" />

            <img className="relative" src={image} alt="" />
          </div>

          <div className="absolute inset-0 backface-hidden rotate-y-180 flex flex-col justify-center">
            <div>
              <p className="text-base text-gray-700">{description}</p>
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
          <h3 className="font-heading text-lg text-left">{name}</h3>
          <h4>{caption}</h4>
        </div>
      </div>
    </div> */

    /* New no flip */
    <div className="flex flex-col items-center text-center">
      <div
        className={`
          relative flex items-end justify-center overflow-visible
          ${variant === "large" ? "w-[390px] h-[520px]" : "w-[280px] h-[280px]"}
        `}
      >
       
        <div className="absolute bottom-0 w-full h-[75%] bg-[#2C67A0] rounded-md" />

       
        <img
          src={image}
          alt={name}
          className="relative z-10 object-contain max-h-full"
        />
      </div>

      
      <div className="mt-4 max-w-xs">
        <h3 className="font-semibold text-lg text-gray-800">{name}</h3>

        <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
          {caption}
        </p>

        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
