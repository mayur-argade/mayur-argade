import header from "../assest/header3.png";

const Header = () => {
  return (
    <>
      <section className=" m-5 container items-center text-xl mx-auto flex flex-wrap p-5 flex-col-reverse md:flex-row md:justify-evenly ">
        <div class="mt-6 mr-7 md:mr-0 md:mt-0 md:mt-0 lg:max-w-xs lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src={header}
          />
        </div>

        <div className="max-h-screen align-top text-left">
          <div className="text-center md:text-left">
            <h1 className=" sm:text-5xl text-3xl font-normal ">Mayur Argade</h1>
            <h2 className="text-xl font-light mb-2">Full Stack Developer</h2>
            <p className="text-sm font-normal">
              Welcome To Digital Gallery, Here I share my projects and <br />
              What I am developing. I Build tech and do art.
            </p>
          </div>

          <div className="flex flex-col mt-5">
          
            <div className="flex space-x-3 ">
            <a 
                href="https://github.com/mayur-argade"
                target="blank"
                class="inline-flex items-center space-x-1 pr-3 pl-3 px-1 py-1 rounded bg-gray-200 hover:bg-gray-100 cursor-pointer"
              >
                <img alt="social-media" src="/images/github.svg" />
                <span className="text-sm">Github</span>
              </a>

              <a
                href="https://www.linkedin.com/in/mayur-argade/"
                class="inline-flex items-center space-x-1 pr-3 pl-3 px-1 py-1 rounded bg-gray-200 hover:bg-gray-100 cursor-pointer"
                target="blank"
              >
                <img alt="social-media" src="/images/linkdien.svg" />
                <span className="text-sm">Linkdien</span>
              </a>

              <a
                href="https://mayurargade.hashnode.dev/"
                class="inline-flex items-center space-x-1 pr-3 pl-3 px-1 py-1 rounded bg-gray-200 hover:bg-gray-100 cursor-pointer"
                target="blank"
              >
                <img alt="social-media" src="/images/hashnode.svg" />
                <span className="text-sm">Hashnode</span>
              </a>
            </div>

            <div className="flex justify-center md:justify-start space-x-3 mt-2">
              <a
                href="https://twitter.com/Mayurzs"
                class="inline-flex items-center space-x-1 pr-3 pl-3 px-1 py-1 rounded bg-gray-200 hover:bg-gray-100 cursor-pointer"
                target="blank"
              >
                <img alt="social-media" src="/images/twitter.svg" />
                <span className="text-sm">Twitter</span>
              </a>

              <a
                href="https://www.instagram.com/mayyurrrr/"
                class="inline-flex items-center space-x-1 pr-3 pl-3 px-1 py-1 rounded bg-gray-200 hover:bg-gray-100 cursor-pointer"
                target="blank"
              >
                <img alt="social-media" src="/images/insta.svg" />
                <span className="text-sm">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
