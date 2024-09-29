// import { DiVim } from "react-icons/di";

const About = () => {
  const skills = [
    "CSS",
    "HTML",
    "JavaScript",
    "React",
    "MongoDB",
    "NodeJS",
    "ExpressJS",
    "SQL",
    "C/C++",
    "Java",
    "Python",
    "Github",
  ];
  return (
    <div className="grid place-items-center py-[120px] text-background bg-primaryText  px-16">
      <div className="grid place-items-center w-full   mt-2">
        <span className="font-bold text-[40px] tracking-widest">ABOUT ME</span>
        <span className="rounded-full bg-accent w-8 mt-4  h-[5px]"></span>
        <span className="text-xl text-center pt-6">
          Discover more about my background, what I specialize in, and the
          programming and tech skills <br /> I&apos;ve developed throughout my
          journey.
        </span>
      </div>
      <div className="flex mt-[90px] gap-x-16">
        <div className="w-[570px] text-lg">
          <h2 className="text-[26px] font-bold pb-[30px]">
            Know more about me!{" "}
          </h2>
          As a MERN stack developer, you excel at building dynamic, full-stack
          web applications using MongoDB, Express.js, React, and Node.js. Your
          proficiency in JavaScript enables you to create seamless user
          interfaces and robust back-end systems, ensuring a smooth user
          experience. <br />
          <br />
          You thrive on transforming ideas into functional applications,
          leveraging your skills in RESTful API design and database management.
          With a strong focus on responsive design and performance optimization,
          you are passionate about writing clean, maintainable code. You enjoy
          collaborating with cross-functional teams, embracing agile
          methodologies, and staying updated with the latest technologies to
          continuously enhance your projects and drive innovation.
        </div>
        <div>
          <h2 className="text-[26px] font-bold pb-[30px]">My Skills   </h2>

          <div className="flex w-[570px] gap-3 flex-wrap">
            {skills.map((skill, index) => (
              <button
                className=" py-[10px] rounded-lg px-5 bg-[#DCDCDC] font-semibold opacity-85"
                key={index}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
