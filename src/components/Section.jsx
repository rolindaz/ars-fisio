const Section = ({
  children,
  className = "",
  bg = "",
}) => {
  return (
    <section className={`${bg} py-16`}>
      <div className={`max-w-6xl h-full mx-auto px-4 ${className}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;