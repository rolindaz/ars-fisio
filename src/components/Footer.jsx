import { Link } from "react-router-dom";
import BookingButton from "./BookingButton";
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
      <div className="site-footer__shell mx-auto max-w-6xl px-4 py-8">
        <div className="site-footer__row flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="site-footer__brand flex flex-col gap-3 lg:min-w-[13rem]">
            <Link to="/" className="inline-flex w-fit items-center">
              <img
                src="/logo-fisio.svg"
                alt="Ars Fisio"
                className="h-14 w-auto"
              />
            </Link>
          </div>

          <div className="site-footer__links flex flex-col gap-3 text-sm md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-x-5 md:gap-y-3 lg:flex-1 lg:px-8">
            <Link className="site-footer-link" to={footerLinks.privacy}>
              Privacy Policy
            </Link>
            <Link className="site-footer-link" to={footerLinks.cookie}>
              Cookie Policy
            </Link>
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

          <div className="site-footer__actions flex gap-4 lg:min-w-[16rem]">
            <div className="flex items-center gap-3">
              <SocialLinks />
            </div>
            <BookingButton />
          </div>
        </div>
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
