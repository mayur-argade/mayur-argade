import social from '../assest/social.svg'
import twitter from '../assest/twitter.png'
import linkdein from '../assest/linkedin.png'
import github from '../assest/github.png'
import instagram from '../assest/instagram.png'

const Footer = () => {
    return (
        <div className="mt-16">
        <div class="h-42  bg-gradient-to-r from-violet-300 to-fuchsia-300">
        
        <div className="text-3xl pt-4 text-center underline underline-offset-2 decoration-violet-700">
        Socials
        </div>

        <div className="flex justify-center  space-x-"> 
        
        <div className="icons justify-center flex pt-5 pb-10 space-x-4">
        <img style={{width: "42px", height:"42px"}} src={twitter} alt="" />
        <img style={{width: "42px", height:"42px"}} src={linkdein} alt="" />
        <img style={{width: "42px", height:"42px"}} src={github} alt="" />
        <img style={{width: "42px", height:"42px"}} src={instagram} alt="" />

        </div>
        </div>
        
        </div>
        </div>
            
    )
}

export default Footer
