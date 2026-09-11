import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Reveal, FaqItem, ServiceRow } from "../components/ui";
import { EMAIL_ADDRESS, PHONE_NUMBER_FORMATTED, PHONE_NUMBER_RAW } from "../lib/constants";

export function BookingView({ theme }) {
    const containerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        // Temporarily disabled online booking
        /*
        if (containerRef.current && containerRef.current.children.length === 0) {
            const script = document.createElement("script");
            script.src = "https://square.site/appointments/buyer/widget/puy59jy7y1bfki/LAF2RA42P83SH.js";
            script.async = true;
            containerRef.current.appendChild(script);
        }
        */
    }, []);

    const faqs = [
        {
            q: "Where do you service?",
            a: "I'm based in Lake Saint Louis, MO and serve the surrounding area — O'Fallon, Wentzville, St. Charles, and nearby. Not sure if you're in range? Just reach out and ask.",
        },
        {
            q: "Do I need to bring my car anywhere?",
            a: "Nope — I will come to you. However, for the time being, I do need access to a water source and a power outlet.",
        },
        {
            q: "How long does a detail take?",
            a: "A standard exterior takes roughly 1.5–2 hours. A standard interior is around 2–3 hours. That said, it really depends on the size of the vehicle and the condition of the car. Things like excessive pet hair removal, or heavy stain removal take longer, but I'll give you a time estimate when you book.",
        },
        {
            q: "What do I need to have ready?",
            a: "Just a water source nearby (outdoor spigot) and a power outlet. I bring all my own equipment, products, and supplies.",
        },
        {
            q: "What's your cancellation policy?",
            a: "Life happens — just give me at least 24 hours notice and we'll reschedule no problem. Same-day cancellations or no shows may be subject to a small fee.",
        },
        {
            q: "Do you work on any type of car?",
            a: "Cars, trucks, SUVs — yes. I don't currently service RVs or commercial vehicles, but reach out if you're unsure.",
        },
        {
            q: "How do I pay?",
            a: "For online bookings you will pay through square, and for in person bookings I perfer cash but I also accept card, venmo, or paypal.",
        },
        {
            q: "When are you available?",
            a: "I work around my school schedule, but am available most days. If your every curious about my schedule feel free to give me a call or text me.",
        },
    ];

    const services = [
        { name: "Standard Interior", price: "135" },
        { name: "Standard Exterior", price: "85" },
        { name: "Headlight Restoration", price: "100" },
        { name: "The Full Build (Combo)", price: "200" },
        { name: "Deep Interior", price: "TBD" },
        { name: "Decontamination Exterior", price: "TBD" },
    ];

    return (
        <div style={{
            background: "var(--bg-color)", color: "var(--text-color)",
            fontFamily: "'JetBrains Mono', monospace",
            minHeight: "100vh", overflowX: "hidden",
            paddingTop: "6rem",
            transition: "background 0.28s ease, color 0.28s ease",
        }}>
            <style>{`
        .booking-grid { grid-template-columns: 1fr 380px; }
        .faq-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 992px) {
          .booking-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .faq-grid { grid-template-columns: 1fr !important; }
          .hero-pad { padding: 4rem 1.5rem 3rem !important; }
        }
      `}</style>

            <Helmet>
                <title>Book Mobile Car Detailing Online | Null Detailing St. Louis</title>
                <meta name="description" content="Schedule your mobile car detailing service in St. Louis and St. Charles counties online. Quick, transparent booking with instant confirmation." />
            </Helmet>

            <div className="hero-pad" style={{ padding: "2rem 4rem 5rem" }}>
                <Reveal style={{ marginBottom: "5rem", marginTop: "1rem" }}>
                    <span className="section-tag" style={{ fontSize: "0.62rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--cyan)", display: "block", marginBottom: "0.7rem" }}>// book_online</span>
                    <h1 className="section-title" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(1.9rem, 3.5vw, 3rem)", textTransform: "uppercase", letterSpacing: "-0.01em", lineHeight: 1, color: "var(--text-color)" }}>Schedule Online</h1>
                    <p style={{ marginTop: "0.7rem", color: "var(--muted-color)", fontSize: "0.76rem", lineHeight: 1.85, maxWidth: "500px", paddingBottom: "1.5rem" }}>
                        Pick your service and a time that works for you. Confirmation sent instantly.
                    </p>
                </Reveal>

                <div className="booking-grid" style={{ display: "grid", gap: "3rem", alignItems: "stretch" }}>

                    {/* ── SQUARE EMBED REPLACEMENT (CTA) ── */}
                    <Reveal style={{ height: "100%" }}>
                        <div style={{
                            background: "var(--card-color)", border: "1px solid var(--border-color)",
                            borderRadius: "4px", overflow: "hidden",
                            height: "100%", width: "100%", position: "relative",
                            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                            padding: "4rem 2rem", minHeight: "400px",
                            transition: "background 0.28s ease", textAlign: "center"
                        }}>
                            {/* top accent */}
                            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "var(--cyan)" }} />
                            
                            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "1.5rem", opacity: 0.9 }}>
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>

                            <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(1.6rem, 4vw, 2.2rem)", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-color)", margin: "0 0 1rem 0", lineHeight: 1.1 }}>
                                Call or Text to Book
                            </h3>
                            <p style={{ color: "var(--muted-color)", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: "450px", margin: "0 0 2rem 0" }}>
                                Our online booking is temporarily offline for maintenance, but <strong style={{color: "var(--text-color)"}}>we are actively taking appointments</strong>! Reach out directly to secure your spot.
                            </p>

                            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%", maxWidth: "300px" }}>
                                <a href={`tel:${PHONE_NUMBER_RAW}`} style={{
                                    display: "flex", alignItems: "center", justifyContent: "center", gap: "0.7rem",
                                    background: "var(--cyan)", color: "#fff",
                                    padding: "1rem", borderRadius: "2px",
                                    textDecoration: "none", fontWeight: 700,
                                    fontSize: "1rem", letterSpacing: "0.05em",
                                    transition: "opacity 0.2s", width: "100%"
                                }}
                                    onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                                    onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                                >
                                    Call {PHONE_NUMBER_FORMATTED}
                                </a>
                                
                                <a href="/services" style={{
                                    display: "flex", alignItems: "center", justifyContent: "center", gap: "0.7rem",
                                    background: "transparent", color: "var(--text-color)",
                                    padding: "1rem", borderRadius: "2px",
                                    border: "1px solid var(--border-color)",
                                    textDecoration: "none", fontWeight: 600,
                                    fontSize: "0.9rem", letterSpacing: "0.05em",
                                    transition: "all 0.2s", width: "100%"
                                }}
                                    onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--cyan)"; e.currentTarget.style.color = "var(--cyan)"; }}
                                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-color)"; e.currentTarget.style.color = "var(--text-color)"; }}
                                >
                                    View Services & Pricing
                                </a>
                            </div>

                            {/* Keep containerRef for later restoration */}
                            <div ref={containerRef} style={{ display: "none" }} />
                        </div>
                    </Reveal>

                    {/* ── SIDEBAR ── */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>

                        {/* Call / Text card */}
                        <Reveal delay={100}>
                            <div style={{ background: "var(--card-color)", border: "1px solid var(--border-color)", borderRadius: "4px", overflow: "hidden", transition: "background 0.28s ease" }}>
                                <div style={{ background: "var(--cyan)", padding: "0.8rem 1.2rem" }}>
                                    <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#fff", margin: 0 }}>
                                        Prefer to Call, Text, or Email?
                                    </h2>
                                </div>
                                <div style={{ padding: "1.4rem" }}>
                                    <p style={{ fontSize: "0.7rem", color: "var(--muted-color)", lineHeight: 1.85, marginBottom: "1.2rem" }}>
                                        Happy to answer questions, give a quote, or just book directly over the phone. Texts usually get a faster reply.
                                    </p>
                                    <a href={`tel:${PHONE_NUMBER_RAW}`} style={{
                                        display: "flex", alignItems: "center", gap: "0.7rem",
                                        background: "var(--cyan)", color: "#fff",
                                        padding: "0.8rem 1.2rem", borderRadius: "2px",
                                        textDecoration: "none", fontWeight: 700,
                                        fontSize: "0.9rem", letterSpacing: "0.06em",
                                        marginBottom: "0.6rem", transition: "opacity 0.2s",
                                    }}
                                        onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                                        onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                                    >
                                        <span>{PHONE_NUMBER_FORMATTED}</span>
                                    </a>
                                    <a href={`sms:${PHONE_NUMBER_RAW}`} style={{
                                        display: "flex", alignItems: "center", gap: "0.7rem",
                                        background: "transparent", color: "var(--text-color)",
                                        padding: "0.8rem 1.2rem", borderRadius: "2px",
                                        border: "1px solid var(--border-color)",
                                        textDecoration: "none", fontWeight: 600,
                                        fontSize: "0.76rem", letterSpacing: "0.06em",
                                        marginBottom: "0.6rem", transition: "all 0.2s",
                                    }}
                                        onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--cyan)"; e.currentTarget.style.color = "var(--cyan)"; }}
                                        onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-color)"; e.currentTarget.style.color = "var(--text-color)"; }}
                                    >
                                        Send a Text
                                    </a>
                                    <a href={`mailto:${EMAIL_ADDRESS}`} style={{
                                        display: "flex", alignItems: "center", gap: "0.7rem",
                                        background: "transparent", color: "var(--text-color)",
                                        padding: "0.8rem 1.2rem", borderRadius: "2px",
                                        border: "1px solid var(--border-color)",
                                        textDecoration: "none", fontWeight: 600,
                                        fontSize: "0.76rem", letterSpacing: "0.06em",
                                        transition: "all 0.2s",
                                    }}
                                        onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--cyan)"; e.currentTarget.style.color = "var(--cyan)"; }}
                                        onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-color)"; e.currentTarget.style.color = "var(--text-color)"; }}
                                    >
                                        {EMAIL_ADDRESS}
                                    </a>
                                </div>
                            </div>
                        </Reveal>

                        {/* Services + pricing */}
                        <Reveal delay={150}>
                            <div style={{ background: "var(--card-color)", border: "1px solid var(--border-color)", borderRadius: "4px", overflow: "hidden", transition: "background 0.28s ease" }}>
                                <div style={{ padding: "0.8rem 1.2rem", borderBottom: "1px solid var(--border-color)" }}>
                                    <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-color)", margin: 0 }}>
                                        Services & Starting Prices
                                    </h3>
                                </div>
                                <div style={{ padding: "0.4rem 1.2rem 0.8rem" }}>
                                    {services.map((s, i) => (
                                        <ServiceRow key={i} {...s} last={i === services.length - 1} />
                                    ))}
                                </div>
                                <div style={{ padding: "0.8rem 1.2rem", borderTop: "1px solid var(--border-color)", background: theme === "dark" ? "#0f0f14" : "#f0f0e8" }}>
                                    <p style={{ fontSize: "0.62rem", color: "var(--muted-color)", lineHeight: 1.7, marginBottom: "0.5rem" }}>
                                        <strong style={{ color: "var(--text-color)" }}>Note on Condition:</strong> While I can deal with almost all levels of dirtiness. Certain conditions (pet hair, heavy stains, mold, etc.) may require a custom quote.
                                    </p>
                                    <p style={{ fontSize: "0.62rem", color: "var(--muted-color)", lineHeight: 1.7 }}>
                                        TBD prices — reach out and I'll give you a quote based on vehicle size and condition.
                                    </p>
                                </div>
                            </div>
                        </Reveal>

                    </div>
                </div>
            </div>

            {/* ── FAQ ── */}
            <div className="page-section" style={{ padding: "5rem 4rem", background: "var(--bg-alt-color)", borderTop: "1px solid var(--border-color)", transition: "background 0.28s ease" }}>
                <Reveal style={{ marginBottom: "2.5rem" }}>
                    <span className="section-tag" style={{ fontSize: "0.62rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--cyan)", display: "block", marginBottom: "0.7rem" }}>// faq.json</span>
                    <h2 className="section-title" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(1.9rem, 3.5vw, 3rem)", textTransform: "uppercase", letterSpacing: "-0.01em", lineHeight: 1, color: "var(--text-color)" }}>Common Questions</h2>
                    <p style={{ marginTop: "0.7rem", color: "var(--muted-color)", fontSize: "0.76rem", lineHeight: 1.85, maxWidth: "500px", paddingBottom: "1.5rem" }}>
                        Anything not answered here — just call, text, or email me.
                    </p>
                </Reveal>

                <div className="faq-grid" style={{ display: "grid", gap: "10px" }}>
                    {faqs.map((f, i) => <FaqItem key={i} {...f} />)}
                </div>
            </div>

        </div>
    );
}
