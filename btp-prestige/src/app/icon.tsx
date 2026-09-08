// src/app/icon.tsx
import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1E2C4C",
          color: "#FDFBF7",
          fontSize: 20,
          fontWeight: 700,
          borderRadius: "8px",
        }}
      >
        C
        <span style={{ color: "#C2703D" }}>.</span>
      </div>
    ),
    { ...size }
  );
}