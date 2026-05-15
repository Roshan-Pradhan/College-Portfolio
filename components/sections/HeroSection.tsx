import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Award, Users, BookOpen, Trophy } from "lucide-react";

const stats = [
  { icon: Users, value: "1,200+", label: "Students Enrolled" },
  { icon: Award, value: "98%", label: "Board Pass Rate" },
  { icon: BookOpen, value: "60+", label: "Clubs & Activities" },
  { icon: Trophy, value: "30+", label: "Years of Excellence" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[91vh] flex flex-col hero-gradient overflow-hidden">
      {/* Top gold bar */}
      <div className="absolute top-0 inset-x-0 h-1 shimmer-bar" />

      {/* Dot grid texture */}
      <div className="absolute inset-0 dot-grid" />

      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-16 -left-24 w-80 h-80 rounded-full bg-[#D4A017]/10 blur-3xl pointer-events-none" />

      {/* Main content */}
      <div className="container flex-1 flex flex-col justify-center px-4 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* ── Left column ────────────────────────────────── */}
          <div>
            {/* Admission pill */}
            <div className="stagger-child inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
              Admissions Open for 2025–26
            </div>

            {/* Headline */}
            <h1 className="stagger-child font-display text-4xl md:text-5xl xl:text-[3.6rem] font-bold text-white leading-[1.1] mb-6">
              Where Every
              <span className="block text-[#F0C040]">Student Finds</span>
              Their Path
            </h1>

            {/* Sub-copy */}
            <p className="stagger-child text-blue-100 text-lg leading-relaxed mb-8 max-w-lg">
              A nurturing environment that blends academic excellence with
              holistic development — preparing confident, curious learners for a
              rapidly changing world.
            </p>

            {/* Buttons */}
            <div className="stagger-child flex flex-wrap gap-4 mb-8">
              <Button size="lg" asChild className="group">
                <Link href="/admissions">
                  Explore Admissions
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="hover:text-white text-white"
              >
                <Link href="/about">
                  <Play className="transition-transform group-hover:scale-110" />
                  Virtual Tour
                </Link>
              </Button>
            </div>

            {/* Trust chips */}
            <div className="stagger-child flex flex-wrap gap-4">
              {["NEB Affiliated", "ISO Certified", "Award-Winning Faculty"].map(
                (chip) => (
                  <span
                    key={chip}
                    className="flex items-center gap-1.5 text-blue-200 text-xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017]" />
                    {chip}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* ── Right column – card ─────────────────────────── */}
          <div className="stagger-child hidden lg:block">
            <div className="relative">
              {/* Glass card */}
              <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#D4A017] flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg leading-tight">
                      Academic Excellence
                    </p>
                    <p className="text-blue-200 text-sm">
                      Consistently top-ranked
                    </p>
                  </div>
                </div>

                {[
                  { label: "Science & Technology", pct: 96 },
                  { label: "Arts & Humanities", pct: 92 },
                  { label: "Sports & Co-curricular", pct: 88 },
                ].map(({ label, pct }) => (
                  <div key={label} className="mb-4">
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-blue-100">{label}</span>
                      <span className="font-semibold text-[#F0C040]">
                        {pct}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#D4A017] to-[#F0C040]"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                ))}

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-blue-200 text-sm">
                    Overall student satisfaction
                  </span>
                  <span className="font-display text-2xl font-bold text-[#F0C040]">
                    4.9 / 5
                  </span>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-7 -left-5 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-2xl">
                <div className="w-10 h-10 rounded-lg bg-school-blue-mid/10 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-school-blue-mid" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide">
                    National Award
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    Best School 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="border-t border-white/10 bg-white/10 backdrop-blur-sm">
        <div className="container px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1 py-5 px-4 text-center hover:bg-white/5 transition-colors"
              >
                <Icon className="w-5 h-5 text-[#D4A017]" />
                <span className="font-display text-2xl font-bold text-white">
                  {value}
                </span>
                <span className="text-blue-200 text-xs">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
