import { ImageResponse } from "next/og"

export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 22,
                    background: "#073760",
                    color: "#1DCAD5",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 6,
                    fontWeight: 700,
                    fontFamily: "Georgia, serif",
                    letterSpacing: -1,
                }}
            >
                U
            </div>
        ),
        size,
    )
}
