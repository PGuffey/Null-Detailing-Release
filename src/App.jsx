import { useState, useEffect, useRef } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { NotFound } from "./pages/NotFound";
import { BookingView } from "./views/BookingView";
import { InteriorGeneral } from "./pages/InteriorGeneral";
import { InteriorStain } from "./pages/InteriorStain";
import { ExteriorGeneral } from "./pages/ExteriorGeneral";
import { ExteriorDecon } from "./pages/ExteriorDecon";
import { EngineBay } from "./pages/EngineBay";

// ── THEME CONTEXT ──────────────────────────────────────────────
const themes = {
  dark: {
    bg: "bg-[#0a0a0c]",
    bgAlt: "bg-[#111115]",
    card: "bg-[#16161c]",
    border: "border-[#2a2a35]",
    text: "text-[#f0f0f5]",
    muted: "text-[#7a7a90]",
    navBg: "bg-[#0a0a0c]/90",
    codeBg: "bg-[#0a0a0c]",
    toggleBg: "bg-[#1e1e28]",
    codeComment: "text-[#5a9a70]",
    codeStr: "text-[#e07070]",
    cyan: "#00bcd4",
    gold: "#c8941a",
  },
  light: {
    bg: "bg-[#f4f4f0]",
    bgAlt: "bg-[#eaeae4]",
    card: "bg-white",
    border: "border-[#d0d0c4]",
    text: "text-[#1a1a22]",
    muted: "text-[#6b6b7e]",
    navBg: "bg-[#f4f4f0]/92",
    codeBg: "bg-[#e8e8e0]",
    toggleBg: "bg-[#ddddd5]",
    codeComment: "text-[#3a7a5a]",
    codeStr: "text-[#c0392b]",
    cyan: "#0097a7",
    gold: "#a07010",
  },
};

// ── MAIN APP ───────────────────────────────────────────────────
export default function App() {
  const [theme, setTheme] = useState("light");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [currentView, setCurrentView] = useState("home");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleLocation = () => {
      const path = window.location.pathname.replace(/\/$/, "") || "/";
      if (path === "/services") {
        setCurrentView("services");
      } else if (path === "/services/interior/general") {
        setCurrentView("interior_general");
      } else if (path === "/services/interior/stain") {
        setCurrentView("interior_stain");
      } else if (path === "/services/exterior/general") {
        setCurrentView("exterior_general");
      } else if (path === "/services/exterior/decon") {
        setCurrentView("exterior_decon");
      } else if (path === "/services/exterior/engine") {
        setCurrentView("exterior_engine");
      } else if (path !== "/" && path !== "/index.html") {
        setCurrentView("404");
      } else if (window.location.hash === "#booking") {
        setCurrentView("booking");
      } else {
        setCurrentView("home");
      }
    };
    window.addEventListener("hashchange", handleLocation);
    window.addEventListener("popstate", handleLocation);

    // Original links in header used hash routing but new link uses /services.
    // Intercept link clicks to manually push state and trigger our router if needed.
    const handleClick = (e) => {
      const link = e.target.closest('a');
      if (link && link.href) {
        const url = new URL(link.href);
        if (url.origin === window.location.origin) {
          if (url.pathname !== window.location.pathname) {
            e.preventDefault();
            window.history.pushState({}, '', url.pathname + url.search + url.hash);
            handleLocation();
            window.scrollTo(0, 0);
          }
        }
      }
    };
    document.addEventListener("click", handleClick);

    handleLocation();
    return () => {
      window.removeEventListener("hashchange", handleLocation);
      window.removeEventListener("popstate", handleLocation);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const t = themes[theme];

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // hide nav if scrolling down and passed 100px
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; }
  }, [isMobileMenuOpen]);

  const toggleTheme = () => setTheme(p => p === "dark" ? "light" : "dark");

  // CSS vars injected on div
  const cssVars = {
    "--cyan": t.cyan,
    "--gold": t.gold,
    "--bg-color": theme === "dark" ? "#0a0a0c" : "#f4f4f0",
    "--bg-alt-color": theme === "dark" ? "#111115" : "#eaeae4",
    "--card-color": theme === "dark" ? "#16161c" : "#ffffff",
    "--border-color": theme === "dark" ? "#2a2a35" : "#d0d0c4",
    "--text-color": theme === "dark" ? "#f0f0f5" : "#1a1a22",
    "--muted-color": theme === "dark" ? "#7a7a90" : "#6b6b7e",
  };

  return (
    <div style={{ ...cssVars, background: "var(--bg-color)", color: "var(--text-color)", fontFamily: "'JetBrains Mono', monospace", minHeight: "100vh", overflowX: "hidden", transition: "background 0.28s ease, color 0.28s ease" }}>
      {/* Dynamic styles */}
      <style>{`
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; }
        ::selection { background: var(--cyan); color: #fff; }
        .cursor-blink { display: inline-block; width: 7px; height: 0.9em; background: var(--cyan); vertical-align: middle; animation: blink 1s step-end infinite; }
        @keyframes blink { 50% { opacity: 0; } }
        .grid-bg { background-image: linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px); background-size: 60px 60px; opacity: 0.18; -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%); mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%); }
        .section-tag { font-size: 0.63rem; letter-spacing: 0.25em; text-transform: uppercase; color: var(--cyan); display: block; margin-bottom: 0.7rem; }
        .section-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-size: clamp(1.9rem, 3.8vw, 3.3rem); text-transform: uppercase; letter-spacing: -0.01em; line-height: 1; color: var(--text-color); }
        .hide-on-desktop { display: none !important; }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-photos { padding-left: 0 !important; height: auto !important; margin-top: 1.5rem; display: flex !important; flex-direction: column !important; gap: 1rem !important; }
          .packages-grid-4 { grid-template-columns: 1fr !important; }
          .packages-grid-2 { grid-template-columns: 1fr !important; }
          .software-grid { grid-template-columns: 1fr !important; }
          .gallery-grid { grid-template-columns: 1fr !important; }
          .gallery-wide { grid-column: auto !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .software-top { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .stats-bar { flex-wrap: wrap; }
          .stats-bar > div { flex: 1 1 50%; border-bottom: 1px solid var(--border-color); }
          .nav-links { display: none !important; }
          .nav-container { padding: 1rem 1.5rem !important; }
          .hide-on-mobile { display: none !important; }
          .hide-on-desktop { display: flex !important; }
        }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        isNavVisible={isNavVisible}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        t={t}
      />

      {currentView === "services" && <Services theme={theme} />}
      {currentView === "booking" && <BookingView theme={theme} />}
      {currentView === "interior_general" && <InteriorGeneral />}
      {currentView === "interior_stain" && <InteriorStain />}
      {currentView === "exterior_general" && <ExteriorGeneral />}
      {currentView === "exterior_decon" && <ExteriorDecon />}
      {currentView === "exterior_engine" && <EngineBay theme={theme} />}
      {currentView === "404" && <NotFound />}
      {currentView === "home" && <Home theme={theme} />}

      <Footer />
    </div>
  );
}
