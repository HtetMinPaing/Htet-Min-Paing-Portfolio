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
    const linkStyle = {
        _hover:{ 
            textDecoration: "none",
            color: "#439775",
            transition: "1s"
        },
        _focus:{ 
            outline: "none" 
        },
        _active:{
            textDecoration: "none",
            color: "#439775"
        }
    }
    const bottomStyle = {
        _hover:{
            background: "#61d095",
            color: "#30323d",
            transition: "1s"
        },
        background: "#439775",
        color: "#30323d",
        fontSize: "1.3rem",
        fontWeight: "700",
        // px: "1.3rem",
        // py: "0.5rem",
        // borderRadius: "2rem"
    }
    
    const [darkmode,setDarkmode] = useState(false)
    const toogleDarkmode = () => {
        setDarkmode(!darkmode)
    }
    return (
        <fontContext.Provider value={{fontSize,isMobile,isLargeScreen, designBox,linkStyle,bottomStyle,screenSize, darkmode, toogleDarkmode}}>
            {children}
        </fontContext.Provider>
    )
}

export const useFontContext = () => useContext(fontContext);