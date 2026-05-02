import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { notFound } from "next/navigation"
import { Phone, Check, ArrowRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { services, type ServiceSlug } from "@/lib/services"
import { serviceImages } from "@/lib/site-images"
import { site } from "@/lib/site"

type Params = { trade: ServiceSlug }

export function generateStaticParams() {
    return services.map((s) => ({ trade: s.slug }))
}

export async function generateMetadata({
    params,
}: {
    params: Promise<Params>
}): Promise<Metadata> {
    const { trade } = await params
    const svc = services.find((s) => s.slug === trade)
    if (!svc) return {}

    const title = `${svc.name} in ${site.serviceAreas[0]}, UT`
    const description = `${svc.summary} Serving ${site.serviceAreas.join(
        ", ",
    )} in the Uintah Basin.`

    return {
        title,
        description,
        keywords: svc.keywords,
        alternates: { canonical: `${site.url}/services/${svc.slug}` },
        openGraph: {
            title: `${title} | ${site.name}`,
            description,
            url: `${site.url}/services/${svc.slug}`,
            type: "website",
        },
    }
}

export default async function TradePage({
    params,
}: {
    params: Promise<Params>
}) {
    const { trade } = await params
    const svc = services.find((s) => s.slug === trade)
    if (!svc) notFound()

    const imagery = serviceImages[svc.slug]
    const Icon = svc.icon

    const others = services.filter((s) => s.slug !== svc.slug)

    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: svc.name,
        name: `${svc.name} — ${site.name}`,
        description: svc.summary,
        provider: {
            "@type": "HomeAndConstructionBusiness",
            name: site.name,
            telephone: site.phone.tel,
            url: site.url,
        },
        areaServed: site.serviceAreas.map((c) => ({ "@type": "City", name: c })),
        url: `${site.url}/services/${svc.slug}`,
        offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "USD",
            price: "0",
            description: "Free estimate",
        },
    }

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: svc.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: f.answer,
            },
        })),
    }

    return (
        <>
            <Script
                id={`ld-service-${svc.slug}`}
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(serviceJsonLd),
                }}
            />
            <Script
                id={`ld-faq-${svc.slug}`}
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            {/* Hero */}
            <section className="relative isolate overflow-hidden">
                <Image
                    src={imagery.hero.src}
                    alt={imagery.hero.alt}
                    fill
                    priority
                    sizes="100vw"
                    className="-z-10 object-cover"
                />
                <div className="-z-10 absolute inset-0 bg-gradient-to-br from-[color:var(--color-brand-primary)]/90 via-[color:var(--color-brand-primary)]/75 to-[color:var(--color-brand-primary)]/30" />
                <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-36">
                    <div className="max-w-2xl text-white">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[color:var(--color-brand-accent)] backdrop-blur">
                            <Icon className="h-3.5 w-3.5" />
                            {svc.shortName}
                        </div>
                        <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
                            {svc.tagline}
                        </h1>
                        <p className="mt-6 text-lg text-white/85">{svc.summary}</p>
                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <Button
                                asChild
                                size="lg"
                                className="bg-[color:var(--color-brand-accent)] text-[color:var(--color-brand-primary)] hover:bg-[color:var(--color-brand-accent)]/90"
                            >
                                <Link href={`/quote?service=${svc.slug}`}>
                                    Get a free estimate
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="border-white/40 bg-white/5 text-white hover:bg-white/15 hover:text-white"
                            >
                                <a href={`tel:${site.phone.tel}`}>
                                    <Phone className="mr-2 h-4 w-4" />
                                    {site.phone.display}
                                </a>
                            </Button>
                        </div>
                        <div className="mt-6 flex items-center gap-2 text-sm text-white/70">
                            <MapPin className="h-4 w-4" />
                            Serving {site.serviceAreas.join(", ")}
                        </div>
                    </div>
                </div>
            </section>

            {/* Long-form intro */}
            <section className="bg-[color:var(--color-brand-cream)]">
                <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
                    <p className="text-lg leading-relaxed text-foreground/85">
                        {svc.description}
                    </p>
                </div>
            </section>

            {/* Sub-services */}
            <section className="border-t bg-white">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-12">
                        <div className="lg:col-span-4">
                            <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-brand-accent)]">
                                What’s included
                            </div>
                            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                                Every {svc.shortName.toLowerCase()} job, the same standard.
                            </h2>
                            <p className="mt-4 text-foreground/70">
                                We don’t cut corners on the parts you can’t see. These are the things included on every visit — not upsells.
                            </p>
                        </div>
                        <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
                            {svc.subServices.map((sub) => (
                                <li
                                    key={sub.name}
                                    className="rounded-xl border border-border bg-white p-5 transition-shadow hover:shadow-sm"
                                >
                                    <div className="flex items-start gap-3">
                                        <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-brand-primary)]/10 text-[color:var(--color-brand-primary)]">
                                            <Check className="h-3.5 w-3.5" />
                                        </span>
                                        <div>
                                            <div className="font-semibold leading-tight">
                                                {sub.name}
                                            </div>
                                            <p className="mt-1 text-sm text-foreground/70">
                                                {sub.description}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {svc.extraNote && (
                        <p className="mt-10 max-w-3xl border-l-2 border-[color:var(--color-brand-accent)] pl-4 text-sm text-foreground/70">
                            {svc.extraNote}
                        </p>
                    )}
                </div>
            </section>

            {/* Process */}
            <section className="border-t bg-[color:var(--color-brand-primary)] text-white">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                    <div className="max-w-2xl">
                        <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-brand-accent)]">
                            How it works
                        </div>
                        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                            Straightforward, start to finish.
                        </h2>
                    </div>
                    <ol className="mt-10 grid gap-6 md:grid-cols-3">
                        {svc.process.map((step, i) => (
                            <li
                                key={step.title}
                                className="rounded-xl border border-white/10 bg-white/5 p-6"
                            >
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--color-brand-accent)] font-display text-lg font-semibold text-[color:var(--color-brand-primary)]">
                                    {i + 1}
                                </div>
                                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                                    {step.title}
                                </h3>
                                <p className="mt-2 text-sm text-white/75">
                                    {step.description}
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* Gallery */}
            <section className="border-t bg-white">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                    <div className="flex items-end justify-between gap-4">
                        <div>
                            <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-brand-accent)]">
                                A look at the work
                            </div>
                            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                                Real results, plainly shown.
                            </h2>
                        </div>
                    </div>
                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {imagery.gallery.map((img, i) => (
                            <div
                                key={img.src}
                                className={
                                    "relative aspect-[4/3] overflow-hidden rounded-xl border border-border " +
                                    (i === 0 ? "lg:col-span-2 lg:row-span-2 lg:aspect-[16/11]" : "")
                                }
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                    <p className="mt-6 max-w-2xl text-sm text-foreground/60">
                        Photos representative of the work — we’ll be swapping in real Uintah Basin job photos as we collect them.
                    </p>
                </div>
            </section>

            {/* FAQs */}
            <section className="border-t bg-[color:var(--color-brand-cream)]">
                <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-brand-accent)]">
                        Common questions
                    </div>
                    <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                        Quick answers.
                    </h2>
                    <Accordion type="single" collapsible className="mt-8">
                        {svc.faqs.map((faq) => (
                            <AccordionItem key={faq.question} value={faq.question}>
                                <AccordionTrigger className="text-left text-base font-semibold">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-foreground/75">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Final CTA */}
            <section className="border-t bg-white">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
                    <div className="rounded-2xl bg-[color:var(--color-brand-primary)] px-8 py-12 text-white sm:px-12">
                        <div className="grid items-center gap-8 md:grid-cols-2">
                            <div>
                                <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                                    Ready when you are.
                                </h2>
                                <p className="mt-3 max-w-md text-white/80">
                                    Free estimates, real numbers, no pressure. We’ll get back to you the same day.
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 md:justify-end">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-[color:var(--color-brand-accent)] text-[color:var(--color-brand-primary)] hover:bg-[color:var(--color-brand-accent)]/90"
                                >
                                    <Link href={`/quote?service=${svc.slug}`}>
                                        Get a free estimate
                                    </Link>
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
                </div>
            </section>

            {/* Other services */}
            <section className="border-t bg-[color:var(--color-brand-cream)]">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-brand-accent)]">
                        Also offered
                    </div>
                    <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">
                        While we’re out there …
                    </h2>
                    <ul className="mt-8 grid gap-4 md:grid-cols-3">
                        {others.map((o) => {
                            const OIcon = o.icon
                            return (
                                <li key={o.slug}>
                                    <Link
                                        href={`/services/${o.slug}`}
                                        className="group flex h-full items-start gap-4 rounded-xl border border-border bg-white p-5 transition-shadow hover:shadow-sm"
                                    >
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[color:var(--color-brand-primary)]/10 text-[color:var(--color-brand-primary)]">
                                            <OIcon className="h-5 w-5" />
                                        </span>
                                        <div className="flex-1">
                                            <div className="font-semibold leading-tight">
                                                {o.shortName}
                                            </div>
                                            <p className="mt-1 text-sm text-foreground/70 line-clamp-2">
                                                {o.tagline}
                                            </p>
                                        </div>
                                        <ArrowRight className="mt-1 h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>
        </>
    )
}
