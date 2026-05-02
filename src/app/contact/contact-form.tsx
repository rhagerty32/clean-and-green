"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { sendLead } from "@/app/actions/send-lead"

const schema = z.object({
    name: z.string().min(2, "Please enter your name"),
    phone: z.string().min(7, "Please enter a phone number we can reach you at"),
    email: z.string().email("That email doesn’t look right"),
    subject: z.string().optional(),
    message: z.string().min(5, "A few words about what you need helps a lot"),
})

type FormValues = z.infer<typeof schema>

export default function ContactForm() {
    const [submitting, setSubmitting] = useState(false)

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: { subject: "" },
    })

    const onSubmit = async (values: FormValues) => {
        setSubmitting(true)
        const res = await sendLead({
            kind: "contact",
            name: values.name,
            phone: values.phone,
            email: values.email,
            subject: values.subject,
            message: values.message,
        })
        setSubmitting(false)

        if (res.ok) {
            toast.success("Message sent. We'll be in touch soon.", {
                description: res.fallback
                    ? "(Email delivery hasn't been wired up yet — we'll still see your message in the server logs.)"
                    : undefined,
            })
            reset()
        } else {
            toast.error(res.error)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
                <Label htmlFor="subject">What’s this about?</Label>
                <Select
                    onValueChange={(v) => setValue("subject", v)}
                    defaultValue=""
                >
                    <SelectTrigger id="subject">
                        <SelectValue placeholder="Pick a topic (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="quote">Quote question</SelectItem>
                        <SelectItem value="schedule">
                            Scheduling / timing
                        </SelectItem>
                        <SelectItem value="service">Service question</SelectItem>
                        <SelectItem value="commercial">
                            Commercial property
                        </SelectItem>
                        <SelectItem value="other">Something else</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about the job, the property, or your question. The more detail, the more accurate our reply."
                    {...register("message")}
                    aria-invalid={!!errors.message}
                />
                {errors.message && (
                    <p className="text-xs text-destructive">
                        {errors.message.message}
                    </p>
                )}
            </div>

            <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="w-full bg-[color:var(--color-brand-primary)] text-white hover:bg-[color:var(--color-brand-primary)]/90"
            >
                {submitting ? "Sending…" : "Send message"}
            </Button>
        </form>
    )
}
