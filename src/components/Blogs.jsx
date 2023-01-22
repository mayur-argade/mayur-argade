import React from "react";

const Blogs = () => {
  return (
    <section className="mt-12 mr-5 ml-5 ">
      <div className="text-4xl text-center">Blogs</div>
      <div className="blogs">
        <div className="blog">
          <div className="w-full rounded p-3 bg-gray-200 hover:bg-gray-100 cursor-pointer flex mt-3">
            <a target="blank" href="https://mayurargade.hashnode.dev/building-web-applications-with-nodejs-using-mvc-architecture" class="flex flex-col">
              <div className="inline-flex space-x-2">
                <img alt="sorry" className="h-5" src="/images/hashnode.svg" />
                <span className="font-medium text-sm">
                  Building Web application backend with NodeJS using MVC
                </span>
              </div>
              <div className="info">
                <p className="font-light text-xs ml-7">
                  As we start our development with small learning projects and
                  implement them by watching tutorials,
                  <br /> we often don't give importance to the neatness of our
                  code files......
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
