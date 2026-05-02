import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { site } from "@/lib/site"
import ContactForm from "./contact-form"

export const metadata: Metadata = {
    title: "Contact",
    description: `Call ${site.phone.display}, email ${site.email}, or send a message. ${site.name} is owner-operated and serves ${site.serviceAreas.join(
        ", ",
    )}.`,
    alternates: { canonical: `${site.url}/contact` },
}

export default function ContactPage() {
    return (
        <>
            <section className="border-b bg-[color:var(--color-brand-cream)]">
                <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-brand-accent)]">
                        Contact
                    </div>
                    <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
                        Get in touch.
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg text-foreground/70">
                        Call, text, or send a message. For pricing on a specific job, our{" "}
                        <a
                            href="/quote"
                            className="text-[color:var(--color-brand-primary)] underline-offset-4 hover:underline"
                        >
                            estimate form
                        </a>{" "}
                        is the fastest way to get a number back.
                    </p>
                </div>
            </section>

            <section className="border-b bg-white">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-5">
                        <div className="lg:col-span-2">
                            <h2 className="font-display text-2xl font-semibold tracking-tight">
                                The fast lane
                            </h2>
                            <p className="mt-3 text-sm text-foreground/70">
                                Calling beats every form. We’ll usually pick up on the first try, or call back within the hour.
                            </p>

                            <div className="mt-6 space-y-3">
                                <a
                                    href={`tel:${site.phone.tel}`}
                                    className="group flex items-start gap-4 rounded-xl border border-border bg-white p-5 transition-shadow hover:shadow-sm"
                                >
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[color:var(--color-brand-primary)]/10 text-[color:var(--color-brand-primary)]">
                                        <Phone className="h-5 w-5" />
                                    </span>
                                    <div>
                                        <div className="font-display text-lg font-semibold leading-tight tracking-tight text-[color:var(--color-brand-primary)]">
                                            {site.phone.display}
                                        </div>
                                        <p className="mt-1 text-sm text-foreground/70">
                                            Call or text — either works.
                                        </p>
                                    </div>
                                </a>

                                <a
                                    href={`mailto:${site.email}`}
                                    className="group flex items-start gap-4 rounded-xl border border-border bg-white p-5 transition-shadow hover:shadow-sm"
                                >
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[color:var(--color-brand-primary)]/10 text-[color:var(--color-brand-primary)]">
                                        <Mail className="h-5 w-5" />
                                    </span>
                                    <div>
                                        <div className="font-display text-lg font-semibold leading-tight tracking-tight text-[color:var(--color-brand-primary)] break-all">
                                            {site.email}
                                        </div>
                                        <p className="mt-1 text-sm text-foreground/70">
                                            Best for project descriptions or photos.
                                        </p>
                                    </div>
                                </a>
                            </div>

                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                <div className="rounded-xl border border-border bg-white p-5">
                                    <div className="flex items-center gap-2 font-semibold text-[color:var(--color-brand-primary)]">
                                        <Clock className="h-4 w-4" />
                                        Hours
                                    </div>
                                    <p className="mt-2 text-sm text-foreground/70">
                                        {site.hours.weekdays}
                                        <br />
                                        {site.hours.weekend}
                                    </p>
                                </div>
                                <div className="rounded-xl border border-border bg-white p-5">
                                    <div className="flex items-center gap-2 font-semibold text-[color:var(--color-brand-primary)]">
                                        <MapPin className="h-4 w-4" />
                                        Service area
                                    </div>
                                    <p className="mt-2 text-sm text-foreground/70">
                                        {site.serviceAreas.join(", ")}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-3">
                            <div className="rounded-2xl border border-border bg-white p-6 sm:p-8">
                                <h2 className="font-display text-2xl font-semibold tracking-tight">
                                    Send a message
                                </h2>
                                <p className="mt-1 text-sm text-foreground/70">
                                    We’ll reply within one business day. For a quote on a specific job, the{" "}
                                    <a
                                        href="/quote"
                                        className="text-[color:var(--color-brand-primary)] underline-offset-4 hover:underline"
                                    >
                                        estimate form
                                    </a>{" "}
                                    has the right questions to give you a real number.
                                </p>
                                <div className="mt-6">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
