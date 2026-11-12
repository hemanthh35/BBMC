import { ImageResponse } from "next/og";

export const alt = "BBMC – Architects, Engineers & Vaasthu Consultants in Boduppal, Uppal, Hyderabad";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#111111", color: "#ffffff", padding: 72, fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 4, color: "#99dff6" }}>BALAJI BENCHMARK CONSULTANTS · SINCE 1995</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>Architects, Engineers &amp; Vaasthu Consultants</div>
          <div style={{ fontSize: 38, marginTop: 24, color: "#cccccc" }}>Boduppal · Uppal · Hyderabad</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 24, fontSize: 30 }}>
          <div style={{ width: 64, height: 6, background: "#00a8e0" }} />
          +91 93910 36765 · 500+ projects · 3000+ clients
        </div>
      </div>
    ),
    size,
  );
}
