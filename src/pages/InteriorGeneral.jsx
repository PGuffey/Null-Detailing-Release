import { Reveal } from "../components/ui";
import { BOOKING_LINK } from "../lib/constants";
import { Helmet } from "react-helmet-async";

import imgPolStar from "../assets/products/PolStar_1800x1800.webp";
import imgInvisibleGlass from "../assets/products/InvisibleGlass.webp";
import imgGummifix from "../assets/products/Guf_1800x1800.webp";
import imgTopStar from "../assets/products/Top_Star.webp";

import imgInteriorHero from "../assets/interior/Merc_Interior_Detail_After.webp";
import imgInteriorBefore from "../assets/interior/car_Interior_Before.webp";
import imgInteriorAfter from "../assets/interior/car_Interior_After.webp";

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
    "Full vacuum — seats, floors, trunk",
    "Wipe-down of all surfaces & dash",
    "Door jambs cleaned",
    "Interior windows cleaned",
    "Air freshener applied",
];

const PROCESS = [
    {
        step: "01",
        title: "Pre-Inspection",
        body: "Walk the interior, note problem areas — stains, pet hair, sticky surfaces. Sets the sequence and determines dilution ratios before anything is touched.",
    },
    {
        step: "02",
        title: "Dry Extraction",
        body: "Full vacuum pass with a crevice tool. Mats pulled and done separately. Trunk, pockets, cup holders — dry contamination comes out before any moisture is introduced.",
    },
    {
        step: "03",
        title: "Surface Clean",
        body: "P&S Pol Star or Xpress Interior Cleaner applied to dash, panels, console, and door cards. Product is matched to surface condition — Pol Star for heavier soiling, Xpress for light maintenance passes.",
    },
    {
        step: "04",
        title: "Glass",
        body: "Stoner Invisible Glass on all interior glass. Ammonia-free — ammonia degrades window tint adhesive over time. A dedicated glass microfiber only, never a shared panel towel.",
    },
    {
        step: "05",
        title: "Door Jambs",
        body: "Jambs get a dedicated wipe-down before the door closes. Road grime and brake dust accumulate here and most people skip it — if the jambs are dirty, the interior isn't really clean.",
    },
    {
        step: "06",
        title: "Dressing & Finish",
        body: "Gummifix on rubber mats and seals. Top Star or Leather Star on hard and soft surfaces respectively — matched to material. Satin finish, not greasy. Final visual pass for streaks and residue.",
    },
];

const PRODUCTS = [
    {
        brand: "P&S Detail Products",
        name: "Pol Star / Xpress Interior",
        role: "Interior surface cleaner",
        ph: "pH 7–8 — neutral to mildly alkaline",
        why: "Pol Star handles heavier soiling on door cards, consoles, and cup holders. Xpress is a lighter solvent-assisted cleaner for maintained surfaces and interior glass film. Both are ammonia-free and safe on all interior plastics, vinyl, and leather.",
        image: imgPolStar,
    },
    {
        brand: "Stoner",
        name: "Invisible Glass",
        role: "Interior glass cleaner",
        ph: "pH 7 — neutral",
        why: "Ammonia-free formula that cuts through outgassing film on interior glass without attacking window tint adhesive. Applied with a dedicated glass microfiber — never a shared towel.",
        image: imgInvisibleGlass,
    },
    {
        brand: "Koch Chemie",
        name: "Gummifix",
        role: "Rubber mat & seal dressing",
        ph: "pH 6–7 — slightly acidic to neutral",
        why: "Formulated specifically for rubber — conditions and protects without the silicone bleed that degrades rubber over time. Used on floor mats, door seals, and rubber trim.",
        image: imgGummifix,
    },
    {
        brand: "Koch Chemie",
        name: "Top Star / Leather Star",
        role: "Hard & soft surface dressing",
        ph: "pH 7 — neutral",
        why: "Top Star on hard plastics and vinyl. Leather Star on leather and soft surfaces. Both leave a satin finish — not glossy — and contain UV protection. Product is matched to the material, not applied universally.",
        image: imgTopStar,
    },
];

