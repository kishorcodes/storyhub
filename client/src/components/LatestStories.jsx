import axios from "axios";
import { useEffect, useState } from "react";
import arrow from "../assets/images/diagonal_arrow.svg";
import LatestStoryCard from "./LatestStoryCard";

const LatestStories = () => {
  const [latestStories, setLatestStories] = useState(null);

  useEffect(() => {
    axios
      .get("/api/stories/latest")
      .then((res) => {
        setLatestStories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {latestStories ? (
        <div className="grid relative grid-rows-6 md:grid-rows-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-start md:place-items-center gap-10 px-6 lg:px-2 pt-24 pb-16">
          <p className="flex absolute top-11 left-5 lg:left-16 items-center text-sm font-medium justify-center gap-1">
            <img
              src={arrow}
              className="h-[20px] w-[20px]"
              alt="diagonal-right-arrow"
            />
            LATEST STORIES
          </p>
          {latestStories.map((story, index) => {
            return (
              <LatestStoryCard
                key={index}
                position={"0" + (index + 1)}
                authorName={story.authorName}
                authorImage={story.authorImage}
                title={story.title}
                publishDate={story.publishDate}
                category={story.category}
              ></LatestStoryCard>
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default LatestStories;
