import type { Metadata } from "next"
import { Inter, Fraunces } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Toaster } from "@/components/ui/sonner"
import { site } from "@/lib/site"

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
})

const fraunces = Fraunces({
    subsets: ["latin"],
    variable: "--font-fraunces",
    display: "swap",
    axes: ["SOFT", "opsz"],
})

export const metadata: Metadata = {
    metadataBase: new URL(site.url),
    title: {
        default: `${site.name} — ${site.tagline}`,
        template: `%s | ${site.name}`,
    },
    description: site.description,
    keywords: [
        "handyman Vernal UT",
        "gutter cleaning Uintah Basin",
        "painting Vernal",
        "pressure washing Roosevelt UT",
        "home services Uintah Basin",
        "Orson Batty",
    ],
    applicationName: site.name,
    authors: [{ name: site.owner }],
    creator: site.owner,
    publisher: site.name,
    openGraph: {
        type: "website",
        url: site.url,
        siteName: site.name,
        title: `${site.name} — ${site.tagline}`,
        description: site.description,
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: `${site.name} — ${site.tagline}`,
        description: site.description,
    },
    alternates: {
        canonical: site.url,
    },
    robots: {
        index: true,
        follow: true,
    },
}

const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.url}#business`,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone.tel,
    email: site.email,
    image: `${site.url}/logo-full.svg`,
    logo: `${site.url}/logo-logo.svg`,
    priceRange: "$$",
    address: {
        "@type": "PostalAddress",
        addressLocality: site.address.locality,
        addressRegion: site.address.region,
        addressCountry: site.address.country,
        postalCode: site.address.postalCode,
    },
    areaServed: site.serviceAreas.map((city) => ({
        "@type": "City",
        name: city,
    })),
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ],
            opens: "07:00",
            closes: "19:00",
        },
    ],
    founder: {
        "@type": "Person",
        name: site.owner,
    },
    foundingDate: String(site.foundedYear),
    knowsAbout: [
        "Handyman services",
        "Gutter cleaning",
        "Interior and exterior painting",
        "Pressure washing",
        "Soft washing",
        "Deck staining",
    ],
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${fraunces.variable} font-sans antialiased`}
            >
                <Script
                    id="ld-local-business"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(localBusinessJsonLd),
                    }}
                />
                <Header />
                <main className="min-h-screen">{children}</main>
                <Footer />
                <Toaster richColors position="top-center" />
            </body>
        </html>
    )
}
