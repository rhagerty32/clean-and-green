import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { site } from "@/lib/site"
import { services } from "@/lib/services"

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="bg-[color:var(--color-brand-primary)] text-[color:var(--color-brand-highlight)]">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
                    <div className="md:col-span-5">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-3"
                            aria-label={`${site.name} home`}
                        >
                            <Image
                                src="/logo-logo.svg"
                                alt=""
                                width={56}
                                height={60}
                                className="h-14 w-auto"
                            />
                            <span className="font-display text-xl leading-tight tracking-tight">
                                Uintah
                                <br />
                                <span className="text-[color:var(--color-brand-accent)]">
                                    Home Services
                                </span>
                            </span>
                        </Link>
                        <p className="mt-5 max-w-md text-sm text-white/70">
                            {site.description} {site.licensed && site.insured
                                ? "Licensed and insured."
                                : ""}
                        </p>
                        <div className="mt-6 space-y-2 text-sm">
                            <a
                                href={`tel:${site.phone.tel}`}
                                className="flex items-center gap-2 font-semibold text-white hover:text-[color:var(--color-brand-accent)]"
                            >
                                <Phone className="h-4 w-4" />
                                {site.phone.display}
                            </a>
                            <a
                                href={`mailto:${site.email}`}
                                className="flex items-center gap-2 text-white/80 hover:text-white"
                            >
                                <Mail className="h-4 w-4" />
                                {site.email}
                            </a>
                        </div>
                    </div>

                    <div className="md:col-span-3">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-brand-accent)]">
                            Services
                        </h3>
                        <ul className="mt-4 space-y-2 text-sm">
                            {services.map((s) => (
                                <li key={s.slug}>
                                    <Link
                                        href={`/services/${s.slug}`}
                                        className="text-white/80 hover:text-white"
                                    >
                                        {s.shortName}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    href="/services"
                                    className="text-white/80 hover:text-white"
                                >
                                    All services
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-brand-accent)]">
                            Company
                        </h3>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-white/80 hover:text-white"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-white/80 hover:text-white"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/quote"
                                    className="font-semibold text-[color:var(--color-brand-accent)] hover:text-white"
                                >
                                    Get a free estimate
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-brand-accent)]">
                            Where & when
                        </h3>
                        <div className="mt-4 space-y-3 text-sm text-white/80">
                            <div>
                                <div className="flex items-center gap-2 text-white">
                                    <MapPin className="h-4 w-4" />
                                    <span className="font-semibold">
                                        Service area
                                    </span>
                                </div>
                                <p className="mt-1 leading-snug">
                                    {site.serviceAreas.join(", ")}
                                </p>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 text-white">
                                    <Clock className="h-4 w-4" />
                                    <span className="font-semibold">Hours</span>
                                </div>
                                <p className="mt-1 leading-snug">
                                    {site.hours.weekdays}
                                </p>
                                <p className="leading-snug">{site.hours.weekend}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row md:items-center">
                    <p>
                        © {year} {site.name}. All rights reserved.
                        {site.licensed && site.insured
                            ? " · Licensed & insured."
                            : ""}
                    </p>
                    <p>
                        Owned and operated by{" "}
                        <span className="font-semibold text-white">
                            {site.owner}
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    )
}
