import { motion } from "framer-motion";

const Box3 = () => {
  const boxVariant = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        type: "spring",
      },
    },
  };

  return (
    <div className="h-full p-8 w-full bg-gray-100">
      <motion.div
        className="w-16 h-16 m-1 text-white text-xs flex items-center justify-center bg-orange-800 rounded-md"
        variants={boxVariant}
        initial="hidden"
        animate="visible"
      >
        Hi 🖐
      </motion.div>
    </div>
  );
};

export default Box3;
