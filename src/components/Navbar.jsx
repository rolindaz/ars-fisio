import { Link } from "react-router-dom"
import { useState } from "react"
import SocialLinks from "./SocialLinks"
import BookingButton from "./BookingButton"

export default function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 bg-white shadow-md z-50" style={{height: "var(--header-height)"}}>
            <div className="max-w-6xl h-full mx-auto px-3 py-1 flex justify-between items-center gap-4">
                {/* Logo */}
                <Link to="/" className="h-full">
                    <img
                    src="/logo-fisio.svg"
                    alt="Logo Ars Fisio"
                    loading="eager"
                    onError={(e) => {
                        e.currentTarget.style.display = 'none'
                    }}
                    />
                </Link>

                {/* Navbar */}
                <nav className="hidden md:flex gap-6 items-center font-heading uppercase">
                    <Link to="/servizi">
                        Servizi
                    </Link>
                    <Link to="/chi-siamo">
                        Chi Siamo
                    </Link>
                    <Link to="/lavora-con-noi">
                        Lavora con noi
                    </Link>
                    <Link to="/contatti">
                        Contatti
                    </Link>
                </nav>

                <div className="hidden md:flex items-center gap-5">
                    <div className="flex items-center gap-3">
                        <SocialLinks />
                    </div>
                    <BookingButton />
                </div>

                {/* Burger Menu Icon */}
                <button className="md:hidden text-2xl" onClick={()=>setOpen(!open)}>
                    {open ? "x" : "☰"}
                </button>
            </div>

            {/* Burger Menu */}
            {open && (
                <div className="md:hidden bg-white px-4 pb-4 flex flex-col gap-4 transition-all duration-300">
                    <BookingButton className="justify-center self-start" />
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
                    <div className="flex items-center justify-between border-t border-slate-200 pt-3">
                        <SocialLinks />
                    </div>
                </div>
            )}
        </header>
    )
}