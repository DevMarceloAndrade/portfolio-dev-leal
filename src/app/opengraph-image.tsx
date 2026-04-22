import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Marcelo Leal | Portfólio Full Stack";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background:
            "radial-gradient(circle at 8% 0%, rgba(0,115,250,0.45), transparent 42%), radial-gradient(circle at 84% 12%, rgba(22,196,255,0.28), transparent 36%), linear-gradient(170deg, #030817 0%, #081737 55%, #0b2b67 100%)",
          color: "#e8f4ff",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            border: "2px solid rgba(168,215,255,0.9)",
            borderRadius: "999px",
            padding: "10px 16px",
            fontSize: 24,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            background: "rgba(0,115,250,0.15)",
          }}
        >
          Portfólio
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ fontSize: 82, fontWeight: 800, lineHeight: 1 }}>Marcelo Leal</div>
          <div style={{ fontSize: 36, fontWeight: 600, color: "#b6d9ff" }}>
            Full Stack Developer · Interfaces + APIs com foco em produto
          </div>
        </div>

        <div style={{ fontSize: 24, fontWeight: 700, color: "#8dc4ff" }}>marceloandradedev.vercel.app</div>
      </div>
    ),
    {
      ...size,
    }
  );
}
