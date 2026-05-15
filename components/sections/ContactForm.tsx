"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MessageSquare, CheckCircle2 } from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";

const EMPTY = { full_name: "", phone: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await submitContactForm(form);

    if (result.success) {
      setSuccess(true);
      setForm(EMPTY);
    } else {
      setError(result.error ?? "Something went wrong. Please try again.");
    }
    setLoading(false);
  }

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <CheckCircle2 className="w-12 h-12 text-green-500" />
        <h3 className="font-display text-xl font-bold text-school-blue">
          Message Sent!
        </h3>
        <p className="text-muted-foreground text-sm max-w-xs">
          Thank you for reaching out. We'll get back to you within one business
          day.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="text-sm text-school-blue-mid underline underline-offset-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-school-blue mb-2 gold-line">
        Send a Message
      </h2>
      <p className="text-muted-foreground text-sm mb-6">
        Fill in the form and we&apos;ll respond within one business day.
      </p>

      {error && (
        <div className="mb-4 rounded-md bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Full Name *</label>
            <Input
              name="full_name"
              placeholder="Your name"
              value={form.full_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Phone *</label>
            <Input
              name="phone"
              placeholder="+977-"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Email</label>
          <Input
            name="email"
            placeholder="your@email.com"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Subject</label>
          <Input
            name="subject"
            placeholder="e.g. Admissions enquiry"
            value={form.subject}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Message *</label>
          <Textarea
            name="message"
            placeholder="Write your message here..."
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>
        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-school-blue-mid hover:bg-school-blue"
          size="lg"
        >
          <MessageSquare className="w-4 h-4" />
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}
