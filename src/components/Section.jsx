const Section = ({
  children,
  className = "",
  bg = "",
  id,
}) => {
  return (
    <section id={id} className={`${bg} py-14 md:py-16`}>
      <div className={`max-w-6xl h-full mx-auto px-4 ${className}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;