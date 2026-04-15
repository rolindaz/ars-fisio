const HexCard = ({ title, image }) => {
  return (
    <div className="hex-container">
      
      {/* Hex shape */}
      <div
        className="hex-shape"
        style={{
          clipPath:
            "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
        }}
      >
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="hex-overlay">
          <span className="hex-title">
            {title}
          </span>
        </div>
      </div>

    </div>
  );
};

export default HexCard;