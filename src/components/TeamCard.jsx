export default function TeamCard({ name, image, description, socials }) {
  return (
    <div className="group perspective">
      
      <div className="team-card-inner relative h-80 w-full transition-transform duration-500 transform-style">

        {/* FRONT */}
        <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden bg-white/30 backdrop-blur-md border border-white/40 shadow-md">

          {/* Image */}
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />

          {/* Overlay name */}
          <div className="absolute bottom-0 w-full bg-black/40 text-white text-center py-3">
            <h3 className="font-heading text-lg">{name}</h3>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl p-6 bg-white/40 backdrop-blur-md border border-white/40 shadow-md flex flex-col justify-between">

          <div>
            <h3 className="font-heading text-lg mb-2 text-gray-800">
              {name}
            </h3>
            <p className="text-sm text-gray-700">
              {description}
            </p>
          </div>

          {/* Socials */}
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
    </div>
  );
}