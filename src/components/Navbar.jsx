import { Link } from "react-router-dom"
import { useState } from "react"

export default function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 bg-white shadow-md z-50">
            <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/">
                    <img
                    src="/logo-fisio.svg"
                    /* height="80" */
                    alt="Logo Ars Fisio"
                    loading="eager"
                    onError={(e) => {
                        e.currentTarget.style.display = 'none'
                    }}
                    />
                </Link>

                {/* Navbar */}
                <nav className="hidden md:flex gap-6 items-center">
                    <Link to="/servizi">
                        Servizi
                    </Link>
                    <Link to="/staff">
                        Staff
                    </Link>
                    <Link to="/lavora-con-noi">
                        Lavora con noi
                    </Link>
                    <Link to="/contatti">
                        Contatti
                    </Link>
                </nav>

                {/* Burger Menu Icon */}
                <button className="md:hidden text-2xl" onClick={()=>setOpen(!open)}>
                    {open ? "x" : "☰"}
                </button>
            </div>

            {/* Burger Menu */}
            {open && (
                <div className="md:hidden bg-white px-4 pb-4 flex flex-col gap-4 transition-all duration-300">
                    <Link to="/servizi" onClick={()=>setOpen(false)}>
                        Servizi
                    </Link>
                    <Link to="/staff" onClick={()=>setOpen(false)}>
                        Staff
                    </Link>
                    <Link to="/lavora-con-noi" onClick={()=>setOpen(false)}>
                        Lavora con noi
                    </Link>
                    <Link to="/contatti" onClick={()=>setOpen(false)}>
                        Contatti
                    </Link>
                </div>
            )}
        </header>
    )
}