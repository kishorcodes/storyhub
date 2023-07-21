import { useEffect, useState } from "react";
import tick from "../assets/images/tick.svg";
import axios from "../axios";
import Discover from "./Discover";
import ReccomendedCard from "./ReccomendedCard";
import tick2 from "../assets/images/tick2.svg";
const Reccomended = () => {
  const [reccomended, setReccomended] = useState([]);
  useEffect(() => {
    axios.get("/api/stories/all").then(({ data: { data } }) => {
      setReccomended(data);
    });
  }, []);
  return (
    <div className="flex flex-col lg:flex-row justify-between reccomended">
      {reccomended && (
        <div className="flex w-[100%] md:w-[90%] flex-col gap-3 lg:gap-8 py-10 px-5 md:px-20 border border-[#e5e7eb]">
          <p className="flex items-center justify-start text-sm md:text-md font-medium gap-1">
            <img
              src={tick2}
              className="h-[20px] w-[20px]"
              alt="diagonal-right-arrow"
            />
            RECCOMENDED
          </p>

          {reccomended.map((story, index) => {
            return (
              <ReccomendedCard
                key={index}
                storyId={story._id}
                author={story.author}
                title={story.title}
                subtitle={story.subtitle}
                thumbnail={story.thumbnail}
                category={story.category}
                publishedAt={story.publishedAt}
              />
            );
          })}
          <p className="self-center font-medium text-[#6D6D6D] flex gap-2 items-center justify-center">
            You are all caught up.
            <img height={16} width={16} src={tick} alt="tick" />
          </p>
        </div>
      )}
      <Discover></Discover>
    </div>
  );
};

export default Reccomended;
