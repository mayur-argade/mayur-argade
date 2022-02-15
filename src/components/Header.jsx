import header from "../assest/header.svg";
import Hi from "../assest/Hi.gif";

const Header = () => {
  return (
    <>
      <section className="mt-10 container items-center text-xl mx-auto flex flex-wrap p-5 flex-col md:flex-row md:justify-center ">
        <div className="max-h-screen align-middle text-center ">
          <h1 class="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900"> 
            Hi! I am <br class="hidden lg:inline-block" />Mayur Argade
          </h1>
          <div className="font-sans text-lg sm:text-2xl pt-4">
            <p>Web designer |</p>
            <p>Web Developer | </p>
            <p>Open source enthusiast |</p>
          </div>
        </div>

        <div class=" mt-10 md:mt-0 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src={header}
          />
        </div>
      </section>
    </>
  );
};

export default Header;
