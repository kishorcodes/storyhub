import React from "react";
import Navbar from "../components/Navbar";
import penguinTyping from "../assets/images/penguin-typing.gif";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="border-b border-black bg-yellow-400 h-[500px] flex flex-col md:flex-row justify-between md:pl-10 md:pr-24">
        <div className="px-6 lg:px-10 flex-col flex gap-7 h-[100%] items-start justify-center">
          <h1 className="text-6xl xl:text-7xl">Share your story.</h1>
          <p className="text-2xl">
            Put your story out there and let the world <br />
            know what you have to say.
          </p>
          <button
            type="button"
            class="scale-100 hover:scale-105  transition-all duration-75 ease-in inline-flex justify-center items-center space-x-2 font-semibold rounded-xl px-5 py-3 leading-5 text-md bg-black text-white hover:text-white"
            id="tk-dropdown"
            aria-haspopup="true"
            aria-expanded="true"
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
      <Footer></Footer>
    </>
  );
};

export default Home;
