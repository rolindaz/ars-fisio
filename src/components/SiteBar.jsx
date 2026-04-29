import { Link } from "react-router-dom";
import BookingButton from "./BookingButton";
import SocialLinks from "./SocialLinks";

function SiteBarLink({ item, className }) {
  if (item.href) {
    return (
      <a
        className={className}
        href={item.href}
        target={item.external ? "_blank" : undefined}
        rel={item.external ? "noreferrer" : undefined}
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link className={className} to={item.to}>
      {item.label}
    </Link>
  );
}

export default function SiteBar({
  links,
  wrapperClassName = "",
  logoLinkClassName = "",
  logoClassName = "",
  navClassName = "",
  linkClassName = "",
  actionsClassName = "",
  socialTheme = "light",
}) {
  return (
    <div className={`site-bar ${wrapperClassName}`.trim()}>
      <Link to="/" className={`site-bar__brand ${logoLinkClassName}`.trim()}>
        <img
          src="/logo-fisio.svg"
          alt="Ars Fisio"
          className={`site-bar__logo ${logoClassName}`.trim()}
          loading="eager"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </Link>

      <nav className={`site-bar__nav ${navClassName}`.trim()}>
        {links.map((item) => (
          <SiteBarLink key={item.label} item={item} className={linkClassName} />
        ))}
      </nav>

      <div className={`site-bar__actions ${actionsClassName}`.trim()}>
        <SocialLinks theme={socialTheme} />
        <BookingButton />
      </div>
    </div>
  );
}