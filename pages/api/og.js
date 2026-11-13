import { ImageResponse } from "next/og";

export const config = { runtime: "edge" };

const BG = "#121212";

// Satori can only decode PNG and JPEG reliably.
const SUPPORTED_TYPES = ["image/png", "image/jpeg", "image/jpg"];

function toBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}

// Fetch the cover image through Next's image optimizer so a multi-MB source
// is resized to OG dimensions first. The optimizer only serves local paths
// and hosts allowed in next.config.mjs, so this can't be used as an open proxy.
// Returns a data URI, or null if anything goes wrong (we then fall back to
// the plain gradient card instead of failing the whole image).
async function loadCover(image, origin) {
  if (!image) return null;
  if (!image.startsWith("/") && !image.startsWith("https://")) return null;

  const url = `${origin}/_next/image?url=${encodeURIComponent(image)}&w=1200&q=75`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    // No webp/avif in Accept, so the optimizer keeps the source format.
    const res = await Promise.race([
      fetch(url, {
        headers: { Accept: "image/png,image/jpeg" },
        signal: controller.signal,
      }),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("cover fetch timed out")), 5000)
      ),
    ]);
    if (!res.ok) return null;
    const type = (res.headers.get("content-type") || "").split(";")[0].trim();
    if (!SUPPORTED_TYPES.includes(type)) return null;
    const buffer = await res.arrayBuffer();
    return `data:${type};base64,${toBase64(buffer)}`;
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

export default async function handler(req) {
  const { searchParams, origin } = new URL(req.url);

  const title = (searchParams.get("title") || "Guru").slice(0, 110);
  const author = (searchParams.get("author") || "guru").slice(0, 40);
  const date = (searchParams.get("date") || "").slice(0, 40);
  const cover = await loadCover(searchParams.get("image"), origin);

  // Scale the title down a touch for long headlines so it always fits.
  const titleSize = title.length > 78 ? 56 : title.length > 48 ? 66 : 78;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: BG,
          ...(cover
            ? {}
            : { backgroundImage: "linear-gradient(135deg, #1a1a1a 0%, #121212 55%)" }),
        }}
      >
        {cover && (
          // Same treatment as the article header: dimmed cover image with a
          // dark fade rising from the bottom.
          <img
            src={cover}
            width={1200}
            height={630}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.5,
            }}
          />
        )}
        {cover && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage:
                "linear-gradient(to top, rgba(18,18,18,1) 0%, rgba(18,18,18,0.5) 50%, rgba(18,18,18,0) 100%)",
            }}
          />
        )}

        <div
          style={{
            position: "relative",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
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

          <div style={{ display: "flex", flexDirection: "column" }}>
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
                marginBottom: 36,
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
                color: "#a1a1aa",
              }}
            >
              <span style={{ color: "#fafafa", marginRight: 14 }}>{"/"}</span>
              {date}
              {date && author ? "  ·  " : ""}
              {author ? `by ${author}` : ""}
            </div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
