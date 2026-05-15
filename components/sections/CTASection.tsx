"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

export default function CTASection() {
  const ref = useReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-white"
    >
      <div className="container px-4 lg:px-8">
        <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-br from-school-blue via-school-blue-mid to-[#1a6ab8] p-10 md:p-16 text-white">
          {/* Decorative blobs */}
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-[#D4A017]/10 blur-3xl pointer-events-none" />
          <div className="absolute inset-0 dot-grid opacity-30" />

          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/40 bg-[#D4A017]/15 px-4 py-1.5 text-[#F0C040] text-sm font-medium mb-5">
                <span className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
                Admissions Open 2025–26
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
                Ready to Join the{" "}
                <span className="text-[#F0C040]">Greenfield Family?</span>
              </h2>
              <p className="text-blue-200 leading-relaxed mb-5">
                Applications for the 2025–26 academic year are now open. Limited
                seats available — apply early to secure your child&apos;s place.
              </p>
              <div className="flex flex-wrap gap-5 text-sm text-blue-200">
                <a
                  href="tel:+97714567890"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#D4A017]" /> +977-1-456-7890
                </a>
                <a
                  href="mailto:admissions@greenfield.edu.np"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#D4A017]" />{" "}
                  admissions@greenfield.edu.np
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3 shrink-0">
              <Button size="lg" asChild className="group">
                <Link href="/admissions">
                  Apply Now
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="text-white"
              >
                <Link href="/contact">Schedule a Visit</Link>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="text-blue-300 hover:text-white hover:bg-white/10"
              >
                <Link href="/about">Download Prospectus →</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
