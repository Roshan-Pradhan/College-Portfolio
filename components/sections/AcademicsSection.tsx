"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Microscope,
  Palette,
  Calculator,
  Globe,
  Music,
  Dumbbell,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { useReveal } from "@/hooks/useReveal";

const programs = [
  {
    icon: Calculator,
    title: "Science & Mathematics",
    grades: "All Grades",
    description:
      "Rigorous STEM curriculum with hands-on experiments and problem-solving at the core.",
    iconBg: "bg-school-blue-mid",
  },
  {
    icon: Microscope,
    title: "Science Laboratory",
    grades: "Grade 6–12",
    description:
      "Fully equipped labs for Biology, Chemistry, and Physics practical sessions.",
    iconBg: "bg-green-600",
  },
  {
    icon: Globe,
    title: "Languages & Social Studies",
    grades: "All Grades",
    description:
      "Nepali, English, and Social Studies through engaging, context-rich methods.",
    iconBg: "bg-purple-600",
  },
  {
    icon: Palette,
    title: "Arts & Creative Studies",
    grades: "Grade 1–10",
    description:
      "Drawing, painting, and creative expression as part of holistic development.",
    iconBg: "bg-orange-500",
  },
  {
    icon: Music,
    title: "Music & Performing Arts",
    grades: "All Grades",
    description:
      "Classical and contemporary music, drama, and annual cultural performances.",
    iconBg: "bg-pink-600",
  },
  {
    icon: Dumbbell,
    title: "Physical Education",
    grades: "All Grades",
    description:
      "Daily PE, inter-school sports competitions, yoga, and health education.",
    iconBg: "bg-amber-500",
  },
];

const levels = [
  {
    level: "Primary",
    grades: "Grade 1–5",
    age: "Ages 6–10",
    colour: "bg-[#D4A017]",
    items: [
      "Foundation literacy",
      "Numeracy skills",
      "Environmental science",
      "Creative arts",
    ],
  },
  {
    level: "Middle",
    grades: "Grade 6–8",
    age: "Ages 11–13",
    colour: "bg-[#378ADD]",
    items: [
      "Core STEM subjects",
      "Social studies",
      "Computer basics",
      "Language arts",
    ],
  },
  {
    level: "Secondary",
    grades: "Grade 9–12",
    age: "Ages 14–17",
    colour: "bg-green-500",
    items: [
      "NEB board exams",
      "Science / Management",
      "Career guidance",
      "University prep",
    ],
  },
];

export default function AcademicsSection() {
  const ref = useReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-[#F8FAFC]"
      id="academics"
    >
      <div className="container px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="reveal text-[#D4A017] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
            Academics
          </p>
          <h2 className="reveal font-display text-3xl md:text-4xl font-bold text-school-blue mb-4">
            A Curriculum Built for Tomorrow
          </h2>
          <p className="reveal reveal-delay-1 text-muted-foreground">
            From foundational literacy to advanced sciences, our programmes are
            designed to challenge, inspire, and equip every student for lifelong
            success.
          </p>
        </div>

        {/* Programme cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {programs.map((prog, i) => {
            const Icon = prog.icon;
            return (
              <Card
                key={prog.title}
                className={`reveal reveal-delay-${(i % 3) + 1} card-lift border-border/60 group overflow-hidden`}
              >
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 rounded-xl ${prog.iconBg} flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge
                    variant="secondary"
                    className="mb-3 text-xs font-medium"
                  >
                    {prog.grades}
                  </Badge>
                  <h3 className="font-display font-semibold text-[17px] text-foreground mb-2">
                    {prog.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {prog.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-school-blue-mid text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* School levels band */}
        <div className="reveal rounded-2xl bg-school-blue p-8 md:p-10 text-white">
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl font-bold">School Levels</h3>
            <p className="text-blue-200 text-sm mt-1">
              Seamless progression from Grade 1 to Grade 12
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {levels.map((lvl) => (
              <div
                key={lvl.level}
                className="rounded-xl bg-white/10 p-5 hover:bg-white/15 transition-colors"
              >
                <span
                  className={`${lvl.colour} text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3`}
                >
                  {lvl.level} School
                </span>
                <p className="font-display text-xl font-semibold">
                  {lvl.grades}
                </p>
                <p className="text-blue-200 text-xs mb-4">{lvl.age}</p>
                <ul className="space-y-1.5">
                  {lvl.items.map((item) => (
                    <li
                      key={item}
                      className="text-blue-100 text-sm flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/academics"
              className="inline-flex items-center gap-2 text-[#F0C040] hover:text-white text-sm font-medium transition-colors group"
            >
              View full curriculum details
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
