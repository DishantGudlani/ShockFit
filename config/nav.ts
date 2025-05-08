import { NavConfig } from "../types/Nav";

export const navConfig: NavConfig = {
  navItems: [
    { label: "Početna", href: "/" },
    { label: "O nama", href: "/about-us" },
    { label: "Usluge", href: "#" },
    { label: "Zašto odabrati nas", href: "/why-choose-us" },
    { label: "Blog", href: "/blog" },
    { label: "Gallery", href: "/gallery" },
  ],
  services: [
    {
      label: "Epilacija Diodnim Laserom",
      href: "/detail/laser",
      description: "Professional laser hair removal services",
    },
    {
      label: "Massage",
      href: "/detail/massage",
      description: "Relaxing therapeutic massage treatments",
    },
    {
      label: "Fitness",
      href: "/detail/fitness",
      description: "Personal training and fitness programs",
    },
  ],
}