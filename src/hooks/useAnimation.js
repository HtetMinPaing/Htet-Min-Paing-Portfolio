import React from 'react'
import { useEffect } from 'react';

const useAnimation = (className,animation) => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(animation);
            } else {
              entry.target.classList.remove(animation);
            }
          });
        });
    
        const hiddenElements = document.querySelectorAll(className);
        hiddenElements.forEach((el) => observer.observe(el));
    
        // Clean up the observer when the component is unmounted
        return () => {
          hiddenElements.forEach((el) => observer.unobserve(el));
        };
      }, []);
}

export default useAnimation