import { ImageResponse } from "next/og"
import { site } from "@/lib/site"

export const alt = `${site.name} — ${site.tagline}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    background:
                        "linear-gradient(135deg, #073760 0%, #0a4d80 60%, #1DCAD5 130%)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: 80,
                    color: "#F4FCFE",
                    fontFamily: "Georgia, serif",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                        fontSize: 28,
                        letterSpacing: 2,
                        textTransform: "uppercase",
                        color: "#1DCAD5",
                        fontWeight: 600,
                    }}
                >
                    <div
                        style={{
                            width: 48,
                            height: 48,
                            background: "#1DCAD5",
                            color: "#073760",
                            borderRadius: 10,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 32,
                            fontWeight: 800,
                        }}
                    >
                        U
                    </div>
                    {site.name}
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                        style={{
                            fontSize: 110,
                            fontWeight: 700,
                            lineHeight: 1.05,
                            letterSpacing: -3,
                        }}
                    >
                        {site.tagline}
                    </div>
                    <div
                        style={{
                            marginTop: 24,
                            fontSize: 36,
                            color: "#F4FCFE",
                            opacity: 0.85,
                            fontFamily: "Helvetica, sans-serif",
                        }}
                    >
                        Handyman · Gutters · Painting · Pressure Washing
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        fontFamily: "Helvetica, sans-serif",
                        fontSize: 26,
                        color: "#F4FCFE",
                        opacity: 0.9,
                    }}
                >
                    <span>{site.subtagline}</span>
                    <span>{site.phone.display}</span>
                </div>
            </div>
        ),
        size,
    )
}
