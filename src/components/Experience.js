import React from 'react'
import { HStack, VStack, Text, Box, Heading, Flex, Grid, space, Button } from '@chakra-ui/react'
import { faReact, faJava, faPython, faHtml5, faCss3, faBootstrap, faFigma, faGithub, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import FullScreenSection from './FullScreenSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useFontContext } from '../context/fontContext'
import Reveal from '../animations/Reveal'

const icons = [
    faReact,
    faJava,
    faPython,
    faHtml5,
    faCss3,
    faBootstrap,
    faFigma,
    faGithub,
    faNodeJs
]

const texts = [
    ">> Ecommerence Site",
    ">> Dynamic Webapp",
    ">> Portal App",
    ">> Business Website",
    ">> SPA Web Application",
    ">> Personal Blog"
]

const Experience = () => {

    const {isLargeScreen, darkmode} = useFontContext();

    return (
        <FullScreenSection
            minHeight="auto"
            padding="1rem"
            backgroundColor={darkmode ? "#1d1d16": "rgb(241, 245, 241)"}
        >
            <Flex flexWrap="wrap" justifyContent="center" gap={`${isLargeScreen ? 200 : 10}`} color={darkmode ? "rgb(241, 245, 241)" : "#4d5061"}>
                <Reveal cover={false} direction="right">
                    <Box className=''>
                        <Heading as="h1" m="2rem" >Experience in </Heading>
                        <Grid gridTemplateColumns={"1fr 1fr 1fr"} gridGap={8} m="2rem">
                            {
                                icons.map((icon) => {
                                    return (
                                        <FontAwesomeIcon icon={icon} size='3x' color={darkmode ? "rgb(241, 245, 241)" : "#4d5061"} />
                                    )
                                })
                            }
                        </Grid>
                    </Box>
                </Reveal>
                {/* <div style={{
                    height: "auto",
                    borderRight: "0.2rem solid #4d5061",
                    background: "#4d5061",
                    marginRight: "5rem",
                    marginLeft: "5rem"
                }} />
                <VStack bgColor="#4d5061" justifyContent="center" borderRadius="10%" pb="2rem">
                    <Heading as="h1" m="2rem">Can Hire As</Heading>
                    <Button {...bottomStyle} fontWeight={700}>Freelance</Button>
                    <Button {...bottomStyle} fontWeight={700}>Employee</Button>
                </VStack> */}
                {/* <div style={{
                    height: "auto",
                    borderRight: "0.2rem solid #4d5061",
                    background: "#4d5061",
                    marginRight: "5rem",
                    marginLeft: "5rem"
                }} /> */}
                <Box className='' color={darkmode ? "rgb(241, 245, 241)" : "#4d5061"}>
                    <Heading as="h1" m="2rem"><Reveal direction='left'>Build and Deploy</Reveal></Heading>
                    <VStack m="2rem" alignItems="flex-start">
                        {
                            texts.map((text) => {
                                return (
                                    <Reveal>
                                        <Text fontSize="1.2rem" fontWeight={500}>{text}</Text>
                                    </Reveal>
                                )
                            })
                        }
                    </VStack>
                </Box>
            </Flex>
        </FullScreenSection>
    )
}

export default Experience