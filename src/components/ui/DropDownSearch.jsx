import { HiMiniXMark } from "react-icons/hi2";
import { motion } from "framer-motion";

function DropDownSearch({ setDropSearch }) {
  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={() => setDropSearch(false)}
      ></div>

      {/* DropDown Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute left-[-180%] top-10 w-[280%] h-[550px] bg-white shadow-lg p-6 max-h-screen overflow-auto z-50"
      >
        {/* Close Button */}
        <button
          onClick={() => setDropSearch(false)}
          className="absolute right-4 top-4 flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-200"
        >
          <HiMiniXMark className="text-gray-700 w-6 h-6" />
        </button>

        {/* Your modal content */}

        <h1>What are you buying</h1>
      </motion.div>
    </>
  );
}

export default DropDownSearch;
