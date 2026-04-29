import { useEffect, useState } from "react";
import BookingButton from "./BookingButton";

function CallButton() {
    const [isVisible, setIsVisible] = useState(false);
    const [footerOffset, setFooterOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            setIsVisible(window.scrollY > 96);

            const footer = document.querySelector(".site-footer");
            if (!footer) {
                setFooterOffset(0);
                return;
            }

            const footerRect = footer.getBoundingClientRect();
            const baseGap = window.innerWidth < 768 ? 14 : 16;
            const overlap = Math.max(0, window.innerHeight - footerRect.top + baseGap);

            setFooterOffset(overlap);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    return (
        <div
            className={`booking-overlay ${isVisible ? "booking-overlay--visible" : ""}`}
            style={{ bottom: `${(window.innerWidth < 768 ? 14 : 16) + footerOffset}px` }}
        >
            <BookingButton compact className="shadow-[0_18px_35px_-20px_rgba(18,50,80,0.9)]" />
        </div>
    );
}

export default CallButton;