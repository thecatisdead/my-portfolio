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
    desc: "A responsive mobile application that connects communities with local service providers.",
    longDesc:
      "ServiceHub is a mobile application that connects community members with local service providers. It includes core features such as user registration, profile management, service posting, service search, and messaging, enabling seamless user-to-user service transactions.",
    tech: ["Flutter", "Firebase", "Dart"],
    img: services,
    link: "https://servicehub.vercel.app/",
  },
  {
    slug: "servicehub-admin",
    title: "Servicehub Admin",
    desc: "Admin panel for ServiceHub",
    longDesc:
      "The admin panel allows administrators to manage users, moderate posts, and handle reports efficiently. Built with Flutter and Firebase, it provides a responsive interface and real-time data synchronization to ensure smooth platform management.",
    tech: ["Flutter", "Firebase", "Dart"],
    img: admin,
  },
  {
    slug: "moonwalk",
    title: "Moonwalk",
    desc: "A mobile application for tracking and managing attendance.",
    longDesc:
      "Moonwalk is an e-commerce demo integrating Firebase Auth for secure sign-in and Stripe for payments. It includes guarded routes, cart persistence, and a mobile-first design with fast client-side navigation.",
    tech: ["Flutter", "Dart", "Postgre"],
    img: moon,
  },
];
