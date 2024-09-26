// import Link from "next/link";
"use client";
import { useEffect, useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

// import { PiGreaterThanBold } from "react-icons/pi";

const Links = () => {
  const [visibleIcons, setVisibleIcons] = useState(0);
  const icons = 5;
  useEffect(() => {
    const interval = setInterval(() => {
      if (visibleIcons < icons) {
        setVisibleIcons((prev) => prev + 1);
      }
    },250);

    return () => clearInterval(interval);
  }, [visibleIcons,icons]);

  return (
    <div className=" flex flex-col absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl gap-y-7 gap-x-4 p-4">
      <FaGithub
        className={`hover:scale-110  duration-200 ease-out cursor-pointer relative ${
          visibleIcons > 0 ? "left-0" : "-left-14"
        }  `}
      />
      <FaLinkedin
        className={`hover:scale-110  duration-200 ease-out cursor-pointer relative ${
          visibleIcons > 1 ? "left-0" : "-left-14"
        }  `}
      />
      <FaTwitter
        className={`hover:scale-110  duration-200 ease-out cursor-pointer relative ${
          visibleIcons > 2 ? "left-0" : "-left-14"
        } `}
      />
      <FaInstagram
        className={`hover:scale-110  duration-200 ease-out cursor-pointer relative ${
          visibleIcons > 3 ? "left-0" : "-left-14"
        } `}
      />
      <FaYoutube
        className={`hover:scale-110  duration-200 ease-out cursor-pointer relative ${
          visibleIcons > 4 ? "left-0" : "-left-14"
        } `}
      />
    </div>
  );
};

const Button = ({ text, link }: { text: string; link: string }) => {
  return (
    <button className=" text-2xl text-primaryText bg-accent py-4 w-56 rounded-full font-bold sticky hover:text-accent hover:bg-primaryText border-2 transition-all border-accent">
      <span className="text-center  ">{text}</span>
      <span className="invisible absolute">{link}</span>
      {/* <div className=" inline ">
        <PiGreaterThanBold className="inline  " />
      </div> */}
    </button>
  );
};

export default function Hero() {
  return (
    <div className=" flex flex-col p-2 items-center justify-center   h-screen  ">
      <div className="">
        <div className="text-6xl text-background text-center font-bold">
          HEY, I&apos;M GAURAV SWAMI
        </div>
        <div className="text-center text-background text-[22px] mt-8">
          A Full Stack Web Developer dedicated to crafting user-friendly and
          efficient <br />
          websites that effectively meet the needs of businesses.
        </div>
        <Links />
        {/* <div className="flex justify-center gap-x-4 mt-12">
          <Button text={"HOME"} link={"xxx"} />
          <Button text={"ABOUT"} link={"xxx"} />
          <Button text={"PROJECTS"} link={"xxx"} />
          <Button text={"CONTACT"} link={"xxx"} />
        </div> */}
      </div>
    </div>
  );
}
