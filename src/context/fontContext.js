import { useBreakpointValue } from "@chakra-ui/react";
import { createContext, useContext, useState } from "react"

const fontContext = createContext(undefined); 

export const FontProvider = ({ children }) => {

    const fontSize = useBreakpointValue({base: '16px', sm: '18px', md: '20px', lg: '22px'})
    const screenSize = useBreakpointValue({
        base: '100%', 
        sm: '100%', 
        md: '125%', 
        lg: '150%'})
    const isMobile = useBreakpointValue({ base: true, md: false });
    const isLargeScreen = useBreakpointValue({base: false, lg: true})
    const designBox = useBreakpointValue({
        base: "repeat(1,minmax(0,1fr))", 
        sm: "repeat(1,minmax(0,1fr))", 
        md: "repeat(2,minmax(0,1fr))", 
        lg: "repeat(3,minmax(0,1fr))",
    })
    
    const [darkmode,setDarkmode] = useState(false)
    const toogleDarkmode = () => {
        setDarkmode(!darkmode)
    }
    return (
        <fontContext.Provider value={{fontSize,isMobile,isLargeScreen, designBox,screenSize, darkmode, toogleDarkmode}}>
            {children}
        </fontContext.Provider>
    )
}

export const useFontContext = () => useContext(fontContext);