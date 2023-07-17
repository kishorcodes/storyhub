import axios from "../axios";
import { useEffect, useState } from "react";
import arrow from "../assets/images/diagonal_arrow.svg";
import LatestStoryCard from "./LatestStoryCard";

const LatestStories = () => {
  const [latestStories, setLatestStories] = useState([]);

  useEffect(() => {
    axios
      .get("/api/stories/latest")
      .then(({ data: { data } }) => {
        setLatestStories(data);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="grid relative grid-rows-6 md:grid-rows-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-start md:justify-items-center gap-4 px-3 md:px-4 pt-24 pb-10">
      {latestStories.length > 0 && (
        <p className="flex absolute top-11 left-5 lg:left-20 items-center text-sm font-medium justify-center gap-1">
          <img
            src={arrow}
            className="h-[20px] w-[20px]"
            alt="diagonal-right-arrow"
          />
          LATEST STORIES
        </p>
      )}

      {latestStories.map((story) => (
        <LatestStoryCard
          key={story._id}
          storyId={story._id}
          position={`0${latestStories.indexOf(story) + 1}`}
          author={story.author}
          title={story.title}
          publishDate={story.publishedAt}
          category={story.category}
        />
      ))}
    </div>
  );
};

export default LatestStories;
