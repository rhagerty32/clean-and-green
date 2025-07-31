import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Phone, CheckCircle, Home, Car, Droplets, Trash2, Building, Sparkles, TreePine, Clock } from 'lucide-react'

export default function ServicesPage() {
    const services = [
        {
            icon: Home,
            title: 'House Washing',
            description: 'Complete exterior house cleaning that removes dirt, mold, mildew, and grime safely and effectively.',
            features: [
                'Soft wash and pressure wash techniques',
                'Safe for all siding materials',
                'Removes mold, mildew, and algae',
                'Restores original appearance',
                'Protects your home\'s value'
            ],
            process: 'We use a combination of low-pressure washing and specialized cleaning solutions to safely clean your home\'s exterior without damage.',
            priceRange: 'Starting at $299'
        },
        {
            icon: Car,
            title: 'Driveway Cleaning',
            description: 'Deep pressure washing to restore your driveway to like-new condition, removing oil stains and years of buildup.',
            features: [
                'Oil stain removal',
                'Concrete and asphalt cleaning',
                'Weed and moss removal',
                'Sealing services available',
                'Immediate curb appeal improvement'
            ],
            process: 'High-pressure cleaning combined with specialized degreasers to eliminate tough stains and restore your driveway\'s appearance.',
            priceRange: 'Starting at $149'
        },
        {
            icon: Droplets,
            title: 'Deck & Patio Cleaning',
            description: 'Gentle yet effective cleaning for wood, composite, and stone surfaces that preserves and protects.',
            features: [
                'Wood deck restoration',
                'Composite deck cleaning',
                'Stone and concrete patios',
                'Staining preparation',
                'Furniture cleaning included'
            ],
            process: 'Tailored pressure and cleaning solutions based on your deck material to ensure deep cleaning without damage.',
            priceRange: 'Starting at $199'
        },
        {
            icon: Trash2,
            title: 'Garbage Can Cleaning',
            description: 'Sanitizing service to eliminate odors and bacteria from waste containers, keeping your property fresh.',
            features: [
                'Monthly cleaning schedules',
                'Eco-friendly sanitizers',
                'Odor elimination',
                'Bacteria and germ removal',
                'Convenient curbside service'
            ],
            process: 'High-temperature pressure washing with sanitizing agents to eliminate germs, bacteria, and persistent odors.',
            priceRange: 'Starting at $25/month'
        },
        {
            icon: TreePine,
            title: 'Sidewalk & Walkway Cleaning',
            description: 'Professional cleaning of walkways, sidewalks, and pathways to ensure safe, clean access to your property.',
            features: [
                'Slip hazard removal',
                'Moss and algae elimination',
                'Gum and stain removal',
                'Improved safety',
                'Enhanced property appearance'
            ],
            process: 'Systematic pressure washing to remove buildup, stains, and safety hazards from all walking surfaces.',
            priceRange: 'Starting at $99'
        },
        {
            icon: Building,
            title: 'Commercial Property Cleaning',
            description: 'Comprehensive pressure washing services for businesses, maintaining professional appearance and compliance.',
            features: [
                'Storefront cleaning',
                'Parking lot maintenance',
                'Building exterior washing',
                'Regular maintenance programs',
                'Compliance with health codes'
            ],
            process: 'Scheduled cleaning programs designed to maintain your business\'s professional appearance year-round.',
            priceRange: 'Custom quotes available'
        },
        {
            icon: Sparkles,
            title: 'Roof Cleaning',
            description: 'Specialized roof cleaning services that remove moss, algae, and debris to extend your roof\'s lifespan.',
            features: [
                'Moss and algae removal',
                'Gutter cleaning included',
                'Soft wash techniques',
                'Extends roof lifespan',
                'Improves energy efficiency'
            ],
            process: 'Low-pressure cleaning methods with specialized solutions to safely remove growth without damaging roofing materials.',
            priceRange: 'Starting at $399'
        }
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Professional Pressure Washing Services
                        </h1>
                        <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
                            Transform your property with our comprehensive pressure washing solutions.
                            From residential homes to commercial properties, we deliver pressure perfect results every time.
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
                                <span>(435) 790-6267</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Complete Pressure Washing Solutions
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Every service is backed by our satisfaction guarantee and performed by licensed, insured professionals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-3">
                                        <service.icon className="h-8 w-8 text-brand-primary" />
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                                            <span className="text-sm font-semibold text-brand-primary">
                                                {service.priceRange}
                                            </span>
                                        </div>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 mb-4">
                                        {service.description}
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-semibold text-gray-900 mb-2">What&apos;s Included:</h4>
                                        <ul className="space-y-1">
                                            {service.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                                                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-gray-50 p-3 rounded-lg mb-4">
                                        <h4 className="font-semibold text-gray-900 mb-1 text-sm">Our Process:</h4>
                                        <p className="text-sm text-gray-600">{service.process}</p>
                                    </div>

                                    <Button className="w-full bg-brand-primary hover:bg-brand-secondary">
                                        <Link href="/quote" className="w-full text-center">
                                            Get Quote for {service.title}
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Our Services */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose Uintah Clean & Green?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Card className="text-center">
                            <CardContent className="p-6">
                                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Licensed & Insured
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Fully licensed and insured for your peace of mind and protection.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardContent className="p-6">
                                <Clock className="h-12 w-12 text-brand-primary mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Reliable Service
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    On-time arrivals and consistent, professional service you can count on.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardContent className="p-6">
                                <Sparkles className="h-12 w-12 text-brand-accent mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Quality Guaranteed
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    100% satisfaction guarantee on all services. We&apos;re not happy until you are.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardContent className="p-6">
                                <TreePine className="h-12 w-12 text-green-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Eco-Friendly
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Environmentally safe cleaning solutions that protect your family and pets.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Serving Utah Communities
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                            We proudly serve homeowners and businesses throughout the greater Utah area with
                            professional pressure washing services.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        {[
                            'Salt Lake City', 'Provo', 'Ogden', 'Park City',
                            'West Valley City', 'Sandy', 'Orem', 'West Jordan',
                            'Layton', 'Taylorsville', 'Murray', 'Bountiful'
                        ].map((city, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border">
                                <span className="text-gray-700 font-medium">{city}</span>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <p className="text-gray-600 mb-4">
                            Don&apos;t see your area listed? Give us a call - we may still be able to help!
                        </p>
                        <a
                            href="tel:+4357906267"
                            className="text-brand-primary font-semibold hover:text-brand-secondary transition-colors"
                        >
                            (435) 790-6267
                        </a>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-brand-primary text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Get your free quote today and transform your property with professional pressure washing.
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
                    <p className="text-sm text-blue-200 mt-4">
                        Free estimates • Licensed & Insured • Satisfaction Guaranteed
                    </p>
                </div>
            </section>
        </div>
    )
}
