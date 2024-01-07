import { Box, Card, CardHeader, Flex, HStack, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { faMeta } from '@fortawesome/free-brands-svg-icons'
import Coursera from "../images/Coursera.png"
import Meta from "../images/Meta.png"
import FullScreenSection from './FullScreenSection'
import { useFontContext } from '../context/fontContext'


const certificates = [
  {
    title: "Meta Front End Developer Professional Certificate",
    orgs: [Coursera, Meta],
    isCompleted: true,
    url: "https://coursera.org/share/b79ba831134bbef23c36768ca071b9d4",
  },
  {
    title: "Meta Advanced React Developer Certificate",
    orgs: [Coursera, Meta],
    isCompleted: true,
    url: "https://coursera.org/share/d7b1009ecdb3db7421f52ad7b197af74",
  },
  {
    title: "Meta Principles of UX/UI Design Certificate",
    orgs: [Coursera, Meta],
    isCompleted: false,
    url: "",
  }
];

const Certificate = () => {

  const { darkmode, linkStyle } = useFontContext();

  return (
    <FullScreenSection
      backgroundColor={darkmode ? "#1d1d16" : "rgb(241, 245, 241)"}
      p={3}
      minHeight="auto"
      color={darkmode ? "rgb(241, 245, 241)" : "#4d5061"}
    >
      <Flex display="flex"  flexWrap="wrap" gap={8} justifyContent="center" >
        {
          certificates.map((certificate, index) => {
            return (
              <Box width="22rem" backgroundColor={darkmode ? "#444444" : "#dddddd"} borderRadius="lg" key={index}>
                <Image src={require("../images/Certificate.png")} width="22rem" />
                <Text p={2} fontSize="lg" fontWeight="semibold" boxSizing="border-box" width="22rem">{certificate.title}</Text>
                <HStack px={2}>
                  <Text fontSize="lg" fontWeight="semibold">Issued By :</Text>
                  {certificate.orgs.map((org)=>(<Image src={org} height="5" />))}
                </HStack>
                <Link p={2} href={certificate.url} isExternal={true} fontWeight="semibold" color="#46ab79" {...linkStyle} >
                  {certificate.isCompleted ? "Check now at Coursera" : "Still Learning"}
                </Link>
                <hr style={{
                  height: "0.1rem",
                  border: "0.1rem solid #10358D",
                  background: "#10358D",
                  width: "99%",
                }} />
              </Box>
            )
          })
        }
      </Flex>

    </FullScreenSection>
  )
}

export default Certificate