'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Phone, Mail, MapPin, CheckCircle, Clock, Shield } from 'lucide-react'

const quoteFormSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    phone: z.string().min(10, 'Please enter a valid phone number'),
    email: z.string().email('Please enter a valid email address'),
    address: z.string().min(5, 'Please enter your service address'),
    propertyType: z.enum(['residential', 'commercial']).optional(),
    services: z.array(z.string()).min(1, 'Please select at least one service'),
    projectDescription: z.string().min(10, 'Please provide a brief description of your project'),
    contactMethod: z.enum(['phone', 'email', 'either']).optional(),
    preferredTime: z.string().optional(),
})

type QuoteFormData = z.infer<typeof quoteFormSchema>

export default function QuotePage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [selectedServices, setSelectedServices] = useState<string[]>([])

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<QuoteFormData>({
        resolver: zodResolver(quoteFormSchema),
    })

    const services = [
        { id: 'house-washing', label: 'House Washing', description: 'Complete exterior house cleaning' },
        { id: 'driveway-cleaning', label: 'Driveway Cleaning', description: 'Deep pressure washing for driveways' },
        { id: 'deck-patio', label: 'Deck & Patio Cleaning', description: 'Wood, composite, and stone surfaces' },
        { id: 'sidewalk-cleaning', label: 'Sidewalk Cleaning', description: 'Walkway and pathway cleaning' },
        { id: 'garbage-can', label: 'Garbage Can Cleaning', description: 'Sanitizing and deodorizing service' },
        { id: 'commercial', label: 'Commercial Property', description: 'Business and commercial buildings' },
        { id: 'roof-cleaning', label: 'Roof Cleaning', description: 'Safe roof cleaning services' },
        { id: 'other', label: 'Other', description: 'Custom pressure washing needs' },
    ]

    const handleServiceChange = (serviceId: string, checked: boolean) => {
        let newServices = [...selectedServices]
        if (checked) {
            newServices.push(serviceId)
        } else {
            newServices = newServices.filter(id => id !== serviceId)
        }
        setSelectedServices(newServices)
        setValue('services', newServices)
    }

    const onSubmit = async (data: QuoteFormData) => {
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000))

        // In a real app, you would send this data to your backend
        console.log('Quote form data:', data)

        setIsSubmitting(false)
        setIsSubmitted(true)
    }

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gray-50 py-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Card className="text-center">
                        <CardContent className="pt-16 pb-16">
                            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                Thank You for Your Quote Request!
                            </h1>
                            <p className="text-lg text-gray-600 mb-6">
                                We&apos;ve received your information and will contact you within 24 hours with your free quote.
                            </p>
                            <div className="bg-brand-primary/5 p-6 rounded-lg mb-6">
                                <p className="text-brand-primary font-semibold mb-2">
                                    Need immediate assistance?
                                </p>
                                <a
                                    href="tel:+4357906267"
                                    className="flex items-center justify-center space-x-2 text-lg font-semibold text-brand-primary hover:text-brand-secondary transition-colors"
                                >
                                    <Phone className="h-5 w-5" />
                                    <span>Call us now: (435) 790-6267</span>
                                </a>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild>
                                    <Link href="/">Return to Homepage</Link>
                                </Button>
                                <Button asChild variant="outline">
                                    <Link href="/services">View Our Services</Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-brand-primary text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Get Your Free Quote
                        </h1>
                        <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
                            Ready to transform your property? Fill out the form below and we&apos;ll provide you with a
                            free, no-obligation quote within 24 hours.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            <div className="flex items-center space-x-1">
                                <CheckCircle className="h-4 w-4 text-green-300" />
                                <span>100% Free Quotes</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <CheckCircle className="h-4 w-4 text-green-300" />
                                <span>No Obligation</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <CheckCircle className="h-4 w-4 text-green-300" />
                                <span>Licensed & Insured</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Quote Form */}
                        <div className="lg:col-span-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-2xl text-gray-900">Request Your Free Quote</CardTitle>
                                    <CardDescription>
                                        Fill out the information below and we&apos;ll get back to you with a detailed quote for your pressure washing needs.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                        {/* Contact Information */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <Label htmlFor="name">Full Name *</Label>
                                                <Input
                                                    id="name"
                                                    {...register('name')}
                                                    placeholder="Your full name"
                                                    className={errors.name ? 'border-red-500' : ''}
                                                />
                                                {errors.name && (
                                                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                                                )}
                                            </div>
                                            <div>
                                                <Label htmlFor="phone">Phone Number *</Label>
                                                <Input
                                                    id="phone"
                                                    {...register('phone')}
                                                    placeholder="(435) 790-6267"
                                                    className={errors.phone ? 'border-red-500' : ''}
                                                />
                                                {errors.phone && (
                                                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                                                )}
                                            </div>
                                        </div>

                                        <div>
                                            <Label htmlFor="email">Email Address *</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                {...register('email')}
                                                placeholder="your.email@example.com"
                                                className={errors.email ? 'border-red-500' : ''}
                                            />
                                            {errors.email && (
                                                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                            )}
                                        </div>

                                        <div>
                                            <Label htmlFor="address">Service Address *</Label>
                                            <Input
                                                id="address"
                                                {...register('address')}
                                                placeholder="123 Main Street, City, UT 84000"
                                                className={errors.address ? 'border-red-500' : ''}
                                            />
                                            {errors.address && (
                                                <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                                            )}
                                        </div>

                                        {/* Property Type */}
                                        <div>
                                            <Label htmlFor="propertyType">Property Type *</Label>
                                            <Select onValueChange={(value) => setValue('propertyType', value as 'residential' | 'commercial')}>
                                                <SelectTrigger className={errors.propertyType ? 'border-red-500' : ''}>
                                                    <SelectValue placeholder="Select property type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="residential">Residential</SelectItem>
                                                    <SelectItem value="commercial">Commercial</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            {errors.propertyType && (
                                                <p className="text-red-500 text-sm mt-1">{errors.propertyType.message}</p>
                                            )}
                                        </div>

                                        {/* Services Needed */}
                                        <div>
                                            <Label className="text-base font-medium">Services Needed *</Label>
                                            <p className="text-sm text-gray-600 mb-3">Select all services you&apos;re interested in:</p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {services.map((service) => (
                                                    <div key={service.id} className="flex items-start space-x-3">
                                                        <Checkbox
                                                            id={service.id}
                                                            checked={selectedServices.includes(service.id)}
                                                            onCheckedChange={(checked) =>
                                                                handleServiceChange(service.id, checked as boolean)
                                                            }
                                                        />
                                                        <div className="flex-1">
                                                            <Label htmlFor={service.id} className="text-sm font-medium cursor-pointer">
                                                                {service.label}
                                                            </Label>
                                                            <p className="text-xs text-gray-500">{service.description}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            {errors.services && (
                                                <p className="text-red-500 text-sm mt-1">{errors.services.message}</p>
                                            )}
                                        </div>

                                        {/* Project Description */}
                                        <div>
                                            <Label htmlFor="projectDescription">Project Description *</Label>
                                            <Textarea
                                                id="projectDescription"
                                                {...register('projectDescription')}
                                                placeholder="Please describe your pressure washing needs, any specific areas of concern, or additional details..."
                                                rows={4}
                                                className={errors.projectDescription ? 'border-red-500' : ''}
                                            />
                                            {errors.projectDescription && (
                                                <p className="text-red-500 text-sm mt-1">{errors.projectDescription.message}</p>
                                            )}
                                        </div>

                                        {/* Contact Preferences */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <Label htmlFor="contactMethod">Preferred Contact Method *</Label>
                                                <Select onValueChange={(value) => setValue('contactMethod', value as 'phone' | 'email' | 'either')}>
                                                    <SelectTrigger className={errors.contactMethod ? 'border-red-500' : ''}>
                                                        <SelectValue placeholder="How should we contact you?" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="phone">Phone Call</SelectItem>
                                                        <SelectItem value="email">Email</SelectItem>
                                                        <SelectItem value="either">Either is fine</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                {errors.contactMethod && (
                                                    <p className="text-red-500 text-sm mt-1">{errors.contactMethod.message}</p>
                                                )}
                                            </div>
                                            <div>
                                                <Label htmlFor="preferredTime">Preferred Contact Time</Label>
                                                <Input
                                                    id="preferredTime"
                                                    {...register('preferredTime')}
                                                    placeholder="e.g., Weekday mornings, After 5 PM"
                                                />
                                            </div>
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            disabled={isSubmitting}
                                            className="w-full bg-brand-primary hover:bg-brand-secondary"
                                        >
                                            {isSubmitting ? 'Submitting...' : 'Get My Free Quote'}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Information Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="space-y-6">
                                {/* Direct Contact */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-xl">Need Immediate Help?</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <a
                                                href="tel:+4357906267"
                                                className="flex items-center space-x-3 p-3 bg-brand-primary/5 rounded-lg hover:bg-brand-primary/10 transition-colors"
                                            >
                                                <Phone className="h-5 w-5 text-brand-primary" />
                                                <div>
                                                    <p className="font-semibold text-brand-primary">(435) 790-6267</p>
                                                    <p className="text-sm text-gray-600">Call for immediate assistance</p>
                                                </div>
                                            </a>
                                            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                                <Mail className="h-5 w-5 text-gray-600" />
                                                <div>
                                                    <p className="font-semibold">orson@uintahcleanandgreen.com</p>
                                                    <p className="text-sm text-gray-600">Email us anytime</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Business Hours */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-xl flex items-center space-x-2">
                                            <Clock className="h-5 w-5" />
                                            <span>Business Hours</span>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <span>Monday - Saturday:</span>
                                                <span className="font-semibold">7AM - 7PM</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Sunday:</span>
                                                <span className="font-semibold">By Appointment</span>
                                            </div>
                                            <div className="pt-2 border-t">
                                                <p className="text-brand-primary font-semibold">Emergency Service Available</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Service Areas */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-xl flex items-center space-x-2">
                                            <MapPin className="h-5 w-5" />
                                            <span>Service Areas</span>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-2 text-sm">
                                            <p>We proudly serve throughout Utah:</p>
                                            <ul className="space-y-1 text-gray-600">
                                                <li>• Vernal</li>
                                                <li>• Roosevelt</li>
                                                <li>• Heber City</li>
                                                <li>• Park City</li>
                                                <li>• Surrounding areas</li>
                                            </ul>
                                            <p className="text-xs text-gray-500 pt-2">
                                                Don&apos;t see your area? Contact us - we may still be able to help!
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Trust Indicators */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-xl flex items-center space-x-2">
                                            <Shield className="h-5 w-5" />
                                            <span>Why Choose Us?</span>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-center space-x-2">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                <span>Licensed & Insured</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                <span>100% Satisfaction Guaranteed</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                <span>Professional Equipment</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                <span>Eco-Friendly Methods</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                <span>Local Utah Business</span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
