"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// about data
const about = {
  title: "About Me",
  description:
    "I am a full stack developer with a passion for web development. I have experience in building web applications using modern technologies. I am a quick learner and always eager to learn new technologies.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Mainul Islam Rahat",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+880) 1521507316",
    },
    {
      fieldName: "Experience",
      fieldValue: "12+ years",
    },
    {
      fieldName: "Skype",
      fieldValue: "rahat1405",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladeshi",
    },
    {
      fieldName: "Email",
      fieldValue: "mainul.rahat4@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Bangla, English",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "I have 2+ years of experience in web development. I have worked with many clients and companies. I have experience in building web applications using modern technologies.",
  items: [
    {
      company: "SebaGriho",
      position: "Full Stack Developer",
      duration: "2025 - Present",
    },
    {
      company: "Cloud Development & Data Analytics Limited",
      position: "Backend Developer",
      duration: "2024 - 2025",
    },
    {
      company: "REPLIQ Limited",
      position: "Junior Backend Developer",
      duration: "2023 - 2024",
    },
    {
      company: "REPLIQ Limited",
      position: "Junior Backend Developer Intern",
      duration: "2022 - 2023",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "I have completed my graduation in Computer Science and Engineering from a reputed university. I have also completed many online courses to enhance my skills.",
  items: [
    {
      institution: "North South University",
      degree: "B.Sc in Computer Science and Engineering",
      duration: "2017 - 2022",
    },
    {
      institution: "Programming Hero",
      degree: "Complete Web Development Course",
      duration: "2022 - 2023",
    },
    {
      institution: "Udemy",
      degree: "React - The Complete Guide",
      duration: "2023 - 2024",
    },
    {
      institution: "Udemy",
      degree: "Next.js - The Complete Guide",
      duration: "2023 - 2024",
    },
    {
      institution: "Udemy",
      degree: "Tailwind CSS - The Complete Guide",
      duration: "2023 - 2024",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "I have experience in building web applications using modern technologies. I have experience in building web applications using modern technologies.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      skill: "css 3",
    },
    {
      icon: <FaJs />,
      skill: "javaScript",
    },
    {
      icon: <FaReact />,
      skill: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      skill: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      skill: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      skill: "node.js",
    },
    {
      icon: <FaFigma />,
      skill: "figma",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              experience
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
