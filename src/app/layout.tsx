import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Uintah Clean & Green - Professional Pressure Washing Services Utah",
    description: "Professional pressure washing services for homes and businesses in Utah. House washing, driveway cleaning, deck cleaning, and more. Free quotes, licensed & insured. Pressure perfect, every time.",
    keywords: "pressure washing, Utah, house washing, driveway cleaning, deck cleaning, sidewalk cleaning, garbage can cleaning, Orson Batty",
    openGraph: {
        title: "Uintah Clean & Green - Pressure Perfect, Every Time",
        description: "Professional pressure washing services throughout Utah. Free quotes, licensed & insured.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} font-sans antialiased`}>
                <Header />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
