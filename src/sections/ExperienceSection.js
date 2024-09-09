import React from 'react'
import {  VStack, Text, Box, Heading, Flex, Grid } from '@chakra-ui/react'
import { faReact, faJava, faFigma, faGithub, faNodeJs, faPhp, faAndroid, faJs } from '@fortawesome/free-brands-svg-icons'
import FullScreenSection from '../components/FullScreenSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useFontContext } from '../context/fontContext'
import Reveal from '../animations/Reveal'
import { useLanguageContext } from '../context/languageContext'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

const icons = [
    faReact,
    faJava,
    faPhp,
    faDatabase,
    faAndroid,
    faJs,
    faFigma,
    faGithub,
    faNodeJs
]

const textENG = [
    ">> Dynamic Website",
    ">> SPA Web Application",
    ">> Backend Database",
    ">> Mobile Application",
    ">> Wordpress website",
    ">> Joomla Website",
]

const textsJP = [
    ">> ダイナミックウェブサイト",
    ">> SPAウェブアプリケーション",
    ">> バックエンドデータベース",
    ">> モバイルアプリケーション",
    ">> WordPressウェブサイト",
    ">> Joomlaウェブサイト"
]

const ExperienceSection = () => {

    const {isLargeScreen, darkmode} = useFontContext();
    const { isEnglish } = useLanguageContext();

    const texts = isEnglish ? textENG : textsJP;

    return (
        <FullScreenSection
            minHeight="auto"
            padding="1rem"
            backgroundColor={darkmode ? "#1d1d16": "rgb(241, 245, 241)"}
        >
            <Flex flexWrap="wrap" justifyContent="center" gap={`${isLargeScreen ? 200 : 10}`} color={darkmode ? "rgb(241, 245, 241)" : "#4d5061"}>
                <Reveal cover={false} direction="right">
                    <Box className=''>
                        <Heading as="h1" m="2rem" >
                            {isEnglish? "Experience in": "経験 が ある"}
                        </Heading>
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
                    <Heading as="h1" m="2rem">
                        <Reveal direction='left'>
                            {isEnglish? "Build and Deploy": "設計 と 開発"}
                        </Reveal>
                    </Heading>
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

export default ExperienceSection