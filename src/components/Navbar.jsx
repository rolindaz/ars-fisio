import { Link } from "react-router-dom"
import { useState } from "react"
import SocialLinks from "./SocialLinks"
import BookingButton from "./BookingButton"
import SiteBar from "./SiteBar"
import SmoothImage from "./SmoothImage"

const navLinks = [
    { label: "Home", to: "/" },
    { label: "Servizi", to: "/servizi" },
    { label: "Chi Siamo", to: "/chi-siamo" },
    { label: "Lavora con noi", to: "/lavora-con-noi" },
    { label: "Contatti", to: "/contatti" },
];

export default function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 bg-white shadow-md z-50" style={{height: "var(--header-height)"}}>
            <div className="max-w-6xl h-full mx-auto px-3 py-0.5 md:py-1">
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

                <div className="flex h-full items-center justify-between gap-3 md:hidden">
                    <Link to="/" className="inline-flex items-center shrink-0">
                        <SmoothImage
                        src="/logo-fisio.svg"
                        alt="Logo Ars Fisio"
                        wrapperClassName="inline-flex items-center shrink-0"
                        className="h-[4rem] w-auto"
                        loading="eager"
                        decoding="sync"
                        fetchPriority="high"
                        showPlaceholder={false}
                        onError={(e) => {
                            e.currentTarget.style.display = 'none'
                        }}
                        />
                    </Link>

                    <BookingButton className="mobile-nav-booking justify-center" />

                    <button
                        className="inline-flex h-14 w-14 items-center justify-center"
                        onClick={()=>setOpen(!open)}
                        aria-label={open ? "Chiudi menu" : "Apri menu"}
                        aria-expanded={open}
                    >
                        <span className="relative inline-flex h-10 w-10 items-center justify-center">
                            <img
                                src="/hamburger.png"
                                alt=""
                                className={`absolute h-10 w-10 object-contain transition-all duration-300 ease-out ${open ? "scale-75 opacity-0 rotate-90" : "scale-100 opacity-100 rotate-0"}`}
                                aria-hidden="true"
                            />
                            <img
                                src="/close.png"
                                alt=""
                                className={`absolute h-6 w-6 object-contain transition-all duration-300 ease-out ${open ? "scale-100 opacity-100 rotate-0" : "scale-75 opacity-0 -rotate-90"}`}
                                aria-hidden="true"
                            />
                        </span>
                    </button>
                </div>
            </div>

            {/* Burger Menu */}
            <div
                className={`md:hidden overflow-hidden bg-white px-4 transition-all duration-300 ease-out ${open ? "max-h-[28rem] border-t border-[rgba(44,103,160,0.12)] pb-4 opacity-100 shadow-[0_18px_32px_-24px_rgba(18,50,80,0.38)]" : "max-h-0 pb-0 opacity-0"}`}
                aria-hidden={!open}
            >
                <div className={`flex flex-col gap-5 pt-4 transition-all duration-300 ease-out ${open ? "translate-y-0" : "-translate-y-2"}`}>
                    {navLinks.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            onClick={()=>setOpen(false)}
                            className={`text-center font-heading text-[1.2rem] leading-7 uppercase text-[var(--logo-main)] transition-all duration-300 ease-out ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <div className={`flex items-center justify-center border-t border-slate-200 pt-3 transition-all duration-300 ease-out ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}>
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </header>
    )
}