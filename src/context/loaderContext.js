import { createContext, useContext, useState } from "react"


const LoaderContext = createContext(undefined)

export const LoaderProvider = ({children}) => {

    const [loader,setLoader] = useState(false);

    const toggleLoader = (boo) => {
        setLoader(boo)
    }

    return(
        <LoaderContext.Provider value={{loader, toggleLoader}}>
            {children}
        </LoaderContext.Provider>
    )

}

export const useLoaderContext = () => useContext(LoaderContext);