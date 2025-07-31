import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Phone, Mail, MapPin, Clock, MessageSquare, Shield } from 'lucide-react'

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Contact Uintah Clean & Green
                        </h1>
                        <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
                            Ready to transform your property? Get in touch today for your free, no-obligation quote.
                            We&apos;re here to answer all your pressure washing questions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="tel:+4357906267"
                                className="flex items-center space-x-2 text-2xl font-bold hover:text-blue-200 transition-colors"
                            >
                                <Phone className="h-6 w-6" />
                                <span>(435) 790-6267</span>
                            </a>
                            <span className="text-blue-200">•</span>
                            <a
                                href="mailto:orson@uintahcleanandgreen.com"
                                className="flex items-center space-x-2 text-lg font-semibold hover:text-blue-200 transition-colors"
                            >
                                <Mail className="h-5 w-5" />
                                <span>orson@uintahcleanandgreen.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Multiple Ways to Reach Us
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Choose the contact method that works best for you. We respond quickly to all inquiries!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Phone */}
                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <Phone className="h-12 w-12 text-brand-primary mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Call or Text
                                </h3>
                                <a
                                    href="tel:+4357906267"
                                    className="text-2xl font-bold text-brand-primary hover:text-brand-secondary transition-colors block mb-2"
                                >
                                    (435) 790-6267
                                </a>
                                <p className="text-sm text-gray-600">
                                    Available Monday-Saturday<br />
                                    7:00 AM - 7:00 PM
                                </p>
                                <p className="text-xs text-brand-primary font-semibold mt-2">
                                    Fastest response time
                                </p>
                            </CardContent>
                        </Card>

                        {/* Email */}
                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <Mail className="h-12 w-12 text-brand-primary mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Email Us
                                </h3>
                                <a
                                    href="mailto:orson@uintahcleanandgreen.com"
                                    className="text-brand-primary hover:text-brand-secondary transition-colors font-medium break-all"
                                >
                                    orson@uintahcleanandgreen.com
                                </a>
                                <p className="text-sm text-gray-600 mt-4">
                                    Detailed project descriptions<br />
                                    and questions welcome
                                </p>
                                <p className="text-xs text-brand-primary font-semibold mt-2">
                                    Response within 24 hours
                                </p>
                            </CardContent>
                        </Card>

                        {/* Online Quote */}
                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <MessageSquare className="h-12 w-12 text-brand-primary mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Online Quote
                                </h3>
                                <Button asChild className="bg-brand-primary hover:bg-brand-secondary mb-4">
                                    <Link href="/quote">Get Free Quote</Link>
                                </Button>
                                <p className="text-sm text-gray-600">
                                    Fill out our detailed form<br />
                                    for accurate pricing
                                </p>
                                <p className="text-xs text-brand-primary font-semibold mt-2">
                                    Most comprehensive option
                                </p>
                            </CardContent>
                        </Card>

                        {/* Emergency */}
                        <Card className="text-center hover:shadow-lg transition-shadow border-red-200">
                            <CardContent className="p-6">
                                <Shield className="h-12 w-12 text-red-500 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Emergency Service
                                </h3>
                                <a
                                    href="tel:+4357906267"
                                    className="text-lg font-bold text-red-600 hover:text-red-700 transition-colors block mb-2"
                                >
                                    (435) 790-6267
                                </a>
                                <p className="text-sm text-gray-600">
                                    Available for urgent<br />
                                    cleaning needs
                                </p>
                                <p className="text-xs text-red-600 font-semibold mt-2">
                                    Same-day service available
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Business Information */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Business Hours & Service Areas */}
                        <div>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <Clock className="h-5 w-5 text-brand-primary" />
                                        <span>Business Hours</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <span className="font-medium text-gray-900">Monday - Friday</span>
                                            <span className="text-gray-600">7:00 AM - 7:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="font-medium text-gray-900">Saturday</span>
                                            <span className="text-gray-600">7:00 AM - 7:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="font-medium text-gray-900">Sunday</span>
                                            <span className="text-gray-600">By Appointment</span>
                                        </div>
                                        <div className="pt-4 border-t">
                                            <div className="flex items-center space-x-2 text-brand-primary font-semibold">
                                                <Shield className="h-4 w-4" />
                                                <span>Emergency Service Available</span>
                                            </div>
                                            <p className="text-sm text-gray-600 mt-1">
                                                Call anytime for urgent cleaning needs
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="mt-6">
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <MapPin className="h-5 w-5 text-brand-primary" />
                                        <span>Service Areas</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 mb-4">
                                        We proudly serve homeowners and businesses throughout the greater Utah area:
                                    </p>
                                    <div className="grid grid-cols-2 gap-2 text-sm">
                                        {[
                                            'Vernal', 'Maeser', 'Naples', 'Fort Duchesne', 'Roosevelt', 'Jensen', 'Heber', 'Park City',
                                        ].map((city, index) => (
                                            <div key={index} className="flex items-center space-x-1">
                                                <span className="w-1 h-1 bg-brand-primary rounded-full"></span>
                                                <span className="text-gray-700">{city}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-4 pt-4 border-t">
                                        <p className="text-sm text-gray-600">
                                            <strong>Don&apos;t see your area?</strong> Give us a call - we may still be able to help!
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Quick Contact Form */}
                        <div>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Quick Contact Form</CardTitle>
                                    <p className="text-gray-600">
                                        Send us a message and we&apos;ll get back to you within 24 hours.
                                    </p>
                                </CardHeader>
                                <CardContent>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                                                    placeholder="Your full name"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Phone *
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    required
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                                                    placeholder="(435) 790-6267"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                                                placeholder="your.email@example.com"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                                Subject
                                            </label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                                            >
                                                <option value="">Select a topic</option>
                                                <option value="quote">Request a Quote</option>
                                                <option value="scheduling">Scheduling Question</option>
                                                <option value="service">Service Question</option>
                                                <option value="feedback">Feedback</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                                Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={4}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                                                placeholder="Tell us about your project or ask us a question..."
                                            ></textarea>
                                        </div>

                                        <Button type="submit" className="w-full bg-brand-primary hover:bg-brand-secondary">
                                            Send Message
                                        </Button>

                                        <p className="text-xs text-gray-600 text-center">
                                            For faster service, call us directly at{' '}
                                            <a href="tel:+4357906267" className="text-brand-primary font-semibold">
                                                (435) 790-6267
                                            </a>
                                        </p>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Quick answers to common questions. Don&apos;t see your question? Give us a call!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                question: 'How quickly can you provide a quote?',
                                answer: 'We respond to all quote requests within 24 hours, often much sooner. For immediate quotes, call us directly at (435) 790-6267.'
                            },
                            {
                                question: 'Are you licensed and insured?',
                                answer: 'Yes! We are fully licensed, insured, and bonded. We provide proof of insurance upon request for your peace of mind.'
                            },
                            {
                                question: 'What if I\'m not satisfied with the work?',
                                answer: 'We offer a 100% satisfaction guarantee. If you\'re not completely happy, we\'ll return and make it right at no additional charge.'
                            },
                            {
                                question: 'Do you provide emergency services?',
                                answer: 'Yes, we offer emergency pressure washing services for urgent situations. Call us anytime at (435) 790-6267.'
                            },
                            {
                                question: 'How far do you travel for jobs?',
                                answer: 'We serve the Uintah Basin including Vernal, Maeser, Naples, Fort Duchesne, Roosevelt, Jensen, Heber, as well as Park City and surrounding communities. Call to check if we serve your area.'
                            },
                            {
                                question: 'What payment methods do you accept?',
                                answer: 'We accept cash, checks, and all major credit cards. Payment is due upon completion of work unless other arrangements are made.'
                            }
                        ].map((faq, index) => (
                            <Card key={index}>
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {faq.question}
                                    </h3>
                                    <p className="text-gray-600">
                                        {faq.answer}
                                    </p>
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
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Contact us today for your free, no-obligation quote. We&apos;re here to help transform your property!
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
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-200 mt-6">
                        <div>✓ Free Estimates</div>
                        <div>✓ Licensed & Insured</div>
                        <div>✓ Satisfaction Guaranteed</div>
                        <div>✓ Emergency Service Available</div>
                    </div>
                </div>
            </section>
        </div>
    )
}
