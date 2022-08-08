import { motion } from "framer-motion";
import React from "react";

interface Props {
  children: React.ReactNode;
}
const MotionContainer = (props: Props) => {
  return (
    <>
      <motion.div
        key={"page"}
        style={{}}
        initial={{
          opacity: 0,
          filter: "blur(3px)",
          transform: "translateX(-100vw)",
        }}
        animate={{
          opacity: 1,
          filter: "blur(0px)",
          transform: "translateX(0vw)",
        }}
        transition={{ duration: 0.5 }}
      >
        {props.children}
      </motion.div>
    </>
  );
};

export default MotionContainer;
