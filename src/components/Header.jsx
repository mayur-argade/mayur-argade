import header from '../assest/header.svg'
import Hi from '../assest/Hi.gif'

const Header = () => {
    return (
        <>
          <div className="flex-row mx-auto md:items-center md:justify-center  md:flex ">
              
              <div className="max-h-screen align-middle">                   
                  <div className="flex text-4xl font-sans pb-3">
                  <img style={{width:"30px"}} className="mr-3" src={Hi} alt="" />
                    Hi!, I am
                  </div>
                  <div className="hover:underline underline-offset-2 decoration-violet-500 font-sans text-5xl">
                      Mayur Argade
                  </div>
                  <div className=" font-sans text-2xl pt-4">
                  <p>Web designer |</p>
                  <p>Web Developer | </p>
                  <p>Open source enthusiast |</p>
                  </div>
              </div>

              <div className="align-middle pt-9">
                  <img src={header} alt="header" />
              </div>

          </div>

        </>
    )
}

export default Header
