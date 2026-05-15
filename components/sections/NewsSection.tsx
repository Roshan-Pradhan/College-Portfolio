"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const news = [
  {
    category: "Achievement",
    title: "Greenfield Students Win National Science Olympiad 2024",
    excerpt:
      "Our Grade 10 team secured first place, beating 120 schools from across Nepal in physics, chemistry and biology.",
    date: "March 28, 2025",
    readTime: "3 min",
  },
  {
    category: "Event",
    title: "Annual Sports Day 2025 — A Day of Champions",
    excerpt:
      "Over 600 students competed across 18 events in our biggest sports day yet. See the full results and photo gallery.",
    date: "March 15, 2025",
    readTime: "5 min",
  },
  {
    category: "Notice",
    title: "SEE Board Exam Schedule Released — Grade 10 Students",
    excerpt:
      "The National Examination Board has released the SEE 2082 schedule. All Grade 10 students should review the dates carefully.",
    date: "March 10, 2025",
    readTime: "2 min",
  },
];

const events = [
  { date: "Apr 18", title: "Parent-Teacher Meeting", type: "School Event" },
  { date: "Apr 25", title: "Inter-School Debate", type: "Competition" },
  { date: "May 5", title: "Science Fair 2025", type: "Academic" },
  { date: "May 12", title: "Annual Cultural Program", type: "Cultural" },
];

export default function NewsSection() {
  const ref = useReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-white"
      id="news"
    >
      <div className="container px-4 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="reveal text-[#D4A017] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
              Latest Updates
            </p>
            <h2 className="reveal font-display text-3xl md:text-4xl font-bold text-school-blue">
              News &amp; Events
            </h2>
          </div>
          <div className="reveal">
            <Button variant="outline" size="sm" asChild>
              <Link href="/news">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* News cards */}
          <div className="lg:col-span-2 space-y-4">
            {news.map((item, i) => (
              <Card
                key={item.title}
                className={`reveal reveal-delay-${i + 1} card-lift border-border/60 group cursor-pointer`}
              >
                <CardContent className="p-5 flex gap-4">
                  <div className="flex-1 min-w-0">
                    <Badge className="mb-2">{item.category}</Badge>
                    <h3 className="font-display font-semibold text-[15px] text-foreground group-hover:text-school-blue-mid transition-colors mb-1.5 leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {item.readTime} read
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground/50 flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Events sidebar */}
          <div className="reveal reveal-delay-2">
            <div className="rounded-xl border border-border bg-[#F8FAFC] p-5 sticky top-24">
              <h3 className="font-display font-semibold text-lg text-school-blue mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#D4A017]" />
                Upcoming Events
              </h3>
              <div className="space-y-3">
                {events.map((ev) => (
                  <div
                    key={ev.title}
                    className="flex gap-3 rounded-lg bg-white border border-border/60 hover:border-school-blue-mid/40 p-3 transition-colors cursor-pointer group"
                  >
                    <div className="min-w-[46px] rounded-lg bg-school-blue text-white text-center px-2.5 py-2 flex-shrink-0">
                      <p className="text-[9px] text-blue-300 uppercase tracking-wider leading-none mb-0.5">
                        {ev.date.split(" ")[0]}
                      </p>
                      <p className="text-lg font-bold leading-none">
                        {ev.date.split(" ")[1]}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground group-hover:text-school-blue-mid transition-colors">
                        {ev.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {ev.type}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/news"
                className="block text-center text-school-blue-mid text-sm font-medium mt-4 hover:text-school-blue transition-colors"
              >
                View full calendar →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
