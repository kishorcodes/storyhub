import { useNavigate } from "react-router-dom";

const ReadmoreCard = ({ story }) => {
  const navigate = useNavigate();

  const handleStoryClick = () => {
    console.log("hi");
    navigate(`/stories/${story._id}`);
  };

  return (
    <div
      onClick={handleStoryClick}
      className="w-[100%] border-b border-cyan px-5 py-4 user flex justify-start items-center gap-4 cursor-pointer"
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-start gap-3 ">
          <img
            src={story.author.picture}
            alt="author"
            className="rounded-full w-[25px]"
          />
          <p className="text-sm font-normal">{story.author.name}</p>
        </div>
        <p className="text-xs lg:text-sm font-light">{story.title}</p>
      </div>
    </div>
  );
};

export default ReadmoreCard;
