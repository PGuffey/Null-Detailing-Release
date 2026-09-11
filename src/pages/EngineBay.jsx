import { Reveal } from "../components/ui";
import { BOOKING_LINK } from "../lib/constants";
import { Helmet } from "react-helmet-async";

import imgGreenStar from "../assets/products/Green_Star.webp";
import imgMotorplast from "../assets/products/Motorplast.webp";

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
    "Engine cool-down check before any product is applied",
    "Sensitive area protection — covered before rinsing",
    "Koch Chemie Green Star degreaser — full bay application",
    "Low-pressure rinse — no flooding electrical components",
    "DIY Detailing Rinseless Wash — detail clean on covers & plastics",
    "Koch Chemie Motorplast — dressing on rubber, plastic & hoses",
    "Final inspection under hood",
];

const WHAT_BUILDS_UP = [
    { label: "Oil & Grease", note: "Slow accumulation from valve cover seepage, oil cap residue, and general engine heat cycling. Alkaline degreaser chemistry is specifically what breaks hydrocarbon-based soils — water alone won't touch it." },
    { label: "Road Grime & Dust", note: "Pulled through the grille and wheel wells over time. Combines with oil residue to form a baked-on layer that insulates heat and hides leaks. A clean engine bay makes it easy to spot new fluid leaks early." },
    { label: "Rubber & Plastic Degradation", note: "UV and heat cause rubber hoses and plastic covers to dry out and oxidize. Dressing restores a protective layer and slows further degradation — not just cosmetic." },
    { label: "Brake Dust & Corrosion", note: "Ferrous contamination makes its way into the engine bay from wheel wells. Left untreated it contributes to surface corrosion on metal components and brackets." },
];

const PROCESS = [
    { step: "01", title: "Cool-Down Check", body: "Nothing goes on a hot engine. Heat causes chemicals to flash-dry before they can work, damages rubber seals, and creates steam risk during rinsing. The engine needs to be cool to the touch before any product is applied — full stop." },
    { step: "02", title: "Protect Sensitive Areas", body: "Exposed air intakes, fuse boxes, and any uncovered electrical connectors are identified and covered before any liquid is introduced. This isn't optional — it's what makes the difference between a clean engine bay and an electrical fault." },
    { step: "03", title: "Degrease", body: "Koch Chemie Green Star diluted to approximately 1:10 applied across all surfaces — plastic covers, metal components, rubber hoses, and the firewall. The alkaline pH breaks down oil and grease at the molecular level. Dwell time respected before agitation." },
    { step: "04", title: "Agitate & Low-Pressure Rinse", body: "Stubborn buildup worked with a detailing brush before rinsing. Low-pressure water only — high pressure risks forcing water into electrical connectors and sensors. Thorough but controlled." },
    { step: "05", title: "Rinseless Detail Clean", body: "DIY Detailing Rinseless Wash applied to plastic covers, engine dress panels, and any areas that need a final clean pass without another rinse cycle. Removes residual product and leaves a clean, uniform surface." },
    { step: "06", title: "Dress & Protect", body: "Koch Chemie Motorplast applied to rubber hoses, plastic trim, and covers while still slightly damp. Heat-resistant to 250°C, water-displacing, non-greasy finish. Protects against UV degradation and restores appearance without an oily sheen." },
];

const PRODUCTS = [
    {
        brand: "Koch Chemie",
        name: "Green Star",
        role: "All-purpose degreaser",
        ph: "pH 11–12 — strongly alkaline",
        why: "Green Star at 1:10 dilution is the right tool for engine bay degreasing. The strongly alkaline pH saponifies oil and grease — breaking them into water-soluble compounds that can be rinsed away. Safe on plastics, rubber, and metal at this dilution. The same product used in exterior pre-wash, so it's already in the kit with a known performance profile.",
        image: imgGreenStar,
    },
    {
        brand: "DIY Detailing",
        name: "Rinseless Wash",
        role: "Detail clean — covers & plastics",
        ph: "pH 7–8 — neutral to mildly alkaline",
        why: "Applied after the degreaser rinse for a final clean pass on plastic covers and engine dress panels. Encapsulates residual contamination without needing another full rinse cycle — important in an environment where minimizing water introduction is the goal. Leaves a clean, uniform surface ready for dressing.",
    },
    {
        brand: "Koch Chemie",
        name: "Motorplast",
        role: "Engine bay dressing & protectant",
        ph: "pH 7 — neutral",
        why: "Motorplast is purpose-built for engine bays — not a generic tire dressing repurposed for underhood use. Heat-resistant to 250°C, water-displacing, and approved for use on Daimler vehicles. Applied to rubber hoses, plastic trim, and covers. Produces a natural, non-greasy finish that doesn't attract dust or drip onto hot components.",
        image: imgMotorplast,
    },
];

