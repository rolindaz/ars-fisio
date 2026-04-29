const Section = ({
  children,
  className = "",
  bg = "",
  id,
}) => {
  return (
    <section id={id} className={`${bg} py-14 md:py-16 lg:flex lg:min-h-[calc(100svh-var(--header-height))] lg:items-center`}>
      <div className={`max-w-6xl h-full w-full mx-auto px-4 flex flex-col justify-center ${className}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;