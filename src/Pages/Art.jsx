import React from "react";
import Navbar from "../components/Navbar";
import Masonry from "react-masonry-css";

const breakPointObj = {
  default: 4,
  3000: 4,
  2000: 4,
  1200: 3,
  1000: 2,
  500: 1,
};
const Art = () => {
  return (
    <section className=" sm:mr-3 sm:ml-3 md:mr-12 md:ml-12 xl:mr-36 xl:ml-36 font-poppins">
      <Navbar />
      <div className="mt-10">
        <button
          type="button"
          className="text-black  bg-sky-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg ml-5 text-sm px-3 py-1.5 text-center inline-flex items-center"
        >
          Art
          <svg
            aria-hidden="true"
            class="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      <div className="flex justify-center">
      <Masonry
        className="flex animate-slide-fwd"
        breakpointCols={breakPointObj}
      >
        <div className="project m-5">
          <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter ">
            <a href="#">
              <img
                class="rounded-lg"
                src="https://i.pinimg.com/236x/52/df/5e/52df5ebcb3f5b0e43efa8f86013a2f49.jpg"
                alt="image description"
              />
            </a>
            <figcaption class="absolute px-4 text-lg text-white bottom-6">
              <p className="text-sm">Self Potrait</p>
            </figcaption>
          </figure>
        </div>

        <div className="project m-5  ">
          <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter ">
            <a href="#">
              <img
                class="rounded-lg"
                src="https://i.pinimg.com/236x/63/7f/c0/637fc059f89df54e5393b50d8cf01756.jpg"
                alt="image description"
              />
            </a>
            <figcaption class="absolute px-4 text-lg text-white bottom-6">
              <p className="text-sm">Evenings ♥</p>
            </figcaption>
          </figure>
        </div>

        <div className="project m-5  ">
          <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter ">
            <a href="#">
              <img
                class="rounded-lg"
                src="https://i.pinimg.com/236x/94/42/55/944255050d1e882001c6161861aa1a97.jpg"
                alt="image description"
              />
            </a>
            <figcaption class="absolute px-4 text-lg text-white bottom-6">
              <p className="text-sm">Open your eyes</p>
            </figcaption>
          </figure>
        </div>

        <div className="project m-5  ">
          <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter ">
            <a href="#">
              <img
                class="rounded-lg"
                src="https://i.pinimg.com/236x/4d/ce/1b/4dce1b5a53051caf470646dad7b90814.jpg"
                alt="image description"
              />
            </a>
            <figcaption class="absolute px-4 text-lg text-white bottom-6">
              <p className="text-sm">guided lines</p>
            </figcaption>
          </figure>
        </div>

        <div className="project m-5  ">
          <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter ">
            <a href="#">
              <img
                class="rounded-lg"
                src="https://i.pinimg.com/236x/b5/8a/55/b58a559ad380e2c2160cdb3e8a79b4fe.jpg"
                alt="image description"
              />
            </a>
            <figcaption class="absolute px-4 text-lg text-white bottom-6">
              <p className="text-sm text-black">Shades says</p>
            </figcaption>
          </figure>
        </div>

        <div className="project m-5  ">
          <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter ">
            <a href="#">
              <img
                class="rounded-lg"
                src="https://i.pinimg.com/236x/33/8d/35/338d3503dc87cccfd922acd4b4ac85d6.jpg"
                alt="image description"
              />
            </a>
            <figcaption class="absolute px-4 text-lg text-white bottom-6">
              <p className="text-sm">Lights</p>
            </figcaption>
          </figure>
        </div>

        <div className="project m-5  ">
          <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter ">
            <a href="#">
              <img
                class="rounded-lg"
                src="https://i.pinimg.com/236x/13/23/a2/1323a20f7c0a4513c3d6fde60f9d195c.jpg"
                alt="image description"
              />
            </a>
            <figcaption class="absolute px-4 text-lg text-white bottom-6">
              <p className="text-sm">Ready ?</p>
            </figcaption>
          </figure>
        </div>

        <div className="project m-5  ">
          <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter ">
            <a href="#">
              <img
                class="rounded-lg"
                src="https://i.pinimg.com/236x/f4/95/16/f49516be885e1f2139e21434e895820b.jpg"
                alt="image description"
              />
            </a>
            <figcaption class="absolute px-4 text-lg text-white bottom-6">
              <p className="text-sm">Chai person</p>
            </figcaption>
          </figure>
        </div>

        <div className="project m-5  ">
          
        </div>

        <div className="project m-5  ">
          <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter ">
            <a href="#">
              <img
                class="rounded-lg"
                src="https://i.pinimg.com/236x/a4/3a/c9/a43ac92d5589766e5b1fd424f91549f4.jpg"
                alt="image description"
              />
            </a>
            <figcaption class="absolute px-4 text-lg text-white bottom-6">
              <p className="text-sm">Sky I Love</p>
            </figcaption>
          </figure>
        </div>


      </Masonry>
      </div>
    </section>
  );
};

export default Art;
