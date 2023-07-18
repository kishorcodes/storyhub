import React from "react";
import Navbar from "../components/Navbar";
const Stories = () => {
  return (
    <>
      <Navbar color={"[#0667AE]"} bordered={false}></Navbar>

      <div className="flex flex-col p-16">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl">Discover Stories</h1>
          <p>Latest First</p>
        </div>
        <div className="mt-8 flex flex-wrap justify-between items-center gap-20 ">
          {[...Array(6)].map(() => (
            <div className="flex flex-col bg-red-400 rounded-lg h-[300px] w-[370px]">
              <img src="" alt="" />
              <div className="p-5 flex flex-col justify-between">
                <div className="">
                  <h1>Hello</h1>
                  <p>world</p>
                </div>
                <div className="flex justify-start items-center gap-4">
                  <div>dd</div>
                  <div>tr</div>
                  <div>qq</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Stories;
