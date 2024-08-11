import React from "react";
import {Box, Flex, Heading} from "@chakra-ui/react";
import { useFontContext } from "../context/fontContext";

const Footer = () => {
  const {darkmode} = useFontContext();
  return (
    <Box background={darkmode ? "#1b1b1b": "#18181b"}>
      <footer>
        <Flex
          margin="0 auto"
          px={10}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
          gap={4}
        >
          <p>Paing • © 2023</p>
          <p>All right preserved to the owners</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
