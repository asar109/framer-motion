import { motion } from "framer-motion";
import React, { useState } from "react";

const Box1 = () => {
  const [animate, setAnimate] = useState(false);

  return (
    <div className="h-full p-8 w-full bg-gray-100">
      <motion.div
        onClick={() => setAnimate(!animate)}
        className="w-16 h-16 m-1 text-white text-xs flex items-center justify-center bg-orange-800 rounded-md"
        animate={{
          x: animate ? 1460 : 0,
          rotate: animate ? 360 : 0,
          opacity: animate ? 1 : 0.6,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
        }}
      >
        Click
      </motion.div>
    </div>
  );
};

export default Box1;
