const HexCard = ({ title, image }) => {
  return (
    <div className="hex-container">
      
      {/* Hex shape */}
      <div 
      className="hex-shape" 
      style={{backgroundImage: `url(${image})`}}>

        {/* Overlay */}
        <div className="hex-overlay">
        </div>

        {/* Glass layer */}
        <div className="glass" />
        <div className="hex-content">
          <span className="hex-title">
            {title}
          </span>
        </div>

      </div>

    </div>
  );
};

export default HexCard;