"use server"

import { Resend } from "resend"
import { z } from "zod"
import { site } from "@/lib/site"

const leadSchema = z.object({
    kind: z.enum(["quote", "contact"]),
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(7),
    address: z.string().optional(),
    propertyType: z.enum(["residential", "commercial"]).optional(),
    services: z.array(z.string()).optional(),
    subject: z.string().optional(),
    message: z.string().min(5),
    contactMethod: z.enum(["phone", "email", "either"]).optional(),
    preferredTime: z.string().optional(),
})

export type LeadInput = z.infer<typeof leadSchema>

export type SendLeadResult =
    | { ok: true; fallback?: boolean }
    | { ok: false; error: string }

function formatLead(input: LeadInput): { subject: string; text: string; html: string } {
    const titleKind = input.kind === "quote" ? "estimate request" : "contact form message"
    const subject = `New ${titleKind} from ${input.name}`

    const lines: [string, string | undefined][] = [
        ["Name", input.name],
        ["Phone", input.phone],
        ["Email", input.email],
        ["Address", input.address],
        ["Property type", input.propertyType],
        [
            "Services",
            input.services && input.services.length > 0
                ? input.services.join(", ")
                : undefined,
        ],
        ["Subject", input.subject],
        ["Preferred contact method", input.contactMethod],
        ["Preferred time", input.preferredTime],
    ]

    const text = [
        `New ${titleKind} from the website.`,
        "",
        ...lines
            .filter(([, v]) => v && v.length > 0)
            .map(([k, v]) => `${k}: ${v}`),
        "",
        "Message:",
        input.message,
    ].join("\n")

    const html = `<!doctype html>
<html><body style="font-family: ui-sans-serif, system-ui, sans-serif; color: #0b1622; line-height: 1.55;">
<h2 style="margin: 0 0 12px; color: #073760;">New ${titleKind}</h2>
<p style="margin: 0 0 20px;">From the ${site.name} website.</p>
<table style="border-collapse: collapse; width: 100%; max-width: 560px;">
${lines
        .filter(([, v]) => v && v.length > 0)
        .map(
            ([k, v]) =>
                `<tr><td style="padding: 6px 12px 6px 0; color: #64748b; vertical-align: top;">${k}</td><td style="padding: 6px 0;"><strong>${v}</strong></td></tr>`,
        )
        .join("\n")}
</table>
<h3 style="margin: 24px 0 6px; color: #073760;">Message</h3>
<p style="white-space: pre-wrap; margin: 0;">${input.message}</p>
</body></html>`

    return { subject, text, html }
}

export async function sendLead(input: LeadInput): Promise<SendLeadResult> {
    const parsed = leadSchema.safeParse(input)
    if (!parsed.success) {
        return { ok: false, error: "Please double-check the form." }
    }

    const apiKey = process.env.RESEND_API_KEY
    const { subject, text, html } = formatLead(parsed.data)

    if (!apiKey) {
        console.warn(
            "[sendLead] RESEND_API_KEY missing — falling back to log-only.",
        )
        console.log("[sendLead] subject:", subject)
        console.log("[sendLead] body:\n" + text)
        return { ok: true, fallback: true }
    }

    try {
        const resend = new Resend(apiKey)
        await resend.emails.send({
            from: `${site.name} <${site.senderEmail}>`,
            to: site.email,
            replyTo: parsed.data.email,
            subject,
            text,
            html,
        })
        return { ok: true }
    } catch (err) {
        console.error("[sendLead] Resend error:", err)
        return {
            ok: false,
            error: "Something went wrong sending your message. Please call us instead.",
        }
    }
}
