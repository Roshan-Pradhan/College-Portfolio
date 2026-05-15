import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = { title: "Academics" };

const tabs = [
  {
    key: "primary",
    label: "Primary (1–5)",
    grades: "Grade 1–5 · Ages 6–10",
    title: "Primary School",
    desc: "Our primary programme builds strong foundations in literacy, numeracy, and curiosity. Small class sizes ensure individual attention and a love of learning from day one.",
    highlight: "Emphasis on play-based and activity-based learning",
    subjects: [
      "Nepali Language",
      "English Language",
      "Mathematics",
      "Science & Health",
      "Social Studies",
      "Computer Basics",
      "Creative Arts",
      "Physical Education",
    ],
  },
  {
    key: "middle",
    label: "Middle (6–8)",
    grades: "Grade 6–8 · Ages 11–13",
    title: "Middle School",
    desc: "The middle school years bridge primary foundations and secondary specialisation. Students explore subjects in greater depth while developing independent study skills.",
    highlight: "Introduction to laboratory work and project-based learning",
    subjects: [
      "Nepali",
      "English",
      "Mathematics",
      "Science (Phy/Chem/Bio)",
      "Computer Science",
      "Social Studies",
      "Optional Mathematics",
      "Health & PE",
    ],
  },
  {
    key: "secondary",
    label: "Secondary (9–12)",
    grades: "Grade 9–12 · Ages 14–17",
    title: "Secondary School",
    desc: "Secondary students prepare for SEE (Grade 10) and NEB Board Examinations (Grade 11–12). We offer Science and Management streams with expert faculty guidance.",
    highlight:
      "Dedicated board exam preparation and university entrance coaching",
    subjects: [
      "Compulsory Nepali & English",
      "Mathematics",
      "Science (Gr 9–10)",
      "Social Studies (Gr 9–10)",
      "Physics · Chemistry · Biology",
      "Accountancy (Gr 11–12)",
      "Computer Science (Elective)",
      "Career Counselling",
    ],
  },
];

const results = [
  {
    year: "2080 BS",
    pass: "98.4%",
    distinction: "42 students",
    top: "Anisha Tamang — 3.9 GPA",
  },
  {
    year: "2079 BS",
    pass: "97.8%",
    distinction: "38 students",
    top: "Rajan Magar — 3.95 GPA",
  },
  {
    year: "2078 BS",
    pass: "96.5%",
    distinction: "31 students",
    top: "Puja Ghimire — 3.8 GPA",
  },
];

export default function AcademicsPage() {
  return (
    <>
      <div className="hero-gradient text-white py-20">
        <div className="container px-4 lg:px-8">
          <p className="text-[#F0C040] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
            Academics
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Academic Programmes
          </h1>
          <p className="text-blue-200 text-lg max-w-xl leading-relaxed">
            Rigorous, inspiring, and future-focused education from Grade 1 to
            Grade 12.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container px-4 lg:px-8">
          <Tabs defaultValue="primary">
            <div className="flex justify-center mb-10">
              <TabsList className="h-auto p-1">
                {tabs.map((t) => (
                  <TabsTrigger
                    key={t.key}
                    value={t.key}
                    className="px-5 py-2 text-sm"
                  >
                    {t.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {tabs.map((t) => (
              <TabsContent key={t.key} value={t.key}>
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                  <div>
                    <Badge variant="secondary" className="mb-3">
                      {t.grades}
                    </Badge>
                    <h2 className="font-display text-2xl font-bold text-school-blue mb-3 gold-line">
                      {t.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-5">
                      {t.desc}
                    </p>
                    <div className="flex items-start gap-2.5 rounded-xl bg-school-blue-mid/5 border border-school-blue-mid/15 px-4 py-3 text-sm text-school-blue-mid font-medium">
                      <span>⭐</span>
                      <span>{t.highlight}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                      Subjects Offered
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {t.subjects.map((sub) => (
                        <div
                          key={sub}
                          className="flex items-center gap-2 rounded-lg border border-border/60 bg-[#F8FAFC] px-3 py-2 text-sm text-foreground/80"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-school-blue-mid flex-shrink-0" />
                          {sub}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-[#F8FAFC]" id="results">
        <div className="container px-4 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-school-blue">
              Board Exam Results
            </h2>
            <p className="text-muted-foreground mt-2">
              Consistent excellence in SEE &amp; NEB examinations
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {results.map((r) => (
              <Card
                key={r.year}
                className="card-lift border-border/60 text-center"
              >
                <CardContent className="pt-8 pb-6">
                  <p className="font-display text-2xl font-bold text-school-blue mb-1">
                    {r.year}
                  </p>
                  <p className="font-display text-5xl font-bold text-[#D4A017] my-3">
                    {r.pass}
                  </p>
                  <p className="text-sm text-muted-foreground">Pass Rate</p>
                  <div className="mt-4 pt-4 border-t border-border space-y-1.5 text-sm text-foreground/80">
                    <p>🏆 Distinction: {r.distinction}</p>
                    <p>⭐ Top scorer: {r.top}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
