import { Box, Card, CardHeader, Flex, HStack, Image, Link, Text, Heading } from '@chakra-ui/react'
import React from 'react'
import FullScreenSection from '../components/FullScreenSection'
import { useFontContext } from '../context/fontContext'
import { certificateData } from '../utils/data'
import { certificateData as certificateDataJP } from '../utils/japanData'
import CertificateCard from '../components/CertificateCard'
import Reveal from '../animations/Reveal'
import { useLanguageContext } from '../context/languageContext'

const CertificateSection = () => {

  const { darkmode, linkStyle } = useFontContext();
  const { isEnglish } = useLanguageContext();
  
  const certificates = isEnglish ? certificateData : certificateDataJP;

  return (
    <FullScreenSection
      backgroundColor={darkmode ? "#1d1d16" : "rgb(241, 245, 241)"}
      p={3}
      minHeight="auto"
      color={darkmode ? "rgb(241, 245, 241)" : "#4d5061"}
    >
      <Heading as="h1" mx="auto" my={2}>
        <Reveal cover={false} direction='bottom'>
          {isEnglish? "Certificates": "認定証"}
        </Reveal>
      </Heading>
      <Heading size="md" mx="auto" my={2}>
        <Reveal cover={false}>
          {isEnglish? 
          "Online certificate from popular bootcamp; Coursera, Kaggle, Udemy ":
          "人気のブートキャンプからのオンライン認定証; Coursera、Kaggle、Udemy"}
        </Reveal>
      </Heading>
      <Flex display="flex" flexWrap="wrap" gap={16} justifyContent="center" >
        {
          certificates.map((certificate, index) => {
            return (
              <CertificateCard certificate={certificate} index={index} />
            )
          })
        }
      </Flex>

    </FullScreenSection>
  )
}

export default CertificateSection