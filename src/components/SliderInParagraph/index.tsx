import "./styles.css";
import { motion, Variants } from "framer-motion";
import React, { ReactNode } from "react";

interface AnimatedParagraphProps {
  children: ReactNode;
}

const paragraphVariants: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const SlideInParagraph: React.FC<AnimatedParagraphProps> = ({ children }) => {
  return (
    <motion.p
      initial="hidden"
      animate="visible"
      variants={paragraphVariants}
      className="paragraph"
    >
      {children}
    </motion.p>
  );
};

export default SlideInParagraph;
