import uiux from '../assest/uiux.png'
import mern from '../assest/mern.png'
import web3 from '../assest/web3.png'
import aiml from '../assest/aiml.png'
import blender from '../assest/blender.png'
import logo from '../assest/logo.svg'

const Skills = () => {
    return (
        <>
        <div className='mt-16'>
           <div className="text-3xl underline underline-offset-2 decoration-violet-700">Skills</div>
        <div className="flex justify-center">
                <img src={logo} alt="" />
            </div> 
        </div>
        
        <div className=" mt-16 intersts">
        <div className="text-3xl underline underline-offset-2 decoration-violet-700">Interests</div>

        <div className='flex justify-center space-x-6 mt-8 overflow-x-auto'>
        <img style={{width:"150px" , height:"150px" }} src={uiux} alt="" />
        <img style={{width:"150px" , height:"150px" }} src={mern} alt="" />
        <img style={{width:"150px" , height:"150px" }} src={web3} alt="" />
        <img style={{width:"150px" , height:"150px" }} src={blender} alt="" />
        <img style={{width:"150px" , height:"150px" }} src={aiml} alt="" />
        </div>
        </div>
        
        </>
    )
}

export default Skills
{/* <img class="mx-auto hover:border-4 border-violet-300" src={java} alt="" />

<div className="flex space-x-36 justify-center ">
<img  className='hover:border-4 border-violet-300'  src={js} alt="" />
<img  className='hover:border-4 border-violet-300'  src={html} alt="" />
</div>

<div className="flex space-x-16 justify-center ">
<img  className='hover:border-4 border-violet-300'  src={cpp} alt="" />

<div className="flex mt-1 space-x-4 justify-center ">
<img className='hover:border-4 border-violet-300'  style={{width: "42px", height:"42px"}} src={react} alt="" />
<img className='hover:border-4 border-violet-300'  style={{width: "42px", height:"42px"}} src={mui} alt="" />
<img  className='hover:border-4 border-violet-300' style={{width: "42px", height:"42px"}} src={tw} alt="" />
</div>

<img className='hover:border-4 border-violet-300' src={css} alt="" />
</div>

<div className="flex space-x-32 justify-center ">
<img  className='hover:border-4 border-violet-300'  src={python} alt="" />
<img className='hover:border-4 border-violet-300' src={mongo} alt="" />
<img className='hover:border-4 border-violet-300'  src={node} alt="" />
</div> */}
