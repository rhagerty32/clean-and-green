import type { Metadata } from "next"
import { Suspense } from "react"
import { Phone, Mail, Clock, MapPin, ShieldCheck } from "lucide-react"
import { site } from "@/lib/site"
import QuoteForm from "./quote-form"

export const metadata: Metadata = {
    title: "Get a free estimate",
    description: `Tell us about your handyman, gutter, painting, or pressure washing job. ${site.name} replies the same day.`,
    alternates: { canonical: `${site.url}/quote` },
}

export default function QuotePage() {
    return (
        <>
            <section className="border-b bg-[color:var(--color-brand-cream)]">
                <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-brand-accent)]">
                        Free estimate
                    </div>
                    <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
                        Tell us what’s on the list.
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg text-foreground/70">
                        We’ll come look, then send you a flat-rate number for the work — not an hourly guess. Most folks hear back the same day.
                    </p>
                </div>
            </section>

            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-3">
                        <div className="lg:col-span-2">
                            <div className="rounded-2xl border border-border bg-white p-6 sm:p-8">
                                <Suspense fallback={null}>
                                    <QuoteForm />
                                </Suspense>
                            </div>
                        </div>

                        <aside className="space-y-5">
                            <div className="rounded-2xl border border-border bg-[color:var(--color-brand-primary)] p-6 text-white">
                                <h2 className="font-display text-xl font-semibold tracking-tight">
                                    Faster than the form
                                </h2>
                                <p className="mt-2 text-sm text-white/80">
                                    A 2-minute call usually beats every form on the internet.
                                </p>
                                <a
                                    href={`tel:${site.phone.tel}`}
                                    className="mt-5 flex items-center gap-3 rounded-lg bg-[color:var(--color-brand-accent)]/15 p-4 hover:bg-[color:var(--color-brand-accent)]/25"
                                >
                                    <Phone className="h-5 w-5 text-[color:var(--color-brand-accent)]" />
                                    <div>
                                        <div className="font-semibold text-[color:var(--color-brand-accent)]">
                                            {site.phone.display}
                                        </div>
                                        <div className="text-xs text-white/70">
                                            Call or text — either works
                                        </div>
                                    </div>
                                </a>
                                <a
                                    href={`mailto:${site.email}`}
                                    className="mt-3 flex items-center gap-3 rounded-lg bg-white/5 p-4 hover:bg-white/10"
                                >
                                    <Mail className="h-5 w-5 text-[color:var(--color-brand-accent)]" />
                                    <div>
                                        <div className="font-semibold text-white break-all">
                                            {site.email}
                                        </div>
                                        <div className="text-xs text-white/70">
                                            Best for photos
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="rounded-2xl border border-border bg-white p-6 text-sm">
                                <h3 className="font-display text-base font-semibold tracking-tight">
                                    What to expect
                                </h3>
                                <ul className="mt-4 space-y-3 text-foreground/75">
                                    <li className="flex items-start gap-3">
                                        <ShieldCheck className="mt-0.5 h-4 w-4 text-[color:var(--color-brand-primary)]" />
                                        Free, no-pressure estimate. No &ldquo;starting at&rdquo; pricing.
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Clock className="mt-0.5 h-4 w-4 text-[color:var(--color-brand-primary)]" />
                                        Most replies same day. {site.hours.weekdays}.
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <MapPin className="mt-0.5 h-4 w-4 text-[color:var(--color-brand-primary)]" />
                                        Serving {site.serviceAreas.join(", ")} and nearby.
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    )
}