const LIMITATIONS = [
    { label: "Hot engines", note: "The engine must be completely cool before any product is applied. If the car was recently driven, the service will be rescheduled or delayed — this isn't negotiable." },
    { label: "Active fluid leaks", note: "An engine bay with active oil, coolant, or transmission fluid leaks won't be cleaned — the result won't hold, and cleaning can mask a problem that needs a mechanic's attention first." },
    { label: "Older non-sealed electronics", note: "Pre-2000s vehicles and some older modified engines may have exposed, non-sealed electrical components that make water introduction risky. These are assessed case by case before booking is confirmed." },
    { label: "Severe baked-on buildup", note: "Decades of unaddressed accumulation can be cleaned, but may not come fully clean in a single session. If that's what we're working with, I'll say so upfront, set realistic expectations, and we can decide whether one session or multiple makes more sense." },
];

const RELATED = [
    { title: "General Exterior", desc: "The standard exterior wash — hand wash, wheels, glass, tire dressing, quick wax.", href: "/services/exterior/general", tag: "// exterior", soon: false },
    { title: "Decon Wash", desc: "Iron fallout, clay bar, and tar removal — the full decon treatment beyond a standard wash.", href: "/services/exterior/decon", tag: "// exterior", soon: false },
    { title: "Paint Correction", desc: "Machine polish to remove swirls, scratches, and oxidation from the clear coat.", href: "/services/exterior/paint", tag: "// exterior", soon: true },
];

