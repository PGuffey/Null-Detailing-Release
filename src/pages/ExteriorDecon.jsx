import { Reveal } from "../components/ui";
import { BOOKING_LINK } from "../lib/constants";
import { Helmet } from "react-helmet-async";

import imgDarkFury from "../assets/products/SuperiorProducts_DarkFury.webp";
import imgTarX from "../assets/products/CARPROTarX-1.webp";
import imgAutoscrub from "../assets/products/nanoskin-autoscrub-fine-grade-clay-mitt.webp";
import imgWetCoat from "../assets/products/wet_coat-1.webp";

import imgDeconHero from "../assets/exterior/premium_car_detailing.webp";
import imgDeconBefore from "../assets/exterior/vette_Paint_Before.webp";
import imgDeconAfter from "../assets/exterior/vette_Paint_After.webp";

function ImgPlaceholder({ label, aspect = "4/3" }) {
    return (
        <div style={{ width: "100%", aspectRatio: aspect, background: "var(--bg-alt-color)", border: "1px solid var(--border-color)", borderRadius: "2px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.5rem", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, opacity: 0.2, backgroundImage: "repeating-linear-gradient(45deg, var(--border-color) 0, var(--border-color) 1px, transparent 0, transparent 50%)", backgroundSize: "18px 18px" }} />
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--border-color)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ position: "relative", zIndex: 1 }}>
                <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
            </svg>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.48rem", letterSpacing: "0.14em", color: "var(--border-color)", textTransform: "uppercase", position: "relative", zIndex: 1, textAlign: "center", padding: "0 0.5rem" }}>{label}</span>
        </div>
    );
}

const INCLUDES = [
    "Everything in Standard Exterior",
    "Iron fallout removal — CarPro Dark Fury",
    "Tar & adhesive removal — P&S TarX",
    "Clay mitt decontamination — Nanoskin Autoscrub",
    "Paint protection sealant — Gyeon WetCoat",
];

const CONTAMINANT_TYPES = [
    { label: "Iron Fallout", note: "Brake dust and industrial fallout embed into clear coat as metallic particles. They oxidize over time, causing paint degradation and that rough texture you feel when running your hand across a clean-looking panel. Invisible until you spray an iron remover — then it bleeds purple." },
    { label: "Tar & Road Film", note: "Petroleum-based contamination thrown up from the road surface. Hydrophobic and chemically inert — water and soap don't touch it. Requires solvent chemistry to dissolve the hydrocarbon bonds before a wash can remove it." },
    { label: "Industrial Fallout", note: "Airborne metallic and chemical particles from industrial sources — rail dust, factory emissions, construction sites. They hot-embed into paint on contact and are among the hardest contaminants to remove with wash chemistry alone." },
    { label: "Bonded Contamination", note: "Anything that has physically bonded to the clear coat surface — overspray, tree sap residue, water spot minerals. Chemical decontamination handles the chemistry; the clay mitt handles the mechanical removal of whatever's left bonded to the surface." },
];

const PROCESS = [
    { step: "01", title: "Foam Pre-Wash", body: "Foam applied across the full exterior to loosen surface contamination before any contact wash. Reduces the risk of introducing scratches by removing loose dirt before a mitt or sponge touches the paint." },
    { step: "02", title: "Iron Treatment", body: "CarPro Dark Fury applied across all painted panels, wheels, and glass. The pH-acidic formula reacts with ferrous contamination — iron particles bleed purple on contact. Dwell time is critical before rinsing." },
    { step: "03", title: "Tar Removal", body: "P&S TarX applied to areas with petroleum-based contamination — typically lower panels, wheel arches, and rocker panels. Solvent dissolves tar and adhesive residue that water-based chemistry cannot lift." },
    { step: "04", title: "Two-Bucket Wash", body: "Full hand wash using the two-bucket method — one bucket for clean soapy water, one for rinsing the mitt. Prevents reintroducing contamination back onto the paint with each pass." },
    { step: "05", title: "Clay Mitt", body: "Nanoskin Autoscrub clay mitt worked across all panels with lubrication. Mechanically removes bonded surface contamination that survived chemical treatment — the paint surface should feel glass-smooth." },
    { step: "06", title: "Rinse & Dry", body: "Full rinse to remove all product and released contamination. Dried with a clean microfiber to prevent water spots — especially important before sealant application." },
    { step: "07", title: "WetCoat Sealant", body: "Gyeon WetCoat applied to the wet paint surface immediately after the final rinse. SiO2-based formula bonds to the paint while wet — no buffing required. Provides hydrophobic protection and gloss in a single step." },
];

