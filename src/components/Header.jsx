import { useState, useEffect, useRef } from "react";
import { BOOKING_LINK } from "../lib/constants";

function Dropdown({ label, items }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
        document.addEventListener("mousedown", h);
        return () => document.removeEventListener("mousedown", h);
    }, []);
    return (
        <div ref={ref} style={{ position: "relative" }}>
            <button onClick={() => setOpen(o => !o)} style={{
                background: "none", border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", gap: "0.3rem",
                color: open ? "var(--cyan)" : "var(--muted-color)",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase",
                padding: "0.25rem 0.75rem", transition: "color 0.2s",
            }}
                onMouseEnter={e => { if (!open) e.currentTarget.style.color = "var(--text-color)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = open ? "var(--cyan)" : "var(--muted-color)"; }}
            >
                {label}
                <svg width="8" height="8" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}>
                    <polyline points="1 3 5 7 9 3" />
                </svg>
            </button>
            <div style={{
                position: "absolute", top: "calc(100% + 0.85rem)", left: "0",
                background: "var(--card-color)", border: "1px solid var(--border-color)",
                borderTop: "2px solid var(--cyan)", borderRadius: "0 0 2px 2px",
                minWidth: "160px", overflow: "hidden",
                opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none",
                transform: open ? "translateY(0)" : "translateY(-6px)",
                transition: "opacity 0.18s ease, transform 0.18s ease", zIndex: 200,
            }}>
                {items.map((item, i) => (
                    <a key={i} href={item.href || "#"} onClick={() => setOpen(false)} style={{
                        display: "block", padding: "0.65rem 1rem",
                        borderBottom: i < items.length - 1 ? "1px solid var(--border-color)" : "none",
                        textDecoration: "none", color: "var(--muted-color)",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.7rem", letterSpacing: "0.08em",
                        transition: "color 0.15s, background 0.15s",
                    }}
                        onMouseEnter={e => { e.currentTarget.style.color = "var(--cyan)"; e.currentTarget.style.background = "rgba(0,188,212,0.05)"; }}
                        onMouseLeave={e => { e.currentTarget.style.color = "var(--muted-color)"; e.currentTarget.style.background = "transparent"; }}
                    >{item.label}</a>
                ))}
            </div>
        </div>
    );
}

