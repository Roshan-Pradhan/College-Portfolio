import type { Metadata } from "next";
import { CheckCircle2, Users, Award, BookOpen, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import CTASection from "@/components/sections/CTASection";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = { title: "About Us" };

const values = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    desc: "We set high expectations and provide the support every student needs to meet them.",
  },
  {
    icon: Heart,
    title: "Character & Integrity",
    desc: "Honesty, kindness, and respect are woven into every aspect of school life.",
  },
  {
    icon: Users,
    title: "Inclusive Community",
    desc: "We celebrate diversity and ensure every child feels valued and belonging.",
  },
  {
    icon: Award,
    title: "Holistic Growth",
    desc: "Sports, arts, leadership, and service shape well-rounded individuals.",
  },
];

const facultyStatic = [
  {
    name: "Dr. Ramesh Adhikari",
    role: "Principal",
    dept: "Leadership",
    exp: "25 yrs",
  },
  {
    name: "Mrs. Sunita Karki",
    role: "Vice Principal",
    dept: "Academics",
    exp: "18 yrs",
  },
  {
    name: "Mr. Bikram Rai",
    role: "Head of Science",
    dept: "Sciences",
    exp: "15 yrs",
  },
  {
    name: "Ms. Anita Shrestha",
    role: "Head of Humanities",
    dept: "Arts & Social",
    exp: "12 yrs",
  },
];

const highlights = [
  "National Education Board affiliated curriculum",
  "Experienced and qualified teaching staff",
  "State-of-the-art science & computer labs",
  "Comprehensive sports and arts programmes",
];

export default async function AboutPage() {
  const supabase = await createClient();
  const { data: faculty } = await supabase
    .from("faculty")
    .select("*")
    .order("created_at");
  return (
    <>
      {/* Page hero */}
      <div className="hero-gradient text-white py-20">
        <div className="container px-4 lg:px-8">
          <p className="text-[#F0C040] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
            About Us
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our Story &amp; Mission
          </h1>
          <p className="text-blue-200 text-lg max-w-xl leading-relaxed">
            Three decades of nurturing exceptional learners in the heart of
            Kathmandu Valley.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="py-16 bg-white" id="story">
        <div className="container px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-school-blue mb-4 gold-line">
                How It All Began
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Greenfield Academy was founded in 1994 by a group of educators
                with a bold vision: to create a school where academic rigour and
                personal development go hand in hand. Starting with just 120
                students and 8 teachers, we have grown into a thriving
                institution serving over 1,200 families.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Over the past 30 years, we have consistently produced top
                scorers in the SEE and NEB board examinations. But our proudest
                achievement is not just academic results — it is the graduates
                who go on to become compassionate, capable, and curious adults.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2.5 text-sm text-foreground/80"
                  >
                    <CheckCircle2 className="w-4 h-4 text-school-blue-mid mt-0.5 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#E6F1FB] to-[#B5D4F4] flex items-center justify-center">
              <div className="text-center text-school-blue-mid">
                <div className="text-7xl mb-4">🎓</div>
                <p className="font-display font-semibold">Est. 1994</p>
                <p className="text-sm text-[#378ADD] opacity-70 mt-1">
                  Replace with campus photo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="container px-4 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-school-blue">
              Our Core Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <Card
                key={title}
                className="card-lift text-center border-border/60"
              >
                <CardContent className="pt-8 pb-6 px-5">
                  <div className="w-14 h-14 rounded-2xl bg-school-blue-mid/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-school-blue-mid" />
                  </div>
                  <h3 className="font-display font-semibold text-base mb-2">
                    {title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Principal message */}
      <section className="py-16 bg-white" id="principal">
        <div className="container px-4 lg:px-8 max-w-3xl">
          <div className="text-center mb-8">
            <p className="text-[#D4A017] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
              Leadership
            </p>
            <h2 className="font-display text-3xl font-bold text-school-blue">
              Principal&apos;s Message
            </h2>
          </div>
          <div className="relative rounded-2xl bg-[#F8FAFC] border border-border p-8 md:p-10">
            <div className="absolute top-6 left-8 font-serif text-7xl text-school-blue-mid/10 leading-none select-none">
              &ldquo;
            </div>
            <blockquote className="relative text-foreground/80 text-lg leading-relaxed italic mb-6">
              At Greenfield Academy, we do not merely teach subjects — we
              cultivate thinkers, dreamers, and doers. Every child who walks
              through our gates carries immense potential, and it is our
              privilege and responsibility to help them realise it.
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-school-blue-mid text-white flex items-center justify-center font-semibold text-lg flex-shrink-0">
                RA
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Dr. Ramesh Adhikari
                </p>
                <p className="text-sm text-muted-foreground">
                  Principal, Greenfield Academy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-16 bg-[#F8FAFC]" id="faculty">
        <div className="container px-4 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-school-blue">
              Leadership Teams
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {(faculty?.length ? faculty : facultyStatic).map((f) => {
              const initials = f.name
                .split(" ")
                .map((w: string) => w[0] ?? "")
                .join("")
                .slice(0, 2);
              return (
                <Card
                  key={f.name}
                  className="card-lift text-center border-border/60"
                >
                  <CardContent className="pt-8 pb-6">
                    <div className="w-16 h-16 rounded-full bg-school-blue-mid text-white flex items-center justify-center font-semibold text-lg mx-auto mb-4">
                      {initials}
                    </div>
                    <p className="font-semibold text-sm text-foreground">
                      {f.name}
                    </p>
                    <p className="text-school-blue-mid text-xs mt-0.5 font-medium">
                      {f.role}
                    </p>
                    <p className="text-muted-foreground text-xs mt-1">
                      {f.dept} · {f.exp}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
