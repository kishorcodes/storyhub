import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import Discover from "./Discover";
import tick from "../../assets/images/tick.svg";
import tick2 from "../../assets/images/tick2.svg";
import ReccomendedCard from "../cards/ReccomendedCard";
import { stories } from "../../utils/data";
const Reccomended = () => {
  const [reccomended, setReccomended] = useState([]);

  useEffect(() => {
    const fetchAllStories = async () => {
      if(!reccomended) setReccomended(stories)
      try {
        const response = await axios.get("/api/stories/latest");
        setReccomended(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllStories();
  }, []);

  return (
    <section className="flex flex-col lg:flex-row justify-between reccomended">
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
            return <ReccomendedCard key={index} story={story} />;
          })}

          <p className="self-center font-medium text-[#6D6D6D] flex gap-2 items-center justify-center mt-4">
            You are all caught up.
            <img height={16} width={16} src={tick} alt="tick" />
          </p>
        </div>
      )}
      <Discover></Discover>
    </section>
  );
};

export default Reccomended;
