import {
    FaHtml5,
    FaCss3Alt,
    FaSass,
    FaBootstrap,
    FaReact,
    FaNpm,
    FaGitAlt,
    FaGithubSquare,
  } from "react-icons/fa";
  import { SiJavascript } from "react-icons/si";
 
  import colors from "./assets/images/colors.svg";
  import react from "./assets/images/logo.svg";
  import notepad from "./assets/images/notepad.svg";
  

  export const githubUsername = "Zacharyyoung1";
  
  /* Skills
   ************************************************************** */
  // Add or remove skills in the SAME format below, there must be one icon imported above per skill below and 3 skills per row
  export const skillData = [
    {
      id: 1,
      skill: <FaHtml5 className="display-4" />,
      name: "HTML5",
    },
    {
      id: 2,
      skill: <FaCss3Alt className="display-4" />,
      name: "CSS3",
    },
    {
      id: 3,
      skill: <SiJavascript className="display-4" />,
      name: "JavaScript",
    },
    {
      id: 4,
      skill: <FaBootstrap className="display-4" />,
      name: "Bootstrap",
    },
    {
      id: 5,
      skill: <FaReact className="display-4" />,
      name: "React",
    },
    {
      id: 6,
      skill: <FaNpm className="display-4" />,
      name: "npm",
    },
    {
      id: 7,
      skill: <FaGitAlt className="display-4" />,
      name: "Git",
    },
    {
      id: 8,
      skill: <FaGithubSquare className="display-4" />,
      name: "GitHub",
    },
  ];
  
  /* Projects
   ************************************************************** */
  // List the repo names you want to include (they will be sorted alphabetically), leave the array empty if you want to include everything
  export const filteredProjects = [
    "ReadMe-Generator",
    "Portfolio",
    "Fitness-Tracker",
  ];
  
 
  export const projectData = [
    {
      image: colors,
    },
    {
      image: react,
    },
    {
      image: Tracker,
    },
  ];
  
 
  export const contactInfo = {
    email: "zyoung.young9@gmail.com",
    phone: "(614)915-6716",
  };