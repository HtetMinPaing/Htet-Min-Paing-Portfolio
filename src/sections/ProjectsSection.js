import React from "react";
import FullScreenSection from "../components/FullScreenSection";
import { Box, Heading, VStack } from "@chakra-ui/react";
import Card, { TutorialCard } from "../components/Card";
import { useFontContext } from "../context/fontContext";
import { projectData, tutorialData } from "../utils/data";
import { projectData as projectDataJP, tutorialData as tutorialDataJP } from "../utils/japanData";
import { useLanguageContext } from "../context/languageContext";

const ProjectsSection = () => {
  const { designBox, darkmode } = useFontContext();
  const { isEnglish } = useLanguageContext();

  const projects = isEnglish? projectData: projectDataJP;
  const tutorials = isEnglish? tutorialData: tutorialDataJP;

  return (
    <FullScreenSection

      backgroundColor={darkmode ? "neutral.black.300" : "neutral.white.200"}
      isDarkBackground
      p={3}
      alignItems="flex-start"
      spacing={8}
      id="projects-section"
      minHeight="auto"
      color={darkmode ? "neutral.white.200" : "brand.100"}
    >
      <Heading as="h1" mx="auto">
        {isEnglish? "Completed Projects": "完了したプロジェクト"}
      </Heading>
      <Heading size="md" mx="auto">
        {isEnglish? 
        "Loading can take some time to preview each Demo application":
        "デモアプリケーションを見るには、時間がかかる場合があります"}
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
