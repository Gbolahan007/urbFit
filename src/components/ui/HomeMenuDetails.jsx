import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineBars4 } from "react-icons/hi2";
import { TfiBag } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import DropDownSearch from "./DropDownSearch";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import SideSearch from "./SideSearch";
import { motion } from "framer-motion";
import HamburgerMenu from "./HamburgerMenu";

function HomeMenuDetails({ scrolled }) {
  const navigate = useNavigate();
  const [dropSearch, setDropSearch] = useState(false);
  const [onClickSearch, setonClickSearch] = useState(false);
  const [hamburgerMenuModal, setHamburgerMenuModal] = useState(false);

  function handleDropDownSearch() {
    setDropSearch(true);
  }
  function handleSideSearch() {
    setonClickSearch(true);
  }
  function handleHambugerMenu() {
    setHamburgerMenuModal(true);
  }

  const iconColor = scrolled ? "text-black" : "text-white";

  return (
    <div className="flex items-center p-1 justify-center  ">
      <ul className="flex items-center justify-center gap-3">
        <li className=" relative">
          <motion.div className="hidden sm:block">
            <div onClick={handleDropDownSearch}>
              <Input />
            </div>

            <AnimatePresence>
              {dropSearch && <DropDownSearch setDropSearch={setDropSearch} />}
            </AnimatePresence>
          </motion.div>

          <motion.div
            className={`sm:hidden cursor-pointer ${scrolled ? "text-black" : "text-white"}`}
          >
            <div onClick={handleSideSearch}>
              <FiSearch size={28} />
            </div>

            <AnimatePresence>
              {onClickSearch && (
                <SideSearch setOnClickSearch={setonClickSearch} />
              )}
            </AnimatePresence>
          </motion.div>
        </li>

        <li>
          <button onClick={() => navigate("/login")} className={iconColor}>
            <HiOutlineUser size={30} />
          </button>
        </li>

        <li>
          <button
            onClick={() => navigate("/cart")}
            className="relative cursor-pointer"
          >
            {/* Cart Icon */}
            <TfiBag
              size={28}
              className={scrolled ? "text-black" : "text-white"}
            />

            {/* Cart Count Badge at the Tip */}
            <div className="absolute -right-1.5 -top-2 flex h-6 w-6 items-center justify-center rounded-full border bg-black text-xs font-bold text-white shadow-md">
              20
            </div>
          </button>
        </li>

        <li className="sm:hidden">
          <button
            className={`rounded-full p-2 transition-all duration-200  ${iconColor}`}
          >
            <div onClick={handleHambugerMenu}>
              <HiOutlineBars4 size={30} />
            </div>

            <AnimatePresence>
              {hamburgerMenuModal && (
                <HamburgerMenu setHamburgerMenuModal={setHamburgerMenuModal} />
              )}
            </AnimatePresence>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default HomeMenuDetails;
