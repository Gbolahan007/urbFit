import { HiOutlineSearch } from "react-icons/hi";

function Input({
  type = "primary", // Default style
  icon: Icon = HiOutlineSearch, // Default icon
  className = "",
  width = "w-48",
  onClick,
}) {
  const base =
    "w-full bg-slate-100 font-oswald text-black transition-all duration-300 placeholder:text-custom-black focus:outline-none focus:ring-2 focus:ring-black";

  const style = {
    primary: `rounded-full py-2 pl-10 sm:w-44 sm:focus:w-48 text-sm ${base}`,
    box: `py-3 px-20  text-xl pl-14 ${base}`,
  };

  return (
    <form className={`relative ${width}  ${className}`}>
      {Icon && (
        <Icon
          onClick={onClick}
          size={24}
          className="absolute left-3 top-1/2  -translate-y-1/2 text-gray-500"
        />
      )}
      <input placeholder="Search..." className={`${style[type]} w-full`} />
    </form>
  );
}

export default Input;
