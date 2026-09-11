import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";

import imgInteriorBefore from "../assets/interior/Interior_pethair_Before.webp";
import imgInteriorAfter from "../assets/interior/Interior_pethair_After.webp";
import imgExteriorBefore from "../assets/exterior/Merc_Exterior_Detail_Before.webp";
import imgExteriorAfter from "../assets/exterior/Merc_Exterior_Detail_After.webp";

const themes = {
    dark: { bg: "#0a0a0c", bgAlt: "#111115", card: "#16161c", border: "#2a2a35", text: "#f0f0f5", muted: "#7a7a90", navBg: "rgba(10,10,12,0.95)", cyan: "#00bcd4" },
    light: { bg: "#f4f4f0", bgAlt: "#eaeae4", card: "#ffffff", border: "#d0d0c4", text: "#1a1a22", muted: "#6b6b7e", navBg: "rgba(244,244,240,0.96)", cyan: "#0097a7" },
};

function Reveal({ children, delay = 0, className = "" }) {
    const ref = useRef(null);
    const [v, setV] = useState(false);
    useEffect(() => {
        const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.04 });
        if (ref.current) o.observe(ref.current);
        return () => o.disconnect();
    }, []);
    return (
        <div ref={ref} className={className} style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(20px)", transition: `opacity 0.6s ${delay}ms ease, transform 0.6s ${delay}ms ease` }}>
            {children}
        </div>
    );
}

function ImgPlaceholder({ t, label, after = false, imgSrc, imgStyle = {} }) {
    if (imgSrc) {
        return (
            <div style={{
                width: "100%", aspectRatio: "4/3",
                border: `1px solid ${after ? t.cyan : t.border}`,
                borderRadius: "2px", position: "relative", overflow: "hidden"
            }}>
                <img src={imgSrc} alt={label} style={{ width: "100%", height: "100%", objectFit: "cover", ...imgStyle }} />
                {after && <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: t.cyan }} />}
                <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.45rem", letterSpacing: "0.12em", textTransform: "uppercase", color: after ? t.cyan : t.muted, border: `1px solid ${after ? t.cyan : t.border}`, padding: "0.2rem 0.5rem", borderRadius: "2px", background: t.bg, zIndex: 2 }}>
                    {after ? "After" : "Before"}
                </div>
            </div>
        );
    }
    return (
        <div style={{
            width: "100%", aspectRatio: "4/3",
            background: t.bgAlt, border: `1px solid ${after ? t.cyan : t.border}`,
            borderRadius: "2px", display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: "0.5rem",
            position: "relative", overflow: "hidden",
        }}>
            <div style={{ position: "absolute", inset: 0, opacity: 0.2, backgroundImage: `repeating-linear-gradient(45deg, ${t.border} 0, ${t.border} 1px, transparent 0, transparent 50%)`, backgroundSize: "18px 18px" }} />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={after ? t.cyan : t.border} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ position: "relative", zIndex: 1 }}>
                <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
            </svg>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.14em", color: after ? t.cyan : t.border, textTransform: "uppercase", position: "relative", zIndex: 1 }}>{label}</span>
            {after && <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: t.cyan }} />}
            {/* label badge */}
            <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.45rem", letterSpacing: "0.12em", textTransform: "uppercase", color: after ? t.cyan : t.muted, border: `1px solid ${after ? t.cyan : t.border}`, padding: "0.2rem 0.5rem", borderRadius: "2px", background: t.bg, zIndex: 2 }}>
                {after ? "After" : "Before"}
            </div>
        </div>
    );
}

