import React from "react";
import { Box, Flex, Heading, Text, VStack, Button, HStack } from "@chakra-ui/react";
import FullScreenSection from "../components/FullScreenSection";
import me from "../images/me.jpg"
import { useFontContext } from "../context/fontContext";
import resume from "../images/Htet_Min_Paing_Resume.pdf";
import Reveal from "../animations/Reveal";
import { aboutme } from "../utils/data";
import { aboutme as aboutmeJP } from "../utils/japanData";
import { useLanguageContext } from "../context/languageContext";


// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => {

  const { bottomStyle, darkmode, isLargeScreen, isMobile } = useFontContext();
  const { isEnglish } = useLanguageContext();

  const greeting = isEnglish ? aboutme.greeting : aboutmeJP.greeting;
<<<<<<< HEAD
  const bio1 = isEnglish ? aboutme.bio1 : aboutmeJP.bio1;
  const bio2 = isEnglish ? aboutme.bio2 : aboutmeJP.bio2;
=======
  const bio1 = isEnglish ? aboutme.bio1: aboutmeJP.bio1;
  const bio2 = isEnglish ? aboutme.bio2: aboutmeJP.bio2;
>>>>>>> 517d148e653e2af3adb2499eb416d97c7b5ad722
  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
    // isDarkBackground={true}
    // backgroundColor={darkmode ? "#1d1d16" : "rgb(241, 245, 241)"}
    >
      <Flex pt="6rem" gap={isMobile ? "2.5rem" : "5rem"} flexWrap="wrap" justifyContent="center" alignItems="center" flexDirection={isLargeScreen ? "" : "column-reverse"}>
<<<<<<< HEAD
        <VStack alignItems="flex-start" p={4} color={darkmode ? "neutral.white.200" : "brand.100"}>
=======
        <VStack alignItems="flex-start" p={4} color={darkmode ? "rgb(241, 245, 241)" : "#4d5061"}>
>>>>>>> 517d148e653e2af3adb2499eb416d97c7b5ad722
          <Heading>
            <Reveal direction="bottom">{greeting}</Reveal>
          </Heading>
          <Text fontSize="1.5rem">
            <Reveal direction="right">{bio1}</Reveal>
          </Text>
          <Text fontSize="1.5rem">
            <Reveal direction="right">{bio2}</Reveal>
          </Text>
          <HStack>
            <Reveal cover={false}>
              <Button fontSize="1.2rem" {...bottomStyle}>
                <a href={resume} target="_blank">
<<<<<<< HEAD
                  {isEnglish ? "Resume" : "履歴書"}
=======
                  {isEnglish? "Resume": "履歴書"}
>>>>>>> 517d148e653e2af3adb2499eb416d97c7b5ad722
                </a>
              </Button>
            </Reveal>
            <Reveal cover={false}>
              <Button fontSize="1.2rem" {...bottomStyle}>
                <a href={resume} download="Paing_Resume">
<<<<<<< HEAD
                  {isEnglish ? "Download" : "ダウンロード "}
=======
                  {isEnglish? "Download": "ダウンロード "}
>>>>>>> 517d148e653e2af3adb2499eb416d97c7b5ad722
                </a>
              </Button>
            </Reveal>
          </HStack>
        </VStack>
        <Box  >
          {/* <Avatar src="https://i.pravatar.cc/150?img=7" width="18rem" height="18rem"/> */}
          <img
            src={me} 
            alt="Htet Min Paing"
            width="250rem" 
            height="250rem"
            style={{
              boxShadow: "0 2rem 7rem gray",
              borderRadius: "100%"
            }}
          />
        </Box>
      </Flex>
    </FullScreenSection>
  )
};

export default LandingSection;
