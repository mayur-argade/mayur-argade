import lakshya from "../assest/lakshya.png";
import vrukshavalli from "../assest/vrukshavalli.png";
import external from "../assest/external.svg";
import hackerank from "../assest/hackerank.svg";
import leetcode from "../assest/leetcode.svg";
import internet from "../assest/logo.jpg";
import event from "../assest/event.jpg";

const Project = () => {
  return (
    <>
      <div className="mr-5 ml-5  mt-16">
        <div className="text-3xl underline underline-offset-2 decoration-violet-700">
          Projects
        </div>
        <div className="projectWrapper">
          <div class="max-w-md mt-10 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl transition duration-500 ease-in-out transform hover:translate-y-5 hover:shadow-2xl">
            <div class="md:flex">
              <div class="md:shrink-0">
                <img
                  class="h-48 w-full object-fill md:h-full md:w-80"
                  src={lakshya}
                  alt="Man looking at item at a store"
                />
              </div>
              <div class="p-8">
                <div class="block mt-1 text-xl leading-tight font-medium  text-indigo-700  hover:underline">
                  Lakshya
                </div>
                <a
                  href="#"
                  class="uppercase tracking-wide text-sm text-black font-semibold"
                >
                  React, MaterialUI, Firebase
                </a>
                <p class="mt-2 text-gray-500">
                  <ul>
                    <li>Designed and Managed entire Project.</li>
                    <li>Authetication and autharisation feature</li>
                    <li>Meet integration and educational video streaming</li>
                  </ul>
                </p>
                <div className="icons flex space-x-5 ">
                  <a
                    target="_blank"
                    href="https://github.com/mayur-argade/Lakshya"
                  >
                    <svg
                      class="hover:fill-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z" />
                    </svg>
                  </a>
                  <img src={external} alt="" />
                </div>
              </div>
            </div>
          </div>
          
          <div class="max-w-md mt-10 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl transition duration-500 ease-in-out transform hover:translate-y-5 hover:shadow-2xl">
            <div class="md:flex">
              <div class="md:shrink-0">
                <img
                  class="h-48 w-full object-fill md:h-full md:w-80"
                  src={event}
                  alt="Man looking at item at a store"
                />
              </div>
              <div class="p-8">
                <div class="block mt-1 text-xl leading-tight font-medium  text-indigo-700  hover:underline">
                  EventTick
                </div>
                <a
                  href="#"
                  class="uppercase tracking-wide text-sm text-black font-semibold"
                >
                  React, MaterialUI, Express, NodeJS
                </a>
                <p class="mt-2 text-gray-500">
                  <ul>
                    <li>Manage all events easily</li>
                    <li>add create delete event information</li>
                    <li>Generating report in pdf format</li>
                    <li> downloadable certificates according to the attendance</li>
                  </ul>
                </p>
                <div className="icons flex space-x-5 ">
                  <a
                    target="_blank"
                    href="https://github.com/mayur-argade/EventTick"
                  >
                    <svg
                      class="hover:fill-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z" />
                    </svg>
                  </a>
                  <img src={external} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
          {/* 
          ------------------------------------------------------------------------------------------------- */}
          <div className="mt-10 text-black text-medium text-center">
            Currently working Projects
          </div>
          {/* ------------------------------------------------------------------------------------------------- */}
          <div class="max-w-md mt-5 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl transition duration-500 ease-in-out transform hover:translate-y-5 hover:shadow-2xl">
            <div class="md:flex">
              <div class="md:shrink-0">
                <img
                  class="h-48 w-full object-fill md:h-full md:w-80"
                  src={internet}
                  alt="Man looking at item at a store"
                />
              </div>
              <div class="p-8">
                <div class="block mt-1 text-xl leading-tight font-medium  text-indigo-700  hover:underline">
                  Internet
                </div>
                <a
                  href="#"
                  class="uppercase tracking-wide text-sm text-black font-semibold"
                >
                  React, Tailwind-Css, MongoDB, NodeJS, ExpressJS
                </a>
                <p class="mt-2 text-gray-500">
                  <ul>
                    <li>Ecosystem to connect people .</li>
                    <li>Authentication and authorization </li>
                    <li>Video chat application</li>
                    <li>Product Management and task assign</li>
                  </ul>
                </p>
                <div className="icons flex space-x-5 ">
                  <a target="_blank" href="https://github.com/mayur-argade/">
                    <svg
                      class="hover:fill-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z" />
                    </svg>
                  </a>
                  <img src={external} alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* ------------------------------------------------------------------------------------------------- */}
          
        <div className="mt-10 flex justify-center text-black text-medium text-center">
            explore more work on github ---> <a target="_blank" href="https://github.com/mayur-argade/">
                    <svg
                      class="hover:fill-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z" />
                    </svg>
                  </a>
          </div>


        <div className="problem mt-16">
          <div className="text-3xl underline underline-offset-2 decoration-violet-700">
            Problem solving
          </div>
          <div className="flex mt-7 space-x-10 justify-center">
            <a
              target="_blank"
              href="https://www.hackerrank.com/argademayur2002?hr_r=1"
            >
              <img
                style={{ width: "42px", height: "42px" }}
                src={hackerank}
                alt=""
              />
            </a>
            <a target="_blank" href="https://leetcode.com/mayurrr/">
              <img
                style={{ width: "42px", height: "42px" }}
                src={leetcode}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
// 3 start in c++ hackerank
// 1 start in problem solving hackerrank
// pro backend developer certificate by learn code online
// python beginner to advance course completion certificate

//