function ServicesDropdown({ isMobile = false }) {
    const [open, setOpen] = useState(false);
    const [flyout, setFlyout] = useState(null);
    const ref = useRef(null);

    useEffect(() => {
        const h = (e) => { if (ref.current && !ref.current.contains(e.target)) { setOpen(false); setFlyout(null); } };
        document.addEventListener("mousedown", h);
        return () => document.removeEventListener("mousedown", h);
    }, []);

    const interiorItems = [
        { label: "General Interior", href: "/services/interior/general" },
        { label: "Stain Removal", href: "/services/interior/stain" },
        { label: "Odor Removal", href: "/services/interior/odor", soon: true },
        { label: "Maintenance Detail", href: "/services/interior/maintenance", soon: true },
    ];

    const exteriorItems = [
        { label: "General Exterior", href: "/services/exterior/general" },
        { label: "Decontamination Wash", href: "/services/exterior/decon" },
        { label: "Headlight Restoration", href: "/services/exterior/headlights", soon: true },
        { label: "Paint Correction", href: "/services/exterior/paint", soon: true },
        { label: "Ceramic Coating", href: "/services/exterior/ceramic", soon: true },
    ];

    const FlyoutRow = ({ label, href, id, items }) => {
        const active = flyout === id;
        return (
            <div style={{ position: "relative" }}
                onMouseEnter={() => setFlyout(id)}
                onMouseLeave={() => setFlyout(null)}
            >
                <a href={href} onClick={() => setOpen(false)} style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "0.65rem 1rem", borderBottom: "1px solid var(--border-color)",
                    textDecoration: "none",
                    color: active ? "var(--cyan)" : "var(--muted-color)",
                    background: active ? "rgba(0,188,212,0.05)" : "transparent",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.7rem", letterSpacing: "0.06em",
                    transition: "color 0.15s, background 0.15s",
                }}>
                    {label}
                    <svg width="7" height="7" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                        style={{ opacity: 0.5 }}>
                        <polyline points="3 1 7 5 3 9" />
                    </svg>
                </a>
                <div style={{
                    position: "absolute", top: "-1px", left: "100%",
                    background: "var(--card-color)", border: "1px solid var(--border-color)",
                    borderTop: "2px solid var(--cyan)", borderRadius: "0 0 2px 2px",
                    width: "200px",
                    opacity: active ? 1 : 0, pointerEvents: active ? "auto" : "none",
                    transform: active ? "translateX(0)" : "translateX(-4px)",
                    transition: "opacity 0.15s ease, transform 0.15s ease", zIndex: 201,
                }}>
                    {items.map((item, i) => item.soon ? (
                        <div key={i} style={{
                            display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.6rem 1rem",
                            borderBottom: i < items.length - 1 ? "1px solid var(--border-color)" : "none",
                            color: "var(--muted-color)", opacity: 0.45,
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: "0.68rem", letterSpacing: "0.05em", cursor: "not-allowed"
                        }}>
                            {item.label}
                            <span style={{ fontSize: "0.45rem", color: "var(--gold)", border: "1px solid var(--border-color)", padding: "0.1rem 0.3rem", borderRadius: "2px" }}>SOON</span>
                        </div>
                    ) : (
                        <a key={i} href={item.href} onClick={() => { setOpen(false); setFlyout(null); }} style={{
                            display: "block", padding: "0.6rem 1rem",
                            borderBottom: i < items.length - 1 ? "1px solid var(--border-color)" : "none",
                            textDecoration: "none", color: "var(--muted-color)",
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: "0.68rem", letterSpacing: "0.05em",
                            transition: "color 0.15s, background 0.15s",
                        }}
                            onMouseEnter={e => { e.currentTarget.style.color = "var(--cyan)"; e.currentTarget.style.background = "rgba(0,188,212,0.05)"; }}
                            onMouseLeave={e => { e.currentTarget.style.color = "var(--muted-color)"; e.currentTarget.style.background = "transparent"; }}
                        >{item.label}</a>
                    ))}
                </div>
            </div>
        );
    };

    const PlainRow = ({ label, href }) => (
        <a href={href} onClick={() => setOpen(false)} style={{
            display: "block", padding: "0.65rem 1rem",
            textDecoration: "none", color: "var(--muted-color)",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem", letterSpacing: "0.06em",
            transition: "color 0.15s, background 0.15s",
        }}
            onMouseEnter={e => { e.currentTarget.style.color = "var(--cyan)"; e.currentTarget.style.background = "rgba(0,188,212,0.05)"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "var(--muted-color)"; e.currentTarget.style.background = "transparent"; }}
        >{label}</a>
    );

    return (
        <div ref={ref} style={{ position: "relative" }}>
            <button onClick={() => setOpen(o => !o)} style={{
                background: "none", border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", gap: "0.3rem",
                color: open ? "var(--cyan)" : "var(--muted-color)",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase",
                padding: "0.25rem 0.75rem", transition: "color 0.2s",
            }}
                onMouseEnter={e => { if (!open) e.currentTarget.style.color = "var(--text-color)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = open ? "var(--cyan)" : "var(--muted-color)"; }}
            >
                Services
                <svg width="8" height="8" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}>
                    <polyline points="1 3 5 7 9 3" />
                </svg>
            </button>

            <div style={{
                position: "absolute", top: "calc(100% + 0.85rem)", left: "0",
                background: "var(--card-color)", border: "1px solid var(--border-color)",
                borderTop: "2px solid var(--cyan)", borderRadius: "0 0 2px 2px",
                width: "185px",
                opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none",
                transform: open ? "translateY(0)" : "translateY(-6px)",
                transition: "opacity 0.18s ease, transform 0.18s ease", zIndex: 200,
            }}>
                <a href="/services" onClick={() => setOpen(false)} style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "0.7rem 1rem", borderBottom: "1px solid var(--border-color)",
                    textDecoration: "none", color: "var(--text-color)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.7rem", letterSpacing: "0.08em", fontWeight: 700,
                    transition: "color 0.15s, background 0.15s",
                }}
                    onMouseEnter={e => { e.currentTarget.style.color = "var(--cyan)"; e.currentTarget.style.background = "rgba(0,188,212,0.05)"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "var(--text-color)"; e.currentTarget.style.background = "transparent"; }}
                >
                    Overview
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                </a>
                <FlyoutRow label="Interior" href="/services/interior/general" id="interior" items={interiorItems} />
                <FlyoutRow label="Exterior" href="/services/exterior/general" id="exterior" items={exteriorItems} />
            </div>
        </div>
    );
}

