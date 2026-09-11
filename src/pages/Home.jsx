import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { BOOKING_LINK, GOOGLE_REVIEW_LINK } from "../lib/constants";
import { useTyped } from "../hooks/useTyped";
import { Reveal, PhotoCard, GalleryItem, PkgCard, SwCard, ReviewCard, Stat } from "../components/ui";

import imgExtChesterfield from "../assets/exterior/exterior_detail_chesterfield.webp";
import imgIntClean from "../assets/interior/Interior_detail_clean.webp";
import imgBmw from "../assets/exterior/Bmw_wash_exterior.webp";
import imgLakeStLouis from "../assets/exterior/car_detailing_lake_st_louis.webp";
import imgPremium from "../assets/exterior/premium_car_detailing.webp";
import imgIntDirty from "../assets/interior/Interior_detail_dirty.webp";
import imgProfile from "../assets/brand/luxury_car_detailer.webp";

// ── STEP CARD ─────────────────────────────────────────────────
function StepCard({ step }) {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                background: "var(--card-color)", borderRadius: "4px", padding: "1.4rem 1.2rem",
                border: `1px solid ${hovered ? step.color : "var(--border-color)"}`,
                borderTop: `2px solid ${step.color}`,
                transition: "all 0.25s ease",
                transform: hovered ? "translateY(-4px)" : "translateY(0)",
                boxShadow: hovered ? `0 12px 32px ${step.color}22` : "none",
                cursor: "default",
                height: "100%",
            }}
        >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.1rem" }}>
                <div style={{ width: "20px", height: "20px", borderRadius: "50%", border: `2px solid ${step.color}`, background: `${step.color}18`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: step.color, boxShadow: `0 0 6px ${step.color}` }} />
                </div>
                <span style={{ fontSize: "0.58rem", letterSpacing: "0.15em", color: step.color, fontWeight: 700 }}>{step.num}</span>
            </div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--text-color)", marginBottom: "0.4rem" }}>
                {step.label}
            </div>
            <div style={{ fontSize: "0.63rem", color: "var(--muted-color)", lineHeight: 1.7 }}>
                {step.sub}
            </div>
        </div>
    );
}

// ── SERVICES BUTTON ────────────────────────────────────────────
function ServicesButton() {
    const [hovered, setHovered] = useState(false);
    return (
        <a
            href="/services"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: "inline-flex", alignItems: "center", gap: "0.75rem",
                textDecoration: "none", flexShrink: 0,
                padding: "0.75rem 1.5rem",
                border: `1px solid ${hovered ? "var(--cyan)" : "var(--border-color)"}`,
                borderRadius: "2px",
                background: hovered ? "rgba(0,188,212,0.06)" : "transparent",
                color: hovered ? "var(--cyan)" : "var(--muted-color)",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase",
                transition: "all 0.2s ease",
            }}
        >
            Additional Services
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                style={{ transform: hovered ? "translateX(2px)" : "translateX(0)", transition: "transform 0.2s ease" }}>
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
        </a>
    );
}

const HERO_MESSAGES = [
    "Premium mobile detailing at your doorstep.",
    "Restoring that showroom shine.",
    "Zero shortcuts. Just clean cars.",
    "High quality detailing in St. Louis & St. Charles.",
];

