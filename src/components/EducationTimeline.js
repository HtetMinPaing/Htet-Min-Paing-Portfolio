import { Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'

import "react-vertical-timeline-component/style.min.css"
import FullScreenSection from './FullScreenSection'
import "../CSS/EducationTimeline.css"
import Reveal from '../animations/Reveal'


const data = [
    {
        id: 1,
        college: "University of People",
        year: "2024 - present",
        degree: "Bachelor Degree in Computer Science",
        isDegree: true,
        imageSrc: "Uopeople.png"
    },
    {
        id: 2,
        college: "Auston University",
        year: "2023 - Present",
        degree: "Higher Diploma in Infrastructure and Nework",
        isDegree: true,
        imageSrc: "Auston.png"
    },
    {
        id: 3,
        college: "University of People",
        year: "2021 - 2023",
        degree: "Associate Degree in Computer Science",
        isDegree: true,
        imageSrc: "Uopeople.png"
    },
    {
        id: 4,
        college: "ITPEC (IP)",
        year: "2023",
        degree: "Information Technology Passport Examination Certificate",
        isDegree: false,
        imageSrc: "Itpec.png"
    },
    {
        id: 5,
        college: "JLPT (N2)",
        year: "2023",
        degree: "Japanese Language Proficiency Text (N2 Level)",
        isRight: false,
        imageSrc: "Jlpt.png"
    },
]

const EducationTimeline = () => {

    return (
        <FullScreenSection>
            <Heading py={6}>
                <Reveal cover={false} direction="bottom">
                    Education Background
                </Reveal>
            </Heading>
            <VerticalTimeline lineColor='#4d5061'>
                {
                    data.map(element => {
                        return (
                            <VerticalTimelineElement
                                key={element.id}
                                date={element.year}
                                dateClassName="date"
                                iconStyle={{ background: "white" }}
                                icon={<Image src={element.imageSrc} borderRadius={"50%"} />}
                                contentStyle={{
                                    backgroundColor: "#4d5061",
                                    color: "white",
                                    borderRadius: "15px"
                                }}
                                contentArrowStyle={{
                                    borderRight: '7px solid #4d5061'
                                }}
                            >
                                <Reveal cover={false}>
                                    <Heading as="h3" size="lg" className="vertical-timeline-element-title">
                                        {element.college}
                                    </Heading>
                                    <Heading as="h5" size="sm" className='vertical-timeline-element-subtitle'>
                                        {element.degree}
                                    </Heading>
                                </Reveal>
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
        </FullScreenSection>
    )
}

export default EducationTimeline