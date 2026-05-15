import { LuFacebook, LuInstagram, LuTwitter, LuYoutube } from "react-icons/lu";

export const NAV = [
  {
    label: "About",
    href: "/about",
    sub: [
      { label: "Our Story", href: "/about#story" },
      { label: "Principal's Message", href: "/about#principal" },
      { label: "Faculty & Staff", href: "/about#faculty" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    sub: [
      { label: "Primary (Gr 1–5)", href: "/academics" },
      { label: "Middle (Gr 6–8)", href: "/academics" },
      { label: "Secondary (Gr 9–12)", href: "/academics" },
      { label: "Results", href: "/academics#results" },
    ],
  },
  { label: "Admissions", href: "/admissions" },
  { label: "News & Events", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  "Quick Links": [
    { label: "About Us", href: "/about" },
    { label: "Academics", href: "/academics" },
    { label: "Admissions", href: "/admissions" },
    { label: "News & Events", href: "/news" },
    { label: "Contact Us", href: "/contact" },
  ],
  Academics: [
    { label: "Primary School (Gr 1–5)", href: "/academics" },
    { label: "Middle School (Gr 6–8)", href: "/academics" },
    { label: "Secondary (Gr 9–12)", href: "/academics" },
    { label: "Board Results", href: "/academics#results" },
    { label: "Clubs & Activities", href: "/#student-life" },
  ],
};

export const socials = [
  {
    icon: LuFacebook,
    href: "#",
    label: "Facebook",
  },
  {
    icon: LuTwitter,
    href: "#",
    label: "Twitter",
  },
  {
    icon: LuInstagram,
    href: "#",
    label: "Instagram",
  },
  {
    icon: LuYoutube,
    href: "#",
    label: "YouTube",
  },
];
