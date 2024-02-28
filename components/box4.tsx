import { motion } from "framer-motion";

const Box4 = () => {
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
    <div className="h-full p-8 w-full bg-gray-200">
      <div className="flex justify-center gap-2 items-center">
        {[1, 2, 3, 4].map((data) => (
          <motion.div
            key={data}
            className="w-16 h-16 text-white text-xs flex items-center justify-center bg-orange-800 rounded-md"
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: data * 0.3,
              },
            }}
          >
            {data} 🖐
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Box4;
