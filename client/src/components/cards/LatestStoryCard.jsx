import { useNavigate } from "react-router-dom";
import convertTimestampToFormat from "../../utils/convertTimestampToText";
const LatestStoryCard = ({ story }) => {
  const formattedPublishDate = convertTimestampToFormat(story.publishedAt);
  const navigate = useNavigate();

  const handleStoryClick = () => {
    navigate(`/stories/${story._id}`);
  };

  return (
    <div
      onClick={handleStoryClick}
      className="flex w-[370px] h-[130px] gap-7 cursor-pointer"
    >
      <p className="text-[#5F79FC] text-3xl font-extrabold">{story.position}</p>
      <div className="p-1 gap-3 flex flex-col justify-start">
        <div className="user flex justify-start items-center gap-3">
          <img
            className="w-[20px] h-[20px] rounded-sm"
            src={story.author.picture}
            alt="author"
          />
          <p className="text-sm font-medium">{story.author.name}</p>
        </div>
        <p className="text-md font-medium">{story.title}</p>
        <div className="flex gap-4 justify-content items-center">
          <p className="text-sm font-light">{formattedPublishDate}</p>
          <div className="text-xs font-light p-1 border border-cyan rounded-lg">
            {story.category}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestStoryCard;
