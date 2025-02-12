import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  /* {
    name: "Projects",
    hash: "#projects",
  }, */
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Jr. Software Developer",
    location: "Zicuro Tech, Mumbai, India",
    description:
      "Got my first job, after bachelors and PG-diploma. Worked on a .NET project using WPF, ASP.NET, Entity-Framework with C# and C++ STL for data structures.",
    icon: React.createElement(CgWorkAlt),
    date: "2018-19",
  },
  {
    title: "Software Developer",
    location: "Deakin University, Burwood, Melbourne",
    description:
      "Hired by university professor on contract, during my Masters degree. For developing a government funded project: An android app for kids, based on introduction to satellite communication.",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Software Engineer",
    location: "Stride Solutions, South Yarra, Melbourne",
    description:
      "Mainly building and maintaining scalable React and Next applications, with a focus on seamless UX, performance and accessibility. Also working on .NET backend projects, Flutter apps as and when required.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Version-control",
  "Tailwind",
  "Material-UI",
  "MongoDB",
  "Redux",
  "REST",
  "Express.js",
  "MsSQL",
  "ASP.NET",
  "Entity-Framework",
  "Flutter",
  "Figma",
  "Framer Motion",
  "Azure",
  "and more...",
] as const;
