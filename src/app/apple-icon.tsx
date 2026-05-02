import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 130,
                    background: "#073760",
                    color: "#1DCAD5",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 32,
                    fontWeight: 700,
                    fontFamily: "Georgia, serif",
                    letterSpacing: -4,
                }}
            >
                U
            </div>
        ),
        size,
    )
}