export function Home({ theme }) {
    const typed = useTyped(HERO_MESSAGES);

    return (
        <div className="main-content">
            <Helmet>
                <title>Mobile Car Detailing in St. Louis & St. Charles | Null Detailing</title>
                <meta name="description" content="Top-rated mobile car detailing covering St. Louis and St. Charles counties. Interior, exterior, and complete auto detail packages brought directly to you." />
            </Helmet>

            {/* ── HERO ── */}
            <section style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", padding: "8rem 4rem 4rem", position: "relative", overflow: "hidden", background: "var(--bg-color)" }} className="hero-grid lg:pt-[12rem] xl:pt-[10rem]">
                {/* grid bg */}
                <div className="grid-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 65% 80% at 72% 50%, rgba(0,188,212,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

                <div style={{ position: "relative", zIndex: 1, paddingBottom: "2rem" }}>
                    {/* eyebrow */}
                    <div style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--cyan)", marginBottom: "1.1rem", display: "flex", alignItems: "flex-start", gap: "0.7rem", animation: "fadeUp 0.65s ease both", lineHeight: 1.5 }}>
                        <span style={{ width: "2rem", height: "1px", background: "var(--cyan)", display: "block", marginTop: "0.5em", flexShrink: 0 }} />
                        <span>Mobile Detailing · St. Charles and St. Louis Counties</span>
                    </div>

                    <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(3rem, 5.5vw, 5.5rem)", lineHeight: 0.95, letterSpacing: "-0.01em", textTransform: "uppercase", marginBottom: "1.4rem", color: "var(--text-color)", animation: "fadeUp 0.65s 0.12s ease both" }}>
                        <span className="sr-only">St. Louis Mobile Car Detailing - </span>
                        Your Cars<br />
                        <span style={{ color: "var(--cyan)" }}>Deserve Better.</span><br />
                        <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400, textTransform: "none", fontSize: "0.82em", color: "var(--muted-color)", display: "block" }}>
                            Detailing for the love of the game.
                        </span>
                    </h1>

                    {/* animated text element */}
                    <div style={{ background: "var(--card-color)", border: "1px solid var(--border-color)", borderLeft: "3px solid var(--cyan)", padding: "0.85rem 1.1rem", marginBottom: "1.7rem", fontSize: "0.75rem", color: "var(--muted-color)", borderRadius: "0 4px 4px 0", animation: "fadeUp 0.65s 0.25s ease both", transition: "background 0.28s ease" }}>
                        <span style={{ color: "var(--text-color)" }}>{typed}</span>
                        <span className="cursor-blink" />
                    </div>

                    <p style={{ color: "var(--muted-color)", fontSize: "0.78rem", lineHeight: 1.88, maxWidth: "440px", marginBottom: "2rem", animation: "fadeUp 0.65s 0.3s ease both" }}>
                        Great detailing is <strong style={{ color: "var(--text-color)" }}> chemistry, not just cleaning. </strong>Knowing the right products, the right process, and having patience where it matters. </p>

                    <div style={{ display: "flex", alignItems: "center", gap: "1.4rem", flexWrap: "wrap", animation: "fadeUp 0.65s 0.38s ease both" }}>
                        <a href={BOOKING_LINK} style={{
                            background: "var(--cyan)", color: "#fff", padding: "0.88rem 2.8rem", borderRadius: "2px",
                            fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.07em",
                            textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem",
                            boxShadow: "0 0 28px rgba(0,188,212,0.28)", transition: "all 0.2s",
                        }}
                            onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
                        >
                            Book Now
                        </a>
                        <a href="#work" style={{ color: "var(--muted-color)", fontSize: "0.74rem", letterSpacing: "0.08em", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.4rem", transition: "color 0.2s" }}
                            onMouseEnter={e => e.currentTarget.style.color = "var(--cyan)"}
                            onMouseLeave={e => e.currentTarget.style.color = "var(--muted-color)"}
                        >
                            See the work ↓
                        </a>
                    </div>
                </div>

                {/* Photos */}
                <div className="hero-photos" style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "10px", height: "490px", paddingLeft: "3rem" }}>
                    <div style={{ gridRow: "1 / 3", background: "var(--card-color)", border: "1px solid var(--border-color)", borderRadius: "4px", overflow: "hidden", position: "relative" }}>
                        <PhotoCard image={imgExtChesterfield} alt="High quality exterior wash of a Honda Civic in Chesterfield, Missouri" icon="🚗" label="High quality exterior wash of a Honda Civic in Chesterfield, Missouri" badge="Main Hero Shot" className="w-full h-full xl:min-h-[490px]" />
                    </div>
                    <PhotoCard image={imgIntClean} alt="Good stain removal on car carpets in Kirkwood, Missouri" icon="🪣" label="Good stain removal on car carpets in Kirkwood, Missouri" badge="Interior" className="border w-full flex-1 aspect-square lg:aspect-auto" style={{ background: "var(--card-color)", borderColor: "var(--border-color)" }} />
                    <PhotoCard image={imgBmw} alt="Waterless wash of a BMW in Creve Coeur, Missouri" icon="✨" label="Waterless wash of a BMW in Creve Coeur, Missouri" badge="Exterior" className="border w-full flex-1 aspect-square lg:aspect-auto" style={{ background: "var(--card-color)", borderColor: "var(--border-color)" }} />
                </div>
            </section>

            {/* ── STATS ── */}
            <div className="stats-bar" style={{ display: "flex", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)", background: "var(--bg-alt-color)", transition: "background 0.28s ease" }}>
                <Stat num="100%" label="Mobile — I come to you" />
                <Stat num="3-5 hr" label="Avg Detailing time" />
                <Stat num="100%" label="Shine on every car" />
                <Stat num="∞" label="Attention to detail" />
            </div>

            {/* ── GALLERY ── */}
            <section id="work" className="py-16 md:py-24 px-6 md:px-16" style={{ background: "var(--bg-alt-color)", transition: "background 0.28s ease" }}>
                <div style={{ marginBottom: "3rem" }}>
                    <span className="section-tag">// gallery</span>
                    <h2 className="section-title">The Output</h2>
                    <p style={{ marginTop: "0.7rem", color: "var(--muted-color)", fontSize: "0.76rem", lineHeight: 1.85, maxWidth: "500px" }}>
                        Every car is a pull request. Every detail is a commit. Nothing ships dirty.
                    </p>
                </div>

                <div className="gallery-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridAutoRows: "280px", gap: "10px" }}>
                    <div className="gallery-wide h-full" style={{ gridColumn: "1 / 3" }}>
                        <GalleryItem
                            image={imgLakeStLouis}
                            fit="contain"
                            imgPosition="center bottom"
                            alt="Foam pre-soak exterior car detailing service in Lake St. Louis Missouri"
                            icon="✨"
                            label="Wide photo of an exterior wash"
                            title="Exterior Wash"
                            sub="Pre wash > Contact wash > Protectant"
                            className="h-full"
                        />
                    </div>

                    <GalleryItem image={imgExtChesterfield} alt="Front end foam wash during mobile car detailing in Chesterfield Missouri" icon="🚙" label="Exterior Wash" title="Full Exterior Detail" sub="Decontamination wash" className="h-full" />
                    <GalleryItem image={imgPremium} alt="Fully detailed black BMW after exterior car detailing in St. Charles County Missouri" icon="🔍" label="Glass looking car finish" title="Glass-like Finish" sub="Streak free finish with protective wax" className="h-full" />

                    <GalleryItem image={imgIntDirty} alt="Heavily stained car carpet before interior detailing service in Lake St. Louis" icon="💡" label="Before: A dirty footwell" title="Interior Before" sub="Before deep clean" className="h-full" />
                    <GalleryItem image={imgIntClean} alt="Cleaned car carpet after deep interior detailing in O'Fallon Missouri" icon="" label="After: A clean footwell" title="Interior After" sub="Vacuumed, Shampooed, refreshed" className="h-full" />
                </div>

            </section>

            {/* ── PACKAGES ── */}
            <section id="packages" className="py-16 md:py-24 px-6 md:px-16" style={{ background: "var(--bg-color)", transition: "background 0.28s ease" }}>
                <div style={{ marginBottom: "3rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem" }}>
                    <div>
                        <span className="section-tag">// Services </span>
                        <h2 className="section-title">Pick Your Build</h2>
                        <p style={{ marginTop: "0.7rem", color: "var(--muted-color)", fontSize: "0.76rem", lineHeight: 1.85, maxWidth: "500px" }}>
                            Choose a package. I come to you, handle everything — no shortcuts, no fluff.
                        </p>
                    </div>
                    <ServicesButton />
                </div>

                <div className="packages-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px", marginBottom: "10px" }}>
                    <PkgCard name="Standard Interior" price="135 - 170"
                        features={["Full vacuum — seats, floors, trunk", "Wipe-down of all surfaces & dash", "Door jambs cleaned", "Interior windows cleaned", "Air freshener applied"]}
                        ctaText="Book Interior" />
                    <PkgCard name="Deep Interior"
                        features={["Everything in Standard Interior", "Shampoo carpets & seats", "Steam clean vents & crevices", "Odor elimination treatment", "Leather conditioning (if applicable)"]}
                        ctaText="Get a Quote" />
                    <PkgCard name="Standard Exterior" price="85 - 120"
                        features={["Hand wash & rinse", "Wheel & tire cleaning", "Exterior windows cleaned", "Tire dressing applied", "Quick spray wax / shine"]}
                        ctaText="Book Exterior" />
                    <PkgCard name="Decon & Deep Exterior"
                        features={["Everything in Standard Exterior", "Iron fallout & tar removal", "Clay bar decontamination", "Paint protection sealant", "Engine bay wipe-down (optional)"]}
                        ctaText="Get a Quote" />
                </div>

                <div className="packages-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                    <PkgCard name="Full Detail (Combo)" price="200 - 265" featured
                        features={["Standard Interior details included", "Standard Exterior details included", "Best value for a complete refresh", "The most popular choice for new clients"]}
                        ctaText="Book A Full Detail" />
                    <PkgCard name="Headlight Restoration" price="100"
                        features={["Sand & polish foggy lenses", "UV sealant to prevent re-yellowing", "Before & after photos included", "Results that last"]}
                        ctaText="Book Headlight Restoration" />
                </div>
            </section>

            {/* ── DIVIDER ── */}
            <div className="py-8 md:py-10 px-6 md:px-16 space-x-2 md:space-x-6" style={{ display: "flex", alignItems: "center", background: "var(--bg-alt-color)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)", transition: "background 0.28s ease" }}>
                <div style={{ flex: 1, height: "1px", background: "var(--border-color)" }} />
                <span style={{ fontSize: "0.62rem", letterSpacing: "0.15em", color: "var(--cyan)", whiteSpace: "nowrap", textTransform: "uppercase" }}>
                    DETAIL FOR THE LOVE OF THE GAME
                </span>
                <div style={{ flex: 1, height: "1px", background: "var(--border-color)" }} />
            </div>

            {/* ── PROCESS ── */}
            <section id="process" className="py-16 md:py-24 px-6 md:px-16" style={{ background: "var(--bg-color)", transition: "background 0.28s ease" }}>

                {/* header */}
                <Reveal>
                    <span className="section-tag">// Process</span>
                </Reveal>

                <div style={{ marginBottom: "4rem" }}>
                    <Reveal delay={60}>
                        <h2 className="section-title">
                            Trust the <span style={{ color: "var(--cyan)" }}>Process.</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={120}>
                        <p style={{ marginTop: "0.7rem", color: "var(--muted-color)", fontSize: "0.76rem", lineHeight: 1.85 }}>
                            All I need is access to electricity and water, and I will handle the rest.
                        </p>
                    </Reveal>
                </div>

                {/* horizontal flow */}
                {(() => {
                    const cyanHex = theme === "dark" ? "#00bcd4" : "#0097a7";
                    const steps = [
                        { num: "01", label: "Book", sub: "Online, call, or text", color: cyanHex },
                        { num: "02", label: "Confirm", sub: "Same-day response, time locked in", color: cyanHex },
                        { num: "03", label: "I Show Up", sub: "Equipment and detailing products — all me. I just need your water & power.", color: cyanHex },
                        { num: "04", label: "Detail", sub: "Full service, no shortcuts", color: cyanHex },
                        { num: "05", label: "Delivered", sub: "Before & after photos included", color: cyanHex },
                    ];
                    return (
                        <div style={{ position: "relative" }}>
                            <div style={{ position: "absolute", top: "28px", left: "calc(10% + 10px)", right: "calc(10% + 10px)", height: "1px", zIndex: 0, overflow: "visible" }}>
                                <div style={{ width: "100%", height: "1px", background: "var(--cyan)", boxShadow: "0 0 15px var(--cyan)", opacity: 0.5 }} />
                            </div>
                            <div className="packages-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "10px", position: "relative", zIndex: 1 }}>
                                {steps.map((step, i) => (
                                    <Reveal key={i} delay={i * 80}>
                                        <StepCard step={step} />
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    );
                })()}

            </section>

            {/* ── REVIEWS ── */}
            <section id="reviews" className="py-16 md:py-24 px-6 md:px-16" style={{ background: "var(--bg-alt-color)", transition: "background 0.28s ease" }}>
                <div style={{ marginBottom: "3rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem" }}>
                    <div>
                        <span className="section-tag">// Feedback</span>
                        <h2 className="section-title">Reviews</h2>
                        <p style={{ marginTop: "0.7rem", color: "var(--muted-color)", fontSize: "0.76rem", lineHeight: 1.85, maxWidth: "500px" }}>
                            Just launching the Google Business page, but the standards remain the same: 5 stars or nothing.
                        </p>
                    </div>
                    <a href={GOOGLE_REVIEW_LINK} target="_blank" rel="noopener noreferrer" style={{
                        background: "transparent", color: "var(--cyan)", padding: "0.6rem 1.4rem", borderRadius: "2px",
                        fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.05em",
                        textDecoration: "none", border: "1px solid var(--cyan)", transition: "all 0.2s",
                    }}
                        onMouseEnter={e => { e.currentTarget.style.background = "var(--cyan)"; e.currentTarget.style.color = "#fff"; }}
                        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--cyan)"; }}
                    >
                        Leave a Review on Google →
                    </a>
                </div>

                <div className="software-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
                    <ReviewCard name="Google Review" service="The Full Detail" stars={5}
                        text="Easy, simple process made my vette look brand new." />
                    <ReviewCard name="Google Review" service="Deep Interior" stars={5}
                        text="" />
                    <ReviewCard name="Google Review" service="Standard Exterior" stars={5}
                        text="" />
                </div>
            </section>

            {/* ── ABOUT ── */}
            <section id="about" className="about-grid py-16 md:py-24 px-6 md:px-16" style={{ background: "var(--bg-alt-color)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center", transition: "background 0.28s ease" }}>
                <Reveal>
                    <div style={{ aspectRatio: "3/4", background: "var(--card-color)", border: "1px solid var(--border-color)", borderRadius: "4px", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", transition: "background 0.28s ease" }}>
                        <img src={imgProfile} alt="Payton Guffey, founder of Null Detailing, mobile car detailing in Lake St. Louis" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                    </div>
                </Reveal>

                <Reveal delay={100}>
                    <span className="section-tag">// about me</span>
                    <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 3.2vw, 2.8rem)", textTransform: "uppercase", lineHeight: 1.05, marginBottom: "1.3rem", color: "var(--text-color)" }}>
                        Clean Cars.<br />
                        <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400, textTransform: "none", color: "var(--cyan)" }}>Happy Customers.</span>
                        <br />Shipping Both.
                    </h2>

                    <p style={{ color: "var(--muted-color)", fontSize: "0.77rem", lineHeight: 1.9, marginBottom: "0.9rem" }}>
                        My name is Payton Guffey, and I am currently a senior at St. Louis University, studying computer science. {" "}
                        I've always had a knack for keeping things clean and organized, in school and at home. So I started detailing my friends and families vehicles, realized I could make some money doing it, so I started Null Detailing.
                    </p>

                    <div style={{ margin: "1.3rem 0", background: "var(--card-color)", border: "1px solid var(--border-color)", borderLeft: "3px solid var(--gold)", borderRadius: "0 4px 4px 0", padding: "1.2rem 1.1rem", transition: "background 0.28s ease" }}>
                        <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-color)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.8rem" }}>The Situation, Objectively</div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem", fontSize: "0.75rem", color: "var(--muted-color)" }}>
                            <div><strong style={{ color: "var(--cyan)", display: "block", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Degree</strong> <span style={{ color: "var(--text-color)" }}>B.S. Computer Science</span></div>
                            <div><strong style={{ color: "var(--cyan)", display: "block", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Graduation Date</strong> <span style={{ color: "var(--text-color)" }}>May 2026</span></div>
                            <div><strong style={{ color: "var(--cyan)", display: "block", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Things Learned</strong> <span style={{ color: "var(--text-color)" }}>Too many to count</span></div>
                            <div><strong style={{ color: "var(--cyan)", display: "block", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Regrets</strong> <span style={{ color: "var(--text-color)" }}>None</span></div>
                        </div>
                    </div>

                    <p style={{ color: "var(--muted-color)", fontSize: "0.77rem", lineHeight: 1.9 }}>
                        I bring the same mindset I'd bring to my own vehicles —{" "}
                        <strong style={{ color: "var(--text-color)" }}>nothing leaves dirty.</strong> Based in{" "}
                        <strong style={{ color: "var(--text-color)" }}>St. Charles and St. Louis Counties</strong> — mobile detailing, I come to you.
                    </p>
                </Reveal>
            </section>

            {/* ── CTA ── */}
            <section id="cta" className="py-24 px-6 md:px-16" style={{ background: "var(--bg-color)", textAlign: "center", position: "relative", overflow: "hidden", transition: "background 0.28s ease" }}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 55% 55% at 50% 50%, rgba(0,188,212,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
                <span className="section-tag" style={{ display: "block" }}>// schedule or Book</span>
                <h2 className="section-title" style={{ marginBottom: "0.7rem" }}>Ready for a clean car?</h2>
                <p style={{ color: "var(--muted-color)", fontSize: "0.76rem", lineHeight: 1.85, maxWidth: "500px", margin: "0 auto 1.8rem" }}>
                    Book your appointment. I come to you, handle everything, and leave your car looking like it just came off the showroom floor.
                </p>

                <a href={BOOKING_LINK} style={{
                    background: "var(--cyan)", color: "#fff", padding: "1rem 2.4rem", borderRadius: "2px",
                    fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: "0.88rem", letterSpacing: "0.07em",
                    textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    boxShadow: "0 0 28px rgba(0,188,212,0.28)", transition: "all 0.2s",
                }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                    Book Your Appointment →
                </a>
            </section>
        </div>
    );
}