export function EngineBay() {
    return (
        <div style={{ paddingTop: "54px" }}>
            <Helmet>
                <title>Engine Bay Cleaning | Null Detailing</title>
                <meta name="description" content="Degreased, detailed, and dressed engine bay cleaning in St. Louis and St. Charles counties." />
            </Helmet>

            {/* HERO */}
            <section className="px-6 md:px-16 pt-16 md:pt-24 mx-auto" style={{ maxWidth: "1160px" }}>
                <Reveal>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", flexWrap: "wrap" }}>
                        {[["Home", "/"], ["Services", "/services"], ["Exterior", "/services/exterior/general"], ["Engine Bay", null]].map(([label, href], i, arr) => (
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
                            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.56rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--cyan)", display: "block", marginBottom: "0.8rem" }}>// exterior — underhood</span>
                            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2.8rem, 5vw, 5rem)", textTransform: "uppercase", lineHeight: 0.92, letterSpacing: "-0.02em", color: "var(--text-color)", margin: "0 0 0.3rem" }}>Engine Bay</h1>
                            <h1 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(2.8rem, 5vw, 5rem)", lineHeight: 0.92, color: "var(--cyan)", margin: "0 0 1.8rem", textTransform: "none" }}>Cleaning.</h1>
                        </Reveal>
                        <Reveal delay={90}>
                            <div style={{ display: "inline-block", background: "var(--cyan)", color: "#fff", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.55rem", padding: "0.3rem 0.6rem", borderRadius: "2px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem", fontWeight: "bold" }}>Coming Soon</div>
                            <p style={{ fontSize: "0.76rem", color: "var(--muted-color)", lineHeight: 1.9, marginBottom: "2rem", maxWidth: "420px" }}>
                                Degreased, detailed, and dressed. Oil residue, road grime, and oxidized plastics — removed with chemistry matched to what's actually down there, and protected so it stays clean longer.
                            </p>
                        </Reveal>
                        <Reveal delay={130}>
                            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "2.6rem", color: "var(--cyan)", lineHeight: 1, display: "block", marginBottom: "0.25rem" }}>Get a Quote</span>
                            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.52rem", color: "var(--muted-color)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.5rem" }}>price depends on engine size & contamination level</div>
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
                            <ImgPlaceholder label="engine bay photo" aspect="4/3" />
                            <div style={{ marginTop: "1rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                                <ImgPlaceholder label="before" aspect="4/3" />
                                <ImgPlaceholder label="after" aspect="4/3" />
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginTop: "0.35rem" }}>
                                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.48rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted-color)", textAlign: "center" }}>Before</div>
                                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.48rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cyan)", textAlign: "center" }}>After</div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* WHAT BUILDS UP */}
            <section className="py-16 md:py-20 border-b border-[var(--border-color)]">
                <div className="px-6 md:px-16 mx-auto" style={{ maxWidth: "1160px" }}>
                    <Reveal>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.56rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--cyan)", display: "block", marginBottom: "0.7rem" }}>// what's actually down there</span>
                        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 3.5vw, 3.2rem)", textTransform: "uppercase", lineHeight: 0.95, color: "var(--text-color)", margin: "0 0 0.6rem", letterSpacing: "-0.01em" }}>What Builds Up & Why It Matters</h2>
                        <p style={{ fontSize: "0.72rem", color: "var(--muted-color)", lineHeight: 1.85, maxWidth: "520px", marginBottom: "3rem" }}>Most engine bays are never cleaned. The accumulation isn't just cosmetic — it traps heat, hides leaks, and degrades rubber and plastic over time.</p>
                    </Reveal>
                    <div className="flex flex-col border border-[var(--border-color)] rounded-[2px] overflow-hidden">
                        {WHAT_BUILDS_UP.map((w, i) => (
                            <Reveal key={i} delay={i * 40}>
                                <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-4 sm:gap-8 p-6 sm:p-8 items-start bg-[var(--card-color)]" style={{ borderBottom: i < WHAT_BUILDS_UP.length - 1 ? "1px solid var(--border-color)" : "none" }}>
                                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--text-color)", lineHeight: 1.1, paddingTop: "2px" }}>{w.label}</div>
                                    <p style={{ fontSize: "0.63rem", color: "var(--muted-color)", lineHeight: 1.8, margin: 0 }}>{w.note}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section className="py-16 md:py-20 border-b border-[var(--border-color)]">
                <div className="px-6 md:px-16 mx-auto" style={{ maxWidth: "1160px" }}>
                    <Reveal>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.56rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--cyan)", display: "block", marginBottom: "0.7rem" }}>// the process</span>
                        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 3.5vw, 3.2rem)", textTransform: "uppercase", lineHeight: 0.95, color: "var(--text-color)", margin: "0 0 0.6rem", letterSpacing: "-0.01em" }}>Six Steps, In Order</h2>
                        <p style={{ fontSize: "0.72rem", color: "var(--muted-color)", lineHeight: 1.85, maxWidth: "520px", marginBottom: "3rem" }}>Engine bay cleaning is one of the higher-risk detailing services — the sequence exists to protect the car, not just clean it.</p>
                    </Reveal>
                    <div className="flex flex-col gap-[1px] bg-[var(--border-color)] border border-[var(--border-color)] rounded-[2px] overflow-hidden">
                        {/* Top Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[var(--border-color)]">
                            {PROCESS.slice(0, 3).map((step, i) => (
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
                        {/* Bottom Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[var(--border-color)]">
                            {PROCESS.slice(3).map((step, i) => (
                                <Reveal key={i + 3} delay={(i + 3) * 30}>
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

            {/* PRODUCTS */}
            <section className="py-16 md:py-20 border-b border-[var(--border-color)] transition-colors duration-300 bg-[var(--bg-alt-color)]">
                <div className="px-6 md:px-16 mx-auto" style={{ maxWidth: "1160px" }}>
                    <Reveal>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.56rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--cyan)", display: "block", marginBottom: "0.7rem" }}>// the chemistry</span>
                        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 3.5vw, 3.2rem)", textTransform: "uppercase", lineHeight: 0.95, color: "var(--text-color)", margin: "0 0 0.6rem", letterSpacing: "-0.01em" }}>What Goes on Your Engine & Why</h2>
                        <p style={{ fontSize: "0.72rem", color: "var(--muted-color)", lineHeight: 1.85, maxWidth: "580px", marginBottom: "3rem" }}>
                            Three products, each with a specific job. Nothing applied that doesn't have a reason to be there.
                        </p>
                    </Reveal>
                    <div className="flex flex-col gap-[1px] bg-[var(--border-color)] border border-[var(--border-color)] rounded-[2px] overflow-hidden mb-6">
                        {PRODUCTS.map((p, i) => (
                            <Reveal key={i} delay={i * 40}>
                                <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-6 sm:gap-8 items-start p-6 sm:p-8 bg-[var(--card-color)]" style={{ borderBottom: i < PRODUCTS.length - 1 ? "1px solid var(--border-color)" : "none" }}>
                                    <div className="aspect-square flex flex-col items-center justify-center gap-[0.4rem] relative overflow-hidden shrink-0 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-[2px] w-24 sm:w-full max-w-[120px] mx-auto sm:mx-0">
                                        <div style={{ position: "absolute", inset: 0, opacity: 0.15, backgroundImage: "repeating-linear-gradient(45deg, var(--border-color) 0, var(--border-color) 1px, transparent 0, transparent 50%)", backgroundSize: "14px 14px" }} />
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--border-color)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ position: "relative", zIndex: 1 }}>
                                            <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                                        </svg>
                                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.38rem", letterSpacing: "0.1em", color: "var(--border-color)", textTransform: "uppercase", position: "relative", zIndex: 1, textAlign: "center", padding: "0 0.3rem" }}>product photo</span>
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
                </div>
            </section>

            {/* LIMITATIONS */}
            <section className="py-16 md:py-20 border-b border-[var(--border-color)]">
                <div className="px-6 md:px-16 mx-auto" style={{ maxWidth: "1160px" }}>
                    <Reveal>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.56rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: "0.7rem" }}>// be upfront</span>
                        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 3.5vw, 3.2rem)", textTransform: "uppercase", lineHeight: 0.95, color: "var(--text-color)", margin: "0 0 0.6rem", letterSpacing: "-0.01em" }}>Limitations</h2>
                        <p style={{ fontSize: "0.72rem", color: "var(--muted-color)", lineHeight: 1.85, maxWidth: "520px", marginBottom: "3rem" }}>Engine bay cleaning has more variables than any other service. These aren't fine print — they're what sets the right expectations before we start.</p>
                    </Reveal>
                    <div className="flex flex-col border border-[var(--border-color)] rounded-[2px] overflow-hidden">
                        {LIMITATIONS.map((l, i) => (
                            <Reveal key={i} delay={i * 40}>
                                <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-4 sm:gap-8 p-6 sm:p-8 items-start bg-[var(--card-color)]" style={{ borderBottom: i < LIMITATIONS.length - 1 ? "1px solid var(--border-color)" : "none" }}>
                                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--text-color)", lineHeight: 1.1, paddingTop: "2px" }}>{l.label}</div>
                                    <p style={{ fontSize: "0.63rem", color: "var(--muted-color)", lineHeight: 1.8, margin: 0 }}>{l.note}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* RELATED */}
            <section className="py-16 md:py-20 border-b border-[var(--border-color)] transition-colors duration-300 bg-[var(--bg-alt-color)]">
                <div className="px-6 md:px-16 mx-auto" style={{ maxWidth: "1160px" }}>
                    <Reveal>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.56rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--cyan)", display: "block", marginBottom: "0.7rem" }}>// also available</span>
                        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 3vw, 2.8rem)", textTransform: "uppercase", lineHeight: 0.95, color: "var(--text-color)", margin: "0 0 2.5rem", letterSpacing: "-0.01em" }}>Other Exterior Services</h2>
                    </Reveal>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
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

            {/* CTA */}
            <section style={{ position: "relative", overflow: "hidden", background: "var(--bg-color)" }}>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "var(--cyan)" }} />
                <div className="relative z-10 px-6 md:px-16 py-16 md:py-28 text-center mx-auto" style={{ maxWidth: "1160px" }}>
                    <Reveal>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.56rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--cyan)", display: "block", marginBottom: "1.2rem" }}>// mobile · st. louis & st. charles county</span>
                        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(3rem, 6vw, 5.5rem)", textTransform: "uppercase", lineHeight: 0.92, letterSpacing: "-0.02em", color: "var(--text-color)", margin: "0 0 0.35rem" }}>Under the hood</h2>
                        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(2.8rem, 5.5vw, 5rem)", lineHeight: 0.92, color: "var(--cyan)", margin: "0 0 2rem", textTransform: "none" }}>clean as the rest.</h2>
                    </Reveal>
                    <Reveal delay={80}>
                        <p style={{ fontSize: "0.74rem", color: "var(--muted-color)", lineHeight: 1.85, maxWidth: "400px", margin: "0 auto 2.5rem" }}>
                            Send a photo of your engine bay and I'll let you know what to expect before you book — condition and contamination level affect both price and timeline.
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
