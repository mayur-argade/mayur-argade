import React from "react";
import Navbar from "../components/Navbar";

const Projects = () => {
  return (
    <section className=" sm:mr-3 sm:ml-3 md:mr-12 md:ml-12 xl:mr-36 xl:ml-36 font-poppins">
      <Navbar />
      <div className="mt-10">
        <button
          type="button"
          className="text-black  bg-sky-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg ml-5 text-sm px-3 py-1.5 text-center inline-flex items-center"
        >
          Work
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

      <div className="projectWrapper mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        <div className="project m-5 ">
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img class="rounded-t-lg h-40" src="/images/lakshya2.png" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-indigo-700 dark:text-white">
                  Lakshya
                </h5>
              </a>
              <a
                href="#"
                class="uppercase tracking-wide text-sm text-black font-semibold"
              >
                React, MaterialUI, Firebase
              </a>
              <p class="p-3 mb-3 font-normal text-gray-700 dark:text-gray-400">
                <ul className="list-disc">
                  <li>The project focused on learning through youtube providing a proper environment and roadmap for beginners.</li>
                  <li>worked on UI/UX and lead a team of 3 developers. </li>
                  <li>worked on a Course page, Video window, and Meet integration
components.</li>
                </ul>
              </p>
              <div className="links flex align-middle space-x-3">
                <a href="https://github.com/mayur-argade/Lakshya" className="github w-8 h-8"><img src="/images/github1.png" alt="" /></a>
                <a href="https://www.figma.com/file/CqVCBCYDlB1wP7VDDG8sD3/Untitled?t=Z13wJNICxyFDFzFP-1" className="figma w-8 h-8"><img src="/images/figma1.png" alt="" /></a>
                <a href="https://www.linkedin.com/posts/mayur-argade_reactjs-webdevelopement-frontend-activity-6882213160716120064-J2Ep?utm_source=share&utm_medium=member_desktop" className="link w-8 h-8"><img src="/images/link.png" alt="" /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="project m-5 ">
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[183]">
            <a href="#">
              <img className="rounded-t-lg h-40" src="/images/event.png" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-indigo-700 dark:text-white">
                  EventTick
                </h5>
              </a>
              <a
                href="#"
                class="uppercase tracking-wide text-sm text-black font-semibold"
              >
                React, MaterialUI, Firebase
              </a>
              <p class="p-3 mb-3 font-normal text-gray-700 dark:text-gray-400">
                <ul className="list-disc">
                  <li>Project aims to cut down tedious work of managing data of college
events and simplify the data storing process</li>
                  <li>Build Fast secure REST APIs and also did testing using postman.</li>
                  <li>Fetched backend data with frontend using Axios.</li>
                </ul>
              </p>
              <div className="links flex align-middle space-x-3">
                <a href="https://github.com/mayur-argade/Event-management-portal" className="github w-8 h-8"><img src="/images/github1.png" alt="" /></a>
                <a href="https://www.figma.com/file/HASKdKPlMzi03h3eoDYgJ5/event-manager?t=zeEWzEZQwjfXa3AZ-1" className="figma w-8 h-8"><img src="/images/figma1.png" alt="" /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="project m-5 ">
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[183]">
            <a href="#">
              <img className="rounded-t-lg h-40" src="/images/vrukshvalli.png" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-indigo-700 dark:text-white">
                  Vrukshavalli
                </h5>
              </a>
              <a
                href="#"
                class="uppercase tracking-wide text-sm text-black font-semibold"
              >
                React, MaterialUI, NodeJS, Express, MongoDB
              </a>
              <p class="p-3 mb-3 font-normal text-gray-700 dark:text-gray-400">
                <ul className="list-disc">
                  <li>Vrukshavalli is a social media application through which tree plantation can be done on small levels also</li>
                  <li>Frontend part of the Project built with reactJs and MUI.</li>
                  <li>Using Multor images are stored on the server and fetched into frontend.</li>
                </ul>
              </p>
              <div className="links flex align-middle space-x-3">
                <a href="https://github.com/mayur-argade/Vrukshavalli" className="github w-8 h-8"><img src="/images/github1.png" alt="" /></a>
              </div>
            </div>
          </div>
        </div>
       
        <div className="project m-5 ">
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[183]">
            <a href="#">
              <img className="rounded-t-lg h-40" src="/images/agrotech1.png" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-indigo-700 dark:text-white">
                  Agrotech
                </h5>
              </a>
              <a
                href="#"
                class="uppercase tracking-wide text-sm text-black font-semibold"
              >
                React, TailwindCSS, Amplify, AWS
              </a>
              <p class="p-3 mb-3 font-normal text-gray-700 dark:text-gray-400">
                <ul className="list-disc">
                  <li>Built frontend with ReactJS and Tailwind-CSS</li>
                  <li>Integrated Cognito User pool and Amplify login/signup</li>
                  <li>Developed Serveless APIs to fetch data from json file</li>
                </ul>
              </p>
              <div className="links flex align-middle space-x-3">
                <a href="https://github.com/mayur-argade/Agrotech" className="github w-8 h-8"><img src="/images/github1.png" alt="" /></a>
                <a href="https://www.figma.com/file/BYzgREpNG86zTCZsq7zzeI/Sensegrass?t=zeEWzEZQwjfXa3AZ-0" className="figma w-8 h-8"><img src="/images/figma1.png" alt="" /></a>
                <a href="https://dev.d2spncxoh2aatk.amplifyapp.com/" className="link w-8 h-8"><img src="/images/link.png" alt="" /></a>
              </div>
            </div>
          </div>
        </div>

      </div>
      
      
    </section>
  );
};

export default Projects;
