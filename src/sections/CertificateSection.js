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

<<<<<<< HEAD
  const { darkmode } = useFontContext();
=======
  const { darkmode, linkStyle } = useFontContext();
>>>>>>> 517d148e653e2af3adb2499eb416d97c7b5ad722
  const { isEnglish } = useLanguageContext();
  
  const certificates = isEnglish ? certificateData : certificateDataJP;

  return (
    <FullScreenSection
      backgroundColor={darkmode ? "neutral.black.300" : "neutral.white.200"}
      p={3}
      minHeight="auto"
      color={darkmode ? "neutral.white.200" : "brand.100"}
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