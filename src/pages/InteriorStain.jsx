import { Reveal } from "../components/ui";
import { BOOKING_LINK } from "../lib/constants";
import { Helmet } from "react-helmet-async";

import imgTarX from "../assets/products/CARPROTarX-1.webp";
import imgTerminator from "../assets/products/p-and-s-terminator.webp";
import imgCarpetBomber from "../assets/products/p-and-s-carpet-bomber.webp";
import imgPeroxide from "../assets/products/P&S_Peroxide.webp";

import imgStainBefore1 from "../assets/interior/Interior_Stain_Removal_CarSeat_Before.webp";
import imgStainAfter1 from "../assets/interior/Interior_Stain_Removal_CarSeat_After.webp";
import imgStainBefore2 from "../assets/interior/Interior_Stain_Removal_Paint_Before.webp";
import imgStainAfter2 from "../assets/interior/Interior_Stain_Removal_Paint_After.webp";

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
    "Pre-inspection & stain identification",
    "Targeted spot treatment with P&S Terminator",
    "Full carpet & upholstery treatment with Carpet Bomber",
    "Hot water extraction or steam clean",
    "Peroxide neutralization & odor elimination",
    "Final inspection & re-treatment if needed",
];

const STAIN_TYPES = [
    { label: "Food & Drink", note: "Coffee, soda, sauce — water-soluble soils respond well to enzymatic break-down and extraction." },
    { label: "Grease & Oil", note: "Requires a solvent-assisted approach before extraction — water alone won't lift hydrophobic soils." },
    { label: "Tar & Adhesive", note: "Petroleum-based contamination — road tar, sap, adhesive residue — requires solvent chemistry. P&S TarX applied before any water-based treatment." },
    { label: "Ink & Dye", note: "Highly variable depending on ink type. Spot treatment is tested in an inconspicuous area first." },
    { label: "Mud & Dirt", note: "Always dried and vacuumed first. Wet-treating mud drives it deeper — dry extraction comes before any chemistry." },
    { label: "Pet Stains", note: "Enzymatic treatment breaks down uric acid at the molecular level. Extraction follows to remove residue fully." },
];

const PROCESS = [
    { step: "01", title: "Identification", body: "Not all stains are treated the same way. The first step is identifying the stain type — organic, petroleum-based, dye, or particulate — because the wrong chemistry on the wrong stain can set it permanently. Age of the stain matters too." },
    { step: "02", title: "Dry Prep", body: "Any dry or loose contamination — dried mud, crumbs, debris — is vacuumed out first. Introducing moisture before removing dry contamination pushes it deeper into carpet fibers and makes extraction harder." },
    { step: "03", title: "Spot Treatment", body: "P&S Terminator applied directly to the stain and worked in with a brush. The enzymatic formula begins breaking down organic compounds at the source. Dwell time is matched to stain severity — it's not a spray-and-wipe product." },
    { step: "04", title: "Full Treatment", body: "P&S Carpet Bomber applied across all carpet and upholstery areas. A wider-spectrum cleaner that lifts general soiling, soil barriers, and residue from previous cleaning attempts. Agitated with a brush before extraction." },
    { step: "05", title: "Extraction or Steam", body: "Hot water extractor for carpets and mats — high-pressure hot water flushes product and contamination out of the fiber. Steam for upholstery, seams, and areas where extraction isn't practical. Method is matched to the surface." },
    { step: "06", title: "Peroxide Neutralization", body: "P&S peroxide solution applied as a final step. Oxidizes any remaining organic residue and eliminates odor at the source — not with fragrance, but by chemically breaking down the odor-causing compounds left behind." },
];

const PRODUCTS = [
    { brand: "P&S Detail Products", name: "Terminator", role: "Enzymatic spot cleaner", ph: "pH 7–8 — neutral to mildly alkaline", why: "Terminator uses a blend of live enzymes and surfactants to break down organic stains — food, pet, biological — at the molecular level. Enzymes are catalysts: they don't just clean around the stain, they digest the organic compounds causing it. Dwell time is critical — cutting it short leaves the chemistry incomplete.", image: imgTerminator },
    { brand: "P&S Detail Products", name: "Carpet Bomber", role: "Full carpet & upholstery cleaner", ph: "pH 9–10 — alkaline", why: "A broader alkaline cleaner designed for full surface treatment. The elevated pH breaks down a wide range of soils — oils, general grime, and the soil barrier that builds up in high-traffic carpet areas over time. Used after Terminator spot treatment so the targeted chemistry has already worked before the broad clean begins.", image: imgCarpetBomber },
    { brand: "P&S Detail Products", name: "Peroxide Cleaner", role: "Oxidizing neutralizer & odor eliminator", ph: "pH 3–4 — acidic", why: "Hydrogen peroxide-based formula applied as the final step. Oxidation breaks the chemical bonds of residual organic compounds that enzymes and alkaline cleaners leave behind — particularly effective on odor-causing molecules. It also balances the surface pH after alkaline treatment, which matters for long-term material health.", image: imgPeroxide },
    { brand: "P&S Detail Products", name: "TarX", role: "Tar & adhesive remover", ph: "Solvent-based — pH not applicable", why: "Used when contamination is petroleum-based — road tar, tree sap, adhesive residue — where water-based chemistry won't work. Solvents dissolve hydrocarbon bonds that alkaline cleaners can't touch. Applied before any water-based treatment; introducing water first can trap solvent residue in the fiber. Used on an as-needed basis depending on stain severity and type.", image: imgTarX },
];

