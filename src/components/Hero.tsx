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

// import { PiGreaterThanBold } from "react-icons/pi";shadow-lg

const Links = () => {
  const links = {
    twitter: "https://x.com/itsgorv",
    github: "https://www.github.com/gaurav-swami",
    instagram: "https://www.instagram.com/gauravswaami/?hl=en",
    linkedIn: "https://www.linkedin.com/in/gaurav-swami-b2005627a/",
    youtube: "",
  };
  const [visibleIcons, setVisibleIcons] = useState(0);
  const icons = 5;
  useEffect(() => {
    const interval = setInterval(() => {
      if (visibleIcons < icons) {
        setVisibleIcons((prev) => prev + 1);
      }
    }, 250);

    return () => clearInterval(interval);
  }, [visibleIcons, icons]);

  return (
    <div className=" flex flex-col absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl gap-y-7 gap-x-4 p-4">
      <a href={links.github} target="_blank">
        <FaGithub
          className={`hover:scale-110  duration-200 ease-out cursor-pointer relative ${
            visibleIcons > 0 ? "left-0" : "-left-14"
          }  `}
        />
      </a>
      <a href={links.linkedIn} target="_blank">
        <FaLinkedin
          className={`hover:scale-110  duration-200 ease-out cursor-pointer relative ${
            visibleIcons > 1 ? "left-0" : "-left-14"
          }  `}
        />
      </a>
      <a href={links.twitter} target="_blank">
        <FaTwitter
          className={`hover:scale-110  duration-200 ease-out cursor-pointer relative ${
            visibleIcons > 2 ? "left-0" : "-left-14"
          } `}
        />
      </a>
      <a href={links.instagram} target="_blank">
        <FaInstagram
          className={`hover:scale-110  duration-200 ease-out cursor-pointer relative ${
            visibleIcons > 3 ? "left-0" : "-left-14"
          } `}
        />
      </a>
      <a href="">
        <FaYoutube
          className={`hover:scale-110  duration-200 ease-out cursor-pointer relative ${
            visibleIcons > 4 ? "left-0" : "-left-14"
          } `}
        />
      </a>
    </div>
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
      </div>
    </div>
  );
}
