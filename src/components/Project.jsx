import lakshya from '../assest/lakshya.png'
import vrukshavalli from '../assest/vrukshavalli.png'
import github from '../assest/github.svg'
import external from '../assest/external.svg'
import hackerank from '../assest/hackerank.svg'
import leetcode from '../assest/leetcode.svg'

const Project = () => {
    
    return (
        <>
        <div className="mt-16"> 
            <div className="text-3xl underline underline-offset-2 decoration-violet-700">Projects</div>
            <div className="projectWrapper">
                
            <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl transition duration-500 ease-in-out transform hover:translate-y-5 hover:shadow-2xl">
            <div class="md:flex">
            <div class="md:shrink-0">
            <img  class="h-48 w-full object-fill md:h-full md:w-72" src={lakshya} alt="Man looking at item at a store"/>
            </div>
            <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Lakshya</div>
            <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">React, MaterialUI, Firebase</a>
            <p class="mt-2 text-gray-500">
            <ul>
                            <li>Designed and Managed entire Project.</li>
                            <li>Authetication and autharisation  feature</li>
                            <li>Meet integration and dynamix video player</li>
            </ul>
            </p>
            <div className="icons flex space-x-5 ">
                    
                    <a target="_blank" href="https://github.com/mayur-argade/Lakshya"><img src={github} alt="" /></a>
                    <img src={external} alt="" />
                    </div>
            </div>
            </div>
            </div>

            <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-6 md:max-w-2xl transition duration-500 ease-in-out transform hover:translate-y-5 hover:shadow-2xl">
            <div class="md:flex">
            <div class="md:shrink-0">
            <img  class="h-48 w-full object-fill md:h-full md:w-72" src={vrukshavalli} alt="Man looking at item at a store"/>
            </div>
            <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold  hover:underline ">Vrukshavalli</div>
            <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black">React, MaterialUI, Express, NodeJS</a>
            <p class="mt-2 text-gray-500">
            <ul>
                            <li>A social media application</li>
                            <li>Authetication and autharisation  feature</li>
                            <li>can like and post new photos with caption</li>
                            <li>can follow friends and also unfollow them</li>
            </ul>
            </p>
            <div className="icons flex space-x-5 ">
                    
                    <a target="_blank" href="https://github.com/mayur-argade/Lakshya"><img src={github} alt="" /></a>
                    <img src={external} alt="" />
                    </div>
            </div>
            </div>
            </div>
                
                
                
            </div>

            <div className="problem mt-16">
            <div className="text-3xl underline underline-offset-2 decoration-violet-700">Problem solving</div>
            <div className="flex space-x-10 justify-center">
                <a target="_blank" href="https://www.hackerrank.com/argademayur2002?hr_r=1">
                <img style={{width: "42px", height:"42px"}}  src={hackerank} alt="" />
                </a>
                <a target="_blank" href="https://leetcode.com/mayurrr/">
                <img style={{width: "42px", height:"42px"}}  src={leetcode} alt="" /></a>
            </div>
            </div>

        </div>
        </>
    )
}

export default Project
