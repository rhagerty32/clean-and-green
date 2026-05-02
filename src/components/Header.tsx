"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Menu, X, Phone } from "lucide-react"
import { site } from "@/lib/site"
import { services } from "@/lib/services"
import { cn } from "@/lib/utils"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
                <Link
                    href="/"
                    className="flex items-center gap-2"
                    aria-label={`${site.name} home`}
                >
                    <Image
                        src="/logo-logo.svg"
                        alt=""
                        width={40}
                        height={42}
                        priority
                        className="h-10 w-auto"
                    />
                    <span className="hidden font-display text-lg font-semibold leading-tight tracking-tight text-[color:var(--color-brand-primary)] sm:inline-block">
                        Uintah
                        <br />
                        <span className="text-[color:var(--color-brand-accent)]">
                            Home Services
                        </span>
                    </span>
                </Link>

                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className={navigationMenuTriggerStyle()}
                            >
                                <Link href="/">Home</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[480px] gap-1 p-3 md:grid-cols-2">
                                    {services.map((s) => {
                                        const Icon = s.icon
                                        return (
                                            <li key={s.slug}>
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        href={`/services/${s.slug}`}
                                                        className="group flex items-start gap-3 rounded-md p-3 hover:bg-muted"
                                                    >
                                                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[color:var(--color-brand-primary)]/10 text-[color:var(--color-brand-primary)]">
                                                            <Icon className="h-5 w-5" />
                                                        </span>
                                                        <span>
                                                            <span className="block text-sm font-semibold leading-tight text-foreground">
                                                                {s.shortName}
                                                            </span>
                                                            <span className="mt-1 block text-xs text-muted-foreground line-clamp-2">
                                                                {s.tagline}
                                                            </span>
                                                        </span>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        )
                                    })}
                                    <li className="md:col-span-2">
                                        <NavigationMenuLink asChild>
                                            <Link
                                                href="/services"
                                                className="block rounded-md p-3 text-sm font-semibold text-[color:var(--color-brand-primary)] hover:bg-muted"
                                            >
                                                See all services →
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className={navigationMenuTriggerStyle()}
                            >
                                <Link href="/about">About</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className={navigationMenuTriggerStyle()}
                            >
                                <Link href="/contact">Contact</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="hidden items-center gap-3 md:flex">
                    <a
                        href={`tel:${site.phone.tel}`}
                        className="flex items-center gap-2 text-sm font-semibold text-[color:var(--color-brand-primary)] hover:text-[color:var(--color-brand-accent)]"
                    >
                        <Phone className="h-4 w-4" />
                        {site.phone.display}
                    </a>
                    <Button
                        asChild
                        className="bg-[color:var(--color-brand-primary)] text-white hover:bg-[color:var(--color-brand-primary)]/90"
                    >
                        <Link href="/quote">Get a free estimate</Link>
                    </Button>
                </div>

                <button
                    type="button"
                    onClick={() => setIsMenuOpen((v) => !v)}
                    className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-muted"
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </div>

            {isMenuOpen && (
                <div className={cn("md:hidden", "border-t bg-white")}>
                    <div className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6 lg:px-8">
                        <Link
                            href="/"
                            className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="services" className="border-b-0">
                                <AccordionTrigger className="px-3 py-2 text-base font-medium hover:no-underline">
                                    Services
                                </AccordionTrigger>
                                <AccordionContent className="pb-1">
                                    <div className="space-y-1 pl-3">
                                        {services.map((s) => (
                                            <Link
                                                key={s.slug}
                                                href={`/services/${s.slug}`}
                                                className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted"
                                                onClick={() =>
                                                    setIsMenuOpen(false)
                                                }
                                            >
                                                {s.shortName}
                                            </Link>
                                        ))}
                                        <Link
                                            href="/services"
                                            className="block rounded-md px-3 py-2 text-sm font-semibold text-[color:var(--color-brand-primary)] hover:bg-muted"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            See all services →
                                        </Link>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Link
                            href="/about"
                            className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                        <div className="border-t pt-4">
                            <a
                                href={`tel:${site.phone.tel}`}
                                className="mb-3 flex items-center gap-2 px-3 text-sm font-semibold text-[color:var(--color-brand-primary)]"
                            >
                                <Phone className="h-4 w-4" />
                                {site.phone.display}
                            </a>
                            <Button
                                asChild
                                className="w-full bg-[color:var(--color-brand-primary)] text-white hover:bg-[color:var(--color-brand-primary)]/90"
                            >
                                <Link
                                    href="/quote"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Get a free estimate
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
