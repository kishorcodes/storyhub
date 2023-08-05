import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import StoryCard from "../components/cards/StoryCard";
import MoonLoader from "../components/common/MoonLoader";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import axios from "../utils/axios";
const Stories = () => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortCriteria, setSortCriteria] = useState("latest");

  const location = useLocation();

  useEffect(() => {
    axios.get(location.state.apiUrl).then(({ data: { data } }) => {
      setStories(data);
      setIsLoading(false);
    });
  }, [location]);

  useEffect(() => {
    console.log(sortCriteria);
  }, [sortCriteria]);
  return (
    <>
      <Navbar color={"[#0667AE]"} bordered={false}></Navbar>
      <div className="flex flex-col min-h-[100vh] px-16 py-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl">{location?.state?.title}</h1>
          {stories && stories.length > 0 && (
            <select
              id="default"
              defaultValue={"Latest first"}
              onChange={(e) => setSortCriteria(e.target.value)}
              className="outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg block w-25 p-2.5"
            >
              <option value="latest">Latest first</option>
              <option value="oldest">Oldest first</option>
            </select>
          )}
        </div>
        {isLoading ? (
          <MoonLoader />
        ) : stories && stories.length > 0 ? (
          <div
            className={`mt-8 flex flex-wrap justify-between items-start gap-20`}
          >
            {(sortCriteria === "latest"
              ? stories.slice().reverse()
              : stories
            ).map((story, index) => (
              <StoryCard key={story._id} story={story} />
            ))}
          </div>
        ) : (
          <p className="text-xl mt-5">No stories found</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Stories;