const CHEMISTRY_NOTE = "The three-product sequence — enzymatic spot treatment, alkaline full clean, peroxide neutralization — isn't arbitrary. Each product addresses a different layer of the problem: the stain itself, the surrounding soil, and the residual odor compounds. Skipping steps or using a single all-in-one product is why stains come back.";

const LIMITATIONS = [
    { label: "Set stains", note: "Stains that have been heat-set (dried in sun, exposed to hot water) or chemically set by prior treatment are significantly harder to remove. Full removal isn't always guaranteed." },
    { label: "Dye transfer", note: "Ink and dye stains are highly variable. Spot tests are always done first. Some dye transfer is permanent depending on fiber type." },
    { label: "Bodily fluids & mold", note: "Blood, vomit, and mold are not services offered — these require biohazard handling. I don't do it and won't." },
    { label: "Structural damage", note: "Stains that have caused fiber damage, discoloration from bleach, or permanent material breakdown can be cleaned but not reversed." },
];

const RELATED = [
    { title: "General Interior", desc: "The full baseline interior clean — every surface, every pocket, every piece of glass.", href: "/services/interior/general", tag: "// interior", soon: false },
    { title: "Odor Removal", desc: "When the smell needs to be eliminated at the source — not freshened over.", href: "/services/interior/odor", tag: "// interior", soon: true },
    { title: "Maintenance Detail", desc: "A lighter recurring service to keep things clean between full details.", href: "/services/interior/maintenance", tag: "// interior", soon: true },
];

