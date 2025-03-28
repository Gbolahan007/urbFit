import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import HomeMenuDetails from "./HomeMenuDetails";
import HomeCursor from "./HomeCursor";
import DropdownMenu from "./DropDownMenu";

function PageNav() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const refs = useRef([]); // ✅ Array of refs for each menu item
  const navigate = useNavigate(); // ✅ Used to redirect "Collection" to /products

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container  mx-auto flex items-center justify-between px-4 py-4">
        <NavLink
          to="/"
          className={`text-2xl font-bold cursor-pointer ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          URBFIT
        </NavLink>
        <div className="hidden sm:block">
          <ul
            onMouseLeave={() => {
              setPosition((pv) => ({
                ...pv,
                opacity: 0,
              }));
              setHoveredItem(null);
            }}
            className={`flex space-x- relative mx-auto bg-transparent p-1 w-fit shadow-2xl rounded-full font-semibold border ${
              scrolled ? "border-black" : "border-white"
            }`}
          >
            {["Men", "Kids", "Women", "Collection"].map((item, index) => (
              <li
                key={item}
                ref={(el) => (refs.current[index] = el)} // ✅ Store ref for each item
                onMouseEnter={() => {
                  const element = refs.current[index];
                  if (!element) return;

                  const { width, left } = element.getBoundingClientRect();
                  setPosition({
                    width,
                    opacity: 1,
                    left:
                      left - element.parentElement.getBoundingClientRect().left, // ✅ Relative to parent
                  });

                  setHoveredItem(item);
                }}
              >
                <NavLink
                  to={
                    item === "Collection"
                      ? "/products"
                      : `/${item.toLowerCase()}`
                  }
                  onClick={(e) => {
                    if (item === "Collection") {
                      e.preventDefault(); // Prevent default navigation
                      navigate("/products"); // ✅ Redirects Collection to /products
                    }
                  }}
                  className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
                >
                  {item}
                </NavLink>
                {hoveredItem === item && item !== "Collection" && (
                  <DropdownMenu category={item} />
                )}
              </li>
            ))}

            <HomeCursor position={position} />
          </ul>
        </div>
        <div>
          <HomeMenuDetails scrolled={scrolled} />
        </div>
      </div>
    </nav>
  );
}

export default PageNav;
