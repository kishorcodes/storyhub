import { useNavigate } from "react-router-dom";
import convertTimestampToText from "../utils/convertTimestampToText";
const StoryCard = ({ story }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/stories/${story._id}`)}
      className="flex flex-col bg-white border border-[#DFDFE9] rounded-lg min-h-[380px] w-[380px] cursor-pointer"
      to={`/stories/${story._id}`}
    >
      <img src={story.thumbnail} className="h-[250px] rounded-t-lg" alt="thumbnail" />
      <div className="p-5 flex flex-col justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-lg">{story.title}</h1>
          <p>{story.subtitle}</p>
        </div>
        <div className="flex justify-start items-center gap-4">
          <p className="text-sm">{story.author.name}</p>
          <p className="text-sm">{convertTimestampToText(story.publishedAt)}</p>
          <p className="text-sm">{story.category}</p>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
