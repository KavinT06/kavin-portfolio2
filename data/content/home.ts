type Skill = {
  title: string,
  icon: string,
  style?: object
};
type Testimonial = {
  quote: string,
  name: string,
  job: string
};
type Experience = {
  role: string,
  company: string,
  location: string,
  period: string,
  highlights: string[],
  stack: string[]
};


export const skills: Skill[] = [
  {
    title: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    title: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    title: "Javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    title: "Sass",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  },
  {
    title: "TailwindCSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    title: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "NextJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    // style: { filter: "invert(1)" },
  },
  {
    title: "Typescript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    title: "NodeJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    title: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    title: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    title: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    title: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    title: "ExpressJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    style: { filter: "invert(1)" },
  },
  {
    title: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    title: "Vercel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    style: { filter: "invert(1)" },

  },
  {
    title: "Material UI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  },
  {
    title: "Nginx",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The communication throughout the project was spot on and the genre of design was carried out well.",
    name: "Wilson Bright",
    job: "Co-Founder of BlockSurvey",
  },
  {
    quote:
      "The code was clean, easy to understand, and exactly what I was looking for.",
    name: "Philip Imperato",
    job: "CEO of VisualBonus",
  },
  {
    quote:
      "My vision was executed perfectly. The quality and speed of the work was excellent.",
    name: "Zach Green",
    job: "Founder of Hangxiety Shrink",
  },
];

export const experiences: Experience[] = [
  {
    role: "React Developer Intern",
    company: "@Infomin Solutions",
    location: "Remote",
    period: "Oct 2025 - Mar 2026",
    highlights: [
      "Leading end-to-end frontend development for client and personal projects using Next.js and Tailwind CSS, focusing on scalable architecture and clean component design.",
      "Building high-performance, responsive user interfaces with modern UI systems such as MUI, DaisyUI, and Flowbite, ensuring pixel-perfect consistency across devices.",
      "Integrating REST APIs and implementing secure authentication flows using JWT and OTP-based login systems.",
      "Optimizing application performance by reducing unnecessary re-renders, improving component structure, and following modern React best practices.",
      "Managing production deployments using Docker and cloud hosting platforms, ensuring stability, scalability, and maintainability."
    ],
    stack: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "Docker", "Git"],
  },
  {
    role: "Frontend Developer",
    company: "Yahweh Software Solutions",
    location: "Bengaluru",
    period: "Jun 2025 - Jul 2025",
    highlights: [
      "Developed reusable and modular UI components using React and Tailwind CSS for real-world client dashboards and internal tools.",
      "Integrated backend services using Axios and REST APIs, enabling dynamic data rendering and interactive user experiences.",
      "Improved application performance by optimizing React state handling and minimizing unnecessary component re-renders.",
      "Collaborated on feature enhancements and UI refinements to improve overall usability and responsiveness.",
    ],
    stack: ["React", "Tailwind CSS", "REST APIs", "Git"],
  },
  {
    role: "Freelance Web Developer",
    company: "@anigas Attire",
    location: "Remote",
    period: "Aug 2025 - Sept 2025",
    highlights: [
      "Built a production-ready full-stack e-commerce platform using Next.js and Tailwind CSS, focusing on scalable architecture and clean component design.",
      "Developed complete shopping flow including product catalog, size variants, cart management(Zustand), wishlist, and checkout system.",
      "Implemented secure authentication using JWT + OTP - based login, with protected routes and persistent session handling.",
      "Designed a fully responsive, mobile- first UI with dynamic theme support and reusable component structure.",
      "Integrated backend APIs for real - time product data, inventory handling, and user - based operations.",
      "Structured state management efficiently to ensure smooth cart updates, quantity control, and localStorage persistence.",
      "Optimized performance with SSR capabilities in Next.js and improved SEO using metadata strategies.",
      "Containerized and deployed the application using Docker on IaaS infrastructure, configured reverse proxy with Nginx for production readiness.",
      "Focused on clean code practices, modular folder structure, and scalable frontend architecture."
    ],
    stack: ["Next.js (App Router)", "React", "Tailwind CSS", "Zustand", "JWT", "REST APIs", "Docker", "Nginx", "Git"],
  },
];