const PRODUCTS = [
    { brand: "CarPro", name: "Dark Fury", role: "Iron fallout & wheel cleaner", ph: "pH 4–5 — acidic", why: "Dark Fury uses ammonium thioglycolate to react with iron particles embedded in paint and wheels. The reaction is visible — contamination turns purple — so you can see the chemistry working in real time. The acidic pH is what makes it reactive with ferrous metals; this is also why it must be rinsed thoroughly before any alkaline products are introduced.", image: imgDarkFury },
    { brand: "P&S Detail Products", name: "TarX", role: "Tar & petroleum residue remover", ph: "Solvent-based — pH n/a", why: "Tar and road film are hydrocarbon-based — they don't respond to pH chemistry. TarX uses aromatic solvents to dissolve the molecular bonds holding petroleum contamination to the paint surface. Applied and wiped before the wash so the solvent doesn't interfere with subsequent water-based chemistry.", image: imgTarX },
    { brand: "Nanoskin", name: "Autoscrub Mitt", role: "Clay bar alternative", ph: "Mechanical — no chemistry", why: "The Autoscrub mitt replicates the action of a traditional clay bar using a nano-rubber surface that shears bonded contamination off the paint. Faster than clay, more durable, and reusable. Requires lubrication — used after chemical decontamination so the surface is as clean as possible before mechanical contact.", image: imgAutoscrub },
    { brand: "Gyeon", name: "WetCoat", role: "SiO2 paint sealant", ph: "pH 7 — neutral", why: "WetCoat is an Si02-infused sealant designed to be applied to wet paint immediately after rinsing. The silica bonds to the surface while water is still present — no buffing, no panels, no dry time required before the next step. Provides hydrophobic protection and enhanced gloss that lasts several months under normal conditions.", image: imgWetCoat },
];

const CHEMISTRY_NOTE = "Decontamination is sequenced deliberately: iron removal first because the acidic chemistry can interfere with solvents, tar removal second, wash to clear all product residue, clay last because mechanical abrasion on a chemically-clean surface is far more effective than clay on a contaminated one. WetCoat closes the process while the surface is in its cleanest state.";

const RELATED = [
    { title: "General Exterior", desc: "The standard baseline wash — hand wash, wheels, glass, tire dressing, quick wax.", href: "/services/exterior/general", tag: "// exterior", soon: false },
    { title: "Paint Correction", desc: "Swirl marks, scratches, and oxidation removed through machine polishing.", href: "/services/exterior/paint", tag: "// exterior", soon: true },
    { title: "Ceramic Coating", desc: "Long-term paint protection with a hard SiO2 layer. Decon wash is required before coating.", href: "/services/exterior/ceramic", tag: "// exterior", soon: true },
];

