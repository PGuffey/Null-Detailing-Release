import { Reveal } from "../components/ui";
import { BOOKING_LINK } from "../lib/constants";
import { Helmet } from "react-helmet-async";

import imgGreenStar from "../assets/products/Green_Star.webp";
import imgMeguiarsGold from "../assets/products/Meguiars_GoldClass_Wash.webp";
import imgProtectorWax from "../assets/products/Protector_Wax.webp";
import imgDarkFury from "../assets/products/SuperiorProducts_DarkFury.webp";
import imgPerl from "../assets/products/CarPro_Pearl.webp";

import imgExteriorHero from "../assets/exterior/Merc_Exterior_Detail_After.webp";
import imgExteriorBefore from "../assets/exterior/Merc_Tire_Before.webp";
import imgExteriorAfter from "../assets/exterior/Merc_Tire_After.webp";

function ImgPlaceholder({ label, aspect = "4/3" }) {
    return (
        <div style={{ width: "100%", aspectRatio: aspect, background: "var(--bg-alt-color)", border: "1px solid var(--border-color)", borderRadius: "2px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.5rem", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, opacity: 0.2, backgroundImage: "repeating-linear-gradient(45deg, var(--border-color) 0, var(--border-color) 1px, transparent 0, transparent 50%)", backgroundSize: "18px 18px" }} />
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--border-color)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ position: "relative", zIndex: 1 }}>
                <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
            </svg>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.48rem", letterSpacing: "0.14em", color: "var(--border-color)", textTransform: "uppercase", position: "relative", zIndex: 1 }}>{label}</span>
        </div>
    );
}

const INCLUDES = [
    "Hand wash & rinse",
    "Wheel & tire cleaning",
    "Exterior windows cleaned",
    "Tire dressing applied",
    "Quick spray wax / shine",
];

const PROCESS = [
    {
        step: "01",
        title: "Pre-Inspection",
        body: "Walk the exterior, note problem areas — heavy fallout, tar, bug splatter, water spot clusters. Sets the wash sequence and flags anything that needs targeted attention before the main wash.",
    },
    {
        step: "02",
        title: "Wheels & Wells",
        body: "CarPro Dark Fury applied to wheels and wheel wells completely first. The iron-reactive formula bleeds purple as it dissolves ferrous particles. Doing wheels before anything else prevents splashing brake dust onto freshly cleaned paint.",
    },
    {
        step: "03",
        title: "Pre-Wash & Foam",
        body: "Koch Chemie Green Star applied as a pre-wash and via foam cannon to dwell on the surface. Alkaline surfactants break the bond between traffic film and paint before any contact — reducing the risk of dragging contamination.",
    },
    {
        step: "04",
        title: "Contact Wash",
        body: "Meguiar's Gold Class in a dedicated wash bucket, clean rinse water in the second. Grit guards in both. Each panel is washed top-down, mitt rinsed before reloading. Contact wash is done after pre-wash loosens the bulk of contamination.",
    },
    {
        step: "05",
        title: "Wax, Rinse & Dry",
        body: "Koch Chemie Protector applied to the wet vehicle. A full sheeting rinse covers the vehicle, activating the carnauba and polymer blend and displacing the majority of the water. The remaining water is carefully dried using plush microfiber towels.",
    },
    {
        step: "06",
        title: "Dress & Glass",
        body: "CarPro Perl applied on tires and exterior trim for a clean satin finish. Exterior windows are then cleaned with Stoner Invisible Glass, followed by a final visual inspection.",
    },
];

