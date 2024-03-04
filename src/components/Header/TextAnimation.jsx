import { motion, useAnimation } from "framer-motion";

const TextAnimation = ({ children }) => {
  const controls = useAnimation();

  const rubberBand = () => {
    controls.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, 0.8, 1)",
        "scale3d(0.5, 1.3, 1)",
        "scale3d(0.9, 1.1, 1)",
        "scale3d(1, 1, 1)",
      ],
      transition: {
        duration:1 
      }
    });
  };

  return (
    <motion.h2 
      animate={controls}
      onMouseOver={rubberBand} 
    >
      {children}
    </motion.h2>
  );
};

export default TextAnimation;
