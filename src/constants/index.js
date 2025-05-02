import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  gdu,
  rewind,
  portfolio,
  stickytanks,
  threejs,
  unity,
  love2d,
  cpp,
  csharp,
  python,
  java,
  blender,
  mysql,
  lua,
  godot,
  photo,
  pr,
  bootstrap,
  swampmaster,
  bugs,
  neon_fables,
  tictactoe,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "certificate",
    title: "Certificates",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Android Development",
    icon: mobile,
  },
  {
    title: "Database(MYSQL)",
    icon: web,
  },
  {
    title: "Web Development",
    icon: backend,
  },
  {
    title: "DSA",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "MySQL",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Frontend Developer Trainee",
    company_name: "Gokburu Pvt. Ltd",
    icon: gdu,
    iconBg: "#383E56",
    date: "June 2024 – July 2024",
    certificateLink: "https://www.linkedin.com/posts/deveshjha1_webdevelopment-frontenddevelopment-reactjs-activity-7290042686596624385-ifr6/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADzjCdgB326isMWRpESjOCdyYe3rpykYUQI",
    points: [
      "Successfully completed summer training in frontend development.",
      "Built 3+ dynamic web apps using React.js, HTML, CSS, and JavaScript.",
      "Improved performance by 30% through optimization techniques.",
      "Collaborated on scalable UI architectures using Tailwind CSS.",
      "Gained experience in debugging, responsive design, and modern frameworks."
    ],
  },
];



const projects = [
  {
    name: "Gptflix Website | AI Movie Recommendation:",
    description:
      "Designed an AI-powered movie recommendation website using Firebase and Google Gemini AI",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: swampmaster,
    source_code_link: "https://github.com/shashank007s",
    live_project_link: "https://gptflixe.vercel.app/",
  },
  {
    name: "Homestay Booking Website | Airbnb Clone:",
    description: "Engineered a full-fledged homestay booking platform allowing users to book accommodations.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Node js",
        color: "green-text-gradient",
      },
    ],
    image: bugs,
    source_code_link: "https://github.com/deveshkrjha?tab=repositories",
    live_project_link: "https://horental.onrender.com/home",
  },
  {
    name: "3D Portflio Website",
    description:
      "A 3d portfolio website build using React.js. Three.js and Blender",
    tags: [
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/deveshkrjha?tab=repositories",
    live_project_link: "#",
  },
];

export { services, technologies, experiences, projects };
