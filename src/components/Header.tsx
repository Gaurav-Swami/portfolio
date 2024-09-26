"use client";

const Header: React.FC = () => {
  //$0.getBoundingClientRect().top + window.scrollY

  const Button = ({ text, goToY }: { text: string; goToY: number }) => {
    return (
      <button
        onClick={() => window.scrollTo({ top: goToY })}
        className=" text-2xl text-primaryText bg-accent py-4 w-56 rounded-full font-bold sticky hover:text-accent hover:bg-primaryText border-2 transition-all border-accent"
      >
        <span className="text-center  ">{text}</span>

        {/* <div className=" inline ">
          <PiGreaterThanBold className="inline  " />
        </div> */}
      </button>
    );
  };
  return (
    <div className="flex  items-center justify-center w-full gap-x-4 mt-12 absolute top-[450px]">
      {/* <div className=""> */}
      <Button text={"HOME"} goToY={0} />
      <Button text={"ABOUT"} goToY={740} />
      <Button text={"PROJECTS"} goToY={1150} />
      <Button text={"CONTACT"} goToY={3415} />
      {/* </div> */}
    </div>
  );
};

export default Header;
