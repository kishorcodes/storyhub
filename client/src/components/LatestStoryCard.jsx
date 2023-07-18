import { Link } from "react-router-dom";
import convertTimestampToFormat from "../utils/convertTimestampToText";

const LatestStoryCard = ({
  storyId,
  position,
  title,
  author,
  category,
  publishDate,
}) => {
  const formattedPublishDate = convertTimestampToFormat(publishDate);

  return (
    <Link
      to={`/stories/${storyId}`}
      className="flex w-[370px] h-[130px] gap-7 cursor-pointer rounded-lg"
    >
      <p className="text-[#38BDF8] text-3xl font-extrabold">{position}</p>
      <div className="p-1 gap-3 flex flex-col justify-start">
        <div className="user flex justify-start items-center gap-3">
          <img
            className="w-[20px] h-[20px] rounded-sm"
            src={author.picture}
            alt="author"
          />
          <Link to={`/user/${author._id}`}>
            <p className="text-sm font-medium">{author.name}</p>
          </Link>
        </div>
        <p className="text-md font-medium">{title}</p>
        <div className="flex gap-4 justify-content items-center">
          <p className="text-sm font-light">{formattedPublishDate}</p>

          <Link to={`/category/${category}`}>
            <div className="text-xs font-light p-1 border border-cyan rounded-lg">
              {category}
            </div>
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default LatestStoryCard;
