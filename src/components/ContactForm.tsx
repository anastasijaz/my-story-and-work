import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    setStatus("loading");
    const { error: insertError } = await supabase
      .from("contact_submissions")
      .insert(parsed.data);
    if (insertError) {
      setStatus("error");
      setError("Something went wrong. Please try again.");
      return;
    }
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-white/15 backdrop-blur p-6 text-primary-foreground">
        <p className="font-display text-2xl">Thanks — message received.</p>
        <p className="mt-2 opacity-90">I'll get back to you as soon as possible.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm underline opacity-90 hover:opacity-100"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid gap-3 md:grid-cols-2">
        <input
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          maxLength={100}
          className="rounded-xl bg-white/15 backdrop-blur border border-white/30 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/70 focus:outline-none focus:ring-2 focus:ring-white/50"
          required
        />
        <input
          type="email"
          placeholder="Your email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          maxLength={255}
          className="rounded-xl bg-white/15 backdrop-blur border border-white/30 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/70 focus:outline-none focus:ring-2 focus:ring-white/50"
          required
        />
      </div>
      <textarea
        placeholder="Tell me about your project, role, or thesis idea…"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        maxLength={2000}
        rows={4}
        className="w-full rounded-xl bg-white/15 backdrop-blur border border-white/30 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
        required
      />
      {error && <p className="text-sm text-primary-foreground bg-black/20 rounded-lg px-3 py-2">{error}</p>}
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground hover:opacity-90 transition disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send message"}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </button>
    </form>
  );
}
