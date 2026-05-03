const Section = ({
  children,
  className = "",
  bg = "",
  id,
}) => {
  return (
    <section id={id} className={`${bg} py-10 md:py-12 flex md:min-h-[calc(100svh-var(--header-height))] items-center`}>
      <div className={`max-w-6xl w-full mx-auto px-4 flex flex-col [&>h1+*]:mt-8 [&>h2+*]:mt-8 md:[&>h1+*]:mt-10 md:[&>h2+*]:mt-10 ${className}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;