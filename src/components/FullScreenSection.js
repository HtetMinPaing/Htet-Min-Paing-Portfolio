import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator 
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack maxWidth="1280px" minHeight="95vh" {...boxProps}>
        {children}
      </VStack>
      <hr style={{
        height: "0.1rem",
        border: "0.1rem solid #4d5061",
        background: "#4d5061",
        width: "90%"
      }}/>
    </VStack>
  );
};

export default FullScreenSection;