function ServiceLink({ t, index, title, short, href, soon = false }) {
    const [hov, setHov] = useState(false);
    if (soon) {
        return (
            <div style={{
                display: "flex", alignItems: "baseline", gap: "1.1rem",
                padding: "0.9rem 0", borderBottom: `1px solid ${t.border}`,
                opacity: 0.45, cursor: "not-allowed"
            }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.55rem", color: t.border, flexShrink: 0, letterSpacing: "0.05em" }}>
                    {String(index).padStart(2, "0")}
                </span>
                <div style={{ flex: 1, display: "flex", alignItems: "center", flexWrap: "wrap", pr: "10px" }}>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "0.04em", color: t.text, lineHeight: 1, marginRight: "0.5rem", marginBottom: "0.22rem" }}>{title}</div>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.45rem", letterSpacing: "0.12em", textTransform: "uppercase", color: t.cyan, border: `1px solid ${t.border}`, padding: "0.15rem 0.4rem", borderRadius: "2px", marginBottom: "0.22rem" }}>Soon</span>
                    <div style={{ fontSize: "0.75rem", color: t.muted, lineHeight: 1.6, width: "100%" }}>{short}</div>
                </div>
            </div>
        );
    }
    return (
        <a href={href}
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                display: "flex", alignItems: "baseline", gap: "1.1rem",
                padding: "0.9rem 0", borderBottom: `1px solid ${t.border}`,
                textDecoration: "none",
                paddingLeft: hov ? "8px" : "0",
                transition: "padding 0.18s ease",
            }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.55rem", color: hov ? t.cyan : t.border, flexShrink: 0, letterSpacing: "0.05em", transition: "color 0.18s" }}>
                {String(index).padStart(2, "0")}
            </span>
            <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "0.04em", color: hov ? t.cyan : t.text, lineHeight: 1, transition: "color 0.18s" }}>{title}</div>
                <div style={{ fontSize: "0.75rem", color: t.muted, lineHeight: 1.6, marginTop: "0.22rem" }}>{short}</div>
            </div>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={hov ? t.cyan : t.border} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, transform: hov ? "translateX(3px)" : "translateX(0)", transition: "all 0.18s" }}>
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
        </a>
    );
}

function ServiceSection({ t, tag, title, intro, services, imgLabel, flip = false, imgBefore, imgAfter, imgBeforeStyle = {}, imgAfterStyle = {} }) {
    const topServices = services.slice(0, Math.ceil(services.length / 2));
    const bottomServices = services.slice(Math.ceil(services.length / 2));
    const startIndex = 1;
    const bottomStart = topServices.length + 1;

    return (
        <section style={{ padding: "6rem 0", borderTop: `1px solid ${t.border}` }} className="mobile-section-py">
            <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 4rem" }} className="services-nav-padding">

                {/* ── FULL WIDTH HEADER ── */}
                <Reveal>
                    <div style={{ marginBottom: "3.5rem" }} className="mobile-header-mb">
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.56rem", letterSpacing: "0.22em", textTransform: "uppercase", color: t.cyan, display: "block", marginBottom: "0.9rem" }}>{tag}</span>
                        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem, 4vw, 4rem)", textTransform: "uppercase", lineHeight: 0.93, color: t.text, margin: "0 0 1.1rem", letterSpacing: "-0.01em" }}>{title}</h2>
                        <p style={{ fontSize: "0.75rem", color: t.muted, lineHeight: 1.95, margin: 0, maxWidth: "600px" }}>{intro}</p>
                    </div>
                    {/* full-width rule */}
                    <div style={{ height: "1px", background: t.border, marginBottom: "3rem" }} className="mobile-hr-mb" />
                </Reveal>

                {/* ── UNIFIED GRID (Desktop: 2x2, Mobile: 1x4 flex column) ── */}
                <div className="services-grid" style={{ display: "grid", gridTemplateColumns: flip ? "0.8fr 1.2fr" : "1.2fr 0.8fr", gap: "5rem", alignItems: "center" }}>

                    {/* ROW 1 ITEMS */}
                    {!flip ? (
                        <>
                            <Reveal delay={60} className="mobile-order-3">
                                <div>
                                    {topServices.map((s, i) => (
                                        <ServiceLink key={i} t={t} index={startIndex + i} title={s.title} short={s.short} href={s.href} soon={s.soon} />
                                    ))}
                                </div>
                            </Reveal>
                            <Reveal delay={100} className="mobile-order-1">
                                <ImgPlaceholder t={t} label={`${imgLabel} before`} after={false} imgSrc={imgBefore} imgStyle={imgBeforeStyle} />
                            </Reveal>
                        </>
                    ) : (
                        <>
                            <Reveal delay={100} className="mobile-order-1">
                                <ImgPlaceholder t={t} label={`${imgLabel} before`} after={false} imgSrc={imgBefore} imgStyle={imgBeforeStyle} />
                            </Reveal>
                            <Reveal delay={60} className="mobile-order-3">
                                <div>
                                    {topServices.map((s, i) => (
                                        <ServiceLink key={i} t={t} index={startIndex + i} title={s.title} short={s.short} href={s.href} soon={s.soon} />
                                    ))}
                                </div>
                            </Reveal>
                        </>
                    )}

                    {/* ROW 2 ITEMS */}
                    {!flip ? (
                        <>
                            <Reveal delay={80} className="mobile-order-2">
                                <ImgPlaceholder t={t} label={`${imgLabel} after`} after={true} imgSrc={imgAfter} imgStyle={imgAfterStyle} />
                            </Reveal>
                            <Reveal delay={100} className="mobile-order-4">
                                <div style={{ paddingTop: "0.5rem" }}>
                                    {bottomServices.map((s, i) => (
                                        <ServiceLink key={i} t={t} index={bottomStart + i} title={s.title} short={s.short} href={s.href} soon={s.soon} />
                                    ))}
                                </div>
                            </Reveal>
                        </>
                    ) : (
                        <>
                            <Reveal delay={100} className="mobile-order-4">
                                <div style={{ paddingTop: "0.5rem" }}>
                                    {bottomServices.map((s, i) => (
                                        <ServiceLink key={i} t={t} index={bottomStart + i} title={s.title} short={s.short} href={s.href} soon={s.soon} />
                                    ))}
                                </div>
                            </Reveal>
                            <Reveal delay={80} className="mobile-order-2">
                                <ImgPlaceholder t={t} label={`${imgLabel} after`} after={true} imgSrc={imgAfter} imgStyle={imgAfterStyle} />
                            </Reveal>
                        </>
                    )}
                </div>

            </div>
        </section>
    );
}

