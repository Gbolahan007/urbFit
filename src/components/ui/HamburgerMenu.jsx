import { HiOutlineXMark } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function HamburgerMenu({ setHamburgerMenuModal }) {
  const navigate = useNavigate();

  return (
    <div>
      {/* Sidebar */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="fixed right-0 top-0 z-[1000] h-screen w-full max-w-lg bg-white p-4 font-oswald text-black shadow-lg"
      >
        {/* Close Button */}
        <button
          className="absolute right-3 top-3 flex items-center justify-center rounded-full bg-gray-200 p-2 transition-all hover:bg-gray-200 active:scale-90"
          onClick={() => setHamburgerMenuModal(false)}
        >
          <HiOutlineXMark size={24} className="text-black" />
        </button>

        {/* Menu Items */}
        <motion.ul
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
          className="flex flex-col mt-16 gap-4 "
        >
          <li>
            <button
              onClick={() => navigate("/collection/men")}
              className="w-full text-left pb-2 uppercase hover:underline"
            >
              Men
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/collection/kids")}
              className="w-full text-left pb-2 uppercase hover:underline"
            >
              Kids
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/collection/women")}
              className="w-full text-left pb-2 uppercase hover:underline"
            >
              Women
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/collection")}
              className="w-full text-left pb-2 uppercase hover:underline"
            >
              Collection
            </button>
          </li>
        </motion.ul>

        {/* Login & Sign Up Buttons */}
        <div className="absolute bottom-6 left-0 w-full px-4">
          <button
            onClick={() => navigate("/login")}
            className="w-full py-2 mb-3 text-center uppercase border border-black transition-all hover:bg-black hover:text-white"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="w-full py-2 text-center uppercase bg-black text-white transition-all hover:opacity-90"
          >
            Sign Up
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default HamburgerMenu;
