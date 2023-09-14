import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import ReadMoreCard from "../cards/ReadMoreCard";
const ReadMore = ({ currentStoryId }) => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchAllStories = async () => {
      try {
        const response = await axios.get("/api/stories/latest");
        setStories(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllStories();
  }, []);
  return (
    <>
      {stories ? (
        <aside className="sticky top-0 border-t border-cyan hidden lg:flex flex-col justify-start items-center w-[370px] h-[100%]">
          <div className="border-b border-cyan relative px-1 flex w-[100%] h-[180px] flex-col items-center justify-center">
            <button
              type="button"
              className="w-[96%]  transition-all duration-75 ease-in inline-flex justify-center items-center font-semibold rounded-lg px-5 py-3 text-md bg-black text-white hover:text-white"
              id="tk-dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              Write
            </button>
            <h1 className="absolute left-1.3 bottom-1 font-light self-start ml-2">
              Read More From People!
            </h1>
          </div>
          {stories.map((story, index) => {
            return story._id !== currentStoryId ? (
              <ReadMoreCard story={story} key={index} />
            ) : null;
          })}
        </aside>
      ) : null}
    </>
  );
};

export default ReadMore;
