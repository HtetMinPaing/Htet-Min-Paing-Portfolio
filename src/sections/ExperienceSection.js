import React from 'react'
import FullScreenSection from '../components/FullScreenSection'
import { useFontContext } from '../context/fontContext';
import { faReact, faJava, faFigma, faGithub, faNodeJs, faPhp, faAndroid, faJs } from '@fortawesome/free-brands-svg-icons'
import { Box, Flex, Tooltip, useTheme } from '@chakra-ui/react';
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

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

// const textENG = [
//     ">> Dynamic Website",
//     ">> SPA Web Application",
//     ">> Backend Database",
//     ">> Mobile Application",
//     ">> Wordpress website",
//     ">> Joomla Website",
// ]

// const textsJP = [
//     ">> ダイナミックウェブサイト",
//     ">> SPAウェブアプリケーション",
//     ">> バックエンドデータベース",
//     ">> モバイルアプリケーション",
//     ">> WordPressウェブサイト",
//     ">> Joomlaウェブサイト"
// ]

const ExperienceSection = () => {

    const theme = useTheme();

    const { darkmode } = useFontContext();

    const MotionBox = motion(Box);

    return (
        <FullScreenSection
            minHeight="auto"
            padding="1rem"
            backgroundColor={darkmode ? "neutral.black.300" : "neutral.white.200"}
        >
            <Flex
                wrap="wrap"
                justify="center"
                align="center"
                gap="1.5rem"
            >
                {
                    icons.map((icon) => {
                        return (
                            <MotionBox
                                backgroundColor="brand.100"
                                width="6rem"
                                height="6rem"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                borderRadius="2rem"
                                whileHover="hover"
                                whileTap="hover"
                                variants={{
                                    hover: {
                                        translateY: -20,
                                    }
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: "backInOut"
                                }}
                            >
                                <Tooltip label="Click to see the projects where I used this Language" width="7rem" borderRadius="10px">
                                    <FontAwesomeIcon
                                        icon={icon}
                                        size='4x'
                                        color={theme.colors.neutral.white[200]}
                                        cursor="pointer"
                                    />
                                </Tooltip>
                            </MotionBox>
                        )
                    })
                }
            </Flex>
        </FullScreenSection >
    )
}

export default ExperienceSection