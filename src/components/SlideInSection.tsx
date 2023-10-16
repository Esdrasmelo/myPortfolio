import { Variants, motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  id: string;
}

const slideInVariants: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const SlideInSection: React.FC<AnimatedSectionProps> = ({ children, id }) => {
  return (
    <motion.section
      id={id}
      initial="hidden"
      animate="visible"
      variants={slideInVariants}
    >
      {children}
    </motion.section>
  );
};

export default SlideInSection;
