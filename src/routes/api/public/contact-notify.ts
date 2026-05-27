import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const NOTIFY_TO = "zlaticanastasija99@gmail.com";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_mail/gmail/v1";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(2000),
});

function escapeHeader(value: string): string {
  // strip CR/LF to prevent header injection
  return value.replace(/[\r\n]+/g, " ");
}

function toBase64Url(str: string): string {
  // utf-8 safe base64url
  const b64 = Buffer.from(str, "utf-8").toString("base64");
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function buildRawEmail(params: { to: string; subject: string; replyTo: string; text: string }): string {
  const lines = [
    `To: ${escapeHeader(params.to)}`,
    `Reply-To: ${escapeHeader(params.replyTo)}`,
    `Subject: ${escapeHeader(params.subject)}`,
    "MIME-Version: 1.0",
    'Content-Type: text/plain; charset="UTF-8"',
    "Content-Transfer-Encoding: 7bit",
    "",
    params.text,
  ];
  return toBase64Url(lines.join("\r\n"));
}

export const Route = createFileRoute("/api/public/contact-notify")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
        const GOOGLE_MAIL_API_KEY = process.env.GOOGLE_MAIL_API_KEY;
        if (!LOVABLE_API_KEY || !GOOGLE_MAIL_API_KEY) {
          return new Response(JSON.stringify({ error: "Email service not configured" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }

        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return new Response(JSON.stringify({ error: "Invalid JSON" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        const parsed = schema.safeParse(body);
        if (!parsed.success) {
          return new Response(JSON.stringify({ error: "Invalid input" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        const { name, email, message } = parsed.data;
        const text = [
          "You have a new contact form submission.",
          "",
          `Name:    ${name}`,
          `Email:   ${email}`,
          "",
          "Message:",
          message,
        ].join("\n");

        const raw = buildRawEmail({
          to: NOTIFY_TO,
          subject: `New contact form submission from ${name}`,
          replyTo: email,
          text,
        });

        const res = await fetch(`${GATEWAY_URL}/users/me/messages/send`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            "X-Connection-Api-Key": GOOGLE_MAIL_API_KEY,
          },
          body: JSON.stringify({ raw }),
        });

        if (!res.ok) {
          const errText = await res.text();
          console.error(`Gmail send failed [${res.status}]: ${errText}`);
          return new Response(JSON.stringify({ error: "Failed to send notification" }), {
            status: 502,
            headers: { "Content-Type": "application/json" },
          });
        }

        return new Response(JSON.stringify({ ok: true }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      },
    },
  },
});
