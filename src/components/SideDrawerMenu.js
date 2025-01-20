import React, { useState } from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
  useTheme,
  VStack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { socialsData } from "../utils/data";
import { useFontContext } from "../context/fontContext";

const SideDrawerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [menuTitle, setMenuTitle] = useState("Menu");

  const theme = useTheme();
  const { linkStyle } = useFontContext();

  const handleMenuClick = (title) => {
    setMenuTitle(title);
    onOpen(); // Open the side drawer
  };

  const toggleDrawer = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

  return (
    <Box>
      {/* Button to open Drawer */}
      <Box
        as={IconButton}
        aria-label="Options"
        icon={<FontAwesomeIcon icon={faBars} size="2x" />}
        variant="outline"
        color="#ffffff"
        onClick={toggleDrawer}
      >
        Open Menu
      </Box>

      {/* Drawer */}
      <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent opacity="0.9" mt="20" pt="8" height="fit-content">
          <DrawerCloseButton />
          {/* <DrawerHeader>Menu</DrawerHeader> */}
          <DrawerBody>
            <VStack align="start" spacing={4}>
              <Link
                fontSize="1.5rem"
                fontWeight={400}
                borderLeft={`0.3rem solid ${theme.colors.highlight[300]}`}
                padding="0.2rem 1rem"
                width="full"
                onClick={onClose}
              >
                <Text>Home</Text>
              </Link>
              <Link
                fontSize="1.5rem"
                fontWeight={400}
                borderLeft={`0.3rem solid ${theme.colors.highlight[300]}`}
                padding="0.2rem 1rem"
                width="full"
                onClick={onClose}
              >
                <Text>Projects</Text>
              </Link>
              <Link
                fontSize="1.5rem"
                fontWeight={400}
                borderLeft={`0.3rem solid ${theme.colors.highlight[300]}`}
                padding="0.2rem 1rem"
                width="full"
                onClick={onClose}
              >
                <Text>Certificates</Text>
              </Link>
              <Link
                fontSize="1.5rem"
                fontWeight={400}
                borderLeft={`0.3rem solid ${theme.colors.highlight[300]}`}
                padding="0.2rem 1rem"
                width="full"
                onClick={onClose}
              >
                <Text>Contact</Text>
              </Link>
              <Box display="flex" justifyContent="space-around" width="full" p="5">
                {socialsData.map((social, index) => {
                  return (
                    <Link {...linkStyle} href={social.url} isExternal={true}>
                      <FontAwesomeIcon icon={social.icon} size="2x" color="#4d5061" />
                    </Link>
                  )
                })}
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default SideDrawerMenu;
