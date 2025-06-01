"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After completing my Bachelors degree in{" "}
        <span className="font-medium">Information Technology</span>, I worked as a{" "}<span className="font-medium">Jr. Software Developer</span>, where I focused on backend development using{" "}<span className="font-medium">ASP.NET with MVC architecture, ORM with Entity framework and MongoDB</span>. Currently, I work as a{" "}<span className="font-medium">Software Engineer</span>, leveraging my skills in different projects. My core stack is{" "}<span className="font-medium">JavaScript, React, Next.js, Rest APIs, .NET core, EF ORM and MsSQL</span>, also familiar with using node.js and MongoDB. Currently I am working on couple of typescript front-end projects based on my existing backend setup.
      </p>

      <p>
        <span className="italic">In my free time</span>, I enjoy playing
        video games, watching movies, sports and e-sports. I also enjoy Camping/Hiking and visiting new places whenever possible.
      </p>
    </motion.section>
  );
}
