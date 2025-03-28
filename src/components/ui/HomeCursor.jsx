import { motion } from "framer-motion";

function HomeCursor({ position }) {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7  rounded-full bg-black md:h-12 "
    />
  );
}

export default HomeCursor;
