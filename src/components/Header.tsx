const Header: React.FC = () => {
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
  return (
    <div className="flex  items-center justify-center w-full gap-x-4 mt-12 absolute top-[450px]">
      {/* <div className=""> */}
        <Button text={"HOME"} link={"xxx"} />
        <Button text={"ABOUT"} link={"xxx"} />
        <Button text={"PROJECTS"} link={"xxx"} />
        <Button text={"CONTACT"} link={"xxx"} />
      {/* </div> */}
    </div>
  );
};

export default Header;
