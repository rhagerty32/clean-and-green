import Image from "next/image"
import Link from "next/link"
import { Phone, Check, ArrowRight, MapPin, ShieldCheck, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/services"
import { serviceImages, heroImage } from "@/lib/site-images"
import { site } from "@/lib/site"

export default function HomePage() {
    return (
        <>
            {/* Hero */}
            <section className="relative isolate overflow-hidden bg-[color:var(--color-brand-primary)]">
                <Image
                    src={heroImage.src}
                    alt={heroImage.alt}
                    fill
                    priority
                    sizes="100vw"
                    className="-z-10 object-cover opacity-50"
                />
                <div className="-z-10 absolute inset-0 bg-gradient-to-tr from-[color:var(--color-brand-primary)] via-[color:var(--color-brand-primary)]/85 to-transparent" />
                <div className="mx-auto grid max-w-7xl gap-10 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-12 lg:px-8 lg:py-40">
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-[color:var(--color-brand-accent)] backdrop-blur">
                            <MapPin className="h-3.5 w-3.5" />
                            {site.subtagline}
                        </div>
                        <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-7xl lg:text-[5.5rem]">
                            {site.tagline}
                        </h1>
                        <p className="mt-6 max-w-xl text-lg text-white/85">
                            Handyman work, gutter cleaning, painting, and pressure
                            washing — done by a local crew that shows up when
                            we said we would and finishes the job we quoted.
                        </p>
                        <div className="mt-10 flex flex-wrap items-center gap-3">
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
                                className="border-white/40 bg-white/5 text-white hover:bg-white/15 hover:text-white"
                            >
                                <a href={`tel:${site.phone.tel}`}>
                                    <Phone className="mr-2 h-4 w-4" />
                                    {site.phone.display}
                                </a>
                            </Button>
                        </div>
                        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
                            <span className="flex items-center gap-1.5">
                                <ShieldCheck className="h-4 w-4 text-[color:var(--color-brand-accent)]" />
                                Licensed &amp; insured
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Check className="h-4 w-4 text-[color:var(--color-brand-accent)]" />
                                Free estimates
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Wrench className="h-4 w-4 text-[color:var(--color-brand-accent)]" />
                                Owner-operated
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services grid */}
            <section className="border-t bg-white">
                <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
                    <div className="grid gap-6 lg:grid-cols-12">
                        <div className="lg:col-span-5">
                            <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-brand-accent)]">
                                What we do
                            </div>
                            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                                Four trades. One reliable phone number.
                            </h2>
                            <p className="mt-5 text-foreground/70">
                                Most homes don’t need ten different specialists. They need one trustworthy crew that can knock out the running list. That’s what we built.
                            </p>
                            <Button
                                asChild
                                variant="link"
                                className="mt-3 px-0 text-[color:var(--color-brand-primary)]"
                            >
                                <Link href="/services">
                                    See all services
                                    <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
                            {services.map((s) => {
                                const Icon = s.icon
                                const img = serviceImages[s.slug]
                                return (
                                    <li key={s.slug}>
                                        <Link
                                            href={`/services/${s.slug}`}
                                            className="group block h-full overflow-hidden rounded-xl border border-border bg-white transition-shadow hover:shadow-md"
                                        >
                                            <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                                                <Image
                                                    src={img.hero.src}
                                                    alt={img.hero.alt}
                                                    fill
                                                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                                                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                                />
                                            </div>
                                            <div className="flex items-start gap-4 p-5">
                                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[color:var(--color-brand-primary)]/10 text-[color:var(--color-brand-primary)]">
                                                    <Icon className="h-5 w-5" />
                                                </span>
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between">
                                                        <h3 className="font-display text-lg font-semibold tracking-tight">
                                                            {s.shortName}
                                                        </h3>
                                                        <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                                                    </div>
                                                    <p className="mt-1 text-sm text-foreground/70 line-clamp-2">
                                                        {s.tagline}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Why us */}
            <section className="border-t bg-[color:var(--color-brand-cream)]">
                <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-12">
                        <div className="lg:col-span-5">
                            <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-brand-accent)]">
                                Why folks call us back
                            </div>
                            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                                Boring on purpose.
                            </h2>
                            <p className="mt-5 text-foreground/70">
                                We’re not the cheapest crew in the basin and we’re not the flashiest. We just show up, do the job, and clean up. People hire us back because that’s rarer than it should be.
                            </p>
                        </div>
                        <ul className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
                            {[
                                {
                                    title: "Local and accountable",
                                    body: "Owned and operated by Orson Batty in Vernal. You won’t talk to a call center.",
                                },
                                {
                                    title: "Free, real estimates",
                                    body: "We come look at the job, then send you a flat rate. No ‘starting at’ numbers that change.",
                                },
                                {
                                    title: "Licensed and insured",
                                    body: "Properly insured for both residential and small commercial work — your home, your peace of mind.",
                                },
                                {
                                    title: "Cleaned up before we leave",
                                    body: "Drop cloths, swept walkways, hauled debris, and before/after photos sent so you don’t have to wonder.",
                                },
                            ].map((b) => (
                                <li
                                    key={b.title}
                                    className="rounded-xl border border-border bg-white p-6"
                                >
                                    <div className="flex items-start gap-3">
                                        <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-brand-primary)]/10 text-[color:var(--color-brand-primary)]">
                                            <Check className="h-3.5 w-3.5" />
                                        </span>
                                        <div>
                                            <h3 className="font-semibold leading-tight">
                                                {b.title}
                                            </h3>
                                            <p className="mt-1.5 text-sm text-foreground/70">
                                                {b.body}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Owner teaser */}
            <section className="border-t bg-white">
                <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
                    <div className="grid gap-10 md:grid-cols-5 md:items-center">
                        <div className="md:col-span-2">
                            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-[color:var(--color-brand-primary)]/10">
                                <div className="flex h-full items-center justify-center bg-gradient-to-br from-[color:var(--color-brand-primary)]/15 to-[color:var(--color-brand-accent)]/15">
                                    <div className="text-center">
                                        <Wrench className="mx-auto h-10 w-10 text-[color:var(--color-brand-primary)]/40" />
                                        <p className="mt-3 text-xs uppercase tracking-wider text-[color:var(--color-brand-primary)]/60">
                                            Owner photo coming soon
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-3">
                            <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-brand-accent)]">
                                Run by a real person
                            </div>
                            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                                Hi, I’m {site.owner}.
                            </h2>
                            <p className="mt-4 text-foreground/75">
                                I started Uintah Home Services because the basin needed a crew that could do the small stuff and the big stuff — and actually call you back. We’re local, we live here, and we’d rather earn a referral than a one-time job.
                            </p>
                            <Button
                                asChild
                                variant="link"
                                className="mt-3 px-0 text-[color:var(--color-brand-primary)]"
                            >
                                <Link href="/about">
                                    More about us
                                    <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="border-t bg-[color:var(--color-brand-primary)] text-white">
                <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
                    <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                        Got a list? Let’s knock it out.
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl text-white/80">
                        Free estimates and same-day callbacks. {site.hours.weekdays}.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
                            className="border-white/40 bg-white/5 text-white hover:bg-white/15 hover:text-white"
                        >
                            <a href={`tel:${site.phone.tel}`}>
                                <Phone className="mr-2 h-4 w-4" />
                                {site.phone.display}
                            </a>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}
