import { useEffect, useState } from "react";
import tick from "../assets/images/tick.svg";
import Discover from "./Discover";
import StoryCard from "./StoryCard";
import axios from "axios";
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
        <div className="flex w-[90%] flex-col gap-8 py-10 px-3 md:px-20 border border-[#e5e7eb]">
          {reccomended.map((story, index) => {
            return (
              <StoryCard
                key={index}
                storyId={story._id}
                author={story.author.name}
                authorPicture={story.author.picture}
                title={story.title}
                subtitle={story.subtitle}
                category={story.category}
                publishedAt={story.publishedAt}
              ></StoryCard>
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
