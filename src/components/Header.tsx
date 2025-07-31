'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone } from 'lucide-react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ]

    return (
        <header className="bg-white shadow-lg relative z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="text-2xl font-bold text-brand-primary">
                                UINTAH CLEAN & GREEN
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-700 hover:text-brand-primary font-medium transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Phone Number & CTA */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href="tel:+4357906267"
                            className="flex items-center space-x-2 text-brand-primary font-semibold hover:text-brand-secondary transition-colors"
                        >
                            <Phone className="h-4 w-4" />
                            <span>(435) 790-6267</span>
                        </a>
                        <Button asChild className="bg-brand-primary hover:bg-brand-secondary">
                            <Link href="/quote">Get Free Quote</Link>
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-brand-primary"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-4 py-4 space-y-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block text-gray-700 hover:text-brand-primary font-medium transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="pt-4 border-t">
                            <a
                                href="tel:+4357906267"
                                className="flex items-center space-x-2 text-brand-primary font-semibold mb-4"
                            >
                                <Phone className="h-4 w-4" />
                                <span>(435) 790-6267</span>
                            </a>
                            <Button asChild className="w-full bg-brand-primary hover:bg-brand-secondary">
                                <Link href="/quote">Get Free Quote</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
