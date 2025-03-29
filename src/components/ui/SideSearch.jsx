import { motion } from "framer-motion";
import Input from "./Input";
import { HiArrowLongLeft } from "react-icons/hi2";

function SideSearch({ setOnClickSearch }) {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className="fixed top-0 left-0 z-[1000] h-screen w-full max-w-lg bg-white p-2 px-3 font-oswald text-custom-black"
    >
      <Input
        onClick={() => setOnClickSearch(false)}
        type="box"
        icon={HiArrowLongLeft}
        width="72"
      />
    </motion.div>
  );
}

export default SideSearch;
