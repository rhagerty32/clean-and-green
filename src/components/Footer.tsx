import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-brand-primary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="text-2xl font-bold mb-4">
                            UINTAH CLEAN & GREEN
                        </div>
                        <p className="text-blue-200 mb-4 text-lg font-semibold">
                            PRESSURE PERFECT. EVERY TIME
                        </p>
                        <p className="text-blue-100 mb-6">
                            Professional pressure washing services for homes and businesses throughout Utah.
                            We deliver exceptional cleaning results with guaranteed satisfaction.
                        </p>
                        <div className="flex items-center space-x-2 mb-2">
                            <Phone className="h-5 w-5 text-brand-accent" />
                            <a
                                href="tel:+4357906267"
                                className="text-white font-semibold hover:text-brand-accent transition-colors text-lg"
                            >
                                (435) 790-6267
                            </a>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Mail className="h-5 w-5 text-brand-accent" />
                            <a
                                href="mailto:orson@uintahcleanandgreen.com"
                                className="text-blue-100 hover:text-white transition-colors"
                            >
                                orson@uintahcleanandgreen.com
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-blue-100 hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-blue-100 hover:text-white transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="text-blue-100 hover:text-white transition-colors">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-blue-100 hover:text-white transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-blue-100 hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/quote" className="text-brand-accent hover:text-white transition-colors font-semibold">
                                    Get Free Quote
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Service Areas & Hours */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Service Info</h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex items-center space-x-2 mb-2">
                                    <MapPin className="h-5 w-5 text-brand-accent" />
                                    <span className="font-semibold">Service Areas</span>
                                </div>
                                <p className="text-blue-100 text-sm">
                                    Vernal, Roosevelt, Heber City, and surrounding areas.
                                </p>
                            </div>
                            <div>
                                <div className="flex items-center space-x-2 mb-2">
                                    <Clock className="h-5 w-5 text-brand-accent" />
                                    <span className="font-semibold">Business Hours</span>
                                </div>
                                <div className="text-blue-100 text-sm">
                                    <p>Monday - Saturday: 7AM - 7PM</p>
                                    <p>Sunday: By Appointment</p>
                                    <p className="text-brand-accent font-semibold mt-1">
                                        Emergency Service Available
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-blue-600 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-blue-100 text-sm mb-4 md:mb-0">
                            © 2025 Uintah Clean & Green. All rights reserved. | Licensed & Insured
                        </div>
                        <div className="text-blue-100 text-sm">
                            <span>Owned and operated by </span>
                            <span className="text-white font-semibold">Orson Batty</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
