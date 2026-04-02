import { ImageResponse } from "next/og";

export const alt = "The Marketplace JH | Jackson Freelancer Directory";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background: "linear-gradient(135deg, #2f1f16 0%, #6b3f2d 45%, #c7774f 100%)",
          color: "#fff6e8"
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 1.2,
            textTransform: "uppercase",
            opacity: 0.9
          }}
        >
          Jackson, Wyoming
        </div>
        <div
          style={{
            fontSize: 86,
            fontWeight: 700,
            lineHeight: 1.04,
            marginTop: 12,
            maxWidth: 1000
          }}
        >
          The Marketplace JH
        </div>
        <div
          style={{
            fontSize: 38,
            marginTop: 20,
            opacity: 0.95,
            maxWidth: 980
          }}
        >
          Freelancer Directory and Local Business Community
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
