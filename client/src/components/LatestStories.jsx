import { useEffect, useState } from "react";
import arrow from "../assets/images/diagonal_arrow.svg";
import axios from "../utils/axios";
import LatestStoryCard from "./cards/LatestStoryCard";

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
    <div className="flex flex-col gap-6 px-5 md:px-20 pt-16 pb-10">
      {latestStories.length > 0 && (
        <p className="flex items-center justify-start text-sm md:text-md font-medium gap-1">
          <img
            src={arrow}
            className="h-[20px] w-[20px]"
            alt="diagonal-right-arrow"
          />
          LATEST STORIES
        </p>
      )}

      <div className="flex flex-wrap justify-between items-start gap-y-4">
        {latestStories.map((story) => (
          <LatestStoryCard key={story._id} story={story} />
        ))}
      </div>
    </div>
  );
};

export default LatestStories;
