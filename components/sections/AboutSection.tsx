"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const highlights = [
  "National Education Board affiliated curriculum",
  "Experienced and qualified teaching staff",
  "State-of-the-art science & computer labs",
  "Comprehensive sports and arts programmes",
  "Safe, inclusive, and supportive environment",
  "Active parent–teacher engagement",
];

export default function AboutSection() {
  const ref = useReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-white"
      id="about"
    >
      <div className="container px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="reveal relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#E6F1FB] to-[#B5D4F4] flex items-center justify-center overflow-hidden relative">
              <div className="text-center text-school-blue-mid">
                <div className="text-6xl mb-3">🏫</div>
                <p className="font-display font-semibold text-lg">
                  Greenfield Academy Campus
                </p>
                <p className="text-sm text-[#378ADD] mt-1 opacity-70">
                  Replace with real campus photo
                </p>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4A017]/10 rounded-bl-full" />
            </div>

            {/* Stat badge */}
            <div className="absolute -bottom-5 -right-5 rounded-xl bg-school-blue px-5 py-4 text-white shadow-xl">
              <p className="font-display text-3xl font-bold text-[#F0C040] leading-none">
                30+
              </p>
              <p className="text-blue-200 text-xs mt-0.5">
                Years of Excellence
              </p>
            </div>

            {/* Affiliation chip */}
            <div className="absolute -top-4 -left-4 flex items-center gap-3 rounded-xl bg-white border border-border px-3 py-2.5 shadow-lg">
              <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide">
                  NEB Affiliated
                </p>
                <p className="text-sm font-semibold text-foreground">
                  Since 1994
                </p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="reveal text-[#D4A017] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
              Welcome to Greenfield
            </p>
            <h2 className="reveal font-display text-3xl md:text-4xl font-bold text-school-blue mb-4 gold-line">
              A Legacy of Learning &amp; Growth
            </h2>
            <p className="reveal reveal-delay-1 text-muted-foreground leading-relaxed mb-4">
              Founded in 1994, Greenfield Academy has grown into one of
              Kathmandu Valley's most respected educational institutions. We
              believe every child carries unique potential — and it is our
              mission to help them discover, nurture, and express it.
            </p>
            <p className="reveal reveal-delay-2 text-muted-foreground leading-relaxed mb-7">
              Our approach combines a rigorous national curriculum with a broad
              range of co-curricular activities, ensuring students develop not
              just academically, but as well-rounded individuals ready for the
              opportunities and challenges ahead.
            </p>

            <ul className="reveal reveal-delay-2 grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-foreground/80"
                >
                  <CheckCircle2 className="w-4 h-4 text-school-blue-mid mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="reveal reveal-delay-3">
              <Button
                asChild
                className="group bg-school-blue-mid hover:bg-school-blue! px-5 py-5"
              >
                <Link href="/about" className="hover:bg-red-500 border">
                  Learn Our Story
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
