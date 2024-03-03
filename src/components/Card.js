import { Box, Button, Heading, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGit, faGithub } from '@fortawesome/free-brands-svg-icons'
import React from "react";
import { useFontContext } from "../context/fontContext";

const Card = ({ title, description, languages, imageSrc, url, repo }) => {

  const { bottomStyle, linkStyle } = useFontContext();

  return (
    <Box className="moveDown" backgroundColor="#4d5061" borderRadius="2rem" height={"auto"} shadow="2xl">

      <VStack position="relative">

        {imageSrc &&
          <Image src={imageSrc} borderRadius="2rem" height={190} width="100%" />
        }

        <VStack position="absolute" right={0} padding={3} gap={2}>
          <Link href={url} isExternal={true}>
            <Button fontSize="1.2rem" {...bottomStyle} padding={1}><FontAwesomeIcon icon={faArrowUpRightFromSquare} size="1x" /></Button>
          </Link>
          <Link href={repo} isExternal={true}>
            <Button fontSize="1.2rem" {...bottomStyle} padding={1}><FontAwesomeIcon icon={faGithub} size="1x" /></Button>
          </Link>
        </VStack>
        <VStack alignItems="flex-start" px="1rem" color={"rgb(241, 245, 241)"}>

          <HStack>
            <Heading>{title}</Heading>
          </HStack>

          <Text fontSize="1.2rem">
            {description}
          </Text>

          {/* <Text fontSize="1.2rem">
            {description.length > 90 ? description.slice(0, 90) + " ... " : description}
            <Link color={"#439775"} _hover={{color: "#48bf84"}} fontWeight="semibold">See More</Link>
          </Text> */}

          <Box display="flex" flexWrap="wrap" color={"#439775"} fontWeight="semibold" justifyContent="flex-start" columnGap={5} my="auto" pb="1rem" fontSize="lg">
            {
              languages.map((language) => (
                <Text>{language}</Text>
              ))
            }
          </Box>
        </VStack>
      </VStack>
    </Box>
  );
};

export const TutorialCard = ({ tutorial }) => {
  const { bottomStyle } = useFontContext();
  return (
    <Box className="moveDown" backgroundColor="#4d5061" borderRadius="2rem" height={"auto"} shadow="2xl">

      <VStack position="relative">
        <VStack alignItems="flex-start" px="1rem" color={"rgb(241, 245, 241)"}>

          <HStack>
            <Heading>{tutorial.title}</Heading>
            <Link position="absolute" right={5} top={1} href={tutorial.repo} isExternal={true}>
              <Button fontSize="1.2rem" {...bottomStyle} padding={1} gap={1}>
                <FontAwesomeIcon icon={faGit} size="1x" />
                <FontAwesomeIcon icon={faGithub} size="1x" />
              </Button>
            </Link>
          </HStack>

          <Text fontSize="1.2rem">
            {tutorial.description}
          </Text>

          <Box display="flex" flexWrap="wrap" color={"#439775"} fontWeight="semibold" justifyContent="flex-start" columnGap={5} my="auto" pb="1rem" fontSize="lg">
            {
              tutorial.languages.map((language) => (
                <Text>{language}</Text>
              ))
            }
          </Box>
        </VStack>
      </VStack>
    </Box>
  )
}

export default Card;
