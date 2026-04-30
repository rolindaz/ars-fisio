const bookingHref = "tel:+390696040737";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[1.35em] w-[1.35em] fill-current">
      <path d="M7.03 4.91c.32-.78 1.24-1.16 2.03-.84l1.94.79c.75.31 1.14 1.13.9 1.91l-.65 2.08a1.5 1.5 0 0 1-1.43 1.05h-.93a12.6 12.6 0 0 0 5.21 5.21v-.93c0-.66.43-1.25 1.05-1.43l2.08-.65c.78-.24 1.6.15 1.91.9l.79 1.94c.32.79-.06 1.71-.84 2.03l-1.72.7c-.57.23-1.2.28-1.8.12A17.97 17.97 0 0 1 6.11 7.73c-.16-.6-.11-1.23.12-1.8l.8-1.02Z" />
    </svg>
  );
}

export default function BookingButton({ ctaText = "Prenota ora", compact = false, className = "" }) {
  return (
    <a
      href={bookingHref}
      className={["base-btn", "btn-primary", compact ? "btn-primary--compact" : "", className].filter(Boolean).join(" ")}
      aria-label={ctaText}
      title={ctaText}
    >
      <PhoneIcon />
      <span className={`btn-primary__label ${compact ? "btn-primary__label--compact" : ""}`.trim()}>
        {ctaText}
      </span>
    </a>
  );
}