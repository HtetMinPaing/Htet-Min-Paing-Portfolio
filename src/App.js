import { ChakraProvider } from "@chakra-ui/react";
import Header from "./sections/Header";
import LandingSection from "./sections/LandingSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactMeSection from "./sections/ContactMeSection";
import Footer from "./sections/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { FontProvider } from "./context/fontContext";
import ExperienceSection from "./sections/ExperienceSection";
import "./App.css"
import { useEffect } from "react";
import useAnimation from "./hooks/useAnimation";
import useScroll from "./hooks/useScroll";
import { LoaderProvider } from "./context/loaderContext";
import Loader from "./components/Loader";
import CertificateSection from "./sections/CertificateSection";
import EducationTimeline from "./sections/EducationTimeline";
import CertificateCard from "./components/CertificateCard";

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
            <div className=""><ExperienceSection /></div>
            <div className=""><ProjectsSection /></div>
            <div className=""><CertificateSection /></div>
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
