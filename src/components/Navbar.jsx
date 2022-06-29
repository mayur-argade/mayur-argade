import Mayur from "../assest/Mayur.png";
import resume from '../assest/resume.pdf'
const Navbar = () => {
  return (
    <>
      <header class="mt-5 ">
        <div class="container justify-between items-center text-xl flex flex-row grow">
          <a href={resume} class="flex title-font font-medium items-center text-gray-900 ">
            <span class="hidden md:block ml-3 text-xl">Mayur Argade</span>
            <span class="block md:hidden ml-3 text-xl">Mayur</span>
          </a>
          <nav class=" hidden md:block md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a class="pr-7 hover:text-gray-900 hover:underline underline-offset-2 decoration-violet-500 cursor-pointer">Home</a>
            <a class="pr-7 hover:text-gray-900 hover:underline underline-offset-2 decoration-violet-500 cursor-pointer">About</a>
            <a class="pr-7 hover:text-gray-900 hover:underline underline-offset-2 decoration-violet-500 cursor-pointer">Skills</a>
            <a class="pr-7 hover:text-gray-900 hover:underline underline-offset-2 decoration-violet-500 cursor-pointer">Projects</a>
          </nav>
          <button class="inline-flex items-center bg-violet-700 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-black rounded text-base pl-8 pr-8 mr-3">
            lets talk
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
