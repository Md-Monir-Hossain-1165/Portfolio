import { Code, Database, Terminal, Monitor, Globe, Server } from 'lucide-react';

import policyWebsiteImg from './assets/policy_pilot_website.png';
import policyAppImg from './assets/policy_pilot_app.png';
import eventSystemImg from './assets/event_management.png';

export const profileData = {
  name: "MD Monir Hossain",
  role: "Full Stack Developer",
  email: "mdmonirhossain1165@gmail.com",
  location: "Muradpur, Chittagong, Bangladesh",
  bio: "Passionate Full Stack Developer with expertise in building scalable web applications. Proficient in the entire development lifecycle, from frontend design to backend architecture.",
  socials: {
    github: "https://github.com/Md-Monir-Hossain-1165",
    linkedin: "https://www.linkedin.com/in/md-monir-hossain-315601339/",
    whatsapp: "https://wa.me/01829063233"
  }
};

export const skills = [
  {
    category: "Frontend Development",
    icon: <Code size={24} />,
    items: "React.js, Tailwind CSS, HTML5, CSS3, Bootstrap, Javascript",
    description: " crafting responsive and interactive user interfaces."
  },
  {
    category: "Backend Development",
    icon: <Terminal size={24} />,
    items: "Laravel, PHP, RESTful APIs",
    description: "Building robust server-side logic and APIs."
  },
  {
    category: "Database & Cloud",
    icon: <Database size={24} />,
    items: "MySQL, Firebase, XAMPP, Git",
    description: "Managing data storage and deployment workflows."
  }
];

export const services = [
  {
    title: "Frontend Development",
    icon: <Code size={24} />,
    description: "Crafting responsive and interactive user interfaces using modern web technologies."
  },
  {
    title: "Backend Development",
    icon: <Terminal size={24} />,
    description: "Building robust server-side logic, secure APIs, and efficient database architectures."
  },
  {
    title: "API Integration",
    icon: <Globe size={24} />,
    description: "Seamlessly connecting frontends with robust backend APIs."
  },
  {
    title: "Database Design",
    icon: <Server size={24} />,
    description: "Architecting efficient and scalable data storage solutions."
  }
];

export const education = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Premier University, Chattogram",
    year: "2023 - Present (Exp. Sep 2026)",
    description: "Currently in 4th year (7th semester). Maintaining a CGPA of 3.92 out of 4.00."
  }
];

export const experience = [
  {
    role: "Full Stack Developer Intern",
    company: "The Nexgenix Ltd",
    year: "Present",
    description: "Currently working as a Full Stack Developer Intern, contributing to real-world projects using modern web technologies."
  }
];

export const projects = [

  {
    title: "Tech Store",
    tags: ["Backend", "API Integration"],
    description: "Handled backend development and API integration to the frontend.",
    date: "2024",
    image: eventSystemImg, // Placeholder
    gitLink: "https://github.com/thenexgenix/tech-store/tree/monir",
    liveLink: "https://tech-store.thenexgenix.com/"
  },
  {
    title: "CRM System",
    tags: ["API Integration"],
    description: "Implemented seamless API integration to the frontend.",
    date: "2024",
    image: policyAppImg, // Placeholder
    gitLink: "https://github.com/thenexgenix/CRM-workshop/tree/monir",
    liveLink: "https://crm.thenexgenix.com/"
  },
  {
    title: "E-tutor Platform",
    tags: ["API Integration"],
    description: " focused on API integration to the frontend for a smooth user experience.",
    date: "2024",
    image: policyWebsiteImg, // Placeholder
    gitLink: "https://github.com/thenexgenix/etutor/tree/monir",
    liveLink: "https://etutor-navy.vercel.app/"
  },

  {
    title: "Event Management System",
    tags: ["Laravel", "Bootstrap", "PHP", "MySQL"],
    date: "2024",
    image: eventSystemImg,
    gitLink: "https://github.com/Md-Monir-Hossain-1165/Eventify",
    liveLink: "#"
  },
];