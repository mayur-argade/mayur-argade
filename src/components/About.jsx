import Mayur from "../assest/astro.png";

const About = () => {
  return (
    <>
      <section class="mr-5 ml-5 ">
        <div className="flex justify-evenly flex-wrap mt-7">
          <a
            target="blank"
            class="inline-flex items-center space-x-2 pr-3 pl-3 px-2 py-2 rounded-full bg-white border cursor-pointer"
          >
            <img src="/images/fullstack.svg" className="w-4" />
            <span className="text-xs font-medium">Full Stack Developer</span>
          </a>

          <a
            target="blank"
            class="inline-flex items-center space-x-2 pr-3 pl-3 px-2 py-2 rounded-full bg-white border cursor-pointer"
          >
            <img src="/images/designer.svg" className="w-4" />
            <span className="text-xs font-medium">Designer</span>
          </a>

          <a
            target="blank"
            class="inline-flex items-center space-x-2 pr-3 pl-3 px-2 py-2 rounded-full bg-white border cursor-pointer"
          >
            <img src="/images/productdesign.svg" className="w-4" />
            <span className="text-xs font-medium">Product design</span>
          </a>

          <a
            target="blank"
            class="inline-flex items-center space-x-2 pr-3 pl-3 px-2 py-2 rounded-full bg-white border cursor-pointer"
          >
            <img src="/images/productmanager.svg" className="w-4" />
            <span className="text-xs font-medium">Product Manager</span>
          </a>

          <a
            target="blank"
            class="inline-flex items-center space-x-2 pr-3 pl-3 px-2 py-2 rounded-full bg-white border cursor-pointer"
          >
            <img src="/images/opensource.svg" className="w-4" />
            <span className="text-xs font-medium">Open Source</span>
          </a>
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
          <button className="inline-flex items-center space-x-1 pr-3 pl-3 px-1 py-1 rounded cursor-pointer bg-violet-700 text-white mt-2">
    <span className="text-sm text-center">More about Me</span>
        </button>
        </div>
        
      </section>
    </>
  );
};

export default About;
