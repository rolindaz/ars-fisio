import { useState } from "react";

export default function SmoothImage({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  showPlaceholder = true,
  loading = "lazy",
  decoding = "async",
  fetchPriority,
  onLoad,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = (event) => {
    setIsLoaded(true);
    onLoad?.(event);
  };

  const handleImageRef = (node) => {
    if (node?.complete) {
      setIsLoaded(true);
    }
  };

  return (
    <span
      className={`smooth-image ${isLoaded ? "smooth-image--loaded" : ""} ${showPlaceholder ? "" : "smooth-image--no-placeholder"} ${wrapperClassName}`.trim()}
    >
      {showPlaceholder ? (
        <span className="smooth-image__placeholder" aria-hidden="true" />
      ) : null}
      <img
        {...props}
        ref={handleImageRef}
        src={src}
        alt={alt}
        className={`smooth-image__img ${className}`.trim()}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        onLoad={handleLoad}
      />
    </span>
  );
}