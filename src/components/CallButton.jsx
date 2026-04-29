import { useEffect, useState } from "react";
import BookingButton from "./BookingButton";

function CallButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setIsVisible(window.scrollY > 96);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <div className={`booking-overlay ${isVisible ? "booking-overlay--visible" : ""}`}>
            <BookingButton compact className="shadow-[0_18px_35px_-20px_rgba(18,50,80,0.9)]" />
        </div>
    );
}

export default CallButton;