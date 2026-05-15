import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = { title: "Contact Us" };

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    lines: ["Greenfield Road, Lalitpur-10", "Kathmandu Valley, Nepal"],
    bg: "bg-blue-50",
    ic: "text-school-blue-mid",
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+977-1-456-7890", "+977-9801234567 (Mobile)"],
    bg: "bg-green-50",
    ic: "text-green-700",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@greenfield.edu.np", "admissions@greenfield.edu.np"],
    bg: "bg-amber-50",
    ic: "text-amber-700",
  },
  {
    icon: Clock,
    title: "Office Hours",
    lines: ["Sun–Fri: 9:00 AM – 4:00 PM", "Saturday: 10:00 AM – 1:00 PM"],
    bg: "bg-purple-50",
    ic: "text-purple-700",
  },
];

export default function ContactPage() {
  return (
    <>
      <div className="hero-gradient text-white py-20">
        <div className="container px-4 lg:px-8">
          <p className="text-[#F0C040] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
            Contact
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-blue-200 text-lg max-w-lg leading-relaxed">
            We&apos;d love to hear from you. Reach out for admissions, queries,
            or a campus visit.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container px-4 lg:px-8">
          {/* Info cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {contactInfo.map(({ icon: Icon, title, lines, bg, ic }) => (
              <Card key={title} className="card-lift border-border/60">
                <CardContent className="p-5">
                  <div
                    className={`w-10 h-10 rounded-xl ${bg} ${ic} flex items-center justify-center mb-3`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="font-semibold text-sm mb-2">{title}</p>
                  {lines.map((l) => (
                    <p key={l} className="text-muted-foreground text-sm">
                      {l}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map + directions */}
            <div>
              <h2 className="font-display text-2xl font-bold text-school-blue mb-5 gold-line">
                Find Us
              </h2>
              <div className="aspect-video rounded-xl bg-[#E6F1FB] border border-border/60 flex items-center justify-center mb-5">
                <div className="text-center text-school-blue-mid">
                  <MapPin className="w-12 h-12 mx-auto mb-2 opacity-30" />
                  <p className="font-medium text-sm">
                    Replace with Google Maps iframe
                  </p>
                  <p className="text-xs text-[#378ADD] mt-1 opacity-70">
                    e.g. &lt;iframe src=&quot;https://maps.google.com/...&quot;
                    /&gt;
                  </p>
                </div>
              </div>
              <div className="rounded-xl bg-[#F8FAFC] border border-border/60 p-5">
                <p className="font-semibold text-sm mb-3">How to Reach Us</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    🚌 <strong>By Bus:</strong> Routes 18 or 22 to Greenfield
                    Chowk
                  </li>
                  <li>
                    🚕 <strong>By Taxi:</strong> Ask for Greenfield Academy,
                    Lalitpur-10
                  </li>
                  <li>
                    🏍️ <strong>Landmark:</strong> Near Ekantakuna, opposite City
                    Bank
                  </li>
                  <li>
                    🚗 <strong>Parking:</strong> Available on campus for 50+
                    vehicles
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
