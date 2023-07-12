import { Link } from "react-router-dom";
import convertTimestampToFormat from "../utils/convertTimestampToFormat";
const LatestStoryCard = ({
  storyId,
  position,
  title,
  authorName,
  authorImage,
  category,
  publishDate,
}) => {
  return (
    <Link to={`/stories/${storyId}`}>
      <div className="flex w-fit max-w-[400px] gap-7 cursor-pointer">
        <p className="text-[#38BDF8] text-3xl font-extrabold">{position}</p>
        <div className="p-1 gap-3 flex flex-col justify-start">
          <div className="user flex justify-start items-center gap-3">
            <img
              className="w-[20px] h-[20px] rounded-sm"
              src={authorImage}
              alt=""
            />
            <p className="text-sm font-medium">{authorName}</p>
          </div>
          <p className="text-md font-medium">{title}</p>

          <div className="flex gap-4 justify-content items-center">
            <p className="text-sm font-light">
              {convertTimestampToFormat(publishDate)}
            </p>
            <div className="text-sm font-light border p-1 border-cyan rounded-lg">
              {category}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LatestStoryCard;
