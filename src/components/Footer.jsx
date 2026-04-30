import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import SiteBar from "./SiteBar";

const footerLinks = {
  privacy: "/privacy-policy",
  cookie: "/cookie-policy",
  // developer: {
  //   label: "Made by your developer",
  //   href: "https://example.com",
  // },
  // artwork: {
  //   label: "Artwork by your artist",
  //   href: "https://example.com",
  // },
};

const footerNavLinks = [
  { label: "Privacy Policy", to: footerLinks.privacy },
  { label: "Cookie Policy", to: footerLinks.cookie },
  // { label: footerLinks.developer.label, href: footerLinks.developer.href, external: true },
  // { label: footerLinks.artwork.label, href: footerLinks.artwork.href, external: true },
];

function Footer() {
  return (
    <footer className="site-footer mt-10">
      <div className="site-footer__mobile md:hidden">
        <nav className="site-footer__links site-footer__links--mobile">
          {footerNavLinks.map((item) => (
            <Link key={item.label} className="site-footer-link" to={item.to}>
              {item.label}
            </Link>
          ))}
        </nav>

        <SocialLinks className="site-footer__mobile-socials" />

        <p className="site-footer-copy site-footer-copy--mobile text-xs">
          ⓒ 2026 Ars Fisio - Tutti i diritti riservati
        </p>
      </div>

      <div className="hidden md:block site-footer__shell mx-auto max-w-6xl px-4 py-8">
        <div>
          <SiteBar
            links={footerNavLinks}
            wrapperClassName="site-footer__row flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
            logoClassName="h-[4.5rem] w-auto md:h-[6rem]"
            navWrapperClassName="site-footer__center flex flex-col items-center justify-center gap-6 lg:flex-1 lg:px-8"
            navClassName="site-footer__links flex flex-col gap-3 text-sm md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-x-5 md:gap-y-3"
            linkClassName="site-footer-link"
            actionsClassName="site-footer__actions flex flex-col-reverse items-center justify-center gap-3 lg:min-w-[16rem]"
            navSupplement={(
              <p className="site-footer-copy text-xs text-center">
                ⓒ 2026 Ars Fisio - Tutti i diritti riservati
              </p>
            )}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