export function ExteriorDecon() {
    return (
        <div style={{ paddingTop: "54px" }}>
            <Helmet>
                <title>Decontamination Wash | Null Detailing</title>
                <meta name="description" content="Professional exterior decontamination wash, iron removal, and chemical decontamination in St. Louis and St. Charles." />
            </Helmet>

            {/* ── HERO ── */}
            <section className="px-6 md:px-16 pt-16 md:pt-24 mx-auto" style={{ maxWidth: "1160px" }}>
                <Reveal>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", flexWrap: "wrap" }}>
                        {[["Home", "/"], ["Services", "/services"], ["Exterior", "/services/exterior/general"], ["Decon Wash", null]].map(([label, href], i, arr) => (
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
                    <div>
                        <Reveal delay={40}>
                            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.56rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--cyan)", display: "block", marginBottom: "0.8rem" }}>// exterior — decontamination</span>
                            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2.8rem, 5vw, 5rem)", textTransform: "uppercase", lineHeight: 0.92, letterSpacing: "-0.02em", color: "var(--text-color)", margin: "0 0 0.3rem" }}>Decon</h1>
                            <h1 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(2.8rem, 5vw, 5rem)", lineHeight: 0.92, color: "var(--cyan)", margin: "0 0 1.8rem", textTransform: "none" }}>Wash</h1>
                        </Reveal>
                        <Reveal delay={90}>
                            <p style={{ fontSize: "0.76rem", color: "var(--muted-color)", lineHeight: 1.9, marginBottom: "2rem", maxWidth: "420px" }}>
                                A full exterior wash plus chemical and mechanical decontamination. Iron fallout, tar, bonded surface contamination — removed in sequence, with the right chemistry for each. Paint protection sealant applied at the end.
                            </p>
                        </Reveal>
                        <Reveal delay={130}>
                            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "2.6rem", color: "var(--cyan)", lineHeight: 1, display: "block", marginBottom: "0.25rem" }}>Get a Quote</span>
                            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.52rem", color: "var(--muted-color)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.5rem" }}>price depends on vehicle size & contamination level</div>
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
                            <img src={imgDeconHero} alt="Decontamination Wash" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: "2px", border: "1px solid var(--border-color)" }} />
                            <div style={{ marginTop: "1rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                                <img src={imgDeconBefore} alt="Before Decontamination" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: "2px", border: "1px solid var(--border-color)" }} />
                                <img src={imgDeconAfter} alt="After Decontamination" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: "2px", border: "1px solid var(--border-color)" }} />
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginTop: "0.35rem" }}>
                                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.48rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted-color)", textAlign: "center" }}>Before</div>
                                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.48rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cyan)", textAlign: "center" }}>After</div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ── WHY DECON ── */}
            <section className="py-16 md:py-20 border-b border-[var(--border-color)]">
                <div className="px-6 md:px-16 mx-auto" style={{ maxWidth: "1160px" }}>
                    <Reveal>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.56rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--cyan)", display: "block", marginBottom: "0.7rem" }}>// what's actually on your paint</span>
                        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 3.5vw, 3.2rem)", textTransform: "uppercase", lineHeight: 0.95, color: "var(--text-color)", margin: "0 0 0.6rem", letterSpacing: "-0.01em" }}>A Regular Wash Doesn't Get Everything</h2>
                        <p style={{ fontSize: "0.72rem", color: "var(--muted-color)", lineHeight: 1.85, maxWidth: "520px", marginBottom: "3rem" }}>Soap lifts loose dirt. It does nothing for contamination that has physically or chemically bonded to the clear coat. That requires a different approach for each type.</p>
                    </Reveal>
                    <div className="flex flex-col border border-[var(--border-color)] rounded-[2px] overflow-hidden">
                        {CONTAMINANT_TYPES.map((c, i) => (
                            <Reveal key={i} delay={i * 40}>
                                <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-4 sm:gap-8 p-6 sm:p-8 items-start bg-[var(--card-color)]" style={{ borderBottom: i < CONTAMINANT_TYPES.length - 1 ? "1px solid var(--border-color)" : "none" }}>
                                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--text-color)", lineHeight: 1.1, paddingTop: "2px" }}>{c.label}</div>
                                    <p style={{ fontSize: "0.63rem", color: "var(--muted-color)", lineHeight: 1.8, margin: 0 }}>{c.note}</p>
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
                        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 3.5vw, 3.2rem)", textTransform: "uppercase", lineHeight: 0.95, color: "var(--text-color)", margin: "0 0 0.6rem", letterSpacing: "-0.01em" }}>Seven Steps, In Order</h2>
                        <p style={{ fontSize: "0.72rem", color: "var(--muted-color)", lineHeight: 1.85, maxWidth: "520px", marginBottom: "3rem" }}>Sequence matters. Each stage sets up the next — and doing them out of order means repeating work or leaving contamination behind.</p>
                    </Reveal>
                    <div className="flex flex-col gap-[1px] bg-[var(--border-color)] border border-[var(--border-color)] rounded-[2px] overflow-hidden">
                        {/* Top Row (4 cards) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[var(--border-color)]">
                            {PROCESS.slice(0, 4).map((step, i) => (
                                <Reveal key={i} delay={i * 30}>
                                    <div
                                        style={{ padding: "1.8rem", height: "100%", background: "var(--card-color)", borderTop: "2px solid transparent", transition: "background 0.2s ease, border-top-color 0.2s ease", cursor: "default" }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.background = "rgba(0,188,212,0.04)";
                                            e.currentTarget.style.borderTopColor = "var(--cyan)";
                                            e.currentTarget.querySelector(".ps").style.color = "var(--cyan)";
                                            e.currentTarget.querySelector(".pt").style.color = "var(--cyan)";
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.background = "var(--card-color)";
                                            e.currentTarget.style.borderTopColor = "transparent";
                                            e.currentTarget.querySelector(".ps").style.color = "var(--muted-color)";
                                            e.currentTarget.querySelector(".pt").style.color = "var(--text-color)";
                                        }}
                                    >
                                        <div className="ps" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.52rem", color: "var(--muted-color)", letterSpacing: "0.12em", marginBottom: "0.85rem", transition: "color 0.2s" }}>{step.step}</div>
                                        <div className="pt" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1.05rem", textTransform: "uppercase", color: "var(--text-color)", marginBottom: "0.65rem", lineHeight: 1, transition: "color 0.2s" }}>{step.title}</div>
                                        <p style={{ fontSize: "0.62rem", color: "var(--muted-color)", lineHeight: 1.85 }}>{step.body}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                        {/* Bottom Row (3 cards) */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1px] bg-[var(--border-color)]">
                            {PROCESS.slice(4).map((step, i) => (
                                <Reveal key={i + 4} delay={(i + 4) * 30}>
                                    <div
                                        style={{ padding: "2rem", height: "100%", background: "var(--card-color)", borderTop: "2px solid transparent", transition: "background 0.2s ease, border-top-color 0.2s ease", cursor: "default" }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.background = "rgba(0,188,212,0.04)";
                                            e.currentTarget.style.borderTopColor = "var(--cyan)";
                                            e.currentTarget.querySelector(".ps").style.color = "var(--cyan)";
                                            e.currentTarget.querySelector(".pt").style.color = "var(--cyan)";
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.background = "var(--card-color)";
                                            e.currentTarget.style.borderTopColor = "transparent";
                                            e.currentTarget.querySelector(".ps").style.color = "var(--muted-color)";
                                            e.currentTarget.querySelector(".pt").style.color = "var(--text-color)";
                                        }}
                                    >
                                        <div className="ps" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.52rem", color: "var(--muted-color)", letterSpacing: "0.12em", marginBottom: "0.85rem", transition: "color 0.2s" }}>{step.step}</div>
                                        <div className="pt" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1.05rem", textTransform: "uppercase", color: "var(--text-color)", marginBottom: "0.65rem", lineHeight: 1, transition: "color 0.2s" }}>{step.title}</div>
                                        <p style={{ fontSize: "0.62rem", color: "var(--muted-color)", lineHeight: 1.85 }}>{step.body}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
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
                            Four products. Each one chosen for a specific type of contamination. None of them are interchangeable.
                        </p>
                    </Reveal>
                    <div className="flex flex-col gap-[1px] bg-[var(--border-color)] border border-[var(--border-color)] rounded-[2px] overflow-hidden mb-6">
                        {PRODUCTS.map((p, i) => (
                            <Reveal key={i} delay={i * 40}>
                                <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-6 sm:gap-8 items-start p-6 sm:p-8 bg-[var(--card-color)]">
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
                                    <div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem", flexWrap: "wrap" }}>
                                            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.46rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--cyan)", background: "rgba(0,188,212,0.08)", border: "1px solid rgba(0,188,212,0.2)", padding: "0.18rem 0.5rem", borderRadius: "2px" }}>{p.brand}</span>
                                            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.46rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted-color)" }}>{p.role}</span>
                                            <span style={{ marginLeft: "auto", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.46rem", letterSpacing: "0.1em", color: "var(--gold)", border: "1px solid var(--border-color)", padding: "0.18rem 0.5rem", borderRadius: "2px", whiteSpace: "nowrap" }}>{p.ph}</span>
                                        </div>
                                        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1.15rem", textTransform: "uppercase", color: "var(--text-color)", marginBottom: "0.6rem", lineHeight: 1 }}>{p.name}</div>
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
            <section className="py-16 md:py-20 border-b border-[var(--border-color)] transition-colors duration-300 bg-[var(--bg-color)]">
                <div className="px-6 md:px-16 mx-auto" style={{ maxWidth: "1160px" }}>
                    <Reveal>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.56rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--cyan)", display: "block", marginBottom: "0.7rem" }}>// also available</span>
                        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 3vw, 2.8rem)", textTransform: "uppercase", lineHeight: 0.95, color: "var(--text-color)", margin: "0 0 2.5rem", letterSpacing: "-0.01em" }}>Other Exterior Services</h2>
                    </Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                        {RELATED.map((r, i) => (
                            <Reveal key={i} delay={i * 60}>
                                {r.soon ? (
                                    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "var(--card-color)", border: "1px solid var(--border-color)", borderTop: "2px solid var(--border-color)", borderRadius: "2px", padding: "1.5rem", opacity: 0.45, cursor: "not-allowed" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
                                            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.48rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--cyan)" }}>{r.tag}</div>
                                            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.42rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)", border: "1px solid var(--border-color)", padding: "0.12rem 0.4rem", borderRadius: "2px", marginLeft: "auto" }}>Soon</div>
                                        </div>
                                        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1.2rem", textTransform: "uppercase", color: "var(--text-color)", marginBottom: "0.5rem", lineHeight: 1 }}>{r.title}</div>
                                        <p style={{ fontSize: "0.64rem", color: "var(--muted-color)", lineHeight: 1.75, flexGrow: 1 }}>{r.desc}</p>
                                    </div>
                                ) : (
                                    <a href={r.href}
                                        style={{ display: "flex", flexDirection: "column", height: "100%", textDecoration: "none", background: "var(--card-color)", border: "1px solid var(--border-color)", borderTop: "2px solid var(--border-color)", borderRadius: "2px", padding: "1.5rem", transition: "all 0.2s ease" }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.borderColor = "var(--cyan)";
                                            e.currentTarget.style.transform = "translateY(-2px)";
                                            const t = e.currentTarget.querySelector(".rt");
                                            if (t) t.style.color = "var(--cyan)";
                                            const a = e.currentTarget.querySelector(".ra");
                                            if (a) a.style.transform = "translateX(4px)";
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.borderColor = "var(--border-color)";
                                            e.currentTarget.style.transform = "translateY(0)";
                                            const t = e.currentTarget.querySelector(".rt");
                                            if (t) t.style.color = "var(--text-color)";
                                            const a = e.currentTarget.querySelector(".ra");
                                            if (a) a.style.transform = "translateX(0)";
                                        }}
                                    >
                                        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.48rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--cyan)", marginBottom: "0.5rem" }}>{r.tag}</div>
                                        <div className="rt" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1.2rem", textTransform: "uppercase", color: "var(--text-color)", marginBottom: "0.5rem", transition: "color 0.2s", lineHeight: 1 }}>{r.title}</div>
                                        <p style={{ fontSize: "0.64rem", color: "var(--muted-color)", lineHeight: 1.75, flexGrow: 1, marginBottom: "1rem" }}>{r.desc}</p>
                                        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cyan)", fontWeight: 700 }}>
                                            See Details <span className="ra" style={{ transition: "transform 0.2s ease", display: "inline-block" }}>→</span>
                                        </div>
                                    </a>
                                )}
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── BOOK CTA ── */}
            <section style={{ position: "relative", overflow: "hidden", background: "var(--bg-color)" }}>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "var(--cyan)" }} />
                <div className="relative z-10 px-6 md:px-16 py-16 md:py-28 text-center mx-auto" style={{ maxWidth: "1160px" }}>
                    <Reveal>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.56rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--cyan)", display: "block", marginBottom: "1.2rem" }}>// mobile · st. louis & st. charles county</span>
                        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(3rem, 6vw, 5.5rem)", textTransform: "uppercase", lineHeight: 0.92, letterSpacing: "-0.02em", color: "var(--text-color)", margin: "0 0 0.35rem" }}>
                            Paint that feels
                        </h2>
                        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(2.8rem, 5.5vw, 5rem)", lineHeight: 0.92, color: "var(--cyan)", margin: "0 0 2rem", textTransform: "none" }}>
                            glass-smooth.
                        </h2>
                    </Reveal>
                    <Reveal delay={80}>
                        <p style={{ fontSize: "0.74rem", color: "var(--muted-color)", lineHeight: 1.85, maxWidth: "420px", margin: "0 auto 2.5rem" }}>
                            Send a message with your vehicle and what you're seeing on the paint — I'll give you a quote and let you know what to expect.
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
