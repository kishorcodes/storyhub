import React from "react";
import penguinTyping from "../assets/images/pencil.gif";
import Footer from "../components/Footer";
import LatestStories from "../components/LatestStories";
import Navbar from "../components/Navbar";
import Reccomended from "../components/Reccomended";

const Home = () => {
  return (
    <>
      <Navbar color={"[#42A5F5]"} bordered={false}></Navbar>
      <div className="border-b border-black bg-[#42A5F5] h-[500px] flex flex-col md:flex-row justify-between md:pl-10 md:pr-24">
        <div className="px-6 lg:px-10 flex-col flex gap-7 h-[100%] items-start justify-center">
          <h1 className="font-montse text-[#FFEB3B] text-5xl xl:text-7xl">
            Share your story.
          </h1>
          <p className="text-2xl text-[#3E2723] font-arial">
            Put your story out there and let the world <br />
            know what you have to say.
          </p>
          <button
            type="button"
            className="scale-100 hover:scale-105  transition-all duration-75 ease-in inline-flex justify-center items-center space-x-2 font-semibold rounded-xl px-5 py-3 leading-5 text-md bg-black text-white hover:text-white"
            id="tk-dropdown"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={() => {
              document.querySelector(".reccomended").scrollIntoView();
            }}
          >
            Start Reading
          </button>
        </div>

        <img
          className="hidden lg:block max-w-sm xl:max-w-full h-auto"
          src={penguinTyping}
          alt="penguin-typing"
        />
      </div>
      <LatestStories></LatestStories>
      <Reccomended></Reccomended>
      <Footer></Footer>
    </>
  );
};

export default Home;
