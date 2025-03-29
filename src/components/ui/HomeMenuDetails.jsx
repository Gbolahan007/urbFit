import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineBars4 } from "react-icons/hi2";
import { TfiBag } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import Input from "./Input";

function HomeMenuDetails({ scrolled }) {
  const navigate = useNavigate();
  const iconColor = scrolled ? "text-black" : "text-white";

  return (
    <div className="flex items-center p-1 justify-center  ">
      <ul className="flex items-center justify-center gap-3">
        <li className="hidden sm:block ">
          <Input />
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
            <div className="absolute -right-1.5 -top-2 flex h-5 w-5 items-center justify-center rounded-full border bg-black text-xs font-bold text-white shadow-md">
              0
            </div>
          </button>
        </li>

        <li className="sm:hidden">
          <button
            className={`rounded-full p-2 transition-all duration-200 hover:bg-gray-100 ${iconColor}`}
          >
            <HiOutlineBars4 size={24} />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default HomeMenuDetails;
