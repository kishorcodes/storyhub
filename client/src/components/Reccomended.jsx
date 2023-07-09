import { useState } from "react";
import tick from "../assets/images/tick.svg";
import Discover from "./Discover";
import StoryCard from "./StoryCard";
const Reccomended = () => {
  const [reccomended,setReccomended] = useState([
    
  ])
  return (
    <div className="flex flex-col lg:flex-row justify-between reccomended">
      <div className="flex flex-col gap-8 py-10 px-3 md:px-20 border border-[#e5e7eb]">
        {Array.from({ length: 6 }).map((element, index) => {
          return <StoryCard key={index} onClick={() => {}}></StoryCard>;
        })}
        <p className="self-center font-medium text-[#6D6D6D] flex gap-2 items-center justify-center">
          You are all caught up.
          <img height={16} width={16} src={tick} alt="tick" />
        </p>
      </div>
      <Discover></Discover>
    </div>
  );
};

export default Reccomended;
