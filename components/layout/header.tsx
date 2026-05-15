"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X, ChevronDown, Phone } from "lucide-react";
import { NAV } from "./layout-utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const transparent = isHome && !scrolled;

  return (
    <>
      {/* Top announcement bar */}
      <div className="shimmer-bar py-2 text-center text-xs font-medium text-white tracking-wide">
        🎓 Admissions Open for 2025–26 Academic Year &nbsp;·&nbsp;
        <Link
          href="/admissions"
          className="underline underline-offset-2 hover:no-underline"
        >
          Apply Now →
        </Link>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          "bg-white/95 backdrop-blur-md shadow-sm border-b border-border",
        )}
      >
        <div className="container flex h-16 items-center justify-between px-4 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div
              className={cn(
                "w-9 h-9 rounded-xl flex items-center justify-center transition-colors",
                "bg-school-blue-mid",
              )}
            >
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <p
                className={cn(
                  "font-display font-bold text-[15px] leading-tight transition-colors text-school-blue",
                )}
              >
                Greenfield Academy
              </p>
              <p
                className={cn(
                  "text-[9px] tracking-[0.15em] uppercase transition-colors",
                  "text-muted-foreground",
                )}
              >
                Est. 1994
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.sub && setDropdown(item.label)}
                onMouseLeave={() => setDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "nav-underline flex items-center gap-1 px-3.5 py-2 rounded-md text-sm font-medium transition-colors",
                    "text-foreground/75 hover:text-foreground hover:bg-accent",
                  )}
                >
                  {item.label}
                  {item.sub && (
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-200",
                        dropdown === item.label && "rotate-180",
                      )}
                    />
                  )}
                </Link>

                {item.sub && dropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1.5 w-52 animate-fade-in rounded-xl border border-border bg-white shadow-xl py-1.5 z-50">
                    {item.sub.map((s) => (
                      <Link
                        key={s.href + s.label}
                        href={s.href}
                        className="block px-4 py-2.5 text-sm text-foreground/75 hover:text-foreground hover:bg-accent transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+97714567890"
              className={cn(
                "flex items-center gap-1.5 text-xs transition-colors",
                "text-muted-foreground hover:text-foreground",
              )}
            >
              <Phone className="w-3.5 h-3.5" />
              +977-1-456-7890
            </a>
            <Button size="sm" asChild>
              <Link href="/admissions">Apply Now</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "lg:hidden p-2 rounded-md transition-colors",
              transparent
                ? "text-white hover:bg-white/10"
                : "text-foreground hover:bg-accent",
            )}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-white">
            <div className="container px-4 py-4 space-y-1">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-border">
                <Button className="w-full" asChild>
                  <Link href="/admissions">Apply Now</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
