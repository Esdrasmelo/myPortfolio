import { motion, Variants } from "framer-motion";
import React, { ReactNode } from "react";

interface AnimatedParagraphProps {
  children: ReactNode;
  id?: string;
}

const paragraphVariants: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const SlideInParagraph: React.FC<AnimatedParagraphProps> = ({
  children,
  id,
}) => {
  return (
    <motion.p
      id={id}
      initial="hidden"
      animate="visible"
      variants={paragraphVariants}
    >
      {children}
    </motion.p>
  );
};

export default SlideInParagraph;
