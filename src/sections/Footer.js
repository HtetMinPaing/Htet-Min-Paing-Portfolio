import React from "react";
<<<<<<< HEAD
import { Box, Flex } from "@chakra-ui/react";
=======
import {Box, Flex} from "@chakra-ui/react";
>>>>>>> 517d148e653e2af3adb2499eb416d97c7b5ad722
import { useFontContext } from "../context/fontContext";

const Footer = () => {
  const { darkmode } = useFontContext();
  return (
    <Box background={darkmode ? "neutral.black.100" : "neutral.black.400"}>
      <footer>
        <Flex
          margin="0 auto"
          px={10}
          color="neutral.white.100"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
          gap={4}
        >
          <p>Paing • © 2023 - 2024</p>
          <p>All right preserved to the owners</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
