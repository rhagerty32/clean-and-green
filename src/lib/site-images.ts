/**
 * Curated Unsplash photography for each trade.
 *
 * These are royalty-free Unsplash URLs used as launch placeholders. Once Orson
 * has real before/after photos from actual jobs, swap them in here \u2014 every
 * page reads from this file, so it's a single edit.
 *
 * URL format: https://images.unsplash.com/photo-{ID}?w={width}&q=80&auto=format&fit=crop
 */

import type { ServiceSlug } from "./services"

export type SiteImage = {
    src: string
    alt: string
    credit?: string
}

export type ServiceImagery = {
    hero: SiteImage
    gallery: SiteImage[]
}

const u = (id: string, w = 1600) =>
    `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`

export const heroImage: SiteImage = {
    src: u("photo-1572120360610-d971b9d7767c"),
    alt: "A well-kept Uintah Basin home at golden hour",
}

export const aboutImage: SiteImage = {
    src: u("photo-1581094794329-c8112a89af12"),
    alt: "Tradesman at work on a home project",
}

export const serviceImages: Record<ServiceSlug, ServiceImagery> = {
    handyman: {
        hero: {
            src: u("photo-1581094794329-c8112a89af12"),
            alt: "Handyman with toolbelt working on a home repair",
        },
        gallery: [
            {
                src: u("photo-1503387762-592deb58ef4e", 1200),
                alt: "Hand tools laid out on a workbench",
            },
            {
                src: u("photo-1572981779307-38b8cabb2407", 1200),
                alt: "Cordless drill being used on cabinet hardware",
            },
            {
                src: u("photo-1530124566582-a618bc2615dc", 1200),
                alt: "Toolbox open on the floor of a home",
            },
        ],
    },
    "gutter-cleaning": {
        hero: {
            src: u("photo-1632935190508-bb62c1308ccb"),
            alt: "Ladder leaning against a home for gutter maintenance",
        },
        gallery: [
            {
                src: u("photo-1604762426346-7a2f3eaa7d08", 1200),
                alt: "Close-up of a clean rain gutter on a residential roofline",
            },
            {
                src: u("photo-1558618666-fcd25c85cd64", 1200),
                alt: "Worker on a ladder cleaning leaves out of a gutter",
            },
            {
                src: u("photo-1572120360610-d971b9d7767c", 1200),
                alt: "Residential rooftop with gutters and downspouts",
            },
        ],
    },
    painting: {
        hero: {
            src: u("photo-1562259949-e8e7689d7828"),
            alt: "Painter rolling a freshly primed wall",
        },
        gallery: [
            {
                src: u("photo-1589939705384-5185137a7f0f", 1200),
                alt: "Painted interior wall with brush and roller",
            },
            {
                src: u("photo-1626885930974-4b69aa21bbf9", 1200),
                alt: "Open paint can with brush",
            },
            {
                src: u("photo-1595428774223-ef52624120d2", 1200),
                alt: "Painter cutting in along ceiling trim",
            },
        ],
    },
    "pressure-washing": {
        hero: {
            src: u("photo-1558618047-3c8c76ca7d13"),
            alt: "Pressure washer cleaning a concrete driveway",
        },
        gallery: [
            {
                src: u("photo-1581578731548-c64695cc6952", 1200),
                alt: "Pressure washing a concrete surface",
            },
            {
                src: u("photo-1635340703728-5b6c1a31345a", 1200),
                alt: "Worker in PPE pressure-washing exterior surface",
            },
            {
                src: u("photo-1604754742629-3e0498a6a23c", 1200),
                alt: "Clean residential siding after a soft wash",
            },
        ],
    },
}

export const ogImage: SiteImage = {
    src: u("photo-1572120360610-d971b9d7767c"),
    alt: "Uintah Home Services",
}
