import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Box, HStack, Menu, MenuButton, IconButton, MenuList } from "@chakra-ui/react";
import { useFontContext } from "../context/fontContext";
import "@lottiefiles/lottie-player";
import '@dotlottie/player-component';
import { useLoaderContext } from "../context/loaderContext";
import { socialsData } from "../utils/data"
import { faBars, faAdjust } from "@fortawesome/free-solid-svg-icons";
import Language from "../components/Language";
import { useLanguageContext } from "../context/languageContext";
import SideDrawerMenu from "../components/SideDrawerMenu";


const socials = socialsData

const NormalMenu = () => {

  const { linkStyle } = useFontContext();

  return (
    <nav>
      {/* Add social media links based on the `socials` data */}
      {socials.map((social, index) => {
        return (
          <Link {...linkStyle} key={index} href={social.url} isExternal={true} px={6}>
            <FontAwesomeIcon icon={social.icon} size="2x" />
          </Link>
        )
      })}
    </nav>
  )
}

const DropMenu = () => {

  const { linkStyle } = useFontContext();

  return (
    <nav>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<FontAwesomeIcon icon={faBars} size="2x" />}
          variant="outline"
          color="#ffffff"
        />
        <MenuList>
          <Box display="flex" justifyContent="space-around">
            {socials.map((social, index) => {
              return (
                <Link {...linkStyle} href={social.url} isExternal={true}>
                  <FontAwesomeIcon icon={social.icon} size="2x" color="#4d5061" />
                </Link>
              )
            })}
          </Box>
        </MenuList>
      </Menu>
    </nav>
  )
}

const Header = () => {

  const [loading, setLoading] = useState(false);

  const { loader, toggleLoader } = useLoaderContext();

  const { isEnglish } = useLanguageContext();

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      toggleLoader(true);
      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        toggleLoader(false);
      }, 1500)
    }
  };

  const handleDarkMode = () => {
    toggleLoader(true);
    setTimeout(() => {
      toogleDarkmode();
      toggleLoader(false);
    }, 1500)
  }

  const { isMobile, toogleDarkmode, darkmode } = useFontContext();

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={2000}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="brand.100"
    >
      <Box color="neutral.white.100" maxWidth="1280px" margin="0 auto">
        <HStack
          px={isMobile ? 3 : 10}
          py={5}
          justifyContent="space-between"
          alignItems="center"
        >
          {isMobile ? <SideDrawerMenu /> : <NormalMenu />}
          <nav>
            <HStack spacing={isMobile ? 3 : 6}>
              {!isMobile &&
                <Link fontSize="1.5rem" fontWeight={700} onClick={handleClick("projects")}>
                  {isEnglish ? "Projects" : "プロジェクト"}
                </Link>}
              {!isMobile &&
                <Link variant="underline" fontSize="1.5rem" fontWeight={700} onClick={handleClick("contact")}>
                  {isEnglish ? "Contact" : "メール連絡"}
                </Link>}
              <Language />
              <FontAwesomeIcon icon={faAdjust} size="2xl" lightingColor={darkmode ? "neutral.orange" : "neutral.black.200"} onClick={handleDarkMode} cursor="pointer" color={darkmode ? "#FDB813" : "#C2C5CC"} />
            </HStack>
          </nav>
        </HStack>
        {/* <dotlottie-player src="https://lottie.host/8d025aed-fd7f-41b3-a1d3-5b9734ae80f9/zCgRM4vWS1.lottie" background="transparent" speed="1" style={{ width: "150px", height: "150px", position: "absolute" }} loop autoplay></dotlottie-player> */}
      </Box>
    </Box>
  );
};
export default Header;
