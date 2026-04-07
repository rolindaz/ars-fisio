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
                    src="/logo-small.png"
                    height="80"
                    alt="Logo"
                    loading="eager"
                    onError={(e) => {
                        e.currentTarget.style.display = 'none'
                    }}
                    />
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
                        <NavLink className={navLinkClassName} to="/servizi">
                        Servizi
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={navLinkClassName} to="/staff">
                        Staff
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={navLinkClassName} to="/lavora-con-noi">
                        Lavora con noi
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={navLinkClassName} to="/contatti">
                        Contatti
                        </NavLink>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </>
    )
}