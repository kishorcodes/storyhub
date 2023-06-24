import StoryCard from "./StoryCard";
import Discover from "./Discover";
const Reccomended = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-8 py-10 px-3 md:px-20 border border-[#e5e7eb]">
        <StoryCard></StoryCard>
        <StoryCard></StoryCard>

        <StoryCard></StoryCard>

        <StoryCard></StoryCard>

        <StoryCard></StoryCard>

        <StoryCard></StoryCard>
      </div>

      <Discover></Discover>
    </div>
  );
};

export default Reccomended;
