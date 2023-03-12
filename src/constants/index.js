import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  threejs,
  redux,
  tailwind,
  bootstrap,
  git,
  freelancer,
  eastern,
  civil,
  react,
  landingpage,
  weather,
  myreads,
  travel,
  ecommerce,
  calculator,
  github,
  facebook,
  linkedin,
  email,
  phone
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Ex-Civil Engineer",
    icon: civil,
  },
  {
    title: "React Developer",
    icon: react,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "FreeLancer",
    icon: freelancer,
    iconBg: "#383E56",
    date: "Dec 2022 - Till Now",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Technical Office Civil Engineer ",
    company_name: "Eastern Company",
    icon: eastern,
    iconBg: "#E6DEDD",
    date: "Apr 2015 - Apr 2022",
    points: [
      "Study the project contract documents (time schedule, project design drawings, BOQ etc...)",
      "Prepare shop drawing and coordination drawings (or composite drawing) based on project’s design drawings in accurate with quality standard.",
      "Coordinate with other trades to solve any conflict between (civil, mech, elect. etc.…)",
      "Prepare as-built drawings at the end of the project.",
      "Prepare BOQs."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Travel",
    description:
      "Travel Landing Page Template.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "text-[#804dee]",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: travel,
    source_code_link: "https://github.com/Karimashour2/travel",
    demo_link: "https://karimashour2.github.io/travel/",
  },
  {
    name: "E-Commerce",
    description:
      "Web application that enables users to search for alot of products filtered by categories and brands and sorted by price with username and password authentication.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Antd",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/Karimashour2/ecommerice/",
    demo_link: "https://karimashour2.github.io/ecommerice/",
  },
  {
    name: "My Reads",
    description:
      "Web app that controls book library and search for more books and put them in any shelf you want.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: myreads,
    source_code_link: "https://github.com/Karimashour2/my-reads",
    demo_link: "https://karimashour2.github.io/my-reads",
  },
  {
    name: "Weather App",
    description:
      "This project was about working with Web APIs and asynchronous code, creating a web app that uses (OpenWeatherMap) API to get weather based on user's location, and dynamically update UI.",
    tags: [
      {
        name: "js",
        color: "orange-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/Karimashour2/weather-journal-app",
    demo_link: "https://karimashour2.github.io/weather-journal-app",
  },
  {
    name: "Landing Page",
    description:
      "This is a basic landing page that uses JavaScript to create a Navbar dynamically and to highlight sections when scrolled",
    tags: [
      {
        name: "js",
        color: "orange-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: landingpage,
    source_code_link: "https://github.com/Karimashour2/Landing-page",
    demo_link: "https://karimashour2.github.io/Landing-page",
  },
  {
    name: "Calculator",
    description:
      "Simple calculator app that does all simple calculations.",
    tags: [
      {
        name: "js",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: calculator,
    source_code_link: "https://github.com/Karimashour2/calculator",
    demo_link: "https://karimashour2.github.io/calculator",
  },
];
const contacts = [
  {
    contact: 'https://www.facebook.com/KarimAshour2016',
    icon: facebook,
  },
  {
    contact: 'https://github.com/Karimashour2/',
    icon: github,
  },
  {
    contact: 'https://www.linkedin.com/in/karim-ashour-5846b396/',
    icon: linkedin,
  },
  {
    contact: 'karim.note10.l@gmail.com',
    icon: email,
  },
  {
    contact: '+20 01128886120',
    icon: phone,
  },
]

export { services, technologies, experiences, testimonials, projects,contacts };