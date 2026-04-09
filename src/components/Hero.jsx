import React from "react";

export default function Hero({title, subtitle, ctaText, ctaLink}) {
    return (
        <section className="hero relative flex items-center justify-center bg-cover">

            <div className="absolute inset-0 bg-black/40" />
            <div className="relative text-center px-4 md:px-0 max-w-3xl text-white">
                <h1 className="text-4xl md:text-6xl font-customTitle mb-4">
                    {title}
                </h1>

                {
                    subtitle &&
                    <p className="text-lg md:text-2xl mb-6">
                        {subtitle}
                    </p>
                }

                {
                    ctaText && ctaLink && (
                        <a href={ctaLink} className="bg-primary hover:bg-primary/90 px-6 py-3 rounded-full text-white text-lg transition">
                            {ctaText}
                        </a>
                    )
                }
            </div>

        </section>
    )
}