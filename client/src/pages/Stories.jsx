import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import MoonLoader from "../components/MoonLoader";
import Navbar from "../components/Navbar";
import StoryCard from "../components/StoryCard";
import axios from "../utils/axios";
const Stories = () => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    console.log(location.state.apiParams);
    axios
      .get(location.state.apiUrl, location.state.apiParams || {})
      .then(({ data: { data } }) => {
        setStories(data);
        setIsLoading(false);
      });
  }, [location]);

  return (
    <>
      <Navbar color={"[#0667AE]"} bordered={false}></Navbar>
      <div className="flex flex-col min-h-[100vh] px-16 py-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl">{location?.state?.title}</h1>
          <select
            id="default"
            class="outline-none bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg block w-25 p-2.5"
          >
            <option selected value="latest">
              Latest first
            </option>
            <option value="oldest">Oldest first</option>
          </select>
        </div>
        <div className="mt-8 flex flex-wrap  justify-between items-start gap-20">
          {isLoading ? (
            <MoonLoader />
          ) : stories && stories.length > 0 ? (
            stories.map((story, index) => <StoryCard story={story} />)
          ) : (
            "No stories found"
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Stories;
