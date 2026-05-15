import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "News & Events" };

type BadgeVariant = "success" | "info" | "warning";

const allNews: {
  category: string;
  badge: BadgeVariant;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  featured: boolean;
}[] = [
  {
    category: "Achievement",
    badge: "success",
    title: "Greenfield Students Win National Science Olympiad 2024",
    excerpt:
      "Our Grade 10 team secured first place, beating 120 schools from across Nepal.",
    date: "March 28, 2025",
    readTime: "3 min",
    featured: true,
  },
  {
    category: "Event",
    badge: "info",
    title: "Annual Sports Day 2025 — A Day of Champions",
    excerpt:
      "Over 600 students competed across 18 events. See results and photos.",
    date: "March 15, 2025",
    readTime: "5 min",
    featured: false,
  },
  {
    category: "Notice",
    badge: "warning",
    title: "SEE Board Exam Schedule Released — Grade 10",
    excerpt:
      "The NEB has released the SEE 2082 schedule. Review the dates carefully.",
    date: "March 10, 2025",
    readTime: "2 min",
    featured: false,
  },
  {
    category: "Achievement",
    badge: "success",
    title: "Greenfield Wins Best School Award at PABSON",
    excerpt:
      "Recognised for outstanding academic results and extracurricular excellence.",
    date: "Feb 20, 2025",
    readTime: "3 min",
    featured: false,
  },
  {
    category: "Event",
    badge: "info",
    title: "Science Fair 2025 — Registration Now Open",
    excerpt:
      "Students from Grade 6–12 can register for the upcoming Science Fair.",
    date: "Feb 10, 2025",
    readTime: "2 min",
    featured: false,
  },
];

const events = [
  {
    date: "Apr 18",
    title: "Parent-Teacher Meeting",
    type: "School Event",
    time: "10 AM – 2 PM",
  },
  {
    date: "Apr 25",
    title: "Inter-School Debate",
    type: "Competition",
    time: "9 AM",
  },
  {
    date: "May 5",
    title: "Science Fair 2025",
    type: "Academic",
    time: "All day",
  },
  {
    date: "May 12",
    title: "Annual Cultural Program",
    type: "Cultural",
    time: "5 PM",
  },
  {
    date: "May 20",
    title: "Sports Day (Junior)",
    type: "Sports",
    time: "8 AM",
  },
  {
    date: "Jun 2",
    title: "End-of-Year Ceremony",
    type: "School Event",
    time: "11 AM",
  },
];

export default function NewsPage() {
  const featured = allNews.find((n) => n.featured);
  const rest = allNews.filter((n) => !n.featured);

  return (
    <>
      <div className="hero-gradient text-white py-20">
        <div className="container px-4 lg:px-8">
          <p className="text-[#F0C040] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
            Updates
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            News &amp; Events
          </h1>
          <p className="text-blue-200 text-lg max-w-lg leading-relaxed">
            Stay informed about everything happening at Greenfield Academy.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* News */}
            <div className="lg:col-span-2 space-y-5">
              {/* Featured */}
              {featured && (
                <Card className="card-lift border-border/60 overflow-hidden">
                  <div className="h-1.5 bg-gradient-to-r from-school-blue to-[#378ADD]" />
                  <CardContent className="p-6">
                    <Badge variant={featured.badge} className="mb-3">
                      {featured.category}
                    </Badge>
                    <h2 className="font-display text-xl font-bold text-foreground hover:text-school-blue-mid cursor-pointer transition-colors mb-2">
                      {featured.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {featured.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {featured.readTime} read
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-school-blue-mid gap-1 h-auto py-1"
                      >
                        Read more <ArrowRight className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {rest.map((item) => (
                <Card
                  key={item.title}
                  className="card-lift border-border/60 group cursor-pointer"
                >
                  <CardContent className="p-5 flex gap-4">
                    <div className="flex-1 min-w-0">
                      <Badge variant={item.badge} className="mb-2">
                        {item.category}
                      </Badge>
                      <h3 className="font-display font-semibold text-[15px] text-foreground group-hover:text-school-blue-mid transition-colors mb-1 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {item.excerpt}
                      </p>
                      <div className="flex items-center gap-4 mt-2.5 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3 h-3" />
                          {item.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3 h-3" />
                          {item.readTime}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground/50 flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Events */}
            <div>
              <div className="rounded-xl border border-border bg-[#F8FAFC] p-5 sticky top-24">
                <h3 className="font-display font-semibold text-lg text-school-blue mb-5 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#D4A017]" />
                  Upcoming Events
                </h3>
                <div className="space-y-3">
                  {events.map((ev) => (
                    <div
                      key={ev.title}
                      className="flex gap-3 rounded-lg bg-white border border-border/60 hover:border-school-blue-mid/40 p-3 transition-colors cursor-pointer group"
                    >
                      <div className="min-w-[46px] rounded-lg bg-school-blue text-white text-center px-2 py-2 flex-shrink-0">
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
                          {ev.type} · {ev.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
