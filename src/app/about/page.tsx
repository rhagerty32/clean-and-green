import type { Metadata } from "next"
import Link from "next/link"
import { Phone, ShieldCheck, Wrench, Heart, Award, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"

export const metadata: Metadata = {
    title: "About",
    description: `Meet ${site.owner}, owner of ${site.name}. Local, owner-operated home services covering ${site.serviceAreas.join(
        ", ",
    )}.`,
    alternates: { canonical: `${site.url}/about` },
}

export default function AboutPage() {
    return (
        <>
            <section className="border-b bg-[color:var(--color-brand-cream)]">
                <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-brand-accent)]">
                        About
                    </div>
                    <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
                        Local crew, narrow scope, no surprises.
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg text-foreground/70">
                        We’re an owner-operated home services company in the Uintah Basin. Four trades, three towns, and a phone that gets answered.
                    </p>
                </div>
            </section>

            <section className="border-b bg-white">
                <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
                    <div className="grid gap-12 md:grid-cols-5 md:items-start">
                        <div className="md:col-span-2">
                            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-[color:var(--color-brand-primary)]/10">
                                <div className="flex h-full items-center justify-center bg-gradient-to-br from-[color:var(--color-brand-primary)]/15 to-[color:var(--color-brand-accent)]/15">
                                    <div className="px-6 text-center">
                                        <Wrench className="mx-auto h-10 w-10 text-[color:var(--color-brand-primary)]/50" />
                                        <p className="mt-4 font-display text-xl font-semibold text-[color:var(--color-brand-primary)]">
                                            {site.owner}
                                        </p>
                                        <p className="mt-1 text-sm text-foreground/60">
                                            Owner & operator
                                        </p>
                                        <p className="mt-3 text-xs uppercase tracking-wider text-[color:var(--color-brand-primary)]/60">
                                            Photo coming soon
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 rounded-xl border border-border bg-[color:var(--color-brand-cream)] p-5">
                                <p className="font-display text-lg font-semibold tracking-tight text-[color:var(--color-brand-primary)]">
                                    Ready to get started?
                                </p>
                                <a
                                    href={`tel:${site.phone.tel}`}
                                    className="mt-2 block font-display text-2xl font-semibold text-[color:var(--color-brand-primary)] hover:text-[color:var(--color-brand-accent)]"
                                >
                                    {site.phone.display}
                                </a>
                                <p className="mt-1 text-sm text-foreground/70">
                                    Call or text — either works.
                                </p>
                            </div>
                        </div>

                        <div className="md:col-span-3">
                            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                                Hi, I’m {site.owner}.
                            </h2>
                            <div className="mt-6 space-y-4 text-foreground/80">
                                <p>
                                    I started {site.name} after years of running into the same thing every homeowner runs into: a list of jobs that don’t quite fit any one specialist, and contractors who either don’t call back or quote you for the wrong scope.
                                </p>
                                <p>
                                    The fix was straightforward. Pick four trades I could do well — handyman work, gutter cleaning, painting, and pressure washing — and stay in my lane. Show up when I said I would. Quote the actual job, not a moving target. Clean up before leaving.
                                </p>
                                <p>
                                    I live in the basin. I run the business with a small crew, and you’ll usually hear from me directly. If you’ve got a list of stuff piling up at home, give us a call — we’ll tell you which we can knock out, and what to expect for each.
                                </p>
                            </div>
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
                    </div>
                </div>
            </section>

            <section className="border-b bg-[color:var(--color-brand-cream)]">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-brand-accent)]">
                        How we work
                    </div>
                    <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                        Four things we promise.
                    </h2>
                    <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                icon: Phone,
                                title: "We answer the phone",
                                body: "Same-day callbacks during business hours. If we miss it, we call back — we don’t lose your message.",
                            },
                            {
                                icon: ShieldCheck,
                                title: "Licensed & insured",
                                body: "Properly insured for residential and small commercial work. Documentation on request.",
                            },
                            {
                                icon: Award,
                                title: "Flat-rate quotes",
                                body: "We come look at the job and give you a real number. No vague hourly rates that grow on the day.",
                            },
                            {
                                icon: Heart,
                                title: "Cleaned up after",
                                body: "We sweep up, haul off debris, and send before/after photos. Leave it cleaner than we found it.",
                            },
                        ].map((v) => {
                            const Icon = v.icon
                            return (
                                <li
                                    key={v.title}
                                    className="rounded-xl border border-border bg-white p-6"
                                >
                                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[color:var(--color-brand-primary)]/10 text-[color:var(--color-brand-primary)]">
                                        <Icon className="h-5 w-5" />
                                    </span>
                                    <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
                                        {v.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-foreground/70">
                                        {v.body}
                                    </p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>

            <section className="border-b bg-white">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                        <div>
                            <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-brand-accent)]">
                                Where we work
                            </div>
                            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                                Built for the Basin.
                            </h2>
                            <p className="mt-5 max-w-md text-foreground/70">
                                We focus on the towns we can serve well — close enough that we can show up the same week and not the same month.
                            </p>
                            <div className="mt-6 inline-flex items-center gap-2 text-sm text-foreground/70">
                                <MapPin className="h-4 w-4 text-[color:var(--color-brand-primary)]" />
                                Currently serving:
                            </div>
                            <ul className="mt-2 flex flex-wrap gap-2">
                                {site.serviceAreas.map((c) => (
                                    <li
                                        key={c}
                                        className="rounded-full border border-border bg-[color:var(--color-brand-cream)] px-3 py-1 text-sm font-medium"
                                    >
                                        {c}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4 text-sm text-foreground/60">
                                Not in this list? Give us a call — if it’s nearby we’ll usually still come out.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-[color:var(--color-brand-primary)] p-8 text-white">
                            <h3 className="font-display text-2xl font-semibold tracking-tight">
                                The short version
                            </h3>
                            <dl className="mt-6 space-y-4 text-sm">
                                <div className="flex items-start gap-4">
                                    <dt className="w-32 shrink-0 text-white/60">Owner</dt>
                                    <dd className="font-semibold">{site.owner}</dd>
                                </div>
                                <div className="flex items-start gap-4">
                                    <dt className="w-32 shrink-0 text-white/60">Founded</dt>
                                    <dd className="font-semibold">{site.foundedYear}</dd>
                                </div>
                                <div className="flex items-start gap-4">
                                    <dt className="w-32 shrink-0 text-white/60">Phone</dt>
                                    <dd>
                                        <a
                                            href={`tel:${site.phone.tel}`}
                                            className="font-semibold text-[color:var(--color-brand-accent)] hover:text-white"
                                        >
                                            {site.phone.display}
                                        </a>
                                    </dd>
                                </div>
                                <div className="flex items-start gap-4">
                                    <dt className="w-32 shrink-0 text-white/60">Email</dt>
                                    <dd>
                                        <a
                                            href={`mailto:${site.email}`}
                                            className="font-semibold text-[color:var(--color-brand-accent)] hover:text-white"
                                        >
                                            {site.email}
                                        </a>
                                    </dd>
                                </div>
                                <div className="flex items-start gap-4">
                                    <dt className="w-32 shrink-0 text-white/60">Hours</dt>
                                    <dd>
                                        {site.hours.weekdays}
                                        <br />
                                        {site.hours.weekend}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
