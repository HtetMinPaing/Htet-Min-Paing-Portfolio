import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react' 
import { useFontContext } from '../context/fontContext';

const directions = {
    top: {
        hidden: { opacity: 0, y: 75},
        visible: { opacity: 1, y: 0 }
    },
    bottom: {
        hidden: { opacity: 0, y: -75},
        visible: { opacity: 1, y: 0 }
    },
    left: {
        hidden: { opacity: 0, x: 75},
        visible: { opacity: 1, x: 0 }
    },
    right: {
        hidden: { opacity: 0, x: -75},
        visible: { opacity: 1, x: 0 }
    }
}

const coverDirection = {
  original: {
    hidden: { left: 0 },
    visible: { left: "100%" },
  },
  reverse: {
    hidden: { right: 0 },
    visible: { right: "100%" },
  }
}

const getDirection = (direction) => {
    let direct;
    switch(direction) {
        case "top":
            direct = directions.top;
            break;
        case "bottom":
            direct = directions.bottom;
            break;
        case "right":
            direct = directions.right;
            break;
        case "left":
            direct = directions.left;
            break;
        default:
            break;
    }
    return direct;
}

const Reveal = ({ children, direction = "top", cover = true, reverseCover = false }) => {

  const ref = useRef(null);
  const isInView = useInView(ref);

  const revealControl = useAnimation();
  const slideControl = useAnimation();

  useEffect(() => {
    if(isInView) {
      revealControl.start("visible");
      slideControl.start("visible");
    } else {
      revealControl.start("hidden");
      slideControl.start("hidden");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden"}}>
      <motion.div
        variants={getDirection(direction)}
        initial="hidden"
        animate={revealControl}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      { cover && 
      <motion.div 
        variants={reverseCover ? coverDirection.reverse : coverDirection.original}
        initial="hidden"
        animate={slideControl}
        transition={{ duration: 0.5, ease: "easeIn"}}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          background: "highlight.300",
          zIndex: 20,
        }} 
      />}
    </div>
  )
}

export default Reveal