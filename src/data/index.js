import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPhp,
  FaGit,
  FaCode,
  FaMobile,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { TbBrandAdobeXd, TbBrandAdobePhotoshop } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { GiArtificialIntelligence } from "react-icons/gi";

// ── Skills ────────────────────────────────────────────────────────────────
export const skills = [
  { name: "React", icon: FaReact, level: 92, color: "#61DAFB" },
  { name: "JavaScript", icon: IoLogoJavascript, level: 90, color: "#F7DF1E" },
  { name: "HTML5", icon: FaHtml5, level: 96, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, level: 94, color: "#1572B6" },
  {
    name: "Tailwind CSS",
    icon: RiTailwindCssFill,
    level: 88,
    color: "#38BDF8",
  },
  { name: "Node.js", icon: FaNodeJs, level: 78, color: "#339933" },
  { name: "PHP", icon: FaPhp, level: 72, color: "#777BB4" }, // better icon optional
  { name: "MySQL", icon: SiMysql, level: 74, color: "#4479A1" },
  { name: "Git", icon: FaGit, level: 86, color: "#F05032" },
  {
    name: "GitHub",
    icon: FaGithub,
    level: 88,
    color: {
      light: "#181717",
      dark: "#f0f0ff",
    },
  },
];

// ── Tools ─────────────────────────────────────────────────────────────────
export const tools = [
  { name: "Figma", icon: IoLogoFigma, color: "#F24E1E" },
  { name: "Adobe XD", icon: TbBrandAdobeXd, color: "#FF61F6" },
  { name: "Photoshop", icon: TbBrandAdobePhotoshop, color: "#31A8FF" },
  { name: "VS Code", icon: VscVscode, color: "#007ACC" },
  { name: "DevTools", icon: FaCode, color: "#F7DF1E" },
  { name: "AI Tools", icon: GiArtificialIntelligence, color: "#8B5CF6" },
  { name: "Responsive Design", icon: FaMobile, color: "#10B981" },
  { name: "Wireframing", icon: IoLogoFigma, color: "#6B7280" },
];

// ── Projects ──────────────────────────────────────────────────────────────
export const projects = [
  {
    title: "Travel Podcast Design",
    desc: "An interactive podcast platform designed for a community of world travelers to explore deep discussions, share personal insights, and connect over a mutual curiosity for global exploration.",
    stack: ["HTML", "CSS", "Animations", "Javascript"],
    color: "linear-gradient(135deg,#6c63ff,#e040fb)",
    emoji: "🛒",
    live: "https://traveltalkspodcast.netlify.app/",
    github: "https://github.com/Harsh2463/Podcast-website",
  },
  {
    title: "Portfolio Web",
    desc: "Harsh Mishra’s portfolio is a professional UI/UX showcase featuring a diverse project gallery, educational design blog, and integrated contact tools for potential clients.",
    stack: ["HTML", "Css", "Typed.js", "Javascript"],
    color: "linear-gradient(135deg,#ff6b9d,#ff8c42)",
    emoji: "✨",
    live: "https://portfoliotempelete.netlify.app/",
    github: "https://github.com/Harsh2463/Portffolio-website",
  },
  {
    title: "Cafe Landing Page",
    desc: "This artisanal café website invites guests to 'embark on a culinary journey' through its specialty coffee menu, artisanal sweets, blog, and integrated table reservation system.",
    stack: ["HTML", "JS", "SCSS"],
    color: "linear-gradient(135deg,#43e97b,#38f9d7)",
    emoji: "🍽️",
    live: "https://hrcafeteria.netlify.app/",
    github: "https://github.com/Harsh2463/Cafeteria-Website-landing-page",
  },
  {
    title: "Clothes E-commerce Website",
    desc: "SCloser is an e-commerce platform selling casual streetwear like T-shirts and Hoodies for men and women.",
    stack: ["HTML/CSS", "PHP", "Mysql", "Javascript"],
    color: "linear-gradient(135deg,#4facfe,#00f2fe)",
    emoji: "📝",
    live: "https://scloser.kesug.com/",
    github: "https://github.com/Harsh2463",
  },
  {
    title: "Sketch Artist Website",
    desc: "This is a professional portfolio website for a sketch artist showcasing watercolor and pencil artworks, commission services, and contact information.",
    stack: ["Html", "Bootstrap"],
    color: "linear-gradient(135deg,#4facfe,#00f2fe)",
    emoji: "⛅",
    live: "https://sketch-artist.netlify.app/",
    github: "https://github.com/Harsh2463/Sketch-artist-website",
  },
  {
    title: "Corporate Portfolio",
    desc: "The SKY website is a modern corporate landing page offering professional services with an urban aesthetic.",
    stack: ["HTML/CSS", "Javascript"],
    color: "linear-gradient(135deg,#a18cd1,#fbc2eb)",
    emoji: "📝",
    live: "https://sky-group.netlify.app/",
    github: "https://github.com/Harsh2463",
  },
  {
    title: "Food reel app",
    desc: "This MERN-stack Zomato clone is a food-centric social platform featuring a login system, registration, and personalized 'food reels' for users.",
    stack: ["React", "Node.js", "MongoDB", "Express"],
    color: "linear-gradient(135deg,#fa709a,#fee140)",
    emoji: "📋",
    live: "https://zomato-mern-frontend.vercel.app/",
    github: "https://github.com/Harsh2463/ZOMATO-MERN-PROJECT",
  },
];

