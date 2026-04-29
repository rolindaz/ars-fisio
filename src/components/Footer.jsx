import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";

const footerLinks = {
    privacy: "/privacy-policy",
    cookie: "/cookie-policy",
    developer: {
        label: "Made by your developer",
        href: "https://example.com",
    },
    artwork: {
        label: "Artwork by your artist",
        href: "https://example.com",
    },
};

function Footer() {
    return (
        <footer className="site-footer mt-10">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 md:flex-row md:items-end md:justify-between">
                <div className="space-y-2">
                    <p className="font-heading text-lg uppercase tracking-[0.18em] text-white/95">
                        Ars Fisio
                    </p>
                    <p className="site-footer-copy text-sm md:text-base">
                        Trademark 2026 Ars Fisio. All rights reserved.
                    </p>
                    <div className="flex items-center gap-3 pt-2">
                        <span className="text-[11px] font-heading uppercase tracking-[0.18em] text-white/65">
                            Social
                        </span>
                        <SocialLinks theme="dark" />
                    </div>
                </div>

                <div className="site-footer-meta flex flex-col gap-3 text-sm md:items-end">
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                        <Link className="site-footer-link" to={footerLinks.privacy}>
                            Privacy Policy
                        </Link>
                        <Link className="site-footer-link" to={footerLinks.cookie}>
                            Cookie Policy
                        </Link>
                    </div>

                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                        <a
                            className="site-footer-link"
                            href={footerLinks.developer.href}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {footerLinks.developer.label}
                        </a>
                        <a
                            className="site-footer-link"
                            href={footerLinks.artwork.href}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {footerLinks.artwork.label}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;