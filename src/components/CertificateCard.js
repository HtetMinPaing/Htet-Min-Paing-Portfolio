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
                <Text py={isMobile ? 0: 2} color="white" {...fontSize}>
                    <Reveal cover={false}>{certificate.description}</Reveal>
                </Text>
                <Link href={certificate.url} isExternal={true} {...linkStyle} backdropBlur={true} >
                    <Button w="full" _hover={{ bg: "#439775" }} my={isMobile ? 0: 2}>
                        Check Certificate
                    </Button>
                </Link>
            </Box>
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

export default CertificateCard