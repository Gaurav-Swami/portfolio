const Card = ({ url }: { url: string }) => {
  return (
    <div className="flex gap-x-8">
      <img src={url} alt="" className=" w-[800px] object-cover rounded-2xl" />
      <div className="py-4 text-3xl text-center">Astrosity - A Blog website</div>
    </div>
  );
};

export default function Projects() {
  return (
    <div className="grid place-items-center  text-background py-[120px] ">
      <span className="font-bold text-[40px] tracking-widest">PROJECTS</span>
      <span className="rounded-full bg-accent w-8 mt-4  h-[5px]"></span>
      

      <div className="flex flex-col gap-y-10 pt-10">
        <Card
          url={
            "https://webneel.com/daily/sites/default/files/images/daily/02-2014/10-beautiful-websites.jpg"
          }
        />
        <Card
          url={
            "https://webneel.com/daily/sites/default/files/images/daily/02-2014/10-beautiful-websites.jpg"
          }
        />
        <Card
          url={
            "https://webneel.com/daily/sites/default/files/images/daily/02-2014/10-beautiful-websites.jpg"
          }
        />
      </div>
    </div>
  );
}

import React from "react";
