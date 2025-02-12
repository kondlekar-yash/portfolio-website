import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import cookit from "@/public/images/cookit.png";
import mapper from "@/public/images/mapper.png";

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
  {
    name: "Projects",
    hash: "#projects",
  },
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
    title: "Cook-It",
    description:
      "A recipe sharing platform, where users can share/bookmark their recipes, and also search for different recipes. Built with HTML, CSS, JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: cookit,
  },
  {
    title: "Mapper",
    description:
      "Modern Webapp to track workouts like running or cycling using third party GPS api, and pinning various location as per the workout details. Mainly built to showcase advanced JavaScript skills.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: mapper,
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