export function InteriorStain() {
    return (
        <div style={{ paddingTop: "54px" }}>
            <Helmet>
                <title>Stain Removal | Null Detailing</title>
                <meta name="description" content="Targeted stain removal and interior extraction for carpets, mats, and upholstery in St. Louis and St. Charles." />
            </Helmet>

            {/* ── HERO ── */}
            <section className="px-6 md:px-16 pt-16 md:pt-24 mx-auto" style={{ maxWidth: "1160px" }}>
                <Reveal>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", flexWrap: "wrap" }}>
                        {[["Home", "/"], ["Services", "/services"], ["Interior", "/services/interior/general"], ["Stain Removal", null]].map(([label, href], i, arr) => (
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
                            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.56rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--cyan)", display: "block", marginBottom: "0.8rem" }}>// interior — targeted</span>
                            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2.8rem, 5vw, 5rem)", textTransform: "uppercase", lineHeight: 0.92, letterSpacing: "-0.02em", color: "var(--text-color)", margin: "0 0 0.3rem" }}>Stain</h1>
                            <h1 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(2.8rem, 5vw, 5rem)", lineHeight: 0.92, color: "var(--cyan)", margin: "0 0 1.8rem", textTransform: "none" }}>Removal</h1>
                        </Reveal>
                        <Reveal delay={90}>
                            <p style={{ fontSize: "0.76rem", color: "var(--muted-color)", lineHeight: 1.9, marginBottom: "2rem", maxWidth: "420px" }}>
                                Targeted extraction for carpets, mats, and upholstery. Three-product enzymatic process — identify the stain, treat it at the source, extract, neutralize. Not scrubbing. Chemistry.
                            </p>
                        </Reveal>
                        <Reveal delay={130}>
                            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "2.6rem", color: "var(--cyan)", lineHeight: 1, display: "block", marginBottom: "0.25rem" }}>Get a Quote</span>
                            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.52rem", color: "var(--muted-color)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.5rem" }}>price depends on stain type, count & severity</div>
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
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                                <img src={imgStainBefore1} alt="Before Stain Removal" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: "2px", border: "1px solid var(--border-color)" }} />
                                <img src={imgStainAfter1} alt="After Stain Removal" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: "2px", border: "1px solid var(--border-color)" }} />
                                <img src={imgStainBefore2} alt="Before Stain Removal" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: "2px", border: "1px solid var(--border-color)" }} />
                                <img src={imgStainAfter2} alt="After Stain Removal" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: "2px", border: "1px solid var(--border-color)" }} />
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginTop: "0.5rem" }}>
                                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.48rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted-color)", textAlign: "center" }}>Before</div>
                                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.48rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cyan)", textAlign: "center" }}>After</div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ── STAIN TYPES ── */}
            <section className="py-16 md:py-20 border-b border-[var(--border-color)]">
                <div className="px-6 md:px-16 mx-auto" style={{ maxWidth: "1160px" }}>
                    <Reveal>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.56rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--cyan)", display: "block", marginBottom: "0.7rem" }}>// what I treat</span>
                        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 3.5vw, 3.2rem)", textTransform: "uppercase", lineHeight: 0.95, color: "var(--text-color)", margin: "0 0 0.6rem", letterSpacing: "-0.01em" }}>Stain Types</h2>
                        <p style={{ fontSize: "0.72rem", color: "var(--muted-color)", lineHeight: 1.85, maxWidth: "520px", marginBottom: "3rem" }}>Different stains require different chemistry. Identification before treatment is non-negotiable.</p>
                    </Reveal>
                    <div className="flex flex-col border border-[var(--border-color)] rounded-[2px] overflow-hidden">
                        {STAIN_TYPES.map((s, i) => (
                            <Reveal key={i} delay={i * 40}>
                                <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-4 sm:gap-8 p-6 sm:p-8 items-start sm:items-center bg-[var(--card-color)]" style={{ borderBottom: i < STAIN_TYPES.length - 1 ? "1px solid var(--border-color)" : "none" }}>
                                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--text-color)", lineHeight: 1 }}>{s.label}</div>
                                    <p style={{ fontSize: "0.63rem", color: "var(--muted-color)", lineHeight: 1.8, margin: 0 }}>{s.note}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PROCESS ── */}
            <section className="py-16 md:py-20 border-b border-[var(--border-color)]">
                <div className="px-6 md:px-16 mx-auto" style={{ maxWidth: "1160px" }}>
                    <Reveal>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.56rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--cyan)", display: "block", marginBottom: "0.7rem" }}>// the process</span>
                        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 3.5vw, 3.2rem)", textTransform: "uppercase", lineHeight: 0.95, color: "var(--text-color)", margin: "0 0 0.6rem", letterSpacing: "-0.01em" }}>How It Gets Done</h2>
                        <p style={{ fontSize: "0.72rem", color: "var(--muted-color)", lineHeight: 1.85, maxWidth: "520px", marginBottom: "3rem" }}>Six steps, in order. The sequence isn't optional — each step sets up the next.</p>
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
                            Four products, matched to the stain. The chemistry is the reason this works when scrubbing doesn't.
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

            {/* ── LIMITATIONS ── */}
            <section className="py-16 md:py-20 border-b border-[var(--border-color)]">
                <div className="px-6 md:px-16 mx-auto" style={{ maxWidth: "1160px" }}>
                    <Reveal>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.56rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: "0.7rem" }}>// be upfront</span>
                        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 3.5vw, 3.2rem)", textTransform: "uppercase", lineHeight: 0.95, color: "var(--text-color)", margin: "0 0 0.6rem", letterSpacing: "-0.01em" }}>What I Can't Promise</h2>
                        <p style={{ fontSize: "0.72rem", color: "var(--muted-color)", lineHeight: 1.85, maxWidth: "520px", marginBottom: "3rem" }}>Stain removal isn't always 100%. Here's when it isn't, and why.</p>
                    </Reveal>
                    <div className="flex flex-col border border-[var(--border-color)] rounded-[2px] overflow-hidden">
                        {LIMITATIONS.map((l, i) => (
                            <Reveal key={i} delay={i * 40}>
                                <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-4 sm:gap-8 p-6 sm:p-8 items-start sm:items-center bg-[var(--card-color)]" style={{ borderBottom: i < LIMITATIONS.length - 1 ? "1px solid var(--border-color)" : "none" }}>
                                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--text-color)", lineHeight: 1 }}>{l.label}</div>
                                    <p style={{ fontSize: "0.63rem", color: "var(--muted-color)", lineHeight: 1.8, margin: 0 }}>{l.note}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── RELATED SERVICES ── */}
            <section className="py-16 md:py-20 border-b border-[var(--border-color)] transition-colors duration-300 bg-[var(--bg-alt-color)]">
                <div className="px-6 md:px-16 mx-auto" style={{ maxWidth: "1160px" }}>
                    <Reveal>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.56rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--cyan)", display: "block", marginBottom: "0.7rem" }}>// also available</span>
                        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 3vw, 2.8rem)", textTransform: "uppercase", lineHeight: 0.95, color: "var(--text-color)", margin: "0 0 2.5rem", letterSpacing: "-0.01em" }}>Other Interior Services</h2>
                    </Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
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
                            Got a stain?
                        </h2>
                        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(2.8rem, 5.5vw, 5rem)", lineHeight: 0.92, color: "var(--cyan)", margin: "0 0 2rem", textTransform: "none" }}>
                            Let's get it out.
                        </h2>
                    </Reveal>
                    <Reveal delay={80}>
                        <p style={{ fontSize: "0.74rem", color: "var(--muted-color)", lineHeight: 1.85, maxWidth: "420px", margin: "0 auto 2.5rem" }}>
                            Send a photo and describe the stain — I'll let you know if it's treatable and what to expect before you book.
                        </p>
                    </Reveal>
                    <Reveal delay={140}>
                        <a href={BOOKING_LINK}
                            onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
                            style={{ display: "inline-block", background: "var(--cyan)", color: "#fff", padding: "1rem 2.4rem", borderRadius: "2px", fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.08em", textDecoration: "none", boxShadow: "0 0 40px rgba(0,188,212,0.25)", transition: "all 0.2s ease" }}>
                            Get a Quote
                        </a>
                    </Reveal>
                </div>
            </section>

        </div>
    );
}
