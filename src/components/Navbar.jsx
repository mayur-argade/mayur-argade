import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="mt-5 m-3 max-h-14">
        <div class="sticky top-0 z-50 container justify-between items-center text-base flex flex-row grow">
          <span class="hidden md:block ml-3 text-base cursor-default">
            Mayur Argade
          </span>
          <span class="block md:hidden ml-3 text-base cursor-default">Mayur</span>
          <div class=" hidden md:block md:ml-auto flex flex-wrap items-center text-base justify-center">
            
            <span class="group text-black-500 transition-all duration-300 ease-in-out mr-7 cursor-pointer">
            <Link to="/">
              <span className="bg-left-bottom bg-gradient-to-r from-purple-700 to-purple-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out text-base">
                Home
              </span>
            </Link>
            </span>

            {/* <Link to='/about'>

            <span class="group text-black-500 transition-all duration-300 ease-in-out mr-7 cursor-pointer">
              <span className="bg-left-bottom bg-gradient-to-r from-purple-700 to-purple-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out text-base">
                About
              </span>
            </span>
            </Link> */}

            <Link to='/work'>
            <span class="group text-black-500 transition-all duration-300 ease-in-out mr-7 cursor-pointer">
              <span className="bg-left-bottom bg-gradient-to-r from-purple-700 to-purple-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out text-base">
                Projects
              </span>
            </span>
            </Link>

            {/* <Link to='/'>
            <span class="group text-black-500 transition-all duration-300 ease-in-out mr-7 cursor-pointer">
              <span className="bg-left-bottom bg-gradient-to-r from-purple-700 to-purple-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out text-base">
                Blogs
              </span>
            </span>
            </Link> */}

            <Link to='/art'>
            <span class="group text-black-500 transition-all duration-300 ease-in-out mr-7 cursor-pointer">
              <span className="bg-left-bottom bg-gradient-to-r from-purple-700 to-purple-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out text-base">
                Art
              </span>
            </span>
          </Link>

          </div>
          <a
          target="_blank"
          rel="noreferrer"
            href="https://drive.google.com/file/d/1Y_9iGcCKXf7jol0tEchmZZYO_rV0NlC5/view?usp=share_link"
            class="inline-flex items-center bg-violet-700 text-white border-0 py-1 px-3 focus:outline-none hover:bg-violet-500  rounded text-base pl-8 pr-8 mr-3 "
          >
            <svg
              className="mr-1 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="15"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M3 19h18v2H3v-2zM13 9h7l-8 8-8-8h7V1h2v8z" />
            </svg>
            <span className="text-base">Resume</span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
