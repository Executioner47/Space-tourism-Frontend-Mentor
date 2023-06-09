import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <main className="h-[75vh] font-cfont1 bg-black text-white flex justify-center items-center bg-cover bg-center">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="absolute min-h-screen h-full inset-0">
        <img
          className="object-cover h-full w-full md:hidden"
          src="./images/home/background-home-mobile.jpg"
          alt="earth"
        />
        <img
          className="hidden md:block md:object-cover md:h-full md:w-full lg:hidden"
          src="./images/home/background-home-tablet.jpg"
          alt="earth"
        />
        <img
          className="hidden lg:block lg:object-cover lg:h-full lg:w-full"
          src="./images/home/background-home-desktop.jpg"
          alt="earth"
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-end max-w-6xl relative p-6 md:p-10">
        <div className="left w-full md:w-1/2 text-white  text-center lg:text-left mb-20 lg:mb-0">
          <h3 className="font-normal text-xl lg:text-3xl -text--clr-pale-blue tracking-widest">
            SO, YOU WANT TO TRAVEL TO
          </h3>
          <h1 className="font-normal text-[120px] md:text-[150px] font-cfont2 leading-[170px] md:leading-[200px]">
            SPACE
          </h1>
          <p className="font-cfont3 lg:text-lg  -text--clr-pale-blue">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="right lg:w-1/2 flex items-end justify-end">
          <Link
            to="/destination"
            className="font-cfont2 text-[32px] right w-52 h-52 md:w-60 lg:w-72 md:h-60 lg:h-72 flex justify-center
         items-center bg-white text-black rounded-full text-center uppercase hover:ring-[5rem] ring-white ring-opacity-10 transition-all"
          >
            Explore
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Home;
