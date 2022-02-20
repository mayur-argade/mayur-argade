import java from "../assest/java.png"
import js from "../assest/js.png"
import cpp from "../assest/cpp.png"
import py from "../assest/py.png"
import react from "../assest/react.png"
import mui from "../assest/mui.png"
import tw from "../assest/tw.png"
import node from "../assest/node.png"
import express from "../assest/express.png"
import mongo from "../assest/mongo.png"
import blob1 from "../assest/blob-1.png"
import blob2 from "../assest/blob-2.png"



// Languages - Java Javasreactript C++ Python C
// Languages - Java Javasmuiript C++ Python C
// Client - React Material-UI tailwindcss HTML5 CSS3
// Server - NodeJS expressJS
// Database - MongoDB
import uiux from "../assest/uiux.png"
import webd from "../assest/mern.png"
const Skills = () => {
  return (
    <>
      <div className="mt-16 mr-5 ml-5 ">
        <div className="text-3xl underline underline-offset-2 decoration-violet-700">
          Skills
        </div>
        <div className=" items-center mx-auto flex flex-wrap flex-col md:flex-row md:justify-center space-x-10">
           
              <img
                className="w-72 sm:w-96"
                src={blob1}
                alt=""
              />
            
           
              <img
               className="w-72 sm:w-96"
                src={blob2}
                alt=""
              />
          
          </div>
        
          
          
          
        



        <div className="mt-16 ">
        <div className="text-3xl underline underline-offset-2 decoration-violet-700">
          Tech I'm familier with
        </div>
        <div className="flex-wrap flex align-middle justify-center space-x-5 mt-5">
          <span class="flex items-center m-3 pr-3 pl-3 bg-slate-100"><img class="w-7 pr-2" src={java} alt="" /> Java</span>
          <span class="flex items-center m-3 pr-3 pl-3 bg-slate-100"><img class="w-7 pr-2" src={js} alt="" /> javascript</span>
          <span class="flex items-center m-3 pr-3 pl-3 bg-slate-100"><img class="w-7 pr-2" src={cpp} alt="" /> C++</span>
          <span class="flex items-center m-3 pr-3 pl-3 bg-slate-100"><img class="w-7 pr-2" src={py} alt="" />Python</span>
          <span class="flex items-center m-3 pr-3 pl-3 bg-slate-100"><img class="w-7 pr-2" src={react} alt="" />React</span>
          <span class="flex items-center m-3 pr-3 pl-3 bg-slate-100"><img class="w-7 pr-2" src={mui} alt="" />MUI</span>
          <span class="flex items-center m-3 pr-3 pl-3 bg-slate-100"><img class="w-7 pr-2" src={tw} alt="" />tailwindcss</span>
          <span class="flex items-center m-3 pr-3 pl-3 bg-slate-100"><img class="w-7 pr-2" src={express} alt="" />ExpressJS</span>
          <span class="flex items-center m-3 pr-3 pl-3 bg-slate-100"><img class="w-7 pr-2" src={mongo} alt="" /> MongoDB</span>
        </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
