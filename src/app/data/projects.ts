import { StaticImageData } from "next/image";
import services from "@/app/images/services.png";
import admin from "@/app/images/admin.png";
import moon from "@/app/images/moon.png";

export type Project = {
  slug: string;
  title: string;
  desc: string;
  longDesc?: string;
  tech: string[];
  img: StaticImageData;
  link?: string;
};

export const projectsData: Project[] = [
  {
    slug: "servicehub",
    title: "ServiceHub",
    desc: "A responsive personal portfolio built with Next.js, Tailwind CSS, and DaisyUI.",
    longDesc: "ServiceHub is a showcase site with smooth page transitions, responsive layouts, and an accessible component library. It emphasizes performance and best practices, including image optimization, route prefetching, and semantic HTML.",
    tech: ["Flutter", "Firebase", "Dart"],
    img: services,
    link: "https://servicehub.vercel.app/",
  },
  {
    slug: "servicehub-admin",
    title: "Servicehub Admin",
    desc: "Full-stack task manager with Supabase backend and real-time updates.",
    longDesc: "The admin panel features role-based access, audit-friendly activity logs, and real-time synchronization backed by Supabase. It includes optimistic UI updates, error boundaries, and a scalable folder structure.",
    tech: ["React", "Supabase", "MySQL"],
    img: admin,
  },
  {
    slug: "moonwalk",
    title: "Moonwalk",
    desc: "Modern online store with Firebase authentication and Stripe payments.",
    longDesc: "Moonwalk is an e-commerce demo integrating Firebase Auth for secure sign-in and Stripe for payments. It includes guarded routes, cart persistence, and a mobile-first design with fast client-side navigation.",
    tech: ["Firebase", "Next.js", "Stripe"],
    img: moon,
  },
];


