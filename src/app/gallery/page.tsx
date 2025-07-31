import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Camera, ArrowRight, Star, CheckCircle } from 'lucide-react'

export default function GalleryPage() {
    // Placeholder data for before/after photos
    // In a real application, these would come from a CMS or database
    const galleryItems = [
        {
            id: 1,
            category: 'House Washing',
            title: 'Victorian Home Exterior Cleaning',
            location: 'Salt Lake City, UT',
            beforeImage: '/api/placeholder/400/300?text=Before:+Dirty+House',
            afterImage: '/api/placeholder/400/300?text=After:+Clean+House',
            description: 'Complete exterior house washing removed years of dirt, mold, and grime.',
            results: ['Removed mold and mildew', 'Restored original siding color', 'Improved curb appeal']
        },
        {
            id: 2,
            category: 'Driveway Cleaning',
            title: 'Concrete Driveway Restoration',
            location: 'Provo, UT',
            beforeImage: '/api/placeholder/400/300?text=Before:+Stained+Driveway',
            afterImage: '/api/placeholder/400/300?text=After:+Clean+Driveway',
            description: 'Oil stains and years of buildup completely removed from concrete driveway.',
            results: ['Eliminated oil stains', 'Removed tire marks', 'Like-new appearance']
        },
        {
            id: 3,
            category: 'Deck Cleaning',
            title: 'Wood Deck Restoration',
            location: 'Park City, UT',
            beforeImage: '/api/placeholder/400/300?text=Before:+Weathered+Deck',
            afterImage: '/api/placeholder/400/300?text=After:+Restored+Deck',
            description: 'Weathered deck restored to beautiful natural wood appearance.',
            results: ['Removed weather stains', 'Prepared for staining', 'Extended deck life']
        },
        {
            id: 4,
            category: 'Commercial Cleaning',
            title: 'Shopping Center Storefront',
            location: 'Ogden, UT',
            beforeImage: '/api/placeholder/400/300?text=Before:+Dirty+Storefront',
            afterImage: '/api/placeholder/400/300?text=After:+Clean+Storefront',
            description: 'Professional storefront cleaning improved business appearance.',
            results: ['Enhanced professional image', 'Removed grime buildup', 'Improved customer appeal']
        },
        {
            id: 5,
            category: 'Sidewalk Cleaning',
            title: 'Residential Walkway Cleaning',
            location: 'Sandy, UT',
            beforeImage: '/api/placeholder/400/300?text=Before:+Dirty+Walkway',
            afterImage: '/api/placeholder/400/300?text=After:+Clean+Walkway',
            description: 'Moss and stain removal from concrete walkway improved safety.',
            results: ['Eliminated slip hazards', 'Removed moss and algae', 'Restored appearance']
        },
        {
            id: 6,
            category: 'Patio Cleaning',
            title: 'Stone Patio Restoration',
            location: 'West Jordan, UT',
            beforeImage: '/api/placeholder/400/300?text=Before:+Stained+Patio',
            afterImage: '/api/placeholder/400/300?text=After:+Clean+Patio',
            description: 'Natural stone patio cleaned and restored to original beauty.',
            results: ['Restored natural stone color', 'Removed organic stains', 'Enhanced outdoor space']
        }
    ]

    const categories = ['All', 'House Washing', 'Driveway Cleaning', 'Deck Cleaning', 'Commercial Cleaning', 'Sidewalk Cleaning', 'Patio Cleaning']

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Our Work Gallery
                        </h1>
                        <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
                            See the incredible transformations we&apos;ve achieved for customers throughout Utah.
                            Every project showcases our commitment to pressure perfect results.
                        </p>
                        <div className="flex items-center justify-center space-x-2 text-blue-200">
                            <Camera className="h-5 w-5" />
                            <span>Real customer results • Before & after photos</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Notice about photos */}
            <section className="py-8 bg-yellow-50 border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="flex items-center justify-center space-x-2 text-yellow-800 mb-2">
                            <Camera className="h-5 w-5" />
                            <span className="font-semibold">Photo Gallery Coming Soon</span>
                        </div>
                        <p className="text-yellow-700">
                            We&apos;re building our photo gallery with real customer results.
                            In the meantime, call us to see examples of our work and get your free quote!
                        </p>
                        <div className="mt-4">
                            <a
                                href="tel:+4357906267"
                                className="text-brand-primary font-semibold hover:text-brand-secondary transition-colors"
                            >
                                (435) 790-6267
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filter Tabs - Future functionality */}
            <section className="py-8 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors ${index === 0
                                    ? 'bg-brand-primary text-white'
                                    : 'bg-white text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid - Placeholder content */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {galleryItems.map((item) => (
                            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                                <CardContent className="p-0">
                                    {/* Before/After Images */}
                                    <div className="grid grid-cols-2">
                                        <div className="relative">
                                            <div className="bg-gray-200 h-48 flex items-center justify-center">
                                                <div className="text-center">
                                                    <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                                                    <p className="text-gray-500 text-sm">Before Photo</p>
                                                    <p className="text-xs text-gray-400">Coming Soon</p>
                                                </div>
                                            </div>
                                            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                                                BEFORE
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <div className="bg-gray-100 h-48 flex items-center justify-center">
                                                <div className="text-center">
                                                    <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                                                    <p className="text-gray-500 text-sm">After Photo</p>
                                                    <p className="text-xs text-gray-400">Coming Soon</p>
                                                </div>
                                            </div>
                                            <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                                                AFTER
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="bg-brand-primary/10 text-brand-primary px-2 py-1 rounded text-xs font-semibold">
                                                {item.category}
                                            </span>
                                            <span className="text-sm text-gray-500">{item.location}</span>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {item.title}
                                        </h3>

                                        <p className="text-gray-600 mb-4">
                                            {item.description}
                                        </p>

                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-gray-900 text-sm">Results Achieved:</h4>
                                            {item.results.map((result, index) => (
                                                <div key={index} className="flex items-center space-x-2">
                                                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                                    <span className="text-sm text-gray-600">{result}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            What Our Customers Say
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Don&apos;t just take our word for it – hear from satisfied customers across Utah.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'Sarah M.',
                                location: 'Salt Lake City',
                                rating: 5,
                                text: 'Outstanding service! Orson transformed our driveway and house exterior. The results were incredible and the price was very fair. Highly recommend!'
                            },
                            {
                                name: 'Mike R.',
                                location: 'Provo',
                                rating: 5,
                                text: 'Professional, reliable, and the quality of work exceeded our expectations. Our deck looks brand new after their cleaning service.'
                            },
                            {
                                name: 'Jennifer K.',
                                location: 'Park City',
                                rating: 5,
                                text: 'Orson and his team did an amazing job on our house and walkways. On time, professional, and the results speak for themselves!'
                            }
                        ].map((testimonial, index) => (
                            <Card key={index}>
                                <CardContent className="p-6">
                                    <div className="flex justify-center mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 italic mb-4 text-center">
                                        &quot;{testimonial.text}&quot;
                                    </p>
                                    <div className="text-center">
                                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-brand-primary text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready for Your Own Transformation?
                    </h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Join our satisfied customers and see what pressure perfect results look like for your property.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
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
                    <div className="flex items-center justify-center space-x-2 text-blue-200">
                        <ArrowRight className="h-4 w-4" />
                        <span>Free estimates • Licensed & Insured • Satisfaction Guaranteed</span>
                    </div>
                </div>
            </section>
        </div>
    )
}
