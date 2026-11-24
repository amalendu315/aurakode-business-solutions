import { ImageResponse } from "next/og";

export const alt = "AuraKode Business Solutions — Build the business they remember";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", overflow: "hidden", background: "#091320", color: "#f5f8f7", padding: "58px 72px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ position: "absolute", width: 540, height: 540, borderRadius: "50%", right: -45, top: 52, background: "radial-gradient(circle at 32% 28%, #bffaff 0%, #72dce9 20%, #195677 52%, #102036 76%)", boxShadow: "0 0 100px #52cce677" }} />
      <div style={{ position: "absolute", width: 650, height: 650, border: "2px solid #74dce255", borderRadius: "50%", right: -100, top: -10 }} />
      <div style={{ display: "flex", alignItems: "center", gap: 17, position: "relative" }}><div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 60, height: 60, border: "2px solid #85e8f2", color: "#85e8f2", fontSize: 24, fontWeight: 900 }}>AK</div><div style={{ display: "flex", flexDirection: "column" }}><span style={{ fontSize: 27, fontWeight: 800, letterSpacing: -1 }}>AuraKode</span><span style={{ fontSize: 10, letterSpacing: 3, color: "#bad3de" }}>BUSINESS SOLUTIONS</span></div></div>
      <div style={{ display: "flex", flexDirection: "column", position: "relative", gap: 12 }}><span style={{ color: "#8ce9f4", fontSize: 16, letterSpacing: 4, fontWeight: 700 }}>BRAND · DIGITAL · GROWTH</span><div style={{ display: "flex", flexDirection: "column", fontSize: 73, lineHeight: 1.01, letterSpacing: -4, fontWeight: 800 }}><span>Build the</span><span>business they</span><span>remember.</span></div><span style={{ fontSize: 21, color: "#bdd5df" }}>One partner. The whole picture.</span></div>
      <div style={{ display: "flex", justifyContent: "space-between", position: "relative", borderTop: "1px solid #88ddeb77", paddingTop: 20, color: "#8ebbc9", fontSize: 15, letterSpacing: 2 }}><span>IDENTITY / SYSTEMS / MOMENTUM</span><span>SILIGURI, INDIA</span></div>
    </div>,
    size,
  );
}
