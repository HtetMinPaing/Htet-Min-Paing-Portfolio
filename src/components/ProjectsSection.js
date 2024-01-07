import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Text } from "@chakra-ui/react";
import Card from "./Card";
import { useFontContext } from "../context/fontContext";

const projects = [
  {
    title: "Estate (MERN)",
    description:
      "A full stack real-estate application using MERN development (MongoDB, Express.js, React.js, Node.js)",
    getImageSrc: () => require("../images/project2.png"),
    languages: ["MongoDB","ExpressJs","ReactJS","NodeJS","TailwindCSS"],
    url: "https://tt-estate.onrender.com/"
  },
  {
    title: "Fast Food Web",
    description:
      "An website for online fast food ording system. Using the web technology including HTML5, CSS3, and Javascript",
    getImageSrc: () => require("../images/project1.png"),
    languages: ["HTML5","CSS3","JavaScript","Responsive","FontAwesome"],
    url: "https://tt-dessertshop.pages.dev/"
  },
  {
    title: "Java Quiz",
    description:
      "A Java GUI Project for a quiz application by using java built-in package javax [Contact me for source code]",
    getImageSrc: () => require("../images/project3.png"),
    languages: ["Java","Javax","Object-Orient-Programming","GUI"],
    url: "mailto: hmphtetminpaing@gmail.com"
  },
];

const ProjectsSection = () => {
  const { designBox, darkmode } = useFontContext();

  return (
    <FullScreenSection

      backgroundColor={darkmode ? "#1d1d16" : "rgb(241, 245, 241)"}
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
      id="projects-section"
      minHeight="auto"
      color={darkmode ? "rgb(241, 245, 241)" : "#4d5061"}
    >
      <Heading as="h1" mx="auto">
        Completed Projects
      </Heading>
      <Heading size="md" mx="auto">
        Loading can take some time to preview each Demo application
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={designBox}
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            languages={project.languages}
            imageSrc={project.getImageSrc()}
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
