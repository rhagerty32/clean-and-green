import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/services"
import { serviceImages } from "@/lib/site-images"
import { site } from "@/lib/site"

export const metadata: Metadata = {
    title: "Services",
    description: `Handyman, gutter cleaning, painting, and pressure washing in ${site.serviceAreas.join(
        ", ",
    )}. ${site.tagline}`,
    alternates: { canonical: `${site.url}/services` },
}

export default function ServicesIndexPage() {
    return (
        <>
            <section className="border-b bg-[color:var(--color-brand-cream)]">
                <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-brand-accent)]">
                        Services
                    </div>
                    <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
                        Four trades, all under one roof.
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg text-foreground/70">
                        We keep our scope intentionally narrow so we can do each one well. Pick a trade to see exactly what’s included — sub-services, the way we work, and answers to the questions everyone asks.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <Button
                            asChild
                            size="lg"
                            className="bg-[color:var(--color-brand-primary)] text-white hover:bg-[color:var(--color-brand-primary)]/90"
                        >
                            <Link href="/quote">Get a free estimate</Link>
                        </Button>
                        <a
                            href={`tel:${site.phone.tel}`}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-brand-primary)] hover:text-[color:var(--color-brand-accent)]"
                        >
                            <Phone className="h-4 w-4" />
                            {site.phone.display}
                        </a>
                    </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
                    <ul className="grid gap-8 lg:grid-cols-2">
                        {services.map((s) => {
                            const Icon = s.icon
                            const img = serviceImages[s.slug]
                            return (
                                <li key={s.slug}>
                                    <Link
                                        href={`/services/${s.slug}`}
                                        className="group block h-full overflow-hidden rounded-2xl border border-border bg-white transition-shadow hover:shadow-md"
                                    >
                                        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                                            <Image
                                                src={img.hero.src}
                                                alt={img.hero.alt}
                                                fill
                                                sizes="(min-width: 1024px) 50vw, 100vw"
                                                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                            />
                                            <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium uppercase tracking-wider text-[color:var(--color-brand-primary)] backdrop-blur">
                                                <Icon className="h-3.5 w-3.5" />
                                                {s.shortName}
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h2 className="font-display text-2xl font-semibold tracking-tight">
                                                {s.tagline}
                                            </h2>
                                            <p className="mt-3 text-sm text-foreground/70">
                                                {s.summary}
                                            </p>
                                            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-foreground/60">
                                                {s.subServices
                                                    .slice(0, 4)
                                                    .map((sub) => (
                                                        <span key={sub.name}>
                                                            · {sub.name}
                                                        </span>
                                                    ))}
                                            </div>
                                            <div className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--color-brand-primary)]">
                                                Learn more
                                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>

            <section className="border-t bg-[color:var(--color-brand-primary)] text-white">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
                    <div className="grid items-center gap-8 md:grid-cols-2">
                        <div>
                            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                                Need more than one trade?
                            </h2>
                            <p className="mt-3 max-w-md text-white/80">
                                Most folks bundle two or three jobs into one visit — it’s cheaper for you and easier for us. Tell us what’s on the list.
                            </p>
                            <div className="mt-3 flex items-center gap-2 text-sm text-white/70">
                                <MapPin className="h-4 w-4" />
                                Serving {site.serviceAreas.join(", ")}
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3 md:justify-end">
                            <Button
                                asChild
                                size="lg"
                                className="bg-[color:var(--color-brand-accent)] text-[color:var(--color-brand-primary)] hover:bg-[color:var(--color-brand-accent)]/90"
                            >
                                <Link href="/quote">Get a free estimate</Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white"
                            >
                                <a href={`tel:${site.phone.tel}`}>
                                    <Phone className="mr-2 h-4 w-4" />
                                    {site.phone.display}
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
