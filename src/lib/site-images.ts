/**
 * Curated Unsplash photography for each trade.
 *
 * These are royalty-free Unsplash URLs used as launch placeholders. Once Orson
 * has real before/after photos from actual jobs, swap them in here — every
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
    src: u("photo-1621905251189-08b45d6a269e"),
    alt: "Tradesperson in a hard hat on a residential job site",
}

export const serviceImages: Record<ServiceSlug, ServiceImagery> = {
    handyman: {
        hero: {
            src: u("photo-1572981779307-38b8cabb2407"),
            alt: "Cordless drill being used on cabinet hardware in a home",
        },
        gallery: [
            {
                src: u("photo-1676311396794-f14881e9daaa", 1200),
                alt: "Hand tools and power tools laid out on a table for repairs",
            },
            {
                src: u("photo-1505798577917-a65157d3320a", 1200),
                alt: "Carpenter at a miter saw cutting trim for a home project",
            },
            {
                src: u("photo-1633759593085-1eaeb724fc88", 1200),
                alt: "Worker on a residential roof with a hammer for small repairs",
            },
        ],
    },
    "gutter-cleaning": {
        hero: {
            src: u("photo-1558618666-fcd25c85cd64"),
            alt: "Technician on a ladder clearing debris from a residential gutter",
        },
        gallery: [
            {
                src: u("photo-1744044155829-610dded4cead", 1200),
                alt: "Dirty gutters and roofline against a clear sky before cleaning",
            },
            {
                src: u("photo-1701407829865-09d2c9a53f4e", 1200),
                alt: "Close-up of a roof edge, downspout, and gutter hardware",
            },
            {
                src: u("photo-1600093652298-e57ee8aba769", 1200),
                alt: "Rainwater flowing from a roof edge and gutter system",
            },
        ],
    },
    painting: {
        hero: {
            src: u("photo-1717281234297-3def5ae3eee1"),
            alt: "Painter rolling fresh paint on an interior wall",
        },
        gallery: [
            {
                src: u("photo-1742900280861-32bed068938b", 1200),
                alt: "Painter on a ladder finishing a tall wall",
            },
            {
                src: u("photo-1525909002-1b05e0c869d8", 1200),
                alt: "Row of clean paint rollers ready for a job",
            },
            {
                src: u("photo-1652572036885-b5e9205dd847", 1200),
                alt: "Paint buckets, brushes, and supplies set up for painting",
            },
        ],
    },
    "pressure-washing": {
        hero: {
            src: u("photo-1774031159721-aec9230f38db"),
            alt: "Worker pressure washing a large outdoor seating area",
        },
        gallery: [
            {
                src: u("photo-1718152423993-a29048dbc223", 1200),
                alt: "Worker in hi-vis pressure washing a paved outdoor surface",
            },
            {
                src: u("photo-1718152423221-0c72ba1a2ee4", 1200),
                alt: "Surface cleaning with a pressure washer along a curb",
            },
            {
                src: u("photo-1630868837435-5f7abc85e012", 1200),
                alt: "Pressure washer unit and hose ready for exterior cleaning",
            },
        ],
    },
}

export const ogImage: SiteImage = {
    src: u("photo-1572120360610-d971b9d7767c"),
    alt: "Uintah Home Services",
}
