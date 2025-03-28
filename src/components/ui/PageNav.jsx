import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import HomeMenuDetails from "./HomeMenuDetails";
import HomeCursor from "./HomeCursor";

function PageNav() {
  const [scrolled, setScrolled] = useState(false);
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const refs = useRef([]); // ✅ Array of refs for each menu item

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
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
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
            onMouseLeave={() =>
              setPosition((pv) => ({
                ...pv,
                opacity: 0,
              }))
            }
            className="flex space-x- relative mx-auto border-2 border-black bg-white p-1 w-fit rounded-full font-semibold"
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
                }}
              >
                <NavLink
                  to={`/${item.toLowerCase()}`}
                  className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
                >
                  {item}
                </NavLink>
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
