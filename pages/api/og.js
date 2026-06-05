import { ImageResponse } from "next/og";

export const config = { runtime: "edge" };

export default function handler(req) {
  const { searchParams } = new URL(req.url);

  const title = (searchParams.get("title") || "Guru").slice(0, 110);
  const author = (searchParams.get("author") || "guru").slice(0, 40);
  const date = (searchParams.get("date") || "").slice(0, 40);

  // Scale the title down a touch for long headlines so it always fits.
  const titleSize = title.length > 78 ? 56 : title.length > 48 ? 66 : 78;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#121212",
          backgroundImage: "linear-gradient(135deg, #1a1a1a 0%, #121212 55%)",
          padding: "72px",
        }}
      >
        {/* top mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 32,
            color: "#a1a1aa",
            letterSpacing: "-0.01em",
          }}
        >
          <span style={{ color: "#fafafa", marginRight: 14 }}>{"//"}</span>
          hackyguru.com
        </div>

        {/* title */}
        <div
          style={{
            display: "flex",
            fontSize: titleSize,
            fontWeight: 700,
            color: "#fafafa",
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
            maxWidth: "1000px",
          }}
        >
          {title}
        </div>

        {/* footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
            color: "#71717a",
          }}
        >
          <span style={{ color: "#fafafa", marginRight: 14 }}>{"/"}</span>
          {date}
          {date && author ? "  ·  " : ""}
          {author ? `by ${author}` : ""}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
