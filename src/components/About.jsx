import Mayur from "../assest/astronot.gif";

const About = () => {
  return (
    <>
      <section class="mt-16 justify-center body-font">
        <div className="headline">
          <div className="text-3xl underline underline-offset-2 decoration-violet-700">
            About
          </div>
        </div>
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover w-52 object-center rounded"
              alt="hero"
              src={Mayur}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class=" sm:text-3xl text-3xl mb-4 font-medium text-gray-900">
              Hello
            </h1>
            <p class="font-sans text-lg sm:text-2xl ">
            i’m junior pursuing my bachelor’s degree in computer engineering. I'm full stack web developer who loves to bring ideas into reality.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
