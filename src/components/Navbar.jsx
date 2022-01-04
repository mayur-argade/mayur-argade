import Mayur from "../assest/Mayur.png"

const Navbar = () => {
    return (
        <>
        <nav className="flex justify-end pt-3">
        
         <div className="flex text-xl grow">
            <img className="mr-1" style={{width:"30px", height:"30px"}} src={Mayur} alt="mayur" />
            <div className="text-xl pl-1">
                Mayur Argade
            </div>
        </div>

         <div className="flex justify-end p-1">
         <div className="text-xl pr-7 cursor-pointer hover:underline underline-offset-2 decoration-violet-500">About</div>
         <div className="text-xl pr-7 cursor-pointer hover:underline underline-offset-2 decoration-violet-500">Skills</div>
         <div className="text-xl pr-7 cursor-pointer hover:underline underline-offset-2 decoration-violet-500">Projects</div>
         <button className="rounded-lg bg-violet-700 pr-5 pl-5 text-white">lets Talk</button>
         </div>
      
         </nav>   
        </>
    )
}

export default Navbar
