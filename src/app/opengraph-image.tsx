import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Rafa'Na'ilah Septia, backend engineer and AI enthusiast portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const portrait = await readFile(join(process.cwd(), "public/projects/about-profile.png"));
  const portraitSrc = `data:image/png;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background: "#f5efe6",
          color: "#24362b",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            display: "flex",
            width: 360,
            height: "100%",
            background: "#24362b",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 42,
            left: 52,
            display: "flex",
            width: 1096,
            height: 546,
            border: "1px solid rgba(146, 91, 57, .34)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 72,
            right: 84,
            display: "flex",
            width: 242,
            height: 242,
            border: "1px solid rgba(255, 250, 242, .24)",
            borderRadius: 121,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 46,
            bottom: 66,
            display: "flex",
            width: 120,
            height: 120,
            border: "1px solid rgba(190, 135, 96, .7)",
            borderRadius: 60,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 42,
            left: 52,
            display: "flex",
            width: 1,
            height: 546,
            background: "rgba(146, 91, 57, .34)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 42,
            left: 52,
            display: "flex",
            width: 1096,
            height: 1,
            background: "rgba(146, 91, 57, .34)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 76,
            left: 88,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 62,
              height: 62,
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid #ad7655",
              borderRadius: 31,
              background: "#24362b",
              color: "#fffaf2",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            RNS
          </div>
          <div
            style={{
              display: "flex",
              color: "#925b39",
              fontFamily: "Arial, sans-serif",
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: 4,
            }}
          >
            PORTFOLIO
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: 186,
            left: 112,
            display: "flex",
            flexDirection: "column",
            width: 650,
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#925b39",
              fontFamily: "Arial, sans-serif",
              fontSize: 17,
              fontWeight: 700,
              letterSpacing: 4,
            }}
          >
            BACKEND ENGINEER AND AI ENTHUSIAST
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 18,
              color: "#24362b",
              fontSize: 66,
              lineHeight: 0.98,
              letterSpacing: -2,
            }}
          >
            <span>Rafa&apos;Na&apos;ilah</span>
            <span style={{ color: "#925b39" }}>Septia</span>
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: 560,
              marginTop: 24,
              color: "#5e6a60",
              fontFamily: "Arial, sans-serif",
              fontSize: 22,
              lineHeight: 1.35,
            }}
          >
            Building reliable backends, AI tools, and interactive systems.
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: 112,
            bottom: 82,
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#925b39",
            fontFamily: "Arial, sans-serif",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: 2,
          }}
        >
          <span>AI MODERATOR</span>
          <span style={{ display: "flex", width: 4, height: 4, borderRadius: 2, background: "#ad7655" }} />
          <span>MEDUSA SIMULATOR</span>
          <span style={{ display: "flex", width: 4, height: 4, borderRadius: 2, background: "#ad7655" }} />
          <span>TELYUTALKS</span>
        </div>

        <div
          style={{
            position: "absolute",
            top: 92,
            right: 112,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 190,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 170,
              height: 228,
              overflow: "hidden",
              alignItems: "flex-end",
              justifyContent: "center",
              border: "8px solid #f5efe6",
              background: "#d9c9b8",
            }}
          >
            <img
              src={portraitSrc}
              width="170"
              height="228"
              alt=""
              style={{ width: "170px", height: "228px", objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              color: "#fffaf2",
              fontFamily: "Arial, sans-serif",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 3,
            }}
          >
            RNS, 2026
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: 62,
            bottom: 52,
            display: "flex",
            flexDirection: "column",
            color: "rgba(255, 250, 242, .72)",
            fontFamily: "Arial, sans-serif",
            fontSize: 11,
            letterSpacing: 3,
            lineHeight: 1.7,
            textAlign: "right",
          }}
        >
          <span>LEARNING THROUGH</span>
          <span>WHAT I BUILD</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
