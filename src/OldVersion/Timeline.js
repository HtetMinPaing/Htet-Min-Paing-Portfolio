import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useFontContext } from '../context/fontContext'
import "../CSS/Timeline.css"

const Timeline = () => {

    const {isMobile, darkmode} = useFontContext();

    return (
        <Box backgroundColor={darkmode ? "#1d1d16": "rgb(241, 245, 241)"} pt={"3rem"}>
            {
                isMobile ? <ContainerLG /> : <ContainerLG />
            }
            <hr style={{
                height: "0.1rem",
                border: "0.1rem solid #4d5061",
                background: "#4d5061",
                width: "90%",
                margin: "auto",
                marginTop: "3rem"
            }} />
        </Box>
    )
}

const data = [
    {
        college: "University of People",
        year: "2024 - present",
        description: "Bachelor Degree in Computer Science",
        isRight: false,
        getImageSrc: () => require("../images/Uopeople.png"),
    },
    {
        college: "Auston University",
        year: "2023 - Present",
        description: "Higher Diploma in Infrastructure and Nework",
        isRight: true,
        getImageSrc: () => require("../images/Auston.png"),
    },
    {
        college: "University of People",
        year: "2021 - 2023",
        description: "Associate Degree in Computer Science",
        isRight: false,
        getImageSrc: () => require("../images/Uopeople.png"),
    },
    {
        college: "ITPEC (IP)",
        year: "2023",
        description: "Information Technology Passport Examination Certificate",
        isRight: true,
        getImageSrc: () => require("../images/Itpec.png"),
    },
    {
        college: "JLPT (N2)",
        year: "2023",
        description: "Japanese Language Proficiency Text (N2 Level)",
        isRight: false,
        getImageSrc: () => require("../images/Jlpt.png"),
    },
]

const styles = {
    container: {
        width: "50%",
        padding: "10px 50px",
        position: "relative",
    },
    text_box: {
        padding: "20px 30px",
        background: "#4d5061",
        color: "#fff",
        position: "relative",
        borderRadius: "6px",
    },
    left: {
        left: "0"
    },
    right: {
        left: "50%"
    },
    image: {
        position: "absolute",
        right: "-1.5rem",
        top: "2.2rem",
        zIndex: "10",
        borderRadius: "50%",
        width: "3rem",
    },
    rightImage: {
        left: "-1.5rem"
    },
    after: {
        content: '""',
        position: "absolute",
        width: "0.3rem",
        height: "100%",
        background: "#4d5061",
        top: "0",
        left: "50%",
        marginLeft: "-0.2rem",
        zIndex: "-1",
    },
    left_arrow: {
        height: "0",
        width: "0",
        position: "absolute",
        top: "28px",
        zIndex: "10",
        borderTop: "1rem solid transparent",
        borderBottom: "1rem solid transparent",
        borderLeft: "1rem solid #4d5061",
        right: "-1rem"
    },
    right_arrow: {
        height: "0",
        width: "0",
        position: "absolute",
        top: "28px",
        zIndex: "1",
        borderTop: "1rem solid transparent",
        borderBottom: "1rem solid transparent",
        borderRight: "1rem solid #4d5061",
        left: "-1rem"
    }
}

const ContainerLG = () => {
    const {isMobile, darkmode} = useFontContext();
    return (
        <Box backgroundColor={darkmode ? "#1b1b1b": "rgb(241, 245, 241)"} margin="auto" zIndex={1000} position="relative" maxWidth="1200px" className='timeline ' >
            {
                data.map((item) => (
                    <Box key={item.getImageSrc} className={`container ${item.isRight ? "right_box":"left_box"}`}>
                        <Image src={item.getImageSrc()} className={`image ${item.isRight ? "right_image": ""}`} />
                        <Box className='text_box'>
                            <Heading fontSize="xl" >{item.college}</Heading>
                            <Text fontSize="sm" >{item.year}</Text>
                            <Text fontSize="md">{item.description}</Text>
                            <Box className={`${item.isRight ? "right_arrow":"left_arrow"}`} >  </Box>
                        </Box>
                    </Box>
                ))
            }
        </Box>
    )
}

export default Timeline