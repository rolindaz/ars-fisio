// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CallButton from "./CallButton";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <a className="skip-link" href="#main-content">
        Salta al contenuto principale
      </a>
      <div className="flex min-h-screen flex-col">
        <Navbar />

        <main id="main-content" className="flex-1" tabIndex={-1}>
          <Outlet />
        </main>

        <Footer />
        <CallButton />
      </div>
    </>
  );
};

export default Layout;