const PRODUCTS = [
    {
        brand: "Koch Chemie",
        name: "Green Star APC",
        role: "Pre-wash & traffic film remover",
        ph: "pH 11–12 — strongly alkaline",
        why: "Applied before any contact with the paint. Green Star's high-alkaline surfactant chemistry emulsifies traffic film, road grime, and organic soils — breaking their bond to the surface before a mitt ever touches it. Pre-washing is the single most effective way to reduce wash swirls.",
        image: imgGreenStar,
    },
    {
        brand: "Meguiar's",
        name: "Gold Class Car Wash",
        role: "Main wash soap",
        ph: "pH 7–8 — neutral to mildly alkaline",
        why: "High-lubricity formula that maintains a slick film between the wash mitt and paint surface. pH-balanced to clean without stripping existing wax or sealant protection. Used in a two-bucket system — never dip a dirty mitt back into the wash solution.",
        image: imgMeguiarsGold,
    },
    {
        brand: "Koch Chemie",
        name: "Protector Wax",
        role: "Drying aid & paint protection",
        ph: "pH 7 — neutral",
        why: "Applied during the drying pass as a spray-and-wipe. The carnauba and polymer blend bonds to the paint surface while moisture is still present — delivering a sacrificial protection layer in a step that's happening anyway. Not a substitute for a dedicated sealant, but meaningful protection for a standard wash.",
        image: imgProtectorWax,
    },
    {
        brand: "Superior Products",
        name: "Dark Fury",
        role: "Bug, tire & wheel cleaner",
        ph: "pH 11–12 — alkaline",
        why: "A versatile, high-cling alkaline cleaner. Cut 4:1, it clings to vertical surfaces to emulsify brake dust and road film on wheels and quickly breaks down organic proteins in bug splatter on the front bumper before the main wash.",
        image: imgDarkFury,
    },
    {
        brand: "CarPro",
        name: "Perl",
        role: "Tire & trim dressing",
        ph: "pH 7 — neutral",
        why: "Water-based polymer dressing diluted to preference. On tires it leaves a clean, non-sling satin finish — solvent-based dressings sling onto paint at highway speeds. On exterior trim and plastic it restores color and provides UV protection without the greasy residue that attracts dust.",
        image: imgPerl,
    },
];

const CHEMISTRY_NOTE = "The pre-wash step is non-negotiable. Washing without it drags contamination across the paint surface under the mitt — that's where swirl marks come from. Every product above is matched to a specific job in the sequence. More detail on decontamination chemistry lives on the Decon Wash page.";

const RELATED = [
    {
        title: "Decontamination Wash",
        desc: "Iron fallout, clay bar, and tar removal — the full decon treatment beyond a standard wash.",
        href: "/services/exterior/decon",
        tag: "// exterior",
        soon: false,
    },
    {
        title: "Headlight Restoration",
        desc: "Sand, polish, and seal oxidized lenses back to clarity.",
        href: "/services/exterior/headlights",
        tag: "// exterior",
        soon: false,
    },
    {
        title: "Engine Bay Cleaning",
        desc: "Degreasing, steam cleaning, and plastics conditioning for a spotless bay.",
        href: "/services/exterior/engine",
        tag: "// exterior",
        soon: true,
    },
    {
        title: "Paint Correction",
        desc: "Machine polish to remove swirls, scratches, and oxidation from the clear coat.",
        href: "/services/exterior/paint",
        tag: "// exterior",
        soon: true,
    },
    {
        title: "Ceramic Coating",
        desc: "Long-term hydrophobic protection bonded directly to your paint.",
        href: "/services/exterior/ceramic",
        tag: "// exterior",
        soon: true,
    },
];

