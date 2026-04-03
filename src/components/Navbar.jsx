import { Link, NavLink, Outlet } from "react-router-dom"

// Creo una funzione per attribuire automaticamente ai link attivi la classe 'active' e gestirne così lo stile in modo automatico

const navLinkClassName = ({ isActive }) =>
  `nav-link${isActive ? ' active' : ''}`

export default function Navbar() {
    return (
        <>
            {/* Navbar */} 
            <nav className="navbar navbar-expand-lg navbar-dark site-navbar">
                <div className="container">
                <Link className="navbar-brand site-brand" to="/">
                    <img
                    src="/yarn(1).png"
                    height="80"
                    className="site-brand__img"
                    alt="Mascot"
                    loading="eager"
                    onError={(e) => {
                        e.currentTarget.style.display = 'none'
                    }}
                    />
                    <span className="site-brand__title">
                    Capitana Uncina
                    </span>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNav"
                    aria-controls="mainNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="mainNav">
                    <ul className="navbar-nav ms-lg-auto">
                    <li className="nav-item">
                        <NavLink className={navLinkClassName} to="/projects">
                        Progetti
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={navLinkClassName} to="/yarns">
                        Filati
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={navLinkClassName} to="/crafts">
                        Tecniche
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={navLinkClassName} to="/categories">
                        Fibre
                        </NavLink>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </>
    )
}