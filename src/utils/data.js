import { faBars, faEnvelope, faGears, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { faDropbox, faGithub, faLinkedin, faMedium, faStackOverflow, faFacebook, faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";

export const aboutme = {
  greeting: "Hello, I am Htet Min Paing!",
  bio1: "A software developer",
  bio2: "Specialised in React, Java, Python, JavaScript"
}

export const socialsData = [
  {
    icon: faEnvelope,
    url: "mailto: ttee62525@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/HtetMinPaing",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/htetminpaing/",
  },
  {
    icon: faMedium,
    url: "https://medium.com/@hmphtetminpaing",
  },
  {
    icon: faFacebook,
    url: "https://www.facebook.com/htetminpaing.htetminpaing.3?mibextid=LQQJ4d",
  },
];

export const educationData = [
  {
    id: 1,
    college: "University of People",
    year: "2024 - present",
    degree: "Bachelor Degree in Computer Science",
    isDegree: true,
    imageSrc: "Uopeople.png"
  },
  {
    id: 2,
    college: "Auston University",
    year: "2023 - Present",
    degree: "Higher Diploma in Infrastructure and Network",
    isDegree: true,
    imageSrc: "Auston.png"
  },
  {
    id: 3,
    college: "University of People",
    year: "2021 - 2023",
    degree: "Associate Degree in Computer Science",
    isDegree: true,
    imageSrc: "Uopeople.png"
  },
  {
    id: 4,
    college: "ITPEC (IP)",
    year: "2023",
    degree: "Information Technology Passport Examination Certificate",
    isDegree: false,
    imageSrc: "Itpec.png"
  },
  {
    id: 5,
    college: "JLPT (N2)",
    year: "2023",
    degree: "Japanese Language Proficiency Text (N2 Level)",
    isRight: false,
    imageSrc: "Jlpt.png"
  },
]

export const projectData = [
  {
    title: "Estate (MERN)",
    description:
      "A full stack real-estate application using MERN development (MongoDB, Express.js, React.js, Node.js)",
    getImageSrc: () => require("../images/project2.png"),
    languages: ["MongoDB", "ExpressJs", "ReactJS", "NodeJS", "TailwindCSS"],
    url: "https://tt-estate.onrender.com/",
    repo: "https://github.com/HtetMinPaing/Real-Estate-MERN.git"
  },
  {
    title: "Fast Food Web",
    description:
      "An website for online fast food ording system. Using the web technology including HTML5, CSS3, and Javascript",
    getImageSrc: () => require("../images/project1.png"),
    languages: ["HTML5", "CSS3", "JavaScript", "Responsive", "FontAwesome"],
    url: "https://tt-dessertshop.pages.dev/",
    repo: "https://github.com/HtetMinPaing/Project-1.1.git"
  },
  {
    title: "Restaurant Web",
    description:
      "Web page for the restaurant home page, having the booking system and menu displaying functionality",
    getImageSrc: () => require("../images/project5.png"),
    languages: ["ReactJS", "SCSS", "JavaScript", "Front-End-Development"],
    url: "https://htetminpaing-little-lemon.pages.dev/",
    repo: "https://github.com/HtetMinPaing/little-lemon.git"
  },
  {
    title: "React-ToDo App",
    description:
      "ReactJS project that has the functionality of adding, deleting, editing the daily task by dealing with local storage",
    getImageSrc: () => require("../images/project4.png"),
    languages: ["ReactJS", "ReduxJS", "SCSS", "Framer Motion"],
    url: "https://tt-todo-react.onrender.com/",
    repo: "https://github.com/HtetMinPaing/React-ToDoApp.git"
  },
  {
    title: "Java Quiz",
    description:
      "A Java GUI Project for a quiz application by using java built-in package javax [Contact me for source code]",
    getImageSrc: () => require("../images/project3.png"),
    languages: ["Java", "Javax", "Object-Orient-Programming", "GUI"],
    url: "mailto: hmphtetminpaing@gmail.com",
    repo: "https://github.com/HtetMinPaing/Java-Project.git"
  },
];

export const tutorialData = [
  {
    title: "Java Tutorials",
    description:
      "Java coding and mini lab projects for self traininng and learning purpose. Copyright belongs to owners.",
    languages: ["Java", "Object-Orient-Programming"],
    repo: "https://github.com/HtetMinPaing/FEJavaClass.git"
  },
  {
    title: "React Tutorials",
    description:
      "React coding and mini lab projects for self traininng and learning purpose. Copyright belongs to owners",
    languages: ["JavaScript", "ReactJS", "Front-End"],
    repo: "https://github.com/HtetMinPaing/React-Lab.git"
  },
]

export const certificateData = [
  {
    title: "Meta Front End Developer Professional Certificate",
    orgs: ["Coursera", "Meta"],
    description: "Certificate issued by Meta (Facebook) on Courera online platform specified in Front-End Engineering consist of Javascript popular framework (React).",
    url: "https://coursera.org/share/767c02d94d02c3621833a967e00f04c9",
  },
  // {
  //   title: "Meta React Basic and Advanced React Developer Certificate",
  //   orgs: ["Coursera", "Meta"],
  //   description: "Certificate issued by Meta (Facebook) on Courera online platform specified in React and its advanced features such as hooks, router and context",
  //   url: "https://coursera.org/share/d7b1009ecdb3db7421f52ad7b197af74",
  // },
  {
    title: "(PHP Master Class) - The Complete PHP Developer Course",
    orgs: ["Udemy"],
    description: "Certificate issued by Udemy focused on learning PHP programming to develop dynamic website and the backend of the server side.",
    url: "https://udemy-certificate.s3.amazonaws.com/image/UC-3325fad6-41a3-4a5e-92b1-c5d60c09ecaa.jpg?v=1723972988000",
  },
  {
    title: "Kaggle Introduction to programming with (Python)",
    orgs: ["Kaggle"],
    description: "Certificate issued by Kaggle specified in python to forward advanced learning for machine learning, Pandas, and reinforcement learning ",
    url: "https://www.kaggle.com/learn/certification/htetminpaing/python",
  }
];