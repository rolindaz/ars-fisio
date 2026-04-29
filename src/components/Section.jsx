const Section = ({
  children,
  className = "",
  bg = "",
  id,
  desktopAlign = "center",
}) => {
  const desktopItemsClass = desktopAlign === "start" ? "lg:items-start" : "lg:items-center";
  const desktopJustifyClass = desktopAlign === "start" ? "lg:justify-start" : "lg:justify-center";

  return (
    <section id={id} className={`${bg} py-12 md:py-14 lg:flex lg:min-h-[calc(100svh-var(--header-height))] ${desktopItemsClass}`}>
      <div className={`max-w-6xl h-full w-full mx-auto px-4 flex flex-col justify-center ${desktopJustifyClass} [&>h1+*]:mt-8 [&>h2+*]:mt-8 md:[&>h1+*]:mt-10 md:[&>h2+*]:mt-10 ${className}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;