import { Box, HStack, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { useFontContext } from '../context/fontContext'


const CertificateCard = ({ certificate, index }) => {

    const { darkmode, linkStyle } = useFontContext();

    return (
        <Box width="22rem" backgroundColor={darkmode ? "#444444" : "#dddddd"} borderRadius="lg" key={index}>
            <Image src={require("../images/Certificate.png")} width="22rem" />
            <Text p={2} fontSize="lg" fontWeight="semibold" boxSizing="border-box" width="22rem">{certificate.title}</Text>
            <HStack px={2}>
                <Text fontSize="lg" fontWeight="semibold">Issued By :</Text>
                {certificate.orgs.map((org) => (<Image src={org} height="5" />))}
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
}

export default CertificateCard