// ── Timeline ──────────────────────────────────────────────────────────────
export const timeline = [
  {
    year: "2025 — Present",
    role: "Frontend Developer",
    org: "Personal & Live Projects",
    desc: "Working on real-world websites like Refrigeration House and Scloser. Focused on building responsive layouts, improving UI structure, and creating user-friendly web interfaces using HTML, CSS, JavaScript, PHP, and MySQL.",
    side: "right",
  },
  {
    year: "2024 — Present",
    role: "B.A English (Hons.)",
    org: "Delhi University",
    desc: "Pursuing undergraduate degree while continuing to develop frontend and UI/UX skills alongside academic studies.",
    side: "left",
  },
  {
    year: "2024 — 2025",
    role: "UI/UX & Web Design Projects",
    org: "Portfolio & Practice",
    desc: "Designed and developed projects like Podcast Website, Portfolio Template, Cafeteria UI, and Business Webpages. Worked with Figma for wireframing and prototyping, focusing on layout, usability, and responsive design.",
    side: "right",
  },
  {
    year: "2023 — 2025",
    role: "Diploma in Graphic, Web Design & Development",
    org: "Arena Animation, Delhi",
    desc: "Gained foundational knowledge of web design, UI/UX principles, and development tools including HTML, CSS, JavaScript, and design software.",
    side: "left",
  },
  {
    year: "2023 — 2025",
    role: "Learning & Skill Development",
    org: "Web Development Journey",
    desc: "Started learning core web technologies and built initial projects to understand frontend development, responsive design, and modern workflows.",
    side: "right",
  },
];

// ── Nav Links ─────────────────────────────────────────────────────────────
export const navLinks = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Contact",
];

// ── Social Links ──────────────────────────────────────────────────────────
export const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Harsh2463",
    icon: FaGithub,
    color: {
      light: "#181717",
      dark: "#f0f0ff",
    },
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/harsh2463/",
    icon: FaLinkedin,
    color: {
      light: "#0A66C2",
      dark: "#4DA6FF",
    },
  },
  {
    label: "Email",
    href: "mailto:alex@devmail.io",
    icon: IoMdMail,
    color: {
      light: "#EA4335",
      dark: "#F87171",
    },
  },
  {
    label: "You can Call",
    href: "tel:+91-7303413312",
    icon: FaPhoneAlt,
    color: {
      light: "#e11d6e",
      dark: "#ff6b9d",
    },
  },
];
