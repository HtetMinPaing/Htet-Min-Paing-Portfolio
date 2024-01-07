import { Box, Button, Heading, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useFontContext } from "../context/fontContext";

const Card = ({ title, description, languages, imageSrc, url }) => {

  const { bottomStyle, linkStyle } = useFontContext();

  return (
    <Box className="moveDown" backgroundColor="#4d5061" borderRadius="2rem" height={"auto"} shadow="2xl">
      
      <VStack>

        <Image src={imageSrc} borderRadius="2rem" height={190} width="100%" />
        
        <VStack alignItems="flex-start" px="1rem" color={"rgb(241, 245, 241)"}>
          
          <HStack>
            <Heading>{title}</Heading>
            <Link href={url} isExternal={true}>
              <Button fontSize="1.2rem" {...bottomStyle}><FontAwesomeIcon icon={faArrowUpRightFromSquare} size="1x" /></Button>
            </Link>
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

export default Card;
