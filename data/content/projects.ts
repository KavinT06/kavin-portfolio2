import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Quiz App",
    desc: "A fun and interactive quiz app that tests your knowledge across various topics with real-time scoring and challenges.",
    img: "/static/projects/quiz.png",
    link: "https://genquizapp.vercel.app/",
    github: "https://github.com/KavinT06/Quiz-app",
    tags: ["React", "NextJS", "TailwindCSS"],
  },
  {
    id: 1,
    title: "Jenny's Portfolio",
    desc: "A detailed and complex Figma design showcasing advanced layouts, thoughtful user flows, and carefully crafted interactions for a seamless user experience.",
    img: "/static/projects/jennyportfolio.png",
    link: "https://supercodetask.vercel.app/",
    // github: "https://github.com/KavinT06/Weather-App",
    tags: ["NextJS", "Figma", "TailwindCSS"],
  },
  {
    id: 2,
    title: "Tetris Game",
    desc: "Fit the blocks, clear the lines, conquer the screen!",
    img: "/static/projects/tetris.jpeg",
    link: "https://supertetris.vercel.app/",
    github: "https://github.com/KavinT06/Tetris-Game",
    tags: ["vite", "React", "SCSS"],
  },
  {
    id: 3,
    title: "Super Todo app",
    desc: "Do more. Stress less and Unlock your productivity.",
    img: "/static/projects/todo.png",
    link: "https://super-todo-app.vercel.app/",
    github: "https://github.com/KavinT06/TodoApp",
    tags: ["React", "TailwindCSS", "materialUI"],
  },{
    id: 4,
    title: "Studio Sample Site",
    desc: "A modern agency website design featuring structured layouts, strong branding, and conversion-focused sections to clearly showcase services, portfolio, and client engagement.",
    img: "/static/projects/studio.png",
    link: "https://webiontask.vercel.app/",
    github: "https://github.com/KavinT06/webion-task",
    tags: ["React", "NextJS", "TailwindCSS"],
  },
  {
    id: 5,
    title: "Nexcent Clone",
    desc: "A modern community-management platform that helps organizations streamline memberships, events, and engagement in one place.",
    img: "/static/projects/nexcent.png",
    link: "https://nexcenttclone.vercel.app/",
    github: "https://github.com/KavinT06/Nextgen-clone",
    tags: ["nextjs", "tailwindcss", "react"],
  },
  {
    id: 6,
    title: "ShopCart",
    desc: "A sleek React-powered eCommerce platform featuring intuitive product browsing, filtering, and search.",
    img: "/static/projects/e-commerce.jpg",
    github: "https://github.com/KavinT06/simpleshoppy",
    tags: ["Node", "Javascript", "NPM", "HTML"],
  },
  {
    id: 7,
    title: "Netflix Clone",
    desc: "A sleek Netflix clone that lets users stream movies and TV shows with a responsive UI and smooth browsing experience.",
    img: "/static/projects/netflix.jpg",
    github: "https://github.com/KavinT06/Netflix-clone",
    tags: ["html", "css", "javascript"],
  },{
    id: 8,
    title: "Ailaysa Store",
    desc: "A full-stack e-commerce admin dashboard that allows users to manage, categorize, and view products with ratings, pricing, and detailed listings across multiple categories.",
    img: "/static/projects/ailaysa.png",
    github: "https://github.com/KavinT06/ailaysa-fe",
    link: "https://ailaysastore.vercel.app/login",
    tags: ["NextJS", "TailwindCSS"],
  },
  {
    id: 9,
    title: "Itinerary app",
    desc: "Under Construction!, App will release soon. More details checkout now!",
    img: "/static/projects/itinerary.jpg",
    link: "https://superitineraryapp.vercel.app/",
    github: "https://github.com/KavinT06/Itinerary-App",
    tags: ["Javascript", "NPM"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
