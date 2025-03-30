import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Lazy load components
const HomeMenuDetails = lazy(() => import("./HomeMenuDetails"));
const HomeCursor = lazy(() => import("./HomeCursor"));
const DropdownMenu = lazy(() => import("./DropDownMenu"));

function PageNav() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });

  const refs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full font-tektur transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <NavLink
          to="/"
          className={`text-2xl font-bold font-kaushaun cursor-pointer ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          URBFIT
        </NavLink>

        {/* Navigation Menu */}
        <div className="hidden sm:block">
          <ul
            onMouseLeave={() => {
              setPosition((prev) => ({ ...prev, opacity: 0 }));
              setHoveredItem(null);
            }}
            className={`flex space-x- relative mx-auto bg-transparent p-1 w-fit shadow-2xl rounded-full font-semibold border ${
              scrolled ? "border-black" : "border-white"
            }`}
          >
            {["Men", "Kids", "Women", "Collection"].map((item, index) => (
              <li
                key={item}
                ref={(el) => (refs.current[index] = el)}
                onMouseEnter={() => {
                  const element = refs.current[index];
                  if (!element) return;
                  const { width, left } = element.getBoundingClientRect();
                  setPosition({
                    width,
                    opacity: 1,
                    left:
                      left - element.parentElement.getBoundingClientRect().left,
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
                      e.preventDefault();
                      navigate("/collection");
                    }
                  }}
                  className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
                >
                  {item}
                </NavLink>
                <AnimatePresence>
                  {hoveredItem === item && item !== "Collection" && (
                    <Suspense fallback={null}>
                      <DropdownMenu category={item} />
                    </Suspense>
                  )}
                </AnimatePresence>
              </li>
            ))}

            {/* Lazy-loaded HomeCursor */}
            <Suspense fallback={null}>
              <HomeCursor position={position} />
            </Suspense>
          </ul>
        </div>

        {/* Lazy-loaded HomeMenuDetails */}
        <motion.div>
          <AnimatePresence>
            <Suspense fallback={null}>
              <HomeMenuDetails scrolled={scrolled} />
            </Suspense>
          </AnimatePresence>
        </motion.div>
      </div>
    </nav>
  );
}

export default PageNav;
