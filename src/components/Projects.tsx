import { FaGithub } from "react-icons/fa";
import { CiLink } from "react-icons/ci";


const Card = ({
  url,
  color,
  title,
  description,
}: {
  url: string;
  color: string;
  title: string;
  description: string;
}) => {
  return (
    <div
      className={`box-border flex gap-x-8  h-[550px] overflow-clip rounded-[64px] relative group hover:-translate-y-1 duration-500 ease-out hover:shadow-2xl border-b border-r`}
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-col text-background">
        <span className="absolute top-10 right-1 opacity-90   px-16 text-4xl font-bold  ">
          {title}
        </span>
        <span className="absolute top-20 right-1 opacity-90  px-16 ">
          {description}
        </span>
        <img
          src={url}
          alt=""
          className=" w-[875px] object-cover rounded-xl relative top-40 left-16 group-hover:translate-y-6  duration-700 ease-out"
        />
      </div>
      <div className="group-hover:-translate-y-4 absolute top-[450px] gap-x-10 flex justify-center w-full text-xl opacity-0 group-hover:opacity-100 duration-700 ease-out ">
        <button className="min-w-72 py-4 shadow-2xl bg-black/70   rounded-full border-2 border-primaryText text-primaryText flex justify-center items-center">
          <span className="inline pr-3  font-extrabold">
            <CiLink className="text-4xl" />
          </span>
          Live Preview
        </button>
        <button className="min-w-72 py-4 shadow-2xl bg-black/70  rounded-full border-2 border-primaryText text-primaryText flex justify-center items-center  ">
          <span className="inline pr-3 ">
            <FaGithub className="text-3xl" />
          </span>
          Github
        </button>
      </div>
    </div>
  );
};
//card for cleanlinesss
export default function Projects() {
  const cardData = [
    {
      image:
        "https://res.cloudinary.com/dv20rxoei/image/upload/v1727199849/Screenshot_16_ihiftc.png",
      color: "#c39cd5",
      title: "ASTROSITY",
      descrition: "A blog website for space lovers",
    },
    {
      image:
        "https://res.cloudinary.com/dv20rxoei/image/upload/v1727200003/Screenshot_2024-09-24_231616_cgccku.png",
      color: "#38445a",
      title: "NIKE WEBSITE",
      descrition: "A static clone of Nike website",
    },
    {
      image:
        "https://res.cloudinary.com/dv20rxoei/image/upload/v1727200287/Screenshot_19_wf4gpj.png",
      color: "#86efac",
      title: "NORDPASS",
      descrition: "A strong password generator",
    },
  ];

  return (
    <div className="grid place-items-center  text-background py-[120px] px-16">
      <span className="font-bold text-[40px] tracking-widest">PROJECTS</span>
      <span className="rounded-full bg-accent w-8 mt-4  h-[5px]"></span>

      <div className="flex flex-col gap-y-10 pt-10">
       {
        cardData.map((data,index)=>(
          <Card key={index} url={data.image} color={data.color} title={data.title} description={data.descrition} />
        ))
       }
       
        {/* <Card
          url={
            "https://res.cloudinary.com/dv20rxoei/image/upload/v1727199849/Screenshot_16_ihiftc.png"
          }
          color={"#c39cd5"}
          title={"ASTROSITY"}
          description="A blog website for space lovers"
        />
        <Card
          url={
            "https://res.cloudinary.com/dv20rxoei/image/upload/v1727200003/Screenshot_2024-09-24_231616_cgccku.png"
          }
          color={"#38445a"}
          title={"NIKE WEBSITE"}
          description="A static clone of Nike website"
        />
        <Card
          url={
            "https://res.cloudinary.com/dv20rxoei/image/upload/v1727200287/Screenshot_19_wf4gpj.png"
          }
          color={"#86efac"}
          title={"NORDPASS"}
          description="A strong password generator"
        /> */}
      </div>
    </div>
  );
}

import React from "react";
