import Mayur from "../assest/Mayur.png"


const About = () => {
    return (
        <>
        <div className="mt-16 ">

        <div className="headline">
        <div className="text-3xl underline underline-offset-2 decoration-violet-700">About</div>
        </div>

        <div className="flex p-10 rounded-3xl justify-center items-center shadow-xl">
            <div className="border-black">
            <img className="border-black mr-10" src={Mayur} style={{width:"180px" }}alt="mayur" />
            </div>

            <div className="">
            <div className="text-2xl">
            <p className="text-center"> hello,</p>
            <p className="text-center">i’m junior pursuing my bachelor’s degree in computer engineering</p>
            <p className="text-center">I'm full stack web developer who loves to bring ideas into reality.</p>
            
            </div>
           
            
            </div>
                

        </div>

        </div>   
        </>
    )
}

export default About
