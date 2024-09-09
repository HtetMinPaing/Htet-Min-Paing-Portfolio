import React, { createContext, useContext, useState } from 'react'

const languageContext = createContext(undefined);

export const LanguageProvider = ({ children }) => {

    const [isEnglish, setIsEnglish] = useState(true);
    const toggleLanguage = () => {
        setIsEnglish(!isEnglish)
    };

  return (
    <languageContext.Provider value={{isEnglish, toggleLanguage}}>
        {children}
    </languageContext.Provider>
  )
}

export const useLanguageContext = () => useContext(languageContext);