import Mayur from "../assest/Mayur.png"


const About = () => {
    return (
        <>
        <div className="mt-16 ">

        <div className="headline">
        <div className="text-3xl underline underline-offset-2 decoration-violet-700">About</div>
        </div>

        <div className="flex rounded-3xl p-20  justify-center items-center shadow-2xl">
            <div className="image">
            <img src={Mayur} style={{width:"200px"}}alt="mayur" />
            </div>

            <div className="flex-col ">
            <div className="text-2xl">
            <p className="text-center"> hello,</p>
            <p className="text-center">i’m junior pursuing my bachelor’s degree in computer engineering</p>
            <p className="text-center">i’m web developer and also have knowledge of mobile development</p>
            <p className="text-center rounded-lg bg-violet-500 mt-9 text-white">Education</p>
            </div>
            <div className="grid grid-cols-1 divide-y">

            <div className="clg1">
            <p>bachelor's in computer engineering</p>
            <p>Terna College of engineering</p>
            <p>2020-2024</p>
            </div>

            <div className="clg1">
            <p>12th-HSC</p>
            <p>Ramniranjan Jhunjhunwala collge</p>
            <p>2018-2020</p>
            </div>
            </div>
            </div>
                

        </div>

        </div>   
        </>
    )
}

export default About

{/* <body class="bg-gray-50">
  <div class="p-4 mt-4">
    <h1 class="text-4xl text-center font-semibold mb-6">Package status</h1>
    <div class="container">
      <div class="flex flex-col md:grid grid-cols-12 text-gray-50">

        <div class="flex md:contents">
          <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-green-500 pointer-events-none"></div>
            </div>
            <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
              <i class="fas fa-check-circle text-white"></i>
            </div>
          </div>
          <div class="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
            <h3 class="font-semibold text-lg mb-1">Package Booked</h3>
            <p class="leading-tight text-justify w-full">
              21 July 2021, 04:30 PM
            </p>
          </div>
        </div>

        <div class="flex md:contents">
          <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-green-500 pointer-events-none"></div>
            </div>
            <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
              <i class="fas fa-check-circle text-white"></i>
            </div>
          </div>
          <div class="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
            <h3 class="font-semibold text-lg mb-1">Out for Delivery</h3>
            <p class="leading-tight text-justify">
              22 July 2021, 01:00 PM
            </p>
          </div>
        </div>

        <div class="flex md:contents">
          <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-red-500 pointer-events-none"></div>
            </div>
            <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow text-center">
              <i class="fas fa-times-circle text-white"></i>
            </div>
          </div>
          <div class="bg-red-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
            <h3 class="font-semibold text-lg mb-1 text-gray-50">Cancelled</h3>
            <p class="leading-tight text-justify">
              Customer cancelled the order
            </p>
          </div>
        </div>

        <div class="flex md:contents">
          <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-300 pointer-events-none"></div>
            </div>
            <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-300 shadow text-center">
              <i class="fas fa-exclamation-circle text-gray-400"></i>
            </div>
          </div>
          <div class="bg-gray-300 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
            <h3 class="font-semibold text-lg mb-1 text-gray-400">Delivered</h3>
            <p class="leading-tight text-justify">

            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</body> */}