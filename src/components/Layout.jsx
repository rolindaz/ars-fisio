// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CallButton from "./CallButton";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  return (
    <>
    <ScrollToTop/>
    <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1">
            <Outlet />
        </main>

        <Footer />
        <CallButton />
    </div>
    </>
  );
};

export default Layout;