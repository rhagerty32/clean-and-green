import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, CheckCircle, Star, Droplets, Home, Car, Trash2 } from 'lucide-react'

export default function HomePage() {
    const services = [
        {
            icon: Home,
            title: 'House Washing',
            description: 'Complete exterior house cleaning that removes dirt, mold, and grime safely.',
        },
        {
            icon: Car,
            title: 'Driveway Cleaning',
            description: 'Deep pressure washing to restore your driveway to like-new condition.',
        },
        {
            icon: Droplets,
            title: 'Deck & Patio Cleaning',
            description: 'Gentle yet effective cleaning for wood, composite, and stone surfaces.',
        },
        {
            icon: Trash2,
            title: 'Garbage Can Cleaning',
            description: 'Sanitizing service to eliminate odors and bacteria from waste containers.',
        },
    ]

    const benefits = [
        'Licensed & Insured',
        'Free, No-Obligation Quotes',
        'Satisfaction Guaranteed',
        'Professional Equipment',
        'Eco-Friendly Methods',
        'Local Utah Business',
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent text-white py-20">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            UINTAH CLEAN & GREEN
                        </h1>
                        <p className="text-xl md:text-2xl font-semibold mb-4">
                            PRESSURE PERFECT. EVERY TIME
                        </p>
                        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-blue-100">
                            Professional pressure washing services for homes and businesses throughout Utah.
                            Transform your property with our expert cleaning solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                            <Button
                                asChild
                                size="lg"
                                className="bg-white text-brand-primary hover:bg-gray-100 font-semibold text-lg px-8 py-6"
                            >
                                <Link href="/quote">Get Your Free Quote Today</Link>
                            </Button>
                            <a
                                href="tel:+4357906267"
                                className="flex items-center space-x-2 text-lg font-semibold hover:text-blue-200 transition-colors"
                            >
                                <Phone className="h-5 w-5" />
                                <span>(435) 790-6267</span>
                            </a>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            <div className="flex items-center space-x-1">
                                <CheckCircle className="h-4 w-4 text-green-300" />
                                <span>Free Quotes</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <CheckCircle className="h-4 w-4 text-green-300" />
                                <span>Licensed & Insured</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <CheckCircle className="h-4 w-4 text-green-300" />
                                <span>Satisfaction Guaranteed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Professional Services
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We provide comprehensive pressure washing solutions for residential and commercial properties
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <service.icon className="h-12 w-12 text-brand-primary mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {service.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-secondary">
                            <Link href="/services">View All Services</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Why Choose Uintah Clean & Green?
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                With years of experience serving Utah communities, we deliver exceptional
                                pressure washing results that exceed expectations. Our commitment to quality
                                and customer satisfaction sets us apart.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <CheckCircle className="h-5 w-5 text-green-500" />
                                        <span className="text-gray-700">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-secondary">
                                    <Link href="/about">Learn More About Us</Link>
                                </Button>
                                <Button asChild variant="outline" size="lg">
                                    <Link href="/gallery">View Our Work</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="bg-brand-primary/5 p-8 rounded-lg">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-brand-primary mb-2">100%</div>
                                <div className="text-lg font-semibold text-gray-900 mb-4">Satisfaction Guaranteed</div>
                                <div className="flex justify-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-6">
                                    Join hundreds of satisfied customers throughout Utah who trust us
                                    with their pressure washing needs.
                                </p>
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <p className="text-sm text-gray-600 italic mb-2">
                                        &quot;Outstanding service! Orson transformed our driveway and house exterior.
                                        Highly recommend!&quot;
                                    </p>
                                    <p className="text-sm font-semibold text-gray-900">- Sarah M., Vernal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 bg-brand-primary text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Transform Your Property?
                    </h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Get your free, no-obligation quote today and see the difference professional pressure washing makes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-brand-primary hover:bg-gray-100 font-semibold"
                        >
                            <Link href="/quote">Get Free Quote</Link>
                        </Button>
                        <a
                            href="tel:+4357906267"
                            className="flex items-center space-x-2 text-lg font-semibold hover:text-blue-200 transition-colors"
                        >
                            <Phone className="h-5 w-5" />
                            <span>Call Now: (435) 790-6267</span>
                        </a>
                    </div>
                    <p className="text-sm text-blue-200 mt-4">
                        Available Monday-Saturday 7AM-7PM | Emergency service available
                    </p>
                </div>
            </section>
        </div>
    )
}
