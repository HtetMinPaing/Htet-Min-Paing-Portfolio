import React from "react";
import { Avatar, Box, Flex, Heading, Text, VStack, Link, Button, HStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import me from "../images/me.jpg"
import { useFontContext } from "../context/fontContext";
import resume from "../images/Htet_Min_Paing_Resume.pdf";

const greeting = "Hello, I am Htet Min Paing!";
const bio1 = "A software developer";
const bio2 = "Specialised in React, Java, Python, JavaScript";


// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => {
  const { bottomStyle, darkmode } = useFontContext();
  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground={true}
      backgroundColor={darkmode ? "#1d1d16" : "rgb(241, 245, 241)"}
    >
      <Flex pt="6rem" gap="5rem" flexWrap="wrap" justifyContent="center" alignItems="center">
        <VStack className="moveDown" alignItems="flex-start" p={4} color={darkmode ? "rgb(241, 245, 241)" : "#4d5061"}>
          <Heading>{greeting}</Heading>
          <Text fontSize="1.5rem">{bio1}</Text>
          <Text fontSize="1.5rem">{bio2}</Text>
          <HStack>
            <Button fontSize="1.2rem" {...bottomStyle}>
              <a href={resume} target="_blank">Resume</a>
            </Button>
            <Button fontSize="1.2rem" {...bottomStyle}>
              <a href={resume} download="Paing_Resume">Download</a>
            </Button>
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