function NavLink({ label, href = "#" }) {
    return (
        <a href={href} style={{
            color: "var(--muted-color)", textDecoration: "none",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase",
            padding: "0.25rem 0.75rem", transition: "color 0.2s",
        }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--cyan)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--muted-color)"}
        >{label}</a>
    );
}

// ── MOBILE DROPDOWNS ──

function MobileDropdown({ label, items, setIsMobileMenuOpen }) {
    const [open, setOpen] = useState(false);
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
            <button onClick={() => setOpen(o => !o)} style={{
                background: "none", border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", gap: "0.5rem",
                color: open ? "var(--cyan)" : "var(--text-color)",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "2rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: "900",
                padding: "0.5rem", transition: "color 0.2s",
            }}>
                {label}
                <svg width="12" height="12" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}>
                    <polyline points="1 3 5 7 9 3" />
                </svg>
            </button>
            <div style={{
                display: "flex", flexDirection: "column", alignItems: "center",
                overflow: "hidden",
                maxHeight: open ? "500px" : "0",
                opacity: open ? 1 : 0,
                transition: "max-height 0.3s ease, opacity 0.3s ease",
            }}>
                {items.map((item, i) => (
                    <a key={i} href={item.href || "#"} onClick={() => { setOpen(false); setIsMobileMenuOpen(false); }} style={{
                        display: "block", padding: "0.5rem 1rem",
                        textDecoration: "none", color: "var(--muted-color)",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase",
                        transition: "color 0.15s",
                    }}
                    >{item.label}</a>
                ))}
            </div>
        </div>
    );
}