export function ExteriorGeneral() {
    return (
        <div style={{ paddingTop: "54px" }}>
            <Helmet>
                <title>General Exterior Detail | Null Detailing</title>
                <meta name="description" content="Professional hand wash and general exterior detail packages to protect your vehicle's paint in St. Louis and St. Charles." />
            </Helmet>

            {/* ── HERO ── */}
            <section className="px-6 md:px-16 pt-16 md:pt-24 mx-auto" style={{ maxWidth: "1160px" }}>
                <Reveal>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", flexWrap: "wrap" }}>
                        {[["Home", "/"], ["Services", "/services"], ["Exterior", "/services/exterior"], ["General Exterior", null]].map(([label, href], i, arr) => (
                            <span key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                {href
                                    ? <a href={href} style={{ color: "var(--muted-color)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "var(--cyan)"} onMouseLeave={e => e.currentTarget.style.color = "var(--muted-color)"}>{label}</a>
                                    : <span style={{ color: "var(--cyan)" }}>{label}</span>}
                                {i < arr.length - 1 && <span style={{ color: "var(--border-color)" }}>/</span>}
                            </span>
                        ))}
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start pb-12 lg:pb-20 border-b border-[var(--border-color)]">
                    {/* Left */}
                    <div>
                        <Reveal delay={40}>
                            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.56rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--cyan)", display: "block", marginBottom: "0.8rem" }}>// exterior — standard</span>
                            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2.8rem, 5vw, 5rem)", textTransform: "uppercase", lineHeight: 0.92, letterSpacing: "-0.02em", color: "var(--text-color)", margin: "0 0 0.3rem" }}>General</h1>
                            <h1 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(2.8rem, 5vw, 5rem)", lineHeight: 0.92, color: "var(--cyan)", margin: "0 0 1.8rem", textTransform: "none" }}>Exterior Detail</h1>
                        </Reveal>
                        <Reveal delay={90}>
                            <p style={{ fontSize: "0.76rem", color: "var(--muted-color)", lineHeight: 1.9, marginBottom: "2rem", maxWidth: "420px" }}>
                                A proper exterior wash done right — pre-wash, decontaminate wheels, two-bucket contact wash, protect. Not a rinse and wipe. A methodical clean that respects the paint.
                            </p>
                        </Reveal>
                        <Reveal delay={130}>
                            <div style={{ display: "flex", alignItems: "baseline", gap: "0.35rem", margin: "0 0 0.25rem" }}>
                                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "var(--muted-color)" }}>$</span>
                                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "2.6rem", color: "var(--text-color)", lineHeight: 1 }}>85</span>
                                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "var(--muted-color)" }}>—</span>
                                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "2.6rem", color: "var(--cyan)", lineHeight: 1 }}>120</span>
                            </div>
                            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.52rem", color: "var(--muted-color)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.5rem" }}>one-time · per session · price varies by vehicle size</div>
                        </Reveal>
                        <Reveal delay={160}>
                            <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "1.25rem" }}>
                                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.52rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted-color)", marginBottom: "0.75rem" }}>What's included</div>
                                {INCLUDES.map((item, i) => (
                                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "0.45rem 0", borderBottom: "1px solid var(--border-color)" }}>
                                        <span style={{ color: "var(--cyan)", fontSize: "0.6rem", flexShrink: 0, marginTop: "1px" }}>✓</span>
                                        <span style={{ fontSize: "0.66rem", color: "var(--text-color)", lineHeight: 1.5, fontFamily: "'JetBrains Mono', monospace" }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>

                    {/* Right — images */}
                    <Reveal delay={80}>
                        <div style={{ position: "sticky", top: "74px" }}>
                            <img src={imgExteriorHero} alt="General Exterior Result" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: "2px", border: "1px solid var(--border-color)" }} />
                            <div style={{ marginTop: "1rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                                <img src={imgExteriorBefore} alt="Before General Exterior" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: "2px", border: "1px solid var(--border-color)" }} />
                                <img src={imgExteriorAfter} alt="After General Exterior" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: "2px", border: "1px solid var(--border-color)" }} />
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginTop: "0.35rem" }}>
                                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.48rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted-color)", textAlign: "center" }}>Before</div>
                                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.48rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cyan)", textAlign: "center" }}>After</div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ── PROCESS ── */}
            <section className="py-16 md:py-20 border-b border-[var(--border-color)]">
                <div className="px-6 md:px-16 mx-auto" style={{ maxWidth: "1160px" }}>
                    <Reveal>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.56rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--cyan)", display: "block", marginBottom: "0.7rem" }}>// the process</span>
                        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 3.5vw, 3.2rem)", textTransform: "uppercase", lineHeight: 0.95, color: "var(--text-color)", margin: "0 0 0.6rem", letterSpacing: "-0.01em" }}>How It Gets Done</h2>
                        <p style={{ fontSize: "0.72rem", color: "var(--muted-color)", lineHeight: 1.85, maxWidth: "520px", marginBottom: "3rem" }}>The sequence is the process. Wheels completely first, pre-wash before contact, wax before dry — order matters.</p>
                    </Reveal>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1px] rounded-[2px] overflow-hidden bg-[var(--border-color)] border border-[var(--border-color)]">
                        {PROCESS.map((step, i) => (
                            <Reveal key={i} delay={i * 30}>
                                <div
                                    style={{ padding: "2rem", height: "100%", background: "var(--card-color)", borderTop: "2px solid transparent", transition: "background 0.2s ease, border-top-color 0.2s ease", cursor: "default" }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.background = "rgba(0,188,212,0.04)";
                                        e.currentTarget.style.borderTopColor = "var(--cyan)";
                                        e.currentTarget.querySelector(".proc-step").style.color = "var(--cyan)";
                                        e.currentTarget.querySelector(".proc-title").style.color = "var(--cyan)";
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.background = "var(--card-color)";
                                        e.currentTarget.style.borderTopColor = "transparent";
                                        e.currentTarget.querySelector(".proc-step").style.color = "var(--muted-color)";
                                        e.currentTarget.querySelector(".proc-title").style.color = "var(--text-color)";
                                    }}
                                >
                                    <div className="proc-step" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.52rem", color: "var(--muted-color)", letterSpacing: "0.12em", marginBottom: "0.85rem", transition: "color 0.2s" }}>{step.step}</div>
                                    <div className="proc-title" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.03em", color: "var(--text-color)", marginBottom: "0.65rem", lineHeight: 1, transition: "color 0.2s" }}>{step.title}</div>
                                    <p style={{ fontSize: "0.64rem", color: "var(--muted-color)", lineHeight: 1.85 }}>{step.body}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PRODUCTS ── */}
            <section className="py-16 md:py-20 border-b border-[var(--border-color)] transition-colors duration-300 bg-[var(--bg-alt-color)]">
                <div className="px-6 md:px-16 mx-auto" style={{ maxWidth: "1160px" }}>
                    <Reveal>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.56rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--cyan)", display: "block", marginBottom: "0.7rem" }}>// the chemistry</span>
                        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 3.5vw, 3.2rem)", textTransform: "uppercase", lineHeight: 0.95, color: "var(--text-color)", margin: "0 0 0.6rem", letterSpacing: "-0.01em" }}>What Goes on Your Car & Why</h2>
                        <p style={{ fontSize: "0.72rem", color: "var(--muted-color)", lineHeight: 1.85, maxWidth: "580px", marginBottom: "3rem" }}>
                            Every product is matched to a specific step and surface. Nothing gets used because it's convenient — it gets used because it's the right chemistry for the job.
                        </p>
                    </Reveal>

                    <div className="flex flex-col gap-[1px] bg-[var(--border-color)] border border-[var(--border-color)] rounded-[2px] overflow-hidden mb-6">
                        {PRODUCTS.map((p, i) => (
                            <Reveal key={i} delay={i * 40}>
                                <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-6 sm:gap-8 items-start p-6 sm:p-8 bg-[var(--card-color)]">
                                    {/* Product image */}
                                    <div className="aspect-square flex flex-col items-center justify-center gap-[0.4rem] relative overflow-hidden shrink-0 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-[2px] w-24 sm:w-full max-w-[120px] mx-auto sm:mx-0">
                                        {p.image ? (
                                            <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                        ) : (
                                            <>
                                                <div style={{ position: "absolute", inset: 0, opacity: 0.15, backgroundImage: "repeating-linear-gradient(45deg, var(--border-color) 0, var(--border-color) 1px, transparent 0, transparent 50%)", backgroundSize: "14px 14px" }} />
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--border-color)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ position: "relative", zIndex: 1 }}>
                                                    <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                                                </svg>
                                                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.38rem", letterSpacing: "0.1em", color: "var(--border-color)", textTransform: "uppercase", position: "relative", zIndex: 1, textAlign: "center", padding: "0 0.3rem" }}>product photo</span>
                                            </>
                                        )}
                                    </div>
                                    {/* Text */}
                                    <div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem", flexWrap: "wrap" }}>
                                            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.46rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--cyan)", background: "rgba(0,188,212,0.08)", border: "1px solid rgba(0,188,212,0.2)", padding: "0.18rem 0.5rem", borderRadius: "2px" }}>{p.brand}</span>
                                            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.46rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted-color)" }}>{p.role}</span>
                                            <span style={{ marginLeft: "auto", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.46rem", letterSpacing: "0.1em", color: "var(--gold)", border: "1px solid var(--border-color)", padding: "0.18rem 0.5rem", borderRadius: "2px", whiteSpace: "nowrap" }}>{p.ph}</span>
                                        </div>
                                        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1.15rem", textTransform: "uppercase", letterSpacing: "0.03em", color: "var(--text-color)", marginBottom: "0.6rem", lineHeight: 1 }}>{p.name}</div>
                                        <p style={{ fontSize: "0.63rem", color: "var(--muted-color)", lineHeight: 1.88 }}>{p.why}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal delay={100}>
                        <div style={{ borderLeft: "3px solid var(--cyan)", paddingLeft: "1.25rem" }}>
                            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: "var(--muted-color)", lineHeight: 1.85, letterSpacing: "0.03em" }}>{CHEMISTRY_NOTE}</p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ── RELATED SERVICES ── */}
            <section className="py-16 md:py-20 border-b border-[var(--border-color)] transition-colors duration-300 bg-[var(--bg-alt-color)]">
                <div className="px-6 md:px-16 mx-auto" style={{ maxWidth: "1160px" }}>
                    <Reveal>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.56rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--cyan)", display: "block", marginBottom: "0.7rem" }}>// also available</span>
                        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 3vw, 2.8rem)", textTransform: "uppercase", lineHeight: 0.95, color: "var(--text-color)", margin: "0 0 2.5rem", letterSpacing: "-0.01em" }}>Other Exterior Services</h2>
                    </Reveal>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                        {RELATED.map((r, i) => (
                            <Reveal key={i} delay={i * 50}>
                                {r.soon ? (
                                    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "var(--card-color)", border: "1px solid var(--border-color)", borderTop: "2px solid var(--border-color)", borderRadius: "2px", padding: "1.5rem", opacity: 0.5, cursor: "not-allowed" }}>
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                                            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.48rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--cyan)" }}>{r.tag}</div>
                                            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.42rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted-color)", border: "1px solid var(--border-color)", padding: "0.15rem 0.4rem", borderRadius: "2px" }}>Soon</span>
                                        </div>
                                        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1.1rem", textTransform: "uppercase", color: "var(--text-color)", marginBottom: "0.5rem", lineHeight: 1 }}>{r.title}</div>
                                        <p style={{ fontSize: "0.62rem", color: "var(--muted-color)", lineHeight: 1.75, flexGrow: 1 }}>{r.desc}</p>
                                    </div>
                                ) : (
                                    <a href={r.href}
                                        style={{ display: "flex", flexDirection: "column", height: "100%", textDecoration: "none", background: "var(--card-color)", border: "1px solid var(--border-color)", borderTop: "2px solid var(--border-color)", borderRadius: "2px", padding: "1.5rem", transition: "all 0.2s ease" }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.borderColor = "var(--cyan)";
                                            e.currentTarget.style.transform = "translateY(-2px)";
                                            const t = e.currentTarget.querySelector(".rel-title");
                                            if (t) t.style.color = "var(--cyan)";
                                            const a = e.currentTarget.querySelector(".rel-arrow");
                                            if (a) a.style.transform = "translateX(4px)";
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.borderColor = "var(--border-color)";
                                            e.currentTarget.style.transform = "translateY(0)";
                                            const t = e.currentTarget.querySelector(".rel-title");
                                            if (t) t.style.color = "var(--text-color)";
                                            const a = e.currentTarget.querySelector(".rel-arrow");
                                            if (a) a.style.transform = "translateX(0)";
                                        }}
                                    >
                                        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.48rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--cyan)", marginBottom: "0.5rem" }}>{r.tag}</div>
                                        <div className="rel-title" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1.1rem", textTransform: "uppercase", color: "var(--text-color)", marginBottom: "0.5rem", transition: "color 0.2s", lineHeight: 1 }}>{r.title}</div>
                                        <p style={{ fontSize: "0.62rem", color: "var(--muted-color)", lineHeight: 1.75, flexGrow: 1, marginBottom: "1rem" }}>{r.desc}</p>
                                        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cyan)", fontWeight: 700, marginTop: "auto" }}>
                                            See Details <span className="rel-arrow" style={{ transition: "transform 0.2s ease", display: "inline-block" }}>→</span>
                                        </div>
                                    </a>
                                )}
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── BOOK CTA ── */}
            <section style={{ position: "relative", overflow: "hidden", borderBottom: "1px solid var(--border-color)", background: "var(--bg-color)" }}>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "var(--cyan)" }} />
                <div className="relative z-10 px-6 md:px-16 py-16 md:py-28 text-center mx-auto" style={{ maxWidth: "1160px" }}>
                    <Reveal>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.56rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--cyan)", display: "block", marginBottom: "1.2rem" }}>// mobile · st. louis & st. charles county</span>
                        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(3rem, 6vw, 5.5rem)", textTransform: "uppercase", lineHeight: 0.92, letterSpacing: "-0.02em", color: "var(--text-color)", margin: "0 0 0.35rem" }}>
                            Ready for a clean exterior?
                        </h2>
                        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(2.8rem, 5.5vw, 5rem)", lineHeight: 0.92, color: "var(--cyan)", margin: "0 0 2rem", textTransform: "none" }}>
                            I come to you.
                        </h2>
                    </Reveal>
                    <Reveal delay={80}>
                        <p style={{ fontSize: "0.74rem", color: "var(--muted-color)", lineHeight: 1.85, maxWidth: "420px", margin: "0 auto 2.5rem" }}>
                            No drop-off, no waiting room. Book a General Exterior and I'll handle the rest at your location.
                        </p>
                    </Reveal>
                    <Reveal delay={140}>
                        <a href={BOOKING_LINK}
                            onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
                            style={{ display: "inline-block", background: "var(--cyan)", color: "#fff", padding: "1rem 2.4rem", borderRadius: "2px", fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.08em", textDecoration: "none", boxShadow: "0 0 40px rgba(0,188,212,0.25)", transition: "all 0.2s ease" }}>
                            Book Exterior Detail Today
                        </a>
                    </Reveal>
                </div>
            </section>

        </div>
    );
}
