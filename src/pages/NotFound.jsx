import { Helmet } from "react-helmet-async";

export function NotFound() {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "80vh", textAlign: "center", padding: "2rem" }}>
            <Helmet>
                <title>Page Not Found | Null Detailing</title>
                <meta name="robots" content="noindex" />
            </Helmet>
            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "6rem", fontWeight: 900, color: "var(--cyan)", margin: 0, lineHeight: 1 }}>404</h1>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "2.5rem", fontWeight: 700, color: "var(--text-color)", margin: "0.5rem 0 1rem", textTransform: "uppercase" }}>Page Not Found</h2>
            <p style={{ color: "var(--muted-color)", marginBottom: "2rem" }}>The route you requested doesn't exist or has been moved.</p>
            <a href="/" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/'); window.dispatchEvent(new Event('popstate')); }} style={{
                background: "var(--cyan)", color: "#fff", padding: "0.8rem 2.4rem", borderRadius: "2px",
                fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: "0.88rem", textDecoration: "none",
                display: "inline-block", transition: "all 0.2s"
            }}
                onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
            >Return to Home</a>
        </div>
    );
}
