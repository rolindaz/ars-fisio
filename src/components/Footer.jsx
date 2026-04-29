import { Link } from "react-router-dom";
import SiteBar from "./SiteBar";

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

const footerNavLinks = [
  { label: "Privacy Policy", to: footerLinks.privacy },
  { label: "Cookie Policy", to: footerLinks.cookie },
  { label: footerLinks.developer.label, href: footerLinks.developer.href, external: true },
  { label: footerLinks.artwork.label, href: footerLinks.artwork.href, external: true },
];

function Footer() {
  return (
    <footer className="site-footer mt-10">
      <div className="site-footer__shell mx-auto max-w-6xl px-4 py-8">
        <SiteBar
          links={footerNavLinks}
          wrapperClassName="site-footer__row flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
          logoClassName="h-16 w-auto md:h-[4.5rem]"
          navClassName="site-footer__links flex flex-col gap-3 text-sm md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-x-5 md:gap-y-3 lg:flex-1 lg:px-8"
          linkClassName="site-footer-link"
          actionsClassName="site-footer__actions flex flex-col-reverse items-center justify-center gap-3 lg:min-w-[16rem]"
        />
        <div className="site-footer__row flex justify-center">
          <p className="site-footer-copy text-xs">
            ⓒ 2026 Ars Fisio - Tutti i diritti riservati
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
