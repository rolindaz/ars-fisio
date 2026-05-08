import { useLayoutEffect, useRef } from "react";

const MIN_TITLE_FONT_SIZE_PX = 12;

const HexCard = ({ title, image }) => {
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    const titleElement = titleRef.current;

    if (!titleElement) {
      return undefined;
    }

    const fitTitle = () => {
      titleElement.style.fontSize = "";

      if (/\s/.test(title.trim())) {
        return;
      }

      const availableWidth = titleElement.clientWidth;
      const requiredWidth = titleElement.scrollWidth;

      if (!availableWidth || requiredWidth <= availableWidth) {
        return;
      }

      const baseFontSize = parseFloat(window.getComputedStyle(titleElement).fontSize);
      const fittedFontSize = Math.max(
        MIN_TITLE_FONT_SIZE_PX,
        Math.floor(baseFontSize * (availableWidth / requiredWidth) * 100) / 100,
      );

      titleElement.style.fontSize = `${fittedFontSize}px`;
    };

    fitTitle();

    const frameId = window.requestAnimationFrame(fitTitle);
    window.addEventListener("resize", fitTitle);
    document.fonts?.ready.then(fitTitle);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", fitTitle);
    };
  }, [title]);

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
          <span ref={titleRef} className="hex-title font-heading">
            {title}
          </span>
        </div>

      </div>

    </div>
  );
};

export default HexCard;