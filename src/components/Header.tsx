"use client";

import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed left-0 right-0 bg-white py-6 flex justify-center w-full text-xl transition-opacity duration-300 ${
        showNavbar ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <ul className="flex gap-x-8 text-black">
        <li className="hover:opacity-65 cursor-pointer">Home</li>
        <li className="hover:opacity-65 cursor-pointer">Projects</li>
        <li className="hover:opacity-65 cursor-pointer">About</li>
      </ul>
    </div>
  );
};

export default Header;
