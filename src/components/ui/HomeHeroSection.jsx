import { Parallax } from "react-parallax";
import { useState, useEffect } from "react";

const HomeHeroSection = () => {
  const [bgImage, setBgImage] = useState("/sneakersHome.webp");

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth < 768) {
        setBgImage("/mobileHome.webp"); // Mobile image
      } else {
        setBgImage("/sneakersHome.webp"); // Desktop image
      }
    };

    updateImage(); // Set the initial image
    window.addEventListener("resize", updateImage);

    return () => window.removeEventListener("resize", updateImage);
  }, []);

  return (
    <div className="inset-0 z-0">
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={bgImage}
        bgImageAlt="Sneakers Background"
        strength={800}
        bgImageStyle={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      >
        <div className="h-screen" />
      </Parallax>
    </div>
  );
};

export default HomeHeroSection;
