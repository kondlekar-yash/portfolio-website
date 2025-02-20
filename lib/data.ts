import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import cookit from "@/public/cookit.png";
import mapper from "@/public/mapper.png";
import movies from "@/public/movies.png";

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
    title: "Software Engineer",
    location: "Stride Solutions, South Yarra, Melbourne",
    description:
      "Mainly building and maintaining scalable React and Next applications, with a focus on seamless UX, performance and accessibility. Also working on .NET backend projects, Flutter apps as and when required.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
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
    title: "Jr. Software Developer",
    location: "Zicuro Tech, Mumbai, India",
    description:
      "Got my first job, after bachelors and PG-diploma. Worked on a .NET project using WPF, ASP.NET, Entity-Framework with C# and C++ STL for data structures.",
    icon: React.createElement(CgWorkAlt),
    date: "2018-19",
  },
] as const;

export const projectsData = [
  {
    title:"Movie-maze",
    description:"SPA using Vite+React, RapidApi to fetch, search movies and display trending movies on this platform using custom dynamic algo and Appwrite database.",
    tags:["Tailwind", "React", "Vite", "Appwrite", "Vercel"],
    imageUrl: movies,
  },
  {
    title: "Cook-It",
    description:
      "A recipe sharing platform, where users can share/bookmark their recipes, and also search for different recipes. Built with HTML, CSS, JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: cookit,
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
