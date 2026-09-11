import { EMAIL_ADDRESS, PHONE_NUMBER_FORMATTED, PHONE_NUMBER_RAW } from "../lib/constants";

export function Footer() {
    return (
        <footer style={{ borderTop: "1px solid var(--border-color)", background: "var(--bg-alt-color)", padding: "1.8rem 4rem", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.63rem", color: "var(--muted-color)", flexWrap: "wrap", gap: "1.5rem", transition: "background 0.28s ease" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                <a href="/" style={{ textDecoration: "none" }}>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1.05rem", letterSpacing: "0.08em", color: "var(--text-color)" }}>
                        Null<span style={{ color: "var(--cyan)" }}>Detailing</span>
                    </div>
                </a>
                <div style={{ fontSize: "0.55rem", opacity: 0.8, fontFamily: "'JetBrains Mono', monospace" }}>
                    © {new Date().getFullYear()} Null Detailing. All rights reserved.
                </div>
            </div>
            <div style={{ textAlign: "center" }}>
                <span style={{ display: "block", marginBottom: "0.2rem" }}>Service Areas: St. Charles and St. Louis Counties</span>
                <span style={{ fontSize: "0.55rem", opacity: 0.8 }}>Lake St. Louis · O'Fallon · Wentzville · St. Charles · St. Louis County, MO</span>
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
                <a href={`mailto:${EMAIL_ADDRESS}`} style={{ color: "var(--muted-color)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => e.target.style.color = "var(--cyan)"}
                    onMouseLeave={e => e.target.style.color = "var(--muted-color)"}
                >{EMAIL_ADDRESS}</a>
                <a href={`tel:${PHONE_NUMBER_RAW}`} style={{ color: "var(--muted-color)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => e.target.style.color = "var(--cyan)"}
                    onMouseLeave={e => e.target.style.color = "var(--muted-color)"}
                >{PHONE_NUMBER_FORMATTED}</a>
            </div>
        </footer>
    );
}
