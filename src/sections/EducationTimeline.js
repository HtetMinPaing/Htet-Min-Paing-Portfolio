import { Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'

import "react-vertical-timeline-component/style.min.css"
import FullScreenSection from '../components/FullScreenSection'
import "../CSS/EducationTimeline.css"
import Reveal from '../animations/Reveal'
import { educationData } from "../utils/data"


const data = educationData

const EducationTimeline = () => {

    return (
        <FullScreenSection minHeight="auto">
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