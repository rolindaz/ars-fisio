import React from "react";

export default function Hero({title, subtitle, ctaText, ctaLink}) {
    return (
        <section className="hero relative">
            <div className="hero-mobile-overlay absolute inset-0" />
            <div className="hero-media" aria-hidden="true" />
            <div className="hero-panel" aria-hidden="true" />
            <div className="hero-seam" aria-hidden="true">
                <svg viewBox="0 0 220 1000" preserveAspectRatio="none" className="h-full w-full">
                    <defs>
                        <linearGradient id="heroSeamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="white" />
                            <stop offset="44%" stopColor="rgba(255,255,255,0.98)" />
                            <stop offset="74%" stopColor="rgba(255,255,255,0.7)" />
                            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0 0H136C84 172 84 348 144 486C204 624 202 802 126 1000H0V0Z"
                        fill="url(#heroSeamGradient)"
                    />
                </svg>
            </div>

            <div className="hero-shell relative z-10">
                <div className="hero-copy">
                <h1 className="hero-title font-heading text-4xl md:text-6xl mb-4">
                    {title}
                </h1>

                {
                    subtitle &&
                    <p className="hero-subtitle text-lg md:text-2xl mb-6">
                        {subtitle}
                    </p>
                }

                {
                    ctaText && ctaLink && (
                        <a href={ctaLink} className="hero-cta bg-primary hover:bg-primary/90 px-6 py-3 rounded-full text-white text-lg transition">
                            {ctaText}
                        </a>
                    )
                }
                </div>
            </div>

        </section>
    )
}