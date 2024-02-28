import { motion } from "framer-motion";

const Box2 = () => {
  return (
    <div className="h-full p-8 w-full bg-gray-200">
      <motion.div
        className="w-16 h-16 m-1 text-white text-xs flex items-center justify-center bg-orange-800 rounded-md"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        whileDrag={{ scale: 1.2 }}
        drag
        dragConstraints={{ left: 0, right: 1460, top: 6, bottom: 0 }}
      >
        Drag
      </motion.div>
    </div>
  );
};

export default Box2;
