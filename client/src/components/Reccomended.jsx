import Discover from "./Discover";
import StoryCard from "./StoryCard";

const Reccomended = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between reccomended">
      <div className="flex flex-col gap-8 py-10 px-3 md:px-20 border border-[#e5e7eb]">
        {Array.from({ length: 6 }).map((element, index) => {
          return <StoryCard key={index} onClick={() => {}}></StoryCard>;
        })}
      </div>
      <Discover></Discover>
    </div>
  );
};

export default Reccomended;
