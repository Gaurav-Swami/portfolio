"use client";

import { useEffect, useState } from "react";

interface buttonInterface {
  text: string;
  goToY: number;
  navbarPos: string;
}

const Button = ({ text, goToY, navbarPos }: buttonInterface) => {
  return (
    <button
      onClick={() => window.scrollTo({ top: goToY })}
      className={` text-lg  py-[6px] font-semibold text-background    rounded-full  sticky hover:text-black hover:bg-accent duration-300 border-accent px-6 ${
        navbarPos == "fixed" ? " " : " "
      } `}
    >
      <span className="text-center  ">{text}</span>

      {/* <div className=" inline ">
        <PiGreaterThanBold className="inline  " />
      </div> */}
    </button>
  );
};

const Header: React.FC = () => {
  //$0.getBoundingClientRect().top + window.scrollY
  const [navbarPos, setNavbarPos] = useState("absolute");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 482) {
        setNavbarPos("fixed");
      } else {
        setNavbarPos("absolute");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // thanks @j_dexx on reddit for helping me to fix the problem of overlapping header
    <div
      className={`flex  items-center justify-center w-full gap-x-4 z-50 transition ${
        navbarPos == "fixed" ? "fixed" : "absolute top-[450px]  mt-12 "
      }`}
    >
      <div
        className={`flex  rounded-full bg-accent/95 p-[10px] shadow-lg   ${
          navbarPos == "fixed" ? "   mt-4" : ""
        }`}
      >
        <Button text={"Home"} goToY={0} navbarPos={navbarPos} />
        <Button text={"About"} goToY={740} navbarPos={navbarPos} />
        <Button text={"Projects"} goToY={1710} navbarPos={navbarPos} />
        <Button text={"Contact"} goToY={3990} navbarPos={navbarPos} />
      </div>
    </div>
  );
};

export default Header;
