import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, } from "react-icons/fa";

const Links = () => {
  return (
    <div className=" flex flex-col  bg-white absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl gap-y-7 gap-x-4 p-4 shadow-xl">
      <FaGithub className=""/>
      <FaLinkedin />
      <FaTwitter className=""/>
      <FaInstagram className=""/>
      <FaYoutube className=""/>
    </div>
  );
};

export default function Hero() {
  return (
    <div className=" flex flex-col p-2 items-center justify-center   h-screen bg-background ">
      <div className="">
        <div className="text-8xl text-primaryText">Hi, I'm Gaurav</div>
        <div className="text-center text-primaryText text-3xl mt-4">
          A Full Stack Web Developer
        </div>
        <Links />
      </div>
    </div>
  );
}
