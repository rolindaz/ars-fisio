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

        <div aria-hidden="true" className="shrink-0" style={{ height: "var(--header-height)" }} />

        <div className="site-layout-shell flex min-h-0 flex-1 flex-col">
          <main id="main-content" className="flex-1" tabIndex={-1}>
            <Outlet />
          </main>

          <Footer />
        </div>

        <CallButton />
      </div>
    </>
  );
};

export default Layout;