import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle2,
  Download,
  FileText,
  CalendarCheck,
  UserCheck,
} from "lucide-react";

export const metadata: Metadata = { title: "Admissions" };

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Fill Application Form",
    desc: "Complete the online or physical application form with student and parent details.",
  },
  {
    icon: CalendarCheck,
    step: "02",
    title: "Schedule Assessment",
    desc: "Book a date for the admission test and school visit (English, Nepali, and Maths).",
  },
  {
    icon: UserCheck,
    step: "03",
    title: "Attend Interview",
    desc: "A short, friendly interview with the student and a parent or guardian.",
  },
  {
    icon: CheckCircle2,
    step: "04",
    title: "Receive Offer Letter",
    desc: "Successful applicants receive an offer letter within 5 working days.",
  },
];

const docs = [
  "Completed application form",
  "Recent passport-size photos (4 copies)",
  "Copy of birth certificate",
  "Previous school's transfer certificate (TC)",
  "Previous school's report card / marksheet",
  "Parent/Guardian citizenship copy",
];

const fees = [
  ["Registration Fee", "NPR 2,000", "One-time"],
  ["Admission Fee", "NPR 15,000", "One-time"],
  ["Tuition (Monthly)", "NPR 4,500–6,500", "Per month"],
  ["Exam Fee", "NPR 3,000", "Per semester"],
];

export default function AdmissionsPage() {
  return (
    <>
      <div className="hero-gradient text-white py-20">
        <div className="container px-4 lg:px-8">
          <p className="text-[#F0C040] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
            Admissions
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Join Greenfield Academy
          </h1>
          <p className="text-blue-200 text-lg max-w-xl leading-relaxed">
            Applications for the 2025–26 academic year are open. Limited seats
            available across all grades.
          </p>
        </div>
      </div>

      {/* Info band */}
      <div className="bg-[#D4A017] py-3 text-white text-sm font-medium">
        <div className="container px-4 lg:px-8 flex flex-wrap justify-center gap-6">
          <span>
            📅 Deadline: <strong>May 30, 2025</strong>
          </span>
          <span>
            📝 Test: <strong>Every Saturday 10 AM</strong>
          </span>
          <span>
            📞 <strong>+977-1-456-7890</strong>
          </span>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container px-4 lg:px-8">
          {/* Process steps */}
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-school-blue">
              Admission Process
            </h2>
            <p className="text-muted-foreground mt-2">
              Simple 4-step process to join our family
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {steps.map(({ icon: Icon, step, title, desc }) => (
              <Card key={step} className="card-lift border-border/60 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-school-blue-mid flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-display font-bold text-3xl text-school-blue-mid/20">
                      {step}
                    </span>
                  </div>
                  <h3 className="font-semibold text-base mb-1.5">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Docs + fees */}
            <div>
              <h2 className="font-display text-2xl font-bold text-school-blue mb-2 gold-line">
                Documents Required
              </h2>
              <p className="text-muted-foreground text-sm mb-5">
                Please bring originals and one photocopy each.
              </p>
              <ul className="space-y-3 mb-7">
                {docs.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-sm">{d}</span>
                  </li>
                ))}
              </ul>

              <div className="rounded-xl border border-border overflow-hidden mb-5">
                <div className="bg-school-blue text-white px-5 py-3">
                  <p className="font-semibold text-sm">Fee Structure 2025–26</p>
                </div>
                <table className="w-full text-sm">
                  <tbody>
                    {fees.map(([item, amount, note]) => (
                      <tr key={item} className="border-t border-border/40">
                        <td className="px-5 py-3 text-foreground/80">{item}</td>
                        <td className="px-5 py-3 font-semibold text-school-blue-mid">
                          {amount}
                        </td>
                        <td className="px-5 py-3 text-muted-foreground text-xs">
                          {note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Download Prospectus (PDF)
              </Button>
            </div>

            {/* Enquiry form */}
            <div>
              <h2 className="font-display text-2xl font-bold text-school-blue mb-2 gold-line">
                Send an Enquiry
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                We&apos;ll get back to you within 24 hours.
              </p>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium">Parent Name *</label>
                    <Input placeholder="Full name" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium">Phone *</label>
                    <Input placeholder="+977-" type="tel" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Email</label>
                  <Input placeholder="your@email.com" type="email" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium">Student Name</label>
                    <Input placeholder="Child's name" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium">
                      Grade Applying For
                    </label>
                    <Input placeholder="e.g. Grade 5" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    placeholder="Any questions or additional details..."
                    rows={4}
                  />
                </div>
                <Button
                  className="w-full bg-school-blue-mid hover:bg-school-blue"
                  size="lg"
                >
                  Submit Enquiry
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Or call us at{" "}
                  <a
                    href="tel:+97714567890"
                    className="text-school-blue-mid hover:underline"
                  >
                    +977-1-456-7890
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
