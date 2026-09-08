// src/app/opengraph-image.tsx
import { ImageResponse } from "next/og";
import { COMPANY } from "@/data/company";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "80px",
          background: "#FDFBF7",
          position: "relative",
        }}
      >
        {/* Halo organique doux en arrière-plan */}
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -160,
            width: 560,
            height: 560,
            borderRadius: "9999px",
            background: "rgba(194, 112, 61, 0.14)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 22,
            color: "#C2703D",
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Entreprise Générale du Bâtiment
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 700,
            color: "#2C2A28",
            lineHeight: 1.05,
            letterSpacing: -2,
          }}
        >
          {COMPANY.tagline}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 24,
            color: "#4A4744",
            maxWidth: 700,
          }}
        >
          {COMPANY.baseline}
        </div>
      </div>
    ),
    { ...size }
  );
}
