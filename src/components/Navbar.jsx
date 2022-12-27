import Mayur from "../assest/Mayur.png";
import resume from '../assest/resume.pdf'
const Navbar = () => {
  return (
    <>
      <header class="mt-5 ">
        <div class="container justify-between items-center text-xl flex flex-row grow">
            <span class="hidden md:block ml-3 text-xl cursor-default">Mayur Argade</span>
            <span class="block md:hidden ml-3 text-xl cursor-default">Mayur</span>
          <nav class=" hidden md:block md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a class="group text-black-500 transition-all duration-300 ease-in-out mr-7 cursor-pointer">
              <span className="bg-left-bottom bg-gradient-to-r from-purple-700 to-purple-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Home
              </span>
            </a>
            <a class="group text-black-500 transition-all duration-300 ease-in-out mr-7 cursor-pointer">
              <span className="bg-left-bottom bg-gradient-to-r from-purple-700 to-purple-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                About
              </span>
            </a>
            <a class="group text-black-500 transition-all duration-300 ease-in-out mr-7 cursor-pointer">
              <span className="bg-left-bottom bg-gradient-to-r from-purple-700 to-purple-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Skils
              </span>
            </a>
            <a class="group text-black-500 transition-all duration-300 ease-in-out mr-7 cursor-pointer">
              <span className="bg-left-bottom bg-gradient-to-r from-purple-700 to-purple-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Projects
              </span>
            </a>
            <a class="group text-black-500 transition-all duration-300 ease-in-out mr-7 cursor-pointer">
              <span className="bg-left-bottom bg-gradient-to-r from-purple-700 to-purple-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Blogs
              </span>
            </a>
            <a class="group text-black-500 transition-all duration-300 ease-in-out mr-7 cursor-pointer">
              <span className="bg-left-bottom bg-gradient-to-r from-purple-700 to-purple-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Art
              </span>
            </a>
          </nav>
          <a href={resume} class="inline-flex items-center bg-violet-700 text-white border-0 py-1 px-3 focus:outline-none hover:bg-violet-500  rounded text-base pl-8 pr-8 mr-3 ">
          <svg className="mr-1 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="15"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 19h18v2H3v-2zM13 9h7l-8 8-8-8h7V1h2v8z" /></svg>
            Resume
          </a>
        </div>
      </header>
    </>
  );
};

export default Navbar;
