import { ImageResponse } from "next/og";

export const alt = "AuraKode Business Solutions — Build the business they remember";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", overflow: "hidden", background: "#091320", color: "#f5f8f7", padding: "58px 72px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ position: "absolute", width: 520, height: 520, borderRadius: "50%", right: 10, top: 55, border: "1px solid #74dce255", display: "flex", alignItems: "center", justifyContent: "center", background: "#122838" }}><svg width="380" height="380" viewBox="0 0 128 128" fill="none"><path d="M12 101 40 27l28 74M26 74h28" stroke="#F0FAFB" strokeWidth="8"/><path d="M81 27v74m1-37 33-37M82 64l34 37" stroke="#73E7F5" strokeWidth="8"/></svg></div>
      <div style={{ display: "flex", alignItems: "center", gap: 17, position: "relative" }}><svg width="60" height="60" viewBox="0 0 128 128" fill="none"><path d="M12 101 40 27l28 74M26 74h28" stroke="#F0FAFB" strokeWidth="10"/><path d="M81 27v74m1-37 33-37M82 64l34 37" stroke="#73E7F5" strokeWidth="10"/></svg><div style={{ display: "flex", flexDirection: "column" }}><span style={{ fontSize: 27, fontWeight: 800, letterSpacing: -1 }}>AuraKode</span><span style={{ fontSize: 10, letterSpacing: 3, color: "#bad3de" }}>BUSINESS SOLUTIONS</span></div></div>
      <div style={{ display: "flex", flexDirection: "column", position: "relative", gap: 12 }}><span style={{ color: "#8ce9f4", fontSize: 16, letterSpacing: 4, fontWeight: 700 }}>BRAND · WEB · BUSINESS SYSTEMS</span><div style={{ display: "flex", flexDirection: "column", fontSize: 73, lineHeight: 1.01, letterSpacing: -4, fontWeight: 800 }}><span>Build the</span><span>business they</span><span>remember.</span></div><span style={{ fontSize: 21, color: "#bdd5df" }}>Identity, websites, and the tools behind them.</span></div>
      <div style={{ display: "flex", justifyContent: "space-between", position: "relative", borderTop: "1px solid #88ddeb77", paddingTop: 20, color: "#8ebbc9", fontSize: 15, letterSpacing: 2 }}><span>DESIGNED WITH INTENT · BUILT TO WORK</span><span>SILIGURI, INDIA</span></div>
    </div>,
    size,
  );
}
