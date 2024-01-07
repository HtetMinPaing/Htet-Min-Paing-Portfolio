import React from 'react'
import { useEffect } from 'react';

const useScroll = (className, animation) => {
    useEffect(() => {
        const handleScroll = () => {
            const timelineElements = document.querySelectorAll(className);

            timelineElements.forEach((element) => {
                const elementTop = element.getBoundingClientRect().top;
                const elementBottom = element.getBoundingClientRect().bottom;

                if (elementTop < window.innerHeight && elementBottom >= 0) {
                    element.classList.add(animation);
                } else {
                    element.classList.remove(animation);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

    }, []);
}

export default useScroll