const CHEMISTRY_NOTE = "P&S and Koch Chemie are professional-grade lines used because of their dilution discipline and surface compatibility — not brand recognition. Each product is matched to a specific material and condition. More detail on the chemistry behind stain and odor work lives on those individual service pages.";

const RELATED = [
    { title: "Stain Removal", desc: "Carpets, mats, or seats with stubborn stains that a general clean won't resolve.", href: "/services/interior/stain", tag: "// interior", soon: false },
    { title: "Odor Removal", desc: "When the source of the smell needs to be eliminated, not just freshened over.", href: "/services/interior/odor", tag: "// interior", soon: true },
    { title: "Maintenance Detail", desc: "A lighter recurring service to keep things fresh between full details.", href: "/services/interior/maintenance", tag: "// interior", soon: true },
];

export function InteriorGeneral() {
    return (
        <div style={{ paddingTop: "54px" }}>
            <Helmet>
                <title>General Interior Detail | Null Detailing</title>
                <meta name="description" content="Comprehensive general interior detailing services for your vehicle in St. Louis and St. Charles counties." />
            </Helmet>
            {/* ── HERO ── */}
            <section className="px-6 md:px-16 pt-16 md:pt-24 mx-auto" style={{ maxWidth: "1160px" }}>
                <Reveal>
                    {/* Breadcrumb */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", flexWrap: "wrap" }}>
                        {[["Home", "/"], ["Services", "/services"], ["Interior", "/services/interior"], ["General Interior", null]].map(([label, href], i, arr) => (
                            <span key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                {href ? <a href={href} style={{ color: "var(--muted-color)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "var(--cyan)"} onMouseLeave={e => e.currentTarget.style.color = "var(--muted-color)"}>{label}</a> : <span style={{ color: "var(--cyan)" }}>{label}</span>}
                                {i < arr.length - 1 && <span style={{ color: "var(--border-color)" }}>/</span>}
                            </span>
                        ))}
                    </div>
                </Reveal>

                <div className="hero-grid grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start pb-12 lg:pb-20 border-b border-[var(--border-color)]">
                    {/* Left — title + includes */}
                    <div>
                        <Reveal delay={40}>
                            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.56rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--cyan)", display: "block", marginBottom: "0.8rem" }}>// interior — standard</span>
                            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2.8rem, 5vw, 5rem)", textTransform: "uppercase", lineHeight: 0.92, letterSpacing: "-0.02em", color: "var(--text-color)", margin: "0 0 0.3rem" }}>General</h1>
                            <h1 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(2.8rem, 5vw, 5rem)", lineHeight: 0.92, color: "var(--cyan)", margin: "0 0 1.8rem", textTransform: "none" }}>Interior Detail</h1>
                        </Reveal>
                        <Reveal delay={90}>
                            <p style={{ fontSize: "0.76rem", color: "var(--muted-color)", lineHeight: 1.9, marginBottom: "2rem", maxWidth: "420px" }}>
                                The foundation of a clean cabin. Every surface, every pocket, every piece of glass — cleaned in sequence with the right chemistry for each material. Not a quick wipe-down. A full reset.
                            </p>
                        </Reveal>
                        <Reveal delay={130}>
                            {/* Price — tight above includes */}
                            <div style={{ display: "flex", alignItems: "baseline", gap: "0.35rem", margin: "0 0 0.25rem" }}>
                                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "var(--muted-color)" }}>$</span>
                                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "2.6rem", color: "var(--text-color)", lineHeight: 1 }}>135</span>
                                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "var(--muted-color)" }}>—</span>
                                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "2.6rem", color: "var(--cyan)", lineHeight: 1 }}>170</span>
                            </div>
                            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.52rem", color: "var(--muted-color)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.5rem" }}>one-time · per session · price varies by vehicle size</div>
                        </Reveal>
                        <Reveal delay={160}>
                            {/* What's included */}
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

                    {/* Right — hero image */}
                    <Reveal delay={80}>
                        <div style={{ position: "sticky", top: "74px" }}>
                            <img src={imgInteriorHero} alt="General Interior Result" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: "2px", border: "1px solid var(--border-color)" }} />
                            <div style={{ marginTop: "1rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                                <img src={imgInteriorBefore} alt="Before General Interior" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: "2px", border: "1px solid var(--border-color)" }} />
                                <img src={imgInteriorAfter} alt="After General Interior" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: "2px", border: "1px solid var(--border-color)" }} />
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
                        <p style={{ fontSize: "0.72rem", color: "var(--muted-color)", lineHeight: 1.85, maxWidth: "520px", marginBottom: "3rem" }}>Every step has a reason. The sequence matters — doing things out of order means redoing work.</p>
                    </Reveal>
                    <div className="packages-grid-4 grid grid-cols-1 lg:grid-cols-3 gap-[1px] rounded-[2px] overflow-hidden bg-[var(--border-color)] border border-[var(--border-color)]">
                        {PROCESS.map((step, i) => {
                            return (
                                <Reveal key={i} delay={i * 30} className="h-full">
                                    <div
                                        className="process-card group"
                                        style={{
                                            padding: "2rem",
                                            height: "100%",
                                            background: "var(--card-color)",
                                            transition: "background 0.2s ease, border-top-color 0.2s ease",
                                            cursor: "default",
                                            position: "relative",
                                        }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.background = "rgba(0,188,212,0.04)";
                                            e.currentTarget.style.borderTopColor = "var(--cyan)";
                                            const child1 = e.currentTarget.querySelector('.proc-step');
                                            if (child1) child1.style.color = "var(--cyan)";
                                            const child2 = e.currentTarget.querySelector('.proc-title');
                                            if (child2) child2.style.color = "var(--cyan)";
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.background = "var(--card-color)";
                                            e.currentTarget.style.borderTopColor = "transparent";
                                            const child1 = e.currentTarget.querySelector('.proc-step');
                                            if (child1) child1.style.color = "var(--muted-color)";
                                            const child2 = e.currentTarget.querySelector('.proc-title');
                                            if (child2) child2.style.color = "var(--text-color)";
                                        }}
                                    >
                                        <div className="absolute top-0 left-0 right-0 h-0.5 transition-colors duration-200" style={{ background: "transparent" }} />
                                        <div className="proc-step" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.52rem", color: "var(--muted-color)", letterSpacing: "0.12em", marginBottom: "0.85rem", transition: "color 0.2s" }}>{step.step}</div>
                                        <div className="proc-title" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.03em", color: "var(--text-color)", marginBottom: "0.65rem", lineHeight: 1, transition: "color 0.2s" }}>{step.title}</div>
                                        <p style={{ fontSize: "0.64rem", color: "var(--muted-color)", lineHeight: 1.85 }}>{step.body}</p>
                                    </div>
                                </Reveal>
                            );
                        })}
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
                            Product selection isn't preference — it's chemistry. Every product is matched to a specific surface, pH window, and outcome.
                        </p>
                    </Reveal>

                    <div className="flex flex-col gap-[1px] bg-[var(--border-color)] border border-[var(--border-color)] rounded-[2px] overflow-hidden mb-6">
                        {PRODUCTS.map((p, i) => (
                            <Reveal key={i} delay={i * 40}>
                                <div className="product-card grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-6 sm:gap-8 items-start p-6 sm:p-8 bg-[var(--card-color)]">
                                    {/* Product image */}
                                    <div className="aspect-square flex items-center justify-center relative overflow-hidden shrink-0 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-[2px] w-24 sm:w-full max-w-[120px] mx-auto sm:mx-0">
                                        {p.image ? (
                                            <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                        ) : (
                                            <>
                                                <div style={{ position: "absolute", inset: 0, opacity: 0.15, backgroundImage: "repeating-linear-gradient(45deg, var(--border-color) 0, var(--border-color) 1px, transparent 0, transparent 50%)", backgroundSize: "14px 14px" }} />
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--border-color)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ position: "relative", zIndex: 1, marginBottom: "0.4rem" }}>
                                                    <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                                                </svg>
                                                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.38rem", letterSpacing: "0.1em", color: "var(--border-color)", textTransform: "uppercase", position: "relative", zIndex: 1, textAlign: "center", padding: "0 0.3rem" }}>product photo</span>
                                            </>
                                        )}
                                    </div>
                                    {/* Text content */}
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
                        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 3vw, 2.8rem)", textTransform: "uppercase", lineHeight: 0.95, color: "var(--text-color)", margin: "0 0 2.5rem", letterSpacing: "-0.01em" }}>Other Interior Services</h2>
                    </Reveal>
                    <div className="packages-grid-4 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                        {RELATED.map((r, i) => (
                            <Reveal key={i} delay={i * 60} className="h-full">
                                {r.soon ? (
                                    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "var(--card-color)", border: "1px solid var(--border-color)", borderTop: "2px solid var(--border-color)", borderRadius: "2px", padding: "1.5rem", opacity: 0.5, cursor: "not-allowed" }}>
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                                            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.48rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--cyan)" }}>{r.tag}</div>
                                            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.42rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted-color)", border: "1px solid var(--border-color)", padding: "0.15rem 0.4rem", borderRadius: "2px" }}>Soon</span>
                                        </div>
                                        <div className="rel-title" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1.2rem", textTransform: "uppercase", color: "var(--text-color)", marginBottom: "0.5rem", transition: "color 0.2s", lineHeight: 1 }}>{r.title}</div>
                                        <p style={{ fontSize: "0.64rem", color: "var(--muted-color)", lineHeight: 1.75, flexGrow: 1, marginBottom: "1rem" }}>{r.desc}</p>
                                    </div>
                                ) : (
                                    <a href={r.href}
                                        style={{ display: "flex", flexDirection: "column", height: "100%", textDecoration: "none", background: "var(--card-color)", border: "1px solid var(--border-color)", borderTop: "2px solid var(--border-color)", borderRadius: "2px", padding: "1.5rem", transition: "all 0.2s ease" }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.borderColor = "var(--cyan)";
                                            e.currentTarget.style.transform = "translateY(-2px)";
                                            const t = e.currentTarget.querySelector('.rel-title');
                                            if (t) t.style.color = "var(--cyan)";
                                            const a = e.currentTarget.querySelector('.rel-arrow');
                                            if (a) a.style.transform = "translateX(4px)";
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.borderColor = "var(--border-color)";
                                            e.currentTarget.style.transform = "translateY(0)";
                                            const t = e.currentTarget.querySelector('.rel-title');
                                            if (t) t.style.color = "var(--text-color)";
                                            const a = e.currentTarget.querySelector('.rel-arrow');
                                            if (a) a.style.transform = "translateX(0)";
                                        }}
                                    >
                                        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.48rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--cyan)", marginBottom: "0.5rem" }}>{r.tag}</div>
                                        <div className="rel-title" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1.2rem", textTransform: "uppercase", color: "var(--text-color)", marginBottom: "0.5rem", transition: "color 0.2s", lineHeight: 1 }}>{r.title}</div>
                                        <p style={{ fontSize: "0.64rem", color: "var(--muted-color)", lineHeight: 1.75, flexGrow: 1, marginBottom: "1rem" }}>{r.desc}</p>

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
                            Ready for a clean cabin?
                        </h2>
                        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(2.8rem, 5.5vw, 5rem)", lineHeight: 0.92, color: "var(--cyan)", margin: "0 0 2rem", textTransform: "none" }}>
                            I come to you.
                        </h2>
                    </Reveal>
                    <Reveal delay={80}>
                        <p style={{ fontSize: "0.74rem", color: "var(--muted-color)", lineHeight: 1.85, maxWidth: "420px", margin: "0 auto 2.5rem" }}>
                            No drop-off, no waiting room. Book a General Interior and I'll handle the rest at your location.
                        </p>
                    </Reveal>
                    <Reveal delay={140}>
                        <a href={BOOKING_LINK}
                            onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
                            style={{ display: "inline-block", background: "var(--cyan)", color: "#fff", padding: "1rem 2.4rem", borderRadius: "2px", fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.08em", textDecoration: "none", boxShadow: "0 0 40px rgba(0,188,212,0.25)", transition: "all 0.2s ease" }}>
                            Book Interior Detail Today
                        </a>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
