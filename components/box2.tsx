import { motion } from "framer-motion";
import React, { useState } from "react";

const Box2 = () => {
  const [animate, setAnimate] = useState(false);

  return (
    <div className="h-full p-8 w-full bg-gray-200">
      <motion.div
        onClick={() => setAnimate(!animate)}
        className="w-16 h-16 bg-orange-800 rounded-md"
        animate={{
          x: animate ? 1460 : 0,
          rotate: animate ? 360 : 0,
          opacity: animate ? 1 : 0.5,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
        }}
      ></motion.div>
    </div>
  );
};

export default Box2;
