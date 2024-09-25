import { FaGithub } from "react-icons/fa";
import { CiLink } from "react-icons/ci";

interface CardProps {
  imageUrl: string;
  color: string;
  title: string;
  description: string;
  githubUrl: string;
  livePreviewUrl: string;
}

const Card = ({
  imageUrl,
  color,
  title,
  description,
  githubUrl,
  livePreviewUrl,
}: CardProps) => {
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
          src={imageUrl}
          alt=""
          className=" w-[950px] object-cover rounded-xl relative top-40 left-20 group-hover:translate-y-6  duration-700 ease-out"
        />
      </div>
      <div className="group-hover:-translate-y-4 absolute top-[450px] gap-x-12 flex justify-center w-full text-xl opacity-0 group-hover:opacity-100 duration-700 ease-out ">
        <button className="min-w-80 py-4 shadow-2xl bg-black/70   rounded-full border-2 border-primaryText text-primaryText flex justify-center items-center">
          <a
            href={livePreviewUrl}
            className="flex items-center"
            target="_blank"
            // rel="noopener noreferrer"
          >
            <span className="inline pr-3  font-extrabold">
              <CiLink className="text-4xl" />
            </span>
            Live Preview
          </a>
        </button>
        <button className="min-w-80 py-4 shadow-2xl bg-black/70  rounded-full border-2 border-primaryText text-primaryText flex justify-center items-center  ">
          <a
            href={githubUrl}
            className="flex items-center"
            target="_blank"
            // rel="noopener noreferrer"
          >
            <span className="inline pr-3 ">
              <FaGithub className="text-3xl" />
            </span>
            Github
          </a>
        </button>
      </div>
    </div>
  );
};
//card for cleanlinesss
export default function Projects() {
  const cardData: CardProps[] = [
    {
      imageUrl:
        "https://res.cloudinary.com/dv20rxoei/image/upload/v1727199849/Screenshot_16_ihiftc.png",
      color: "#9997ff",
      title: "ASTROSITY",
      description: "A blog website for space lovers",
      githubUrl: "https://github.com/Gaurav-Swami/astrosity",
      livePreviewUrl: "https://astrosity.vercel.app/",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dv20rxoei/image/upload/v1727200003/Screenshot_2024-09-24_231616_cgccku.png",
      color: "#7886a3",
      title: "NIKE WEBSITE",
      description: "A static clone of Nike website",
      githubUrl: "https://github.com/Gaurav-Swami/nike-landing-page",
      livePreviewUrl: "https://sparkling-treacle-6b4726.netlify.app//",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dv20rxoei/image/upload/v1727200287/Screenshot_19_wf4gpj.png",
      color: "#86efac",
      title: "NORDPASS",
      description: "A strong password generator",
      githubUrl: "https://github.com/Gaurav-Swami/pass-gen",
      livePreviewUrl: "https://passwordgeneratorbygorv.netlify.app/",
    },
  ];

  return (
    <div className="grid place-items-center  text-background py-[120px] px-16">
      <span className="font-bold text-[40px] tracking-widest">PROJECTS</span>
      <span className="rounded-full bg-accent w-8 mt-4  h-[5px]"></span>

      <div className="flex flex-col gap-y-16 pt-10">
        {cardData.map((data, index) => (
          <Card
            key={index}
            githubUrl={data.githubUrl}
            livePreviewUrl={data.livePreviewUrl}
            imageUrl={data.imageUrl}
            color={data.color}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
}
