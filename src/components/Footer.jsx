import png from "../assest/png.png";

const Footer = () => {
  return (
    <>
      <div className="mt-16 flex-col justify-center">
      <div className="bg-violet-600">
        <div class="container p-6">
          <div class="">
            <p class="flex justify-center items-center">
              <span class="text-white mr-4">Reach out to Me: </span>
              <button class="bg-transparent border-2 border-white rounded-full text-white font-bold py-2 px-4 rounded inline-flex items-center">
                <svg
                  class="fill-current w-5 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z" />
                </svg>
                
                <a target="_blank" rel="noopener noreferrer" href="mailto:argademayur2002@gmail.com">Mail</a>
              </button>
            </p>
          </div>
        </div>
        <div class="text-center pb-3 text-white ">© 2022 Copyright: Mayur</div>
      </div>
      </div>
    </>
  );
};

export default Footer;
