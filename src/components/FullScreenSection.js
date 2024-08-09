import * as React from "react";
import { VStack } from "@chakra-ui/react";
import { useFontContext } from "../context/fontContext";

/**
 * Illustrates the use of children prop and spread operator 
 */
const FullScreenSection = ({ children, containerStyle, ...boxProps }) => {

  const { darkmode } = useFontContext();

  return (
    <VStack
      color={darkmode ? "white" : "black"}
      backgroundColor={darkmode ? "#1d1d16" : "rgb(241, 245, 241)"}
      {...containerStyle}
    >
      <VStack maxWidth="1280px" minHeight="95vh" {...boxProps}>
        {children}
        <div style={{width: "90vw"}}></div> {/* To make the screen fit to the size of window */}
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
