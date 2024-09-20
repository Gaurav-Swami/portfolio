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
    <div className="grid place-items-center text-7xl text-background">
      <span className="">Projects</span>

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