export function Services({ theme = "light" }) {
    const t = themes[theme] || themes.light;

    const interior = [
        { title: "General Interior", short: "Vacuum, wipe-down, windows, air freshener — the full baseline clean.", href: "/services/interior/general" },
        { title: "Stain Removal", short: "Targeted extraction for carpets, mats, and upholstery.", href: "/services/interior/stain" },
        { title: "Odor Removal", short: "Eliminate odors at the source — smoke, pet, food, mildew.", href: "/services/interior/odor", soon: true },
        { title: "Maintenance Detail", short: "A lighter recurring service to keep things fresh between full details.", href: "/services/interior/maintenance", soon: true },
    ];

    const exterior = [
        { title: "General Exterior", short: "Hand wash, wheels, windows, tire dressing, and spray wax.", href: "/services/exterior/general" },
        { title: "Decontamination Wash", short: "Iron fallout and clay bar to strip bonded contaminants.", href: "/services/exterior/decon" },
        { title: "Engine Bay Cleaning", short: "Degreased, detailed, and dressed. Oil residue and road grime removed.", href: "/services/exterior/engine", soon: true },
        { title: "Headlight Restoration", short: "Sand, polish, and seal oxidized lenses back to clarity.", href: "/services/exterior/headlights", soon: true },
        { title: "Paint Correction", short: "Machine polish to remove swirls, scratches, and oxidation.", href: "/services/exterior/paint", soon: true },
        { title: "Ceramic Coating", short: "Long-term hydrophobic protection bonded directly to your paint.", href: "/services/exterior/ceramic", soon: true },
    ];

    const sciencePoints = [
        { label: "pH-Balanced Chemistry", body: "Every product is selected for the correct pH window — alkaline degreasers for organic soils, acidic fallout removers for ferrous contamination. The wrong pH damages surfaces. The right one dissolves what shouldn't be there." },
        { label: "Lubrication & Abrasion Control", body: "Paint correction isn't guesswork. Compound cut, polish grit, pad density, and machine speed are dialed in together. Too aggressive and you burn through clear coat. Too light and you're just moving product around." },
        { label: "Surface Bonding", body: "Ceramic coatings form a covalent bond with your clear coat at the molecular level — not a wax sitting on top. Proper prep (decon wash, IPA wipedown) determines whether that bond lasts 2 years or 5." },
    ];

    return (
        <>
            <Helmet>
                <title>Services | Null Detailing</title>
                <meta name="description" content="Interior and exterior mobile detailing packages, ceramic coatings, and paint correction in St. Louis and St. Charles counties." />
            </Helmet>

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&display=swap');
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; display: flex !important; flex-direction: column !important; }
          .services-nav-padding { padding: 0 1.5rem !important; }
          .science-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .order-mobile-2 { order: 2; width: 100%; }
          .order-mobile-1 { order: 1; width: 100%; }
          .mobile-order-1 { order: 1; width: 100%; }
          .mobile-order-2 { order: 2; width: 100%; }
          .mobile-order-3 { order: 3; width: 100%; margin-top: -0.5rem; }
          .mobile-order-4 { order: 4; width: 100%; }
          .mobile-section-py { padding: 4rem 0 !important; }
          .mobile-header-mb { margin-bottom: 2rem !important; }
          .mobile-hr-mb { margin-bottom: 2rem !important; }
          .hero-padding { padding: 3rem 1.5rem !important; }
        }
      `}</style>

            <div style={{ background: t.bg, color: t.text, transition: "background 0.28s ease, color 0.28s ease", minHeight: "100vh" }} className="pt-[100px] lg:pt-[120px]">

                {/* ── HERO ── */}
                <section style={{ padding: "1rem 4rem 4.5rem", maxWidth: "1160px", margin: "0 auto" }} className="hero-padding">
                    <Reveal>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.2rem" }}>
                            <a href="/" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", color: t.muted, textDecoration: "none" }}>Home</a>
                            <span style={{ color: t.border }}>/</span>
                            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", color: t.cyan }}>Services</span>
                        </div>
                    </Reveal>
                    <Reveal delay={50}>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.22em", textTransform: "uppercase", color: t.cyan, display: "block", marginBottom: "0.9rem" }}>Our Services</span>
                        <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(3rem, 7vw, 6rem)", textTransform: "uppercase", lineHeight: 0.92, letterSpacing: "-0.02em", color: t.text, margin: "0 0 0.4rem" }}>
                            Mobile detailing,
                        </h1>
                        <h1 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 0.92, color: t.cyan, margin: "0 0 1.75rem", textTransform: "none" }}>
                            done right.
                        </h1>
                    </Reveal>
                    <Reveal delay={110}>
                        <p style={{ fontSize: "0.78rem", color: t.muted, lineHeight: 1.85, maxWidth: "480px" }}>
                            Interior and exterior services for every condition — all mobile, all across St. Louis and St. Charles County.
                        </p>
                    </Reveal>
                </section>

                {/* ── INTERIOR ── */}
                <ServiceSection t={t}
                    tag="// 01 — interior detailing"
                    title="Interior Detailing"
                    intro="The inside of your car takes the most daily abuse. Interior services range from a thorough baseline clean to deep stain and odor work — each one methodical, product-driven, and done at your location."
                    services={interior}
                    imgLabel="interior"
                    flip={false}
                    imgBefore={imgInteriorBefore}
                    imgAfter={imgInteriorAfter}
                />

                {/* ── EXTERIOR ── */}
                <ServiceSection t={t}
                    tag="// 02 — exterior detailing"
                    title="Exterior Detailing"
                    intro="Beyond a car wash. Exterior services start with understanding what your paint actually needs — from a clean baseline to full paint correction and long-term ceramic protection."
                    services={exterior}
                    imgLabel="exterior"
                    flip={true}
                    imgBefore={imgExteriorBefore}
                    imgAfter={imgExteriorAfter}
                    imgBeforeStyle={{ objectPosition: "center 50%" }}
                />

                {/* ── SCIENCE STRIP ── */}
                <section style={{ borderTop: `1px solid ${t.border}`, padding: "6rem 0", background: t.bgAlt, transition: "background 0.28s ease" }} className="mobile-section-py">
                    <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 4rem" }} className="services-nav-padding">
                        <Reveal>
                            <div style={{ marginBottom: "3rem" }}>
                                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.56rem", letterSpacing: "0.22em", textTransform: "uppercase", color: t.cyan, display: "block", marginBottom: "0.8rem" }}>// the methodology</span>
                                <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 3.5vw, 3.2rem)", textTransform: "uppercase", lineHeight: 0.95, color: t.text, maxWidth: "600px", letterSpacing: "-0.01em" }}>
                                    Detailing is chemistry.<br />
                                    <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400, textTransform: "none", color: t.cyan }}>Most people treat it like cleaning.</span>
                                </h2>
                            </div>
                        </Reveal>

                        <div className="science-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2.5rem" }}>
                            {sciencePoints.map((pt, i) => (
                                <Reveal key={i} delay={i * 80}>
                                    <div style={{ borderTop: `2px solid ${t.cyan}`, paddingTop: "1.25rem" }}>
                                        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1.05rem", textTransform: "uppercase", letterSpacing: "0.04em", color: t.text, marginBottom: "0.75rem" }}>{pt.label}</div>
                                        <p style={{ fontSize: "0.68rem", color: t.muted, lineHeight: 1.9 }}>{pt.body}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>

                        <Reveal delay={200}>
                            <div style={{ marginTop: "3rem", paddingTop: "2.5rem", borderTop: `1px solid ${t.border}`, textAlign: "center" }}>
                                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.62rem", color: t.muted, letterSpacing: "0.06em", lineHeight: 1.8 }}>
                                    Each service page goes deeper — the specific products used, the process steps, and why each one matters.
                                    <span style={{ color: t.cyan, marginLeft: "0.5rem" }}>Explore a service above to see the full breakdown.</span>
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </section>

            </div>
        </>
    );
}
