import { Badge, Box, Button, Heading, HStack, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useFontContext } from '../context/fontContext'
import { motion } from 'framer-motion';
import Reveal from '../animations/Reveal';

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)

const CertificateCard = ({ certificate, index }) => {

    const { linkStyle, fontSize, isMobile } = useFontContext();
    return (
        <MotionBox
            whileHover="hover"
            whileTap="hover"
            variants={{
                hover: {
                    scale: 1.05
                }
            }}
            transition={{
                duration: 1,
                ease: "backInOut"
            }}
            position="relative" h={96} w={80} flexShrink={0} overflow="hidden" borderRadius="xl" bg="#4d5061" p={6}
        >
            <HStack position="relative" zIndex={10} color="white" gap={2} py={1}>
                {certificate.orgs.map((org) => (
                    <Badge bg="#48bf84" color="#1d1d16" borderRadius="full" px={3} py={0.5} >
                        {org}
                    </Badge>
                ))}
            </HStack>
            <Box my={2} position="relative" zIndex={10}>
                <MotionHeading
                    initial={{ scale: 0.85 }}
                    variants={{
                        hover: {
                            scale: 1
                        }
                    }}
                    transition={{
                        duration: 1,
                        ease: "backInOut"
                    }}
                    as="h3" size={isMobile ? "xl" : "lg"} color="white" transformOrigin="top left"
                >
                    <Reveal direction='right' cover={false}>{certificate.title}</Reveal>
                </MotionHeading>
                <Text py={isMobile ? 0 : 2} color="white" {...fontSize}>
                    <Reveal cover={false}>{certificate.description}</Reveal>
                </Text>
            </Box>
            <Link href={certificate.url} isExternal={true} {...linkStyle} backdropBlur={true} position="absolute" bottom={2} right={6} left={6} zIndex={1}>
                <Button w="full" _hover={{ bg: "#439775" }} my={isMobile ? 0 : 2}>
                    Check Certificate
                </Button>
            </Link>
            <Background />
        </MotionBox>
    )
}

const Background = () => {
    return (
        <motion.svg
            width={320}
            height={384}
            viewBox="0 0 320 384"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute", inset: 0, zIndex: 0 }}
            variants={{
                hover: {
                    scale: 1.5
                }
            }}
            transition={{
                duration: 1,
                ease: "backInOut"
            }}
        >
            <motion.circle
                variants={{
                    hover: {
                        scaleY: 0.5,
                        y: -25
                    }
                }}
                transition={{
                    duration: 1,
                    ease: "backInOut",
                    delay: 0.2
                }}
                cx="160.5"
                cy="114.5"
                r="101.5"
                fill="#30323d"
            />
            <motion.ellipse
                variants={{
                    hover: {
                        scaleY: 2.25,
                        y: -25
                    }
                }}
                transition={{
                    duration: 1,
                    ease: "backInOut",
                    delay: 0.2
                }}
                cx="160.5"
                cy="265.5"
                rx="101.5"
                ry="43.5"
                fill="#30323d"
            />
        </motion.svg>
    )
}

const Background1 = () => {
    return (
        <motion.svg
            width={320}
            height={384}
            viewBox="0 0 320 384"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute", inset: 0, zIndex: 0 }}
            variants={{
                hover: {
                    scale: 1.5
                }
            }}
            transition={{
                duration: 1,
                ease: "backInOut"
            }}
        >
            <motion.rect
                width="75"
                height="75" x="20" y="20" rx="10" ry="10" fill="#30323d"
                variants={{
                    hover: {
                        scaleY: 2,
                        scaleX: 2,
                    }
                }}
                transition={{
                    duration: 1,
                    ease: "backInOut",
                    delay: 0.2
                }}
            />
            <motion.circle
                variants={{
                    hover: {
                        scale: 0.7,
                    }
                }}
                transition={{
                    duration: 1,
                    ease: "backInOut",
                    delay: 0.2
                }}
                cx="180"
                cy="220"
                r="80"
                fill="#30323d"
            />
            <motion.circle
                variants={{
                    hover: {
                        scale: 0.7,
                        y: 30
                    }
                }}
                transition={{
                    duration: 1,
                    ease: "backInOut",
                    delay: 0.2
                }}
                cx="240"
                cy="140"
                r="80"
                fill="#30323d"
            />
            <motion.circle
                variants={{
                    hover: {
                        scale: 0.7,
                        y: -30
                    }
                }}
                transition={{
                    duration: 1,
                    ease: "backInOut",
                    delay: 0.2
                }}
                cx="110"
                cy="310"
                r="80"
                fill="#30323d"
            />
        </motion.svg>

    )
}

const Background2 = () => {
    return (
        <svg
            aria-hidden="true"
            data-prefix="far"
            data-icon="file-certificate"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="svg-inline--fa fa-file-certificate fa-w-16 fa-7x"
        >
            <path
                fill="currentColor"
                d="M497.83 97.98L413.94 14.1c-9-9-21.2-14.1-33.89-14.1H175.99C149.5.1 128 21.6 128 48.09V128h47.99V48.09h159.97v103.98c0 13.3 10.7 23.99 24 23.99H464v287.95H224V512h239.93c26.5 0 48.07-21.5 48.07-47.99V131.97c0-12.69-5.17-24.99-14.17-33.99zm-113.88 30.09V51.99l76.09 76.08h-76.09zM247.42 338.28c7.4-7.53 10.29-18.5 7.58-28.79-5.43-20.65-5.44-17.74 0-38.42 2.71-10.29-.18-21.26-7.58-28.79-14.86-15.12-13.43-12.61-18.87-33.27-2.71-10.29-10.6-18.32-20.71-21.07-20.28-5.53-17.84-4.1-32.69-19.21-7.4-7.53-18.18-10.47-28.29-7.71-20.32 5.54-17.46 5.53-37.75 0-10.1-2.76-20.88.19-28.28 7.71-14.91 15.18-12.5 13.7-32.69 19.21-10.11 2.76-18 10.79-20.71 21.07-5.46 20.74-4 18.13-18.87 33.27-7.4 7.53-10.29 18.5-7.58 28.79 5.45 20.71 5.42 17.79 0 38.42-2.71 10.29.18 21.26 7.58 28.79 14.85 15.11 13.43 12.61 18.87 33.27 2.71 10.29 10.6 18.32 20.71 21.07 14.31 3.9 11.52 2.97 15.84 5V512l64-32 64 32V397.62c4.31-2.02 1.52-1.1 15.84-5 10.11-2.76 18-10.79 20.71-21.07 5.48-20.75 4.02-18.14 18.89-33.27zM128 352c-35.34 0-64-28.65-64-64s28.66-64 64-64 64 28.65 64 64-28.66 64-64 64z" class=""
            ></path>
        </svg>
    )
}

export default CertificateCard