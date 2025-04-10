import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    x: 20
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.1
    }
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: {
      duration: 0.15,
      ease: [0.33, 1, 0.68, 1]
    }
  }
};

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      style={{ 
        width: '100%', 
        position: 'relative',
        overflow: 'hidden',
        zIndex: 0 // Ensure content is below the header
      }}
    >
      {children}
    </motion.div>
  );
} 