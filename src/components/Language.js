import React from 'react'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLanguageContext } from '../context/languageContext'
import { Box } from '@chakra-ui/react'
import { useLoaderContext } from '../context/loaderContext'

const Language = () => {

  const { isEnglish, toggleLanguage } = useLanguageContext();
  const { toggleLoader } = useLoaderContext();

  const backgroundColor = isEnglish ? "#C2C5CC" : "highlight.300";
  const iconColor = isEnglish ? "highlight.300" : "#C2C5CC";

  const handleLanguageToggle = () => {
    toggleLoader(true);
    setTimeout(() => {
      toggleLanguage();
      toggleLoader(false);
    }, 1500);
  }

  return (
    <Box>
      <FontAwesomeIcon
        icon={faGlobe}
        size="2xl"
        color={backgroundColor}
        lightingColor={iconColor}
        onClick={handleLanguageToggle}
        cursor="pointer"
      />
    </Box>
  )
}

export default Language