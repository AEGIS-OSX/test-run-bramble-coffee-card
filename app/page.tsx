import { ProjectImage } from "@/app/components/ProjectImage";

export default function Home() {
  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
      {/* Hero */}
      <section style={{ marginTop: "64px" }}>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "64px",
            lineHeight: "1.0",
            letterSpacing: "-0.03em",
            fontWeight: 700,
            color: "var(--color-text-primary)",
            overflowWrap: "anywhere",
            minWidth: 0,
            margin: 0,
          }}
        >
          Bramble Coffee
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "18px",
            lineHeight: "1.7",
            color: "var(--color-text-muted)",
            margin: "16px 0 0 0",
          }}
        >
          Good coffee, made carefully.
        </p>
        <div style={{ marginTop: "32px" }}>
          <ProjectImage id="hero" className="w-full h-auto" />
        </div>
      </section>

      {/* About */}
      <section style={{ marginTop: "64px" }}>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "18px",
            lineHeight: "1.7",
            color: "var(--color-text-primary)",
            margin: 0,
          }}
        >
          A cart, a grinder, and a reason to be here. We serve simple coffee from a wooden counter at the edge of the market. No rush, just the morning and a clean cup.
        </p>
      </section>

      {/* Menu */}
      <section style={{ marginTop: "64px" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "28px",
            lineHeight: "1.2",
            letterSpacing: "-0.01em",
            fontWeight: 700,
            color: "var(--color-text-primary)",
            margin: "0 0 24px 0",
          }}
        >
          Menu
        </h2>
        {[
          { name: "Black Coffee", price: "4" },
          { name: "Espresso", price: "3" },
          { name: "Macchiato", price: "4" },
          { name: "Flat White", price: "5" },
        ].map((item) => (
          <div
            key={item.name}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              borderBottom: "1px solid var(--color-divider)",
              padding: "16px 0",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                lineHeight: "1.5",
                letterSpacing: "0.02em",
                color: "var(--color-text-primary)",
              }}
            >
              {item.name}
            </span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                lineHeight: "1.5",
                letterSpacing: "0.02em",
                color: "var(--color-accent)",
              }}
            >
              {item.price}
            </span>
          </div>
        ))}
      </section>

      {/* Hours */}
      <section style={{ marginTop: "64px" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "28px",
            lineHeight: "1.2",
            letterSpacing: "-0.01em",
            fontWeight: 700,
            color: "var(--color-text-primary)",
            margin: "0 0 16px 0",
          }}
        >
          Hours
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            lineHeight: "1.5",
            letterSpacing: "0.02em",
            color: "var(--color-text-primary)",
            margin: "0 0 8px 0",
          }}
        >
          Tuesday: Sunday
        </p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            lineHeight: "1.5",
            letterSpacing: "0.02em",
            color: "var(--color-text-primary)",
            margin: 0,
          }}
        >
          7am: 1pm
        </p>
      </section>

      {/* Footer */}
      <footer
        style={{
          marginTop: "64px",
          borderTop: "1px solid var(--color-divider)",
          paddingTop: "24px",
          paddingBottom: "64px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            lineHeight: "1.5",
            letterSpacing: "0.03em",
            color: "var(--color-text-muted)",
            margin: "0 0 4px 0",
          }}
        >
          1242 Bramble Lane
        </p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            lineHeight: "1.5",
            letterSpacing: "0.03em",
            color: "var(--color-text-muted)",
            margin: 0,
          }}
        >
          555-0124
        </p>
      </footer>
    </main>
  );
}
