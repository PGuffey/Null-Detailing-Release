import { useState, useEffect, useRef } from "react";
import { BOOKING_LINK } from "../lib/constants";

export function useReveal() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.08 });
        if (ref.current) obs.observe(ref.current);
        return () => {
            if (ref.current) obs.unobserve(ref.current);
            obs.disconnect();
        };
    }, []);
    return [ref, visible];
}

export function Reveal({ children, delay = 0, className = "" }) {
    const [ref, visible] = useReveal();
    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.5s ${delay}ms ease, transform 0.5s ${delay}ms ease`,
            }}
        >
            {children}
        </div>
    );
}

export function PhotoCard({ icon, label, badge, className = "", style = {}, image, alt }) {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            className={`relative rounded-sm overflow-hidden cursor-pointer transition-all duration-300 border ${className}`}
            style={{ borderColor: hovered ? "var(--cyan)" : undefined, ...style }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {image ? (
                <img src={image} alt={alt || "Detailing photo"} className="w-full h-full object-cover transition-transform duration-700" style={{ transform: hovered ? "scale(1.03)" : "scale(1)" }} />
            ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-3"
                    style={{ background: "linear-gradient(135deg, var(--card-color) 0%, var(--bg-color) 100%)" }}>
                    <span className="text-3xl opacity-20">{icon}</span>
                    <span className="text-center leading-relaxed" style={{ fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted-color)" }}>{label}</span>
                </div>
            )}
            <span className="absolute top-2 right-2 text-white font-bold rounded-sm px-1.5 py-0.5"
                style={{ fontSize: "0.48rem", letterSpacing: "0.1em", textTransform: "uppercase", background: "var(--cyan)" }}>
                {badge}
            </span>
        </div>
    );
}

export function GalleryItem({ icon, label, title, sub, className = "", image, imgPosition = "center", fit = "cover", alt }) {
    const [hovered, setHovered] = useState(false);
    return (
        <Reveal className={`h-full ${className}`}>
            <div
                className="relative flex flex-col rounded-sm overflow-hidden cursor-pointer transition-all duration-300 border h-full w-full"
                style={{ borderColor: hovered ? "var(--cyan)" : undefined }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {image ? (
                    <img
                        src={image}
                        alt={alt || title}
                        className="w-full h-full transition-transform duration-700"
                        style={{
                            objectFit: fit, // ✅ cover for most, contain for the first
                            objectPosition: imgPosition,
                            backgroundColor: fit === "contain" ? "#000" : "transparent", // ✅ black bars only when contain
                            transform: hovered ? "scale(1.05)" : "scale(1)",
                            filter: hovered ? "brightness(1.1)" : "brightness(0.9)",
                        }}
                    />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-4"
                        style={{ background: "linear-gradient(135deg, var(--card-color) 0%, var(--bg-color) 100%)", flexGrow: 1 }}>
                        <span className="text-4xl opacity-15">{icon}</span>
                        <span className="text-center leading-relaxed" style={{ fontSize: "0.58rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted-color)" }}>{label}</span>
                    </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-3 pt-8 transition-all duration-300"
                    style={{
                        background: "linear-gradient(0deg, rgba(0,0,0,0.88) 0%, transparent 100%)",
                        opacity: hovered ? 1 : 0,
                        transform: hovered ? "translateY(0)" : "translateY(4px)",
                    }}>
                    <div className="text-white" style={{ fontSize: "0.7rem" }}>{title}</div>
                    <div style={{ fontSize: "0.58rem", color: "var(--cyan)" }}>{sub}</div>
                </div>
            </div>
        </Reveal>
    );
}

export function PkgCard({ name, price, features, ctaText, featured = false }) {
    const [hovered, setHovered] = useState(false);
    return (
        <Reveal>
            <div
                className="relative rounded-sm p-7 h-full flex flex-col border transition-all duration-300"
                style={{
                    borderColor: featured ? "var(--cyan)" : hovered ? "rgba(0,188,212,0.4)" : "var(--border-color)",
                    background: "var(--card-color)"
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {/* top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-sm transition-all duration-300"
                    style={{ background: featured || hovered ? "var(--cyan)" : "var(--border-color)" }} />

                {featured && (
                    <span className="inline-block text-white font-bold mb-3 px-2 py-0.5 rounded-sm"
                        style={{ fontSize: "0.52rem", letterSpacing: "0.1em", textTransform: "uppercase", background: "var(--cyan)" }}>
                        Most Popular
                    </span>
                )}
                <div className="font-bold uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.3rem", letterSpacing: "0.05em", color: "var(--text-color)" }}>
                    {name}
                </div>

                {price ? (
                    <>
                        <div className="font-black leading-none mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "2.3rem", color: "var(--text-color)" }}>
                            <span style={{ fontSize: "1.1rem", color: "var(--muted-color)" }}>$</span>{price}
                        </div>
                        <div className="mb-5" style={{ fontSize: "0.58rem", color: "var(--muted-color)" }}>one-time · per session</div>
                    </>
                ) : (
                    <div className="italic mb-5" style={{ fontSize: "0.95rem", color: "var(--muted-color)" }}>Price TBD — reach out</div>
                )}

                <div className="h-px mb-4" style={{ background: "var(--border-color)" }} />

                <ul className="flex flex-col gap-2 mb-6 flex-1">
                    {features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2" style={{ fontSize: "0.67rem", color: "var(--muted-color)", lineHeight: 1.5 }}>
                            <span style={{ color: "var(--cyan)", flexShrink: 0 }}>✓</span>
                            {f}
                        </li>
                    ))}
                </ul>

                <a href={BOOKING_LINK}
                    className="block text-center rounded-sm py-2.5 font-bold transition-all duration-200"
                    style={{
                        fontSize: "0.67rem", letterSpacing: "0.08em", textTransform: "uppercase",
                        textDecoration: "none",
                        background: featured ? "var(--cyan)" : "transparent",
                        color: featured ? "#fff" : "var(--muted-color)",
                        border: featured ? "1px solid var(--cyan)" : "1px solid var(--border-color)",
                    }}
                    onMouseEnter={e => { if (!featured) { e.target.style.borderColor = "var(--cyan)"; e.target.style.color = "var(--cyan)"; } }}
                    onMouseLeave={e => { if (!featured) { e.target.style.borderColor = "var(--border-color)"; e.target.style.color = "var(--muted-color)"; } }}
                >
                    {ctaText}
                </a>
            </div>
        </Reveal>
    );
}

export function SwCard({ icon, iconKey, name, tag, desc }) {
    const [hovered, setHovered] = useState(false);

    const iconsMap = {
        bot: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="10" rx="2" />
                <circle cx="12" cy="5" r="2" />
                <path d="M12 7v4" />
                <line x1="8" y1="16" x2="8.01" y2="16" />
                <line x1="16" y1="16" x2="16.01" y2="16" />
            </svg>
        ),
        ai: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                <rect x="9" y="9" width="6" height="6" />
                <line x1="9" y1="1" x2="9" y2="4" />
                <line x1="15" y1="1" x2="15" y2="4" />
                <line x1="9" y1="20" x2="9" y2="23" />
                <line x1="15" y1="20" x2="15" y2="23" />
                <line x1="20" y1="9" x2="23" y2="9" />
                <line x1="20" y1="14" x2="23" y2="14" />
                <line x1="1" y1="9" x2="4" y2="9" />
                <line x1="1" y1="14" x2="4" y2="14" />
            </svg>
        ),
        dev: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="4 17 10 11 4 5" />
                <line x1="12" y1="19" x2="20" y2="19" />
            </svg>
        )
    };

    return (
        <Reveal>
            <div
                className="rounded-sm p-7 border transition-all duration-300 h-full flex flex-col"
                style={{
                    background: "var(--card-color)",
                    borderColor: hovered ? "rgba(0,188,212,0.45)" : "var(--border-color)",
                    transform: hovered ? "translateY(-3px)" : "translateY(0)",
                    boxShadow: hovered ? "0 12px 40px rgba(0,0,0,0.25)" : "none",
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <div className="mb-4" style={{ color: iconKey ? "var(--cyan)" : undefined }}>
                    {iconKey && iconsMap[iconKey] ? iconsMap[iconKey] : <span className="block text-3xl">{icon}</span>}
                </div>
                <div className="font-bold uppercase mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.25rem", color: "var(--text-color)" }}>{name}</div>
                <div className="mb-4" style={{ fontSize: "0.57rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--cyan)" }}>{tag}</div>
                <div className="h-px mb-4" style={{ background: "var(--border-color)" }} />
                <p className="mb-5 flex-1" style={{ fontSize: "0.68rem", color: "var(--muted-color)", lineHeight: 1.82 }}>{desc}</p>
                <div className="mt-auto">
                    <a href={BOOKING_LINK} className="inline-flex items-center gap-1.5 font-medium transition-all duration-200 hover:gap-3"
                        style={{ fontSize: "0.67rem", letterSpacing: "0.08em", color: "var(--cyan)", textDecoration: "none" }}>
                        Inquire →
                    </a>
                </div>
            </div>
        </Reveal>
    );
}

export function ReviewCard({ name, service, stars, text }) {
    const [hovered, setHovered] = useState(false);
    return (
        <Reveal>
            <div
                className="rounded-sm p-7 border transition-all duration-300 h-full flex flex-col"
                style={{
                    background: "var(--card-color)",
                    borderColor: hovered ? "rgba(0,188,212,0.45)" : "var(--border-color)",
                    transform: hovered ? "translateY(-3px)" : "translateY(0)",
                    boxShadow: hovered ? "0 12px 40px rgba(0,0,0,0.25)" : "none",
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <div className="flex gap-1 mb-3">
                    {[...Array(stars)].map((_, i) => (
                        <span key={i} style={{ color: "var(--gold)", fontSize: "0.8rem" }}>★</span>
                    ))}
                    {[...Array(5 - stars)].map((_, i) => (
                        <span key={i} style={{ color: "var(--border-color)", fontSize: "0.8rem" }}>★</span>
                    ))}
                </div>
                <p className="mb-5 flex-1 italic" style={{ fontSize: "0.72rem", color: "var(--text-color)", lineHeight: 1.7 }}>
                    "{text}"
                </p>
                <div className="mt-auto">
                    <div className="font-bold uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.9rem", color: "var(--text-color)" }}>{name}</div>
                    <div style={{ fontSize: "0.55rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--cyan)" }}>&gt; {service}</div>
                </div>
            </div>
        </Reveal>
    );
}

export function Stat({ num, label }) {
    const [hovered, setHovered] = useState(false);
    return (
        <Reveal className="flex-1">
            <div className="p-7 border-r transition-colors duration-200 last:border-r-0 h-full"
                style={{ borderColor: "var(--border-color)", background: hovered ? "var(--card-color)" : "transparent" }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <div className="font-black leading-none mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "2.5rem", color: "var(--cyan)" }}>{num}</div>
                <div style={{ fontSize: "0.6rem", letterSpacing: "0.13em", textTransform: "uppercase", color: "var(--muted-color)" }}>{label}</div>
            </div>
        </Reveal>
    );
}

export function FaqItem({ q, a }) {
    const [open, setOpen] = useState(false);
    return (
        <Reveal>
            <div
                onClick={() => setOpen(o => !o)}
                style={{
                    background: "var(--card-color)", border: open ? "1px solid var(--cyan)" : "1px solid var(--border-color)",
                    borderRadius: "4px", overflow: "hidden", cursor: "pointer",
                    transition: "border-color 0.25s ease",
                }}
            >
                <div style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "1.1rem 1.4rem",
                }}>
                    <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--text-color)", letterSpacing: "0.01em" }}>{q}</span>
                    <span style={{
                        color: "var(--cyan)", fontSize: "1rem", fontWeight: 700,
                        transform: open ? "rotate(45deg)" : "rotate(0deg)",
                        transition: "transform 0.25s ease", flexShrink: 0, marginLeft: "1rem",
                    }}>+</span>
                </div>
                <div style={{
                    maxHeight: open ? "1000px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease",
                }}>
                    <div style={{
                        padding: "0 1.4rem 1.1rem",
                        fontSize: "0.72rem", color: "var(--muted-color)", lineHeight: 1.85,
                        borderTop: "1px solid var(--border-color)", paddingTop: "1rem",
                    }}>
                        {a}
                    </div>
                </div>
            </div>
        </Reveal>
    );
}

export function ServiceRow({ name, price, last = false }) {
    return (
        <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "0.85rem 0",
            borderBottom: last ? "none" : "1px solid var(--border-color)",
        }}>
            <span style={{ fontSize: "0.75rem", color: "var(--text-color)" }}>{name}</span>
            <span style={{
                fontSize: "0.72rem", fontWeight: 700,
                color: price === "TBD" ? "var(--muted-color)" : "var(--cyan)",
                fontStyle: price === "TBD" ? "italic" : "normal",
            }}>{price === "TBD" ? "Quote on request" : `$${price}`}</span>
        </div>
    );
}
