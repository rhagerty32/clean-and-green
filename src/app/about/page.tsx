import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, CheckCircle, Award, Shield, Users, Heart, Star, Clock } from 'lucide-react'

export default function AboutPage() {
    const values = [
        {
            icon: Shield,
            title: 'Reliability',
            description: 'You can count on us to show up on time and deliver consistent, high-quality results every single time.'
        },
        {
            icon: Heart,
            title: 'Customer Care',
            description: 'Your satisfaction is our top priority. We treat every property as if it were our own home.'
        },
        {
            icon: Award,
            title: 'Excellence',
            description: 'We use professional-grade equipment and techniques to ensure the best possible results for your property.'
        },
        {
            icon: Users,
            title: 'Community',
            description: 'As a local Utah business, we&apos;re committed to serving our neighbors and supporting our community.'
        }
    ]

    const certifications = [
        'Licensed Utah Contractor',
        'Fully Insured & Bonded',
        'Environmental Safety Certified',
        'Professional Equipment Trained',
        'Customer Service Excellence'
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            About Uintah Clean & Green
                        </h1>
                        <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
                            Pressure Perfect. Every Time. That&apos;s not just our tagline – it&apos;s our promise to every customer.
                        </p>
                    </div>
                </div>
            </section>

            {/* Orson's Story */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Meet Orson Batty, Owner & Founder
                            </h2>
                            <div className="space-y-4 text-gray-600">
                                <p className="text-lg">
                                    Hi, I&apos;m Orson Batty, and I founded Uintah Clean & Green with a simple mission:
                                    to provide Utah homeowners and businesses with the highest quality pressure washing
                                    services at fair, honest prices.
                                </p>
                                <p>
                                    After years of seeing subpar cleaning services that left customers disappointed,
                                    I decided to start my own company based on the principles that matter most to me:
                                    integrity, quality, and genuine care for every customer.
                                </p>
                                <p>
                                    Growing up in Utah, I learned the value of hard work and taking pride in everything
                                    you do. Whether it&apos;s cleaning a small residential driveway or a large commercial
                                    property, I approach every job with the same attention to detail and commitment to excellence.
                                </p>
                                <p>
                                    When you choose Uintah Clean & Green, you&apos;re not just hiring a service –
                                    you&apos;re partnering with someone who genuinely cares about making your property
                                    look its absolute best.
                                </p>
                            </div>
                            <div className="mt-8">
                                <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-secondary">
                                    <Link href="/quote">Get Your Free Quote</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="bg-gray-100 p-8 rounded-lg">
                            {/* Placeholder for Orson's photo */}
                            <div className="bg-brand-primary/10 h-96 rounded-lg flex items-center justify-center mb-6">
                                <div className="text-center text-gray-600">
                                    <Users className="h-24 w-24 mx-auto mb-4 text-brand-primary" />
                                    <p className="text-lg font-semibold">Orson Batty</p>
                                    <p>Owner & Founder</p>
                                    <p className="text-sm mt-2">Professional photo coming soon</p>
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
                                <a
                                    href="tel:+4357906267"
                                    className="text-2xl font-bold text-brand-primary hover:text-brand-secondary transition-colors"
                                >
                                    (435) 790-6267
                                </a>
                                <p className="text-gray-600 mt-2">
                                    Call or text anytime for your free quote!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            These principles guide everything we do and ensure every customer receives
                            the exceptional service they deserve.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {values.map((value, index) => (
                            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                                <CardContent className="p-8">
                                    <value.icon className="h-16 w-16 text-brand-primary mx-auto mb-6" />
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {value.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Why Choose Uintah Clean & Green?
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Local Utah Business</h3>
                                        <p className="text-gray-600">
                                            Born and raised in Utah, we understand our local climate,
                                            building materials, and what it takes to keep properties looking great year-round.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Professional Equipment</h3>
                                        <p className="text-gray-600">
                                            We invest in the best commercial-grade equipment to ensure superior
                                            results while protecting your property from damage.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Eco-Friendly Methods</h3>
                                        <p className="text-gray-600">
                                            Our cleaning solutions are safe for your family, pets, and the environment
                                            while still delivering powerful cleaning results.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Satisfaction Guaranteed</h3>
                                        <p className="text-gray-600">
                                            If you&apos;re not completely satisfied with our work, we&apos;ll come back
                                            and make it right at no additional charge.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Card>
                                <CardContent className="p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                                        Our Credentials
                                    </h3>
                                    <div className="space-y-4">
                                        {certifications.map((cert, index) => (
                                            <div key={index} className="flex items-center space-x-3">
                                                <Award className="h-5 w-5 text-brand-primary flex-shrink-0" />
                                                <span className="text-gray-700">{cert}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-8 pt-6 border-t">
                                        <div className="text-center">
                                            <div className="flex justify-center mb-2">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                                ))}
                                            </div>
                                            <p className="text-sm text-gray-600 mb-4">
                                                &quot;Orson and his team did an amazing job on our house and driveway.
                                                Professional, on-time, and the results were incredible!&quot;
                                            </p>
                                            <p className="text-sm font-semibold text-gray-900">
                                                - Jennifer K., Salt Lake City
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Promise */}
            <section className="py-16 bg-brand-primary text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <Clock className="h-12 w-12 mx-auto mb-4 text-brand-accent" />
                            <h3 className="text-xl font-bold mb-2">Fast Response</h3>
                            <p className="text-blue-100">
                                We respond to all quote requests within 24 hours, often much sooner.
                            </p>
                        </div>
                        <div>
                            <Shield className="h-12 w-12 mx-auto mb-4 text-brand-accent" />
                            <h3 className="text-xl font-bold mb-2">Fully Protected</h3>
                            <p className="text-blue-100">
                                Licensed, insured, and bonded for your complete peace of mind.
                            </p>
                        </div>
                        <div>
                            <Award className="h-12 w-12 mx-auto mb-4 text-brand-accent" />
                            <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
                            <p className="text-blue-100">
                                100% satisfaction guarantee on every job, every time.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <h2 className="text-3xl font-bold mb-4">
                            Ready to Experience the Difference?
                        </h2>
                        <p className="text-xl mb-8 text-blue-100">
                            Join hundreds of satisfied customers throughout Utah.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button
                                asChild
                                size="lg"
                                className="bg-white text-brand-primary hover:bg-gray-100 font-semibold"
                            >
                                <Link href="/quote">Get Your Free Quote</Link>
                            </Button>
                            <a
                                href="tel:+4357906267"
                                className="flex items-center space-x-2 text-lg font-semibold hover:text-blue-200 transition-colors"
                            >
                                <Phone className="h-5 w-5" />
                                <span>Call Now: (435) 790-6267</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
