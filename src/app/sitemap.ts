import type { MetadataRoute } from "next"
import { site } from "@/lib/site"
import { services } from "@/lib/services"

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date()
    const base = site.url

    const staticRoutes: MetadataRoute.Sitemap = [
        { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
        {
            url: `${base}/services`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${base}/about`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.6,
        },
        {
            url: `${base}/contact`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.6,
        },
        {
            url: `${base}/quote`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.8,
        },
    ]

    const tradeRoutes: MetadataRoute.Sitemap = services.map((s) => ({
        url: `${base}/services/${s.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.85,
    }))

    return [...staticRoutes, ...tradeRoutes]
}
