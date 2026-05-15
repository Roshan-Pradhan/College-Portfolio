import Link from "next/link";
import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";
import { footerLinks, socials } from "./layout-utils";
import { Separator } from "../ui/separator";

export default function Footer() {
  return (
    <footer className="bg-school-blue text-white">
      <div className="container px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="w-10 h-10 rounded-xl bg-white/15 group-hover:bg-white/25 transition-colors flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-display font-bold text-base leading-tight">
                  Greenfield Academy
                </p>
                <p className="text-[10px] text-blue-300 tracking-[0.12em] uppercase">
                  Est. 1994
                </p>
              </div>
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              Nurturing curious, confident learners through academic excellence,
              character development, and a vibrant school community since 1994.
            </p>
            <div className="flex gap-2.5">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-sm text-white mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-blue-200 hover:text-white text-sm transition-colors inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#D4A017] flex-shrink-0 group-hover:scale-150 transition-transform" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h4 className="font-display font-semibold text-sm text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4A017] mt-0.5 flex-shrink-0" />
                <span className="text-blue-200 text-sm">
                  Greenfield Road, Lalitpur-10
                  <br />
                  Kathmandu Valley, Nepal
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D4A017] flex-shrink-0" />
                <a
                  href="tel:+97714567890"
                  className="text-blue-200 hover:text-white text-sm transition-colors"
                >
                  +977-1-456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D4A017] flex-shrink-0" />
                <a
                  href="mailto:info@greenfield.edu.np"
                  className="text-blue-200 hover:text-white text-sm transition-colors"
                >
                  info@greenfield.edu.np
                </a>
              </li>
            </ul>
            <div className="mt-5 rounded-xl bg-white/10 p-4 text-xs">
              <p className="font-semibold text-white mb-1">Office Hours</p>
              <p className="text-blue-200">Sun–Fri: 9:00 AM – 4:00 PM</p>
              <p className="text-blue-200">Saturday: 10:00 AM – 1:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/10" />

      <div className="container px-4 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-blue-300">
          <p>
            © {new Date().getFullYear()} Greenfield Academy. All rights
            reserved.
          </p>
          <div className="flex gap-5">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link
              href="/sitemap"
              className="hover:text-white transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
