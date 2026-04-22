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
            "radial-gradient(circle at 10% 0%, rgba(255,100,50,0.45), transparent 42%), radial-gradient(circle at 82% 18%, rgba(15,157,149,0.28), transparent 38%), linear-gradient(160deg, #fdf6ee 0%, #ffe8cf 50%, #ffdfc4 100%)",
          color: "#111111",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            border: "3px solid #111111",
            borderRadius: "999px",
            padding: "10px 16px",
            fontSize: 24,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            background: "#fff7ee",
          }}
        >
          Portfólio
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ fontSize: 82, fontWeight: 800, lineHeight: 1 }}>Marcelo Leal</div>
          <div style={{ fontSize: 36, fontWeight: 600, color: "#37312c" }}>
            Full Stack Developer · Interfaces + APIs com foco em produto
          </div>
        </div>

        <div style={{ fontSize: 24, fontWeight: 700, color: "#5d5247" }}>marceloandradedev.vercel.app</div>
      </div>
    ),
    {
      ...size,
    }
  );
}
