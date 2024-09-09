import { Badge, Box, Button, Heading, HStack, Image, Link, Text, useTheme, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGit, faGithub } from '@fortawesome/free-brands-svg-icons'
import React from "react";
import { useFontContext } from "../context/fontContext";
import { motion } from "framer-motion";
import Reveal from "../animations/Reveal";

const Card = ({ title, description, languages, imageSrc, url, repo }) => {

  const theme = useTheme();

  return (
    <Box className="" backgroundColor="brand.100" borderRadius={"1.5rem"} h={"auto"} w={"96"} shadow="2xl">

      <VStack position="relative" >

        <Box px={3} pt={3} borderTopRadius={"1.1rem"} m={0} width="100%" overflow="hidden">
          {imageSrc &&
            <Image src={imageSrc} height={180} borderTopRadius={"1.1rem"} width="100%" _hover={{ transform: "scale(1.2)" }} transition={"ease-in-out 0.5s"} />
          }
        </Box>

        <VStack position="absolute" right={0} padding={3} gap={2}>
          <Link href={url} isExternal={true}>
            <Button fontSize="1.2rem" padding={1}><FontAwesomeIcon icon={faArrowUpRightFromSquare} size="1x" /></Button>
          </Link>
          <Link href={repo} isExternal={true}>
            <Button fontSize="1.2rem" padding={1}><FontAwesomeIcon icon={faGithub} size="1x" /></Button>
          </Link>
        </VStack>

        <VStack alignItems="flex-start"  px={3} m={0} color="neutral.white.200" >

          <Heading as='h1' size='lg' borderLeft={`0.3rem solid ${theme.colors.highlight[300]}`} pl={2}><Reveal reverseCover={true} direction="left">{title}</Reveal></Heading>

          <Text fontSize='lg' textAlign='justify'>
            <Reveal reverseCover={true} direction="left">{description}</Reveal>
          </Text>

          <span style={{      
            width: '100%',
            backgroundColor: `${theme.colors.highlight[300]}`,
            height: '3px' // Adjust to control the length
          }}></span>

          {/* <Text fontSize="1.2rem">
      {description.length > 90 ? description.slice(0, 90) + " ... " : description}
      <Link color={"#439775"} _hover={{color: "#48bf84"}} fontWeight="semibold">See More</Link>
    </Text> */}

          <Reveal cover={false}>
            <Box display="flex" flexWrap="wrap" color="highlight.100" fontWeight="semibold" justifyContent="flex-start" columnGap={2} rowGap={2} my="auto" pb="1rem" fontSize="lg">
              {
                languages.map((language) => (
                  <Badge bgColor="highlight.300">{language}</Badge>
                ))
              }
            </Box>
          </Reveal>
        </VStack>
      </VStack>
    </Box>
  );
};

export const TutorialCard = ({ tutorial }) => {
  return (
    <Box className="" backgroundColor="brand.100" borderRadius="2rem" height={"auto"} shadow="2xl">

      <VStack position="relative">
        <VStack alignItems="flex-start" px="1rem" color="neutral.white.200">

          <HStack padding={1}>
            <Heading>
              <Reveal reverseCover={true} direction="left">{tutorial.title}</Reveal>
            </Heading>
            <Link position="absolute" right={5} top={1} href={tutorial.repo} isExternal={true}>
              <Button fontSize="1.2rem" padding={1} gap={1}>
                <FontAwesomeIcon icon={faGit} size="1x" />
                <FontAwesomeIcon icon={faGithub} size="1x" />
              </Button>
            </Link>
          </HStack>

          <Text fontSize="1.2rem">
            <Reveal reverseCover={true} direction="left">
              {tutorial.description}
            </Reveal>
          </Text>

          <Reveal cover={false}>
            <Box display="flex" flexWrap="wrap" color="highlight.100" fontWeight="semibold" justifyContent="flex-start" columnGap={5} rowGap={3} my="auto" pb="1rem" fontSize="lg">
              {
                tutorial.languages.map((language) => (
                  <Badge bgColor="highlight.300">{language}</Badge>
                ))
              }
            </Box>
          </Reveal>
        </VStack>
      </VStack>
    </Box>
  )
}

export default Card;
