"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Parent of Grade 8 Student",
    content:
      "Greenfield has transformed my daughter's confidence. The teachers genuinely care about every child's progress, and the co-curricular activities are outstanding. Best decision we ever made.",
    rating: 5,
    initials: "PS",
    avatarClass: "bg-purple-100 text-purple-700",
  },
  {
    name: "Rajesh Thapa",
    role: "Alumni, Class of 2020",
    content:
      "The foundation I received at Greenfield was invaluable for my engineering entrance exams. The science labs and dedicated faculty gave me an edge that students from many other schools simply didn't have.",
    rating: 5,
    initials: "RT",
    avatarClass: "bg-blue-100 text-blue-700",
  },
  {
    name: "Sita Gurung",
    role: "Parent of Grade 5 Student",
    content:
      "My son looks forward to school every single day. The balance of academics, sports, and arts here is perfect. The teachers know each child personally — that is rare and truly invaluable.",
    rating: 5,
    initials: "SG",
    avatarClass: "bg-green-100 text-green-700",
  },
];

export default function TestimonialsSection() {
  const ref = useReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-[#F8FAFC]"
    >
      <div className="container px-4 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="reveal text-[#D4A017] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
            Testimonials
          </p>
          <h2 className="reveal font-display text-3xl md:text-4xl font-bold text-school-blue">
            Trusted by 1,200+ Families
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Card
              key={t.name}
              className={`reveal reveal-delay-${i + 1} card-lift border-border/60 relative overflow-hidden`}
            >
              {/* Accent top line */}
              <div className="h-1 bg-gradient-to-r from-school-blue to-[#378ADD]" />
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 fill-[#D4A017] text-[#D4A017]"
                    />
                  ))}
                </div>
                <p className="text-foreground/75 text-sm leading-relaxed mb-5 italic">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div
                    className={`w-10 h-10 rounded-full ${t.avatarClass} flex items-center justify-center font-semibold text-sm flex-shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
