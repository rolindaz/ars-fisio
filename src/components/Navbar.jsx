import { Link } from "react-router-dom"
import { useState } from "react"
import SocialLinks from "./SocialLinks"
import BookingButton from "./BookingButton"
import SiteBar from "./SiteBar"

const navLinks = [
    { label: "Servizi", to: "/servizi" },
    { label: "Chi Siamo", to: "/chi-siamo" },
    { label: "Lavora con noi", to: "/lavora-con-noi" },
    { label: "Contatti", to: "/contatti" },
];

export default function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 bg-white shadow-md z-50" style={{height: "var(--header-height)"}}>
            <div className="max-w-6xl h-full mx-auto px-3 py-1">
                <div className="hidden h-full md:flex md:items-center">
                    <SiteBar
                        links={navLinks}
                        wrapperClassName="w-full items-center gap-6"
                        logoClassName="h-[4.5rem] w-auto md:h-[5rem]"
                        navClassName="hidden md:flex flex-1 items-center justify-center gap-6 font-heading uppercase"
                        linkClassName="text-[var(--logo-main)] transition-colors hover:text-[var(--logo-dark)]"
                        actionsClassName="hidden md:flex items-center gap-4"
                    />
                </div>

                <div className="flex h-full items-center justify-between gap-4 md:hidden">
                    <Link to="/" className="inline-flex items-center shrink-0">
                        <img
                        src="/logo-fisio.svg"
                        alt="Logo Ars Fisio"
                        className="h-[4.5rem] w-auto"
                        loading="eager"
                        onError={(e) => {
                            e.currentTarget.style.display = 'none'
                        }}
                        />
                    </Link>

                    <button className="text-2xl" onClick={()=>setOpen(!open)}>
                        {open ? "x" : "☰"}
                    </button>
                </div>
            </div>

            {/* Burger Menu */}
            {open && (
                <div className="md:hidden bg-white px-4 pb-4 flex flex-col gap-4 transition-all duration-300">
                    <BookingButton className="justify-center self-start" />
                    {navLinks.map((item) => (
                        <Link key={item.to} to={item.to} onClick={()=>setOpen(false)}>
                            {item.label}
                        </Link>
                    ))}
                    <div className="flex items-center justify-between border-t border-slate-200 pt-3">
                        <SocialLinks />
                    </div>
                </div>
            )}
        </header>
    )
}