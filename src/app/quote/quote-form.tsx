"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { sendLead } from "@/app/actions/send-lead"
import { services as catalog, type ServiceSlug } from "@/lib/services"

const schema = z.object({
    name: z.string().min(2, "Please enter your name"),
    phone: z.string().min(7, "Please enter a phone number we can reach you at"),
    email: z.string().email("That email doesn’t look right"),
    address: z.string().min(5, "Please include a street + city"),
    propertyType: z.enum(["residential", "commercial"]).optional(),
    services: z
        .array(z.string())
        .min(1, "Pick at least one service so we know what to quote"),
    message: z.string().min(10, "A few sentences about the job helps us a lot"),
    contactMethod: z.enum(["phone", "email", "either"]).optional(),
    preferredTime: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

const validSlugs = new Set<string>(catalog.map((s) => s.slug))

export default function QuoteForm() {
    const searchParams = useSearchParams()
    const initialService = searchParams.get("service")
    const preselected: ServiceSlug[] =
        initialService && validSlugs.has(initialService)
            ? [initialService as ServiceSlug]
            : []

    const [selected, setSelected] = useState<string[]>(preselected)
    const [submitting, setSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            services: preselected,
            propertyType: "residential",
            contactMethod: "either",
        },
    })

    useEffect(() => {
        setValue("services", selected, { shouldValidate: false })
    }, [selected, setValue])

    const toggleService = (slug: string, on: boolean) => {
        setSelected((cur) =>
            on ? Array.from(new Set([...cur, slug])) : cur.filter((s) => s !== slug),
        )
    }

    const onSubmit = async (values: FormValues) => {
        setSubmitting(true)
        const res = await sendLead({
            kind: "quote",
            name: values.name,
            phone: values.phone,
            email: values.email,
            address: values.address,
            propertyType: values.propertyType,
            services: values.services,
            message: values.message,
            contactMethod: values.contactMethod,
            preferredTime: values.preferredTime,
        })
        setSubmitting(false)

        if (res.ok) {
            toast.success("Estimate request sent.", {
                description: res.fallback
                    ? "(Email delivery isn't wired up yet — we still see your request in the server logs.)"
                    : "We'll be in touch the same day.",
            })
            reset({
                services: [],
                propertyType: "residential",
                contactMethod: "either",
            })
            setSelected([])
            setSubmitted(true)
        } else {
            toast.error(res.error)
        }
    }

    if (submitted) {
        return (
            <div className="rounded-xl border border-[color:var(--color-brand-accent)]/30 bg-[color:var(--color-brand-accent)]/10 p-6">
                <h3 className="font-display text-2xl font-semibold tracking-tight text-[color:var(--color-brand-primary)]">
                    Got it — thanks.
                </h3>
                <p className="mt-2 text-foreground/75">
                    We’ll get back to you the same day with next steps. Need an
                    answer faster?{" "}
                    <a
                        href="tel:+14357906267"
                        className="font-semibold text-[color:var(--color-brand-primary)] underline-offset-4 hover:underline"
                    >
                        Give us a call.
                    </a>
                </p>
                <Button
                    className="mt-5"
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                >
                    Send another
                </Button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
            <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input
                        id="name"
                        autoComplete="name"
                        {...register("name")}
                        aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                        <p className="text-xs text-destructive">
                            {errors.name.message}
                        </p>
                    )}
                </div>
                <div className="space-y-1.5">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        {...register("phone")}
                        aria-invalid={!!errors.phone}
                    />
                    {errors.phone && (
                        <p className="text-xs text-destructive">
                            {errors.phone.message}
                        </p>
                    )}
                </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        autoComplete="email"
                        {...register("email")}
                        aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                        <p className="text-xs text-destructive">
                            {errors.email.message}
                        </p>
                    )}
                </div>
                <div className="space-y-1.5">
                    <Label htmlFor="propertyType">Property type</Label>
                    <Select
                        defaultValue="residential"
                        onValueChange={(v) =>
                            setValue(
                                "propertyType",
                                v as "residential" | "commercial",
                            )
                        }
                    >
                        <SelectTrigger id="propertyType">
                            <SelectValue placeholder="Pick one" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="residential">Residential</SelectItem>
                            <SelectItem value="commercial">Commercial</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="space-y-1.5">
                <Label htmlFor="address">Service address</Label>
                <Input
                    id="address"
                    autoComplete="street-address"
                    placeholder="Street, city, ZIP"
                    {...register("address")}
                    aria-invalid={!!errors.address}
                />
                {errors.address && (
                    <p className="text-xs text-destructive">
                        {errors.address.message}
                    </p>
                )}
            </div>

            <div className="space-y-3">
                <div>
                    <Label className="text-base">What do you need?</Label>
                    <p className="mt-1 text-xs text-foreground/60">
                        Pick all that apply.
                    </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                    {catalog.map((s) => {
                        const checked = selected.includes(s.slug)
                        return (
                            <label
                                key={s.slug}
                                htmlFor={`svc-${s.slug}`}
                                className={
                                    "flex cursor-pointer items-start gap-3 rounded-lg border p-3 transition-colors " +
                                    (checked
                                        ? "border-[color:var(--color-brand-primary)] bg-[color:var(--color-brand-primary)]/5"
                                        : "border-border hover:bg-muted/50")
                                }
                            >
                                <Checkbox
                                    id={`svc-${s.slug}`}
                                    checked={checked}
                                    onCheckedChange={(c) =>
                                        toggleService(s.slug, c === true)
                                    }
                                    className="mt-0.5"
                                />
                                <div>
                                    <div className="font-semibold leading-tight">
                                        {s.shortName}
                                    </div>
                                    <p className="mt-0.5 text-xs text-foreground/60">
                                        {s.tagline}
                                    </p>
                                </div>
                            </label>
                        )
                    })}
                </div>
                {errors.services && (
                    <p className="text-xs text-destructive">
                        {errors.services.message}
                    </p>
                )}
            </div>

            <div className="space-y-1.5">
                <Label htmlFor="message">Tell us about the job</Label>
                <Textarea
                    id="message"
                    rows={5}
                    placeholder="What needs done? Any details about the property, access, timing, or specific concerns. Photos welcome via text or email after you submit."
                    {...register("message")}
                    aria-invalid={!!errors.message}
                />
                {errors.message && (
                    <p className="text-xs text-destructive">
                        {errors.message.message}
                    </p>
                )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                    <Label htmlFor="contactMethod">How should we reach you?</Label>
                    <Select
                        defaultValue="either"
                        onValueChange={(v) =>
                            setValue(
                                "contactMethod",
                                v as "phone" | "email" | "either",
                            )
                        }
                    >
                        <SelectTrigger id="contactMethod">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="phone">Call or text</SelectItem>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="either">Either</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-1.5">
                    <Label htmlFor="preferredTime">Best time to reach you?</Label>
                    <Input
                        id="preferredTime"
                        placeholder="e.g. weekday mornings"
                        {...register("preferredTime")}
                    />
                </div>
            </div>

            <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="w-full bg-[color:var(--color-brand-primary)] text-white hover:bg-[color:var(--color-brand-primary)]/90"
            >
                {submitting ? "Sending…" : "Send my request"}
            </Button>

            <p className="text-center text-xs text-foreground/60">
                Or just call us:{" "}
                <a
                    href="tel:+14357906267"
                    className="font-semibold text-[color:var(--color-brand-primary)]"
                >
                    (435) 790-6267
                </a>
                . We answer.
            </p>
        </form>
    )
}
