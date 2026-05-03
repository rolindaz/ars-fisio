import { Link } from "react-router-dom";
import BookingButton from "./BookingButton";
import SmoothImage from "./SmoothImage";

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
  navWrapperClassName = "",
  navClassName = "",
  linkClassName = "",
  actionsClassName = "",
  navSupplement = null,
  actionsSupplement = null,
  showBookingButton = true,
}) {
  return (
    <div className={`site-bar ${wrapperClassName}`.trim()}>
      <Link to="/" className={`site-bar__brand ${logoLinkClassName}`.trim()}>
        <SmoothImage
          src="/logos/logo-fisio.svg"
          alt="Ars Fisio"
          className={`site-bar__logo ${logoClassName}`.trim()}
          wrapperClassName="inline-flex items-center"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          showPlaceholder={false}
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </Link>

      <div className={`site-bar__nav ${navWrapperClassName}`.trim()}>
        <nav className={navClassName}>
          {links.map((item) => (
            <SiteBarLink key={item.label} item={item} className={linkClassName} />
          ))}
        </nav>
        {navSupplement}
      </div>

      <div className={`site-bar__actions ${actionsClassName}`.trim()}>
        {actionsSupplement}
        {showBookingButton ? <BookingButton /> : null}
      </div>
    </div>
  );
}