import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { PiGreaterThanBold } from "react-icons/pi";

const Links = () => {
  return (
    <div className=" flex flex-col  bg-white absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl gap-y-7 gap-x-4 p-4 shadow-xl">
      <FaGithub className="" />
      <FaLinkedin />
      <FaTwitter className="" />
      <FaInstagram className="" />
      <FaYoutube className="" />
    </div>
  );
};

const Button = ({ text, link }: { text: string; link: string }) => {
  return (
    <button className=" text-2xl text-primaryText bg-accent py-4 px-16 rounded-full font-bold sticky hover:text-accent hover:bg-primaryText border-2 transition-all border-accent">
      <span>{text}</span>
      {/* <div className=" inline ">
        <PiGreaterThanBold className="inline  " />
      </div> */}
    </button>
  );
};

export default function Hero() {
  return (
    <div className=" flex flex-col p-2 items-center justify-center   h-screen bg-primaryText ">
      <div className="">
        <div className="text-6xl text-background text-center font-bold">
          HEY, I'M GAURAV SWAMI
        </div>
        <div className="text-center text-background text-[22px] mt-8">
          A Full Stack Web Developer whose aim is to create user friendly and
          convenient <br /> websites that also serves the purpose of the
          companies
        </div>
        {/* <Links /> */}
        <div className="flex justify-center gap-x-4 mt-12">
          <Button text={"HOME"} link={"xxx"} />
          <Button text={"ABOUT"} link={"xxx"} />
          <Button text={"PROJECTS"} link={"xxx"} />
          <Button text={"CONTACT"} link={"xxx"} />
        </div>
      </div>
    </div>
  );
}
