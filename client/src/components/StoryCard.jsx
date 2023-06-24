import React from "react";
import bookmark from '../assets/images/bookmark.svg';
const StoryCard = () => {
  return (
    <div className="flex">
      <div className="p-1 gap-2.5 flex flex-col justify-start">
        <div className="user flex justify-start items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDE2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA5NDk2ODY&ixlib=rb-4.0.3&q=80"
            alt=""
            className="rounded-full h-[32px] w-[32px]"
          />
          <p className="text-md">Kishor</p>
        </div>
        <p className="text-sm lg:text-lg font-bold">
          GOVT.JOB PREPARATION AND THEIR PATHETIC WORKING ENVIRONMENT ...
        </p>
<p className="text-sm">Backfalls and history behind preparation...</p>
        <div className="flex justify-between items-center">
        <div className="flex gap-4 justify-center items-center">
        <p className="text-sm font-light">Mon Feb 13</p>
          <div className="text-sm border p-1 border-black rounded-lg">
            Self Improvment
          </div>
        </div>

        <img className="mr-6 cursor-pointer" src={bookmark} height={30} width={30} alt="bookmark-icon" />
        </div>
      </div>
      <img
        className="h-[140px] w-[250px] rounded-md"
        src="https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDE2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA5NDk2ODY&ixlib=rb-4.0.3&q=80"
        alt=""
      />
    </div>
  );
};

export default StoryCard;
