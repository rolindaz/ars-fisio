const Section = ({
  children,
  className = "",
  bg = "",
  id,
}) => {
  return (
    <section id={id} className={`${bg} py-14 md:py-16 lg:flex lg:min-h-[calc(100svh-var(--header-height))] lg:items-center`}>
      <div className={`max-w-6xl h-full w-full mx-auto px-4 flex flex-col justify-center [&>h1+*]:mt-8 [&>h2+*]:mt-8 md:[&>h1+*]:mt-10 md:[&>h2+*]:mt-10 ${className}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;