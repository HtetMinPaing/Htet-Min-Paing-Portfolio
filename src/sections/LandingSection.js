import React from "react";
import { Box, Flex, Heading, Text, VStack, Button, HStack } from "@chakra-ui/react";
import FullScreenSection from "../components/FullScreenSection";
import me from "../images/me.jpg"
import { useFontContext } from "../context/fontContext";
import resume from "../images/Htet_Min_Paing_Resume.pdf";
import Reveal from "../animations/Reveal";

const greeting = "Hello, I am Htet Min Paing!";
const bio1 = "A software developer";
const bio2 = "Specialised in React, Java, Python, JavaScript";


// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => {
  const { bottomStyle, darkmode, isLargeScreen, isMobile } = useFontContext();
  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      // isDarkBackground={true}
      // backgroundColor={darkmode ? "#1d1d16" : "rgb(241, 245, 241)"}
    >
      <Flex pt="6rem" gap={isMobile?"2.5rem":"5rem"} flexWrap="wrap" justifyContent="center" alignItems="center"  flexDirection={isLargeScreen?"":"column-reverse"}>
        <VStack alignItems="flex-start" p={4} color={darkmode ? "rgb(241, 245, 241)" : "#4d5061"}>
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
                <a href={resume} target="_blank">Resume</a>
              </Button>
            </Reveal>
            <Reveal cover={false}>
              <Button fontSize="1.2rem" {...bottomStyle}>
                <a href={resume} download="Paing_Resume">Download</a>
              </Button>
            </Reveal>
          </HStack>
        </VStack>
        <Box  >
          {/* <Avatar src="https://i.pravatar.cc/150?img=7" width="18rem" height="18rem"/> */}
          <img src={me} width="250rem" height="250rem"
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
