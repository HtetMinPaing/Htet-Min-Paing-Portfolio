import React, { useEffect } from 'react'
import { useLoaderContext } from '../context/loaderContext'
import ClipLoader from "react-spinners/ClipLoader";
import { HashLoader } from 'react-spinners';
import "@lottiefiles/lottie-player";
import '@dotlottie/player-component';

const Loader = () => {

    const { loader, toggleLoader } = useLoaderContext();

    const one = "https://lottie.host/29b98878-0962-4af4-ae02-e44e84e23457/roHO3GQPwY.lottie"
    const two = "https://lottie.host/b2098421-ed50-4b30-99c8-85ff5a772ac9/hJIUI52bIM.lottie"
    const three = "https://lottie.host/f114a5d0-6a3a-4d4a-bc22-011c922c55bc/4RA7cM5u0s.lottie"
    const four = "https://lottie.host/fe0a2e97-c962-40bb-b116-a289dbf24254/mMqobrUohJ.lottie"
    const five = "https://lottie.host/7fc83ede-3ce3-4874-ae07-4f3c084f98c6/NbqmXbWmmA.lottie"
    const six ="https://lottie.host/8b5f5718-d92b-4517-ab37-df793d627329/6CM4mi1Bj5.json"

    return (
        <div style={{
            display: `${loader ? "flex" : "none"}`,
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            position: 'fixed',
            top: 0,
            bottom: 0,
            width: '100vw',
            zIndex: 1000,
            backgroundColor: `${loader?"rgba(0, 0, 0, 0.9)":""}`,
        }}>
            {/* <HashLoader
                loading={loader}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
                color='#439775'
            /> */}
            <dotlottie-player 
                src={six} 
                background="transparent" 
                speed="1" 
                style={{ width: "30rem", height: "30rem", position: "absolute" }} 
                loop 
                autoplay
            >
            </dotlottie-player>

        </div>
    )
}

export default Loader