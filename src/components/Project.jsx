import lakshya from "../assest/lakshya.png";
import vrukshavalli from "../assest/vrukshavalli.png";
import external from "../assest/external.svg";
import hackerank from "../assest/hackerank.svg";
import leetcode from "../assest/leetcode.svg";
import internet from "../assest/logo.jpg";
import event from "../assest/event.jpg";

const Project = () => {
  return (
    <section className="mr-5 ml-5 mt-16">
      <div className="flex flex-wrap justify-around">
        <div className="text-left">
          <div className="title text-left">
            <h3 className="text-5xl flex">Work <img src="/images/arrow.svg" alt="" srcset="" /></h3>
          </div>
          <div className="mt-3">
          <p className="whitespace-normal">As a web developer, I specialize in building web applications <br /> using React, NodeJS, and ExpressJS. <br /> I have experience with databases such as MongoDB and MySQL, <br /> and I place a strong emphasis on <br /> creating user-friendly and visually appealing UI/UX designs for <br /> websites.</p> 
          <button className="inline-flex items-center space-x-1 pr-3 pl-3 px-1 py-1 rounded cursor-pointer bg-violet-700 text-white mt-2">
    <span className="text-sm text-center ">Projects</span>
        </button>
          </div>
          
        </div>
        <div className="flex flex-row space-x-3 mt-5">
          <div className="1">
            <img src="/images/eventtick.png" className="max-h-72 max-w-[12.75rem]" alt="" />
          </div>
          <div className="flex flex-col space-y-4">
          <img src="/images/lakshya.png" className="max-h-36 w-60" alt="" />
          <img src="/images/agrotech.png" className="max-h-36 w-60" alt="" />
          <img src="/images/vrukshavalli.png" className="block md:hidden max-h-36 w-60" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
