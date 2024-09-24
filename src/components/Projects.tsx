const Card = ({ url, color }: { url: string; color: string }) => {
  return (
    <div
      className={`flex gap-x-8  h-[550px] overflow-clip rounded-[64px] relative group hover:-translate-y-1 duration-500 ease-out hover:shadow-2xl`}
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-col ">
        <span className="absolute top-10 right-1 text-black  px-16 text-4xl font-bold  ">
          ASTROSITY
        </span>
        <span className="absolute top-20 right-1 text-black  px-16 ">
          A blogging website
        </span>
        <img
          src={url}
          alt=""
          className=" w-[875px] object-cover rounded-xl relative top-32 left-16 group-hover:translate-y-6  duration-700 ease-out"
        />
      </div>
      <div className="absolute top-[450px] gap-x-4 flex justify-center w-full text-xl opacity-0 group-hover:opacity-100 duration-700 ease-out ">
        <button className="w-60 py-4 shadow-2xl  rounded-full border-2 border-primaryText text-primaryText">Live Preview</button>
        <button className="w-60 py-4 shadow-2xl  rounded-full border-2 border-primaryText text-primaryText">Github</button>
      </div>
    </div>
  );
};
//card for cleanlinesss
export default function Projects() {
  return (
    <div className="grid place-items-center  text-background py-[120px] px-16">
      <span className="font-bold text-[40px] tracking-widest">PROJECTS</span>
      <span className="rounded-full bg-accent w-8 mt-4  h-[5px]"></span>

      <div className="flex flex-col gap-y-10 pt-10">
        <Card
          url={
            "https://webneel.com/daily/sites/default/files/images/daily/02-2014/10-beautiful-websites.jpg"
          }
          color={"#00ADB5"}
        />
        <Card
          url={
            "https://webneel.com/daily/sites/default/files/images/daily/02-2014/10-beautiful-websites.jpg"
          }
          color={"#00ADB5"}
        />
        <Card
          url={
            "https://webneel.com/daily/sites/default/files/images/daily/02-2014/10-beautiful-websites.jpg"
          }
          color={"#00ADB5"}
        />
      </div>
    </div>
  );
}

import React from "react";
