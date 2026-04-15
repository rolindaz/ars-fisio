const HexCard = ({ title, image }) => {
  return (
    <div className="hex-container">
      
      {/* Hex shape */}
      <div className="hex-shape">

        {/* Immagine servizio */}
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