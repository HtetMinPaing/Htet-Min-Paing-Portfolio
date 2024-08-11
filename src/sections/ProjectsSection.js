import React from "react";
import FullScreenSection from "../components/FullScreenSection";
import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import Card, { TutorialCard } from "../components/Card";
import { useFontContext } from "../context/fontContext";
import { projectData, tutorialData } from "../utils/data";

const projects = projectData
const tutorials = tutorialData

const ProjectsSection = () => {
  const { designBox, darkmode } = useFontContext();

  return (
    <FullScreenSection

      backgroundColor={darkmode ? "#1d1d16" : "rgb(241, 245, 241)"}
      isDarkBackground
      p={6}
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
            repo={project.repo}
          />
        ))}
        <VStack justifyContent={"space-between"}>
          {tutorials.map((tutorial) => (
            <TutorialCard tutorial={tutorial} />
          ))}
        </VStack>
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
