import { Link } from "react-router-dom";

export default function SecondaryButton({ to, href, className = "", children, ...props }) {
  const buttonClassName = ["base-btn", "btn-secondary", className].filter(Boolean).join(" ");

  if (to) {
    return (
      <Link to={to} className={buttonClassName} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={buttonClassName} {...props}>
      {children}
    </a>
  );
}