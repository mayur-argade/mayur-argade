import Mayur from "../assest/astro.png";

const About = () => {
  return (
    <>
      <section class="mr-5 ml-5  mt-16">
        
          <div className="text-3xl underline underline-offset-2 decoration-violet-700">
            About
          </div>
        
        <div className="container mt-10 p-5 items-center mx-auto flex flex-wrap flex-col md:flex-row md:justify-center bg-slate-200 rounded-xl shadow-md">
        <div className="animate-bounce pt-5">
        <img
              class="object-cover w-32 pt-5 object-center rounded"
              alt="hero"
              src={Mayur}
        />
        </div>
        <div class="align-middle p-3 text-center">
            <h1 class=" sm:text-2xl text-xl font-medium">
              Hello
            </h1>
            <p class="font-sans text-lg sm:text-xl ">
            i’m junior pursuing my bachelor’s degree in computer engineering.<br class="hidden lg:inline-block" /> I'm full stack web developer who loves to bring ideas into reality.
            </p>
          </div>
        </div>
        

          
          
        
      </section>
      
    </>
  );
};

export default About;
<div class="">
            <h1 class=" sm:text-3xl text-3xl mb-4 font-medium">
              Hello
            </h1>
            <p class="font-sans text-lg sm:text-2xl ">
            i’m junior pursuing my bachelor’s degree in computer engineering.<br class="hidden lg:inline-block" /> I'm full stack web developer who loves to bring ideas into reality.
            </p>
          </div>