function MobileServicesDropdown({ setIsMobileMenuOpen }) {
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (section) => setActiveSection(activeSection === section ? null : section);

    const interiorItems = [
        { label: "General Interior", href: "/services/interior/general" },
        { label: "Stain Removal", href: "/services/interior/stain" },
        { label: "Odor Removal", href: "/services/interior/odor", soon: true },
        { label: "Maintenance Detail", href: "/services/interior/maintenance", soon: true },
    ];

    const exteriorItems = [
        { label: "General Exterior", href: "/services/exterior/general" },
        { label: "Decontamination Wash", href: "/services/exterior/decon" },
        { label: "Headlight Restoration", href: "/services/exterior/headlights", soon: true },
        { label: "Paint Correction", href: "/services/exterior/paint", soon: true },
        { label: "Ceramic Coating", href: "/services/exterior/ceramic", soon: true },
    ];

    const MobileSubMenu = ({ label, items, id, href }) => {
        const isOpen = activeSection === id;
        return (
            <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <a href={href} onClick={() => { setOpen(false); setIsMobileMenuOpen(false); }} style={{
                        textDecoration: "none",
                        color: isOpen ? "var(--cyan)" : "var(--muted-color)",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase",
                        padding: "0.5rem 0", transition: "color 0.2s",
                    }}>
                        {label}
                    </a>
                    <button onClick={() => toggleSection(id)} style={{
                        background: "none", border: "none", cursor: "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: isOpen ? "var(--cyan)" : "var(--muted-color)",
                        padding: "0.5rem", transition: "color 0.2s",
                    }}>
                        <svg width="8" height="8" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}>
                            <polyline points="1 3 5 7 9 3" />
                        </svg>
                    </button>
                </div>
                <div style={{
                    display: "flex", flexDirection: "column", alignItems: "center",
                    overflow: "hidden",
                    maxHeight: isOpen ? "300px" : "0",
                    opacity: isOpen ? 1 : 0,
                    transition: "max-height 0.3s ease, opacity 0.3s ease",
                }}>
                    {items.map((item, i) => item.soon ? (
                        <div key={i} style={{
                            display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.4rem 1rem", width: "100%", maxWidth: "160px",
                            color: "var(--muted-color)", opacity: 0.45,
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: "0.75rem", letterSpacing: "0.05em", cursor: "not-allowed"
                        }}>
                            {item.label}
                            <span style={{ fontSize: "0.45rem", color: "var(--gold)", border: "1px solid var(--border-color)", padding: "0.1rem 0.3rem", borderRadius: "2px" }}>SOON</span>
                        </div>
                    ) : (
                        <a key={i} href={item.href} onClick={() => { setOpen(false); setIsMobileMenuOpen(false); }} style={{
                            display: "block", padding: "0.4rem 1rem",
                            textDecoration: "none", color: "var(--muted-color)",
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: "0.75rem", letterSpacing: "0.05em",
                            opacity: 0.8,
                        }}
                        >{item.label}</a>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
            <button onClick={() => setOpen(o => !o)} style={{
                background: "none", border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", gap: "0.5rem",
                color: open ? "var(--cyan)" : "var(--text-color)",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "2rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: "900",
                padding: "0.5rem", transition: "color 0.2s",
            }}>
                Services
                <svg width="12" height="12" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}>
                    <polyline points="1 3 5 7 9 3" />
                </svg>
            </button>
            <div style={{
                display: "flex", flexDirection: "column", alignItems: "center",
                overflow: "hidden",
                maxHeight: open ? "800px" : "0",
                opacity: open ? 1 : 0,
                transition: "max-height 0.3s ease, opacity 0.3s ease",
                gap: "0.2rem",
                paddingTop: open ? "0.5rem" : "0"
            }}>
                <a href="/services" onClick={() => { setOpen(false); setIsMobileMenuOpen(false); }} style={{
                    display: "block", padding: "0.5rem 1rem",
                    textDecoration: "none", color: "var(--text-color)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700,
                }}>
                    Overview
                </a>
                <MobileSubMenu label="Interior" id="interior" href="/services/interior/general" items={interiorItems} />
                <MobileSubMenu label="Exterior" id="exterior" href="/services/exterior/general" items={exteriorItems} />
            </div>
        </div>
    );
}

export function Header({ theme, toggleTheme, isNavVisible, isMobileMenuOpen, setIsMobileMenuOpen, t }) {
    return (
        <>
            {/* ── MOBILE MENU OVERLAY ── */}
            <div style={{
                position: "fixed", inset: 0, zIndex: 99,
                background: "var(--bg-color)", display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "flex-start",
                paddingTop: "80px", paddingBottom: "2rem",
                overflowY: "auto",
                opacity: isMobileMenuOpen ? 1 : 0,
                pointerEvents: isMobileMenuOpen ? "auto" : "none",
                transition: "opacity 0.3s ease",
                backdropFilter: "blur(10px)",
            }}>
                <div style={{
                    display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem",
                    width: "100%", padding: "1rem 0"
                }}>
                    <MobileServicesDropdown setIsMobileMenuOpen={setIsMobileMenuOpen} />

                    <MobileDropdown label="Company" setIsMobileMenuOpen={setIsMobileMenuOpen} items={[
                        { label: "Reviews", href: "/#reviews" },
                        { label: "About", href: "/#about" },
                    ]} />

                    <a href="/#work"
                        style={{ color: "var(--text-color)", textDecoration: "none", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "2rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: "900", padding: "0.5rem" }}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >Gallery</a>
                </div>

                <a href={BOOKING_LINK} style={{
                    background: "var(--cyan)", color: "#fff", padding: "1rem 3rem", borderRadius: "2px",
                    fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "0.1em", textTransform: "uppercase",
                    textDecoration: "none", marginTop: "2rem"
                }} onClick={() => setIsMobileMenuOpen(false)}>Book Now</a>
            </div>

            {/* ── NAV ── */}
            <nav className="nav-container" style={{
                position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
                display: "flex", alignItems: "center",
                padding: "0 2rem", height: "58px",
                background: t.navBg.replace("bg-", ""),
                backdropFilter: "blur(14px)",
                borderBottom: "1px solid var(--border-color)",
                transform: isNavVisible ? "translateY(0)" : "translateY(-100%)",
                transition: "background 0.28s ease, border-color 0.28s ease, transform 0.3s ease",
                backgroundColor: theme === "dark" ? "rgba(10,10,12,0.9)" : "rgba(244,244,240,0.92)",
            }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <button className="hide-on-desktop" style={{ background: "transparent", border: "none", cursor: "pointer", color: "var(--text-color)", padding: 0, display: "flex", alignItems: "center", justifyContent: "center", marginRight: "1rem" }} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle mobile menu">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {isMobileMenuOpen ? (
                                <>
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </>
                            ) : (
                                <>
                                    <line x1="3" y1="12" x2="21" y2="12"></line>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <line x1="3" y1="18" x2="21" y2="18"></line>
                                </>
                            )}
                        </svg>
                    </button>
                    {/* Logo */}
                    <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
                        <div style={{
                            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900,
                            fontSize: "1.35rem", letterSpacing: "0.08em", color: "var(--text-color)",
                            flexShrink: 0
                        }}>
                            Null<span style={{ color: "var(--cyan)" }}>Detailing</span>
                        </div>
                    </a>
                </div>

                <div className="hide-on-mobile" style={{
                    width: "1px", height: "24px",
                    backgroundColor: "var(--border-color)",
                    margin: "0 0.5rem 0 2rem"
                }}></div>

                {/* Nav links */}
                <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: "0.1rem", flex: 1 }}>
                    <ServicesDropdown />
                    <Dropdown label="Company" items={[
                        { label: "Reviews", href: "/#reviews" },
                        { label: "About", href: "/#about" },
                    ]} />
                    <NavLink label="Gallery" href="/#work" />
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "1.2rem", marginLeft: "auto" }}>
                    {/* Theme toggle */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <span style={{ fontSize: "0.58rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted-color)" }}>
                            {theme === "dark" ? "Dark" : "Light"}
                        </span>
                        <button onClick={toggleTheme} aria-label="Toggle theme"
                            style={{
                                background: theme === "dark" ? "#1e1e28" : "#ddddd5",
                                border: "1px solid var(--border-color)",
                                borderRadius: "20px", width: "48px", height: "25px",
                                cursor: "pointer", position: "relative", transition: "all 0.28s ease", flexShrink: 0,
                            }}>
                            <span style={{
                                position: "absolute", top: "3px", left: "3px",
                                width: "17px", height: "17px", borderRadius: "50%",
                                background: "var(--cyan)",
                                transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
                                transform: theme === "light" ? "translateX(23px)" : "translateX(0)",
                                boxShadow: "0 0 8px rgba(0,188,212,0.4)",
                                display: "block",
                            }} />
                        </button>
                    </div>

                    <a href={BOOKING_LINK} className="hide-on-mobile" style={{
                        background: "var(--cyan)", color: "#fff",
                        padding: "0.48rem 1.2rem", borderRadius: "2px",
                        fontWeight: 700, fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase",
                        textDecoration: "none", transition: "opacity 0.2s",
                    }}
                        onMouseEnter={e => e.target.style.opacity = "0.85"}
                        onMouseLeave={e => e.target.style.opacity = "1"}
                    >Book Now</a>
                </div>
            </nav>
        </>
    );
}
