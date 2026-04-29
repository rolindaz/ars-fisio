const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/arsfisio/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M13.5 21v-7.2h2.4l.36-2.8H13.5V9.22c0-.82.23-1.37 1.4-1.37h1.5V5.34c-.26-.04-1.15-.11-2.18-.11-2.16 0-3.64 1.32-3.64 3.74V11H8.15v2.8h2.43V21h2.92Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/arsfisio/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M7.25 3h9.5A4.25 4.25 0 0 1 21 7.25v9.5A4.25 4.25 0 0 1 16.75 21h-9.5A4.25 4.25 0 0 1 3 16.75v-9.5A4.25 4.25 0 0 1 7.25 3Zm0 1.5A2.75 2.75 0 0 0 4.5 7.25v9.5a2.75 2.75 0 0 0 2.75 2.75h9.5a2.75 2.75 0 0 0 2.75-2.75v-9.5A2.75 2.75 0 0 0 16.75 4.5h-9.5Zm10 1.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
      </svg>
    ),
  },
];

export default function SocialLinks({ className = "", theme = "light" }) {
  const isDark = theme === "dark";

  return (
    <div className={`social-links ${className}`.trim()} aria-label="Social media links">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          className={`social-links__item ${isDark ? "social-links__item--dark" : "social-links__item--light"}`}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          aria-label={social.name}
          title={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}