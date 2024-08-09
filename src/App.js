import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { FontProvider } from "./context/fontContext";
import Experience from "./components/Experience";
import "./App.css"
import Timeline from "./components/Timeline";
import { useEffect } from "react";
import useAnimation from "./hooks/useAnimation";
import useScroll from "./hooks/useScroll";
import { LoaderProvider } from "./context/loaderContext";
import Loader from "./components/Loader";
import Certificate from "./components/Certificate";
import EducationTimeline from "./components/EducationTimeline";

function App() {

  useAnimation(".hide","show")
  // useScroll(".container","containerScroll")
  // useScroll(".timeline","timelineScroll")
  // useAnimation(".rightBox","moveleft")
  // useAnimation(".leftBox","moveright")
  useAnimation(".moveDown","movedown")

  return (
    <ChakraProvider>
      <FontProvider>
        <AlertProvider>
          <LoaderProvider>
          <main>
            <Header />
            <div className=""><LandingSection /></div>
            <div className=""><EducationTimeline /></div>
            <div className=""><Experience /></div>
            <div className="hide"><ProjectsSection /></div>
            <div className=""><Certificate /></div>
            <div className="hide"><ContactMeSection /></div>
            <Alert />
            <Footer />
            <Loader />
          </main>
          </LoaderProvider>
        </AlertProvider>
      </FontProvider>
    </ChakraProvider>
  );
}

export default App;
