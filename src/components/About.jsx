import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section class="mr-5 ml-5 ">
        <div className="flex justify-evenly flex-wrap mt-7 space-y-2">
          <span class="inline-flex items-center space-x-2 pr-3 pl-3 px-2 py-2 rounded-full bg-white border cursor-pointer mt-2">
            <img alt="sorry" src="/images/fullstack.svg" className="w-4" />
            <span className="text-xs font-medium">Full Stack Developer</span>
          </span>

          <span
            target="blank"
            href="#"
            class="inline-flex items-center space-x-2 pr-3 pl-3 px-2 py-2 rounded-full bg-white border cursor-pointer"
          >
            <img alt="sorry" src="/images/designer.svg" className="w-4" />
            <span className="text-xs font-medium">Designer</span>
          </span>

          <span
            target="blank"
            href="#"
            class="inline-flex items-center space-x-2 pr-3 pl-3 px-2 py-2 rounded-full bg-white border cursor-pointer"
          >
            <img alt="sorry" src="/images/productdesign.svg" className="w-4" />
            <span className="text-xs font-medium">Product design</span>
          </span>

          <span
            target="blank"
            href="#"
            class="inline-flex items-center space-x-2 pr-3 pl-3 px-2 py-2 rounded-full bg-white border cursor-pointer"
          >
            <img alt="sorry" src="/images/productmanager.svg" className="w-4" />
            <span className="text-xs font-medium">Product Manager</span>
          </span>

          <span
            target="blank"
            href="#"
            class="inline-flex items-center space-x-2 pr-3 pl-3 px-2 py-2 rounded-full bg-white border cursor-pointer"
          >
            <img alt="sorry" src="/images/opensource.svg" className="w-4" />
            <span className="text-xs font-medium">Open Source</span>
          </span>
        </div>
        <div className="text-center mt-7">
          <span className="text-center font-medium text-base">Hello ! </span>
          <br />
          <p className="text-normal text-sm pl-5 pr-5 leading-6 ">
            I am Tech enthusiast Building tech From users perspective 👦 I'm a
            junior pursuing my bachelor's degree in computer engineering from
            Mumbai university. 💻 I'm a Full-Stack JavaScript Developer with 1
            year of project building experience.👩‍💻 Currently, I'm trying to
            learn Machine learning.✍ In my free time, I do sketching and write
            blogs. you can check out my blogs at Hashnode 📝{" "}
          </p>
          <Link to='/about'>
          <button className="inline-flex items-center space-x-1 pr-3 pl-3 px-1 py-1 rounded cursor-pointer bg-violet-700 text-white mt-2">
            <span className="text-sm text-center">More about Me</span>
          </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
