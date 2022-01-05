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
                
                <div className="flex justify-center shadow-inner p-7">
                <div className="photo"> <img style={{width: "303px", height:"187px"}} className='border-2 border-black-500 rounded-xl ' src={lakshya} alt="" /> </div>
                <div className="flex flex-col pl-8">
                    <div className="heading text-2xl underline">Lakshya</div>
                    <div className="techstack text-lg">React, MaterialUI, Firebase</div>
                    <div className="learnings text-base mt-2 divide-y">
                        <ul>
                            <li>Designed and Managed entire Project.</li>
                            <li>Authetication and autharisation  feature</li>
                            <li>Meet integration and dynamix video player</li>
                        </ul>
                    </div>
                    <div className="icons flex space-x-5 ">
                    
                    <a target="_blank" href="https://github.com/mayur-argade/Lakshya"><img src={github} alt="" /></a>
                    <img src={external} alt="" />
                    </div>
                </div>
                </div>
                
                <div className="flex justify-center shadow-inner p-7">
                <div className="photo"> <img style={{width: "303px", height:"187px"}} className='border-2 border-black-500 rounded-xl ' src={vrukshavalli} alt="" /> </div>
                <div className="flex flex-col pl-8">
                    <div className="heading text-2xl underline">Vrukshavalli</div>
                    <div className="techstack text-lg">React, NodeJs, MongoDB, Express</div>
                    <div className="learnings text-base mt-2 divide-y">
                        <ul>
                            <li>A social media application</li>
                            <li>Authetication and autharisation  feature</li>
                            <li>can like and post new photos with caption</li>
                            <li>can follow friends and also unfollow them</li>
                        </ul>
                    </div>
                    <div className="icons flex space-x-5 ">
                    <a target="_blank" href="https://github.com/mayur-argade/vrukshavalli"><img src={github} alt="" /></a>
                    <img src={external} alt="" />
                    </div>
                </div>
                </div>
            </div>

            <div className="problem mt-16">
            <div className="text-3xl underline underline-offset-2 decoration-violet-700">Problem solving</div>
            <div className="flex justify-center">
                <img src={hackerank} alt="" />
                <img src={leetcode} alt="" />
            </div>
            </div>

        </div>
        </>
    )
}

export default Project
