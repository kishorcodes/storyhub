import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import bookmark from "../assets/images/bookmark.svg";
import convertTimestampToText from "../utils/convertTimestampToText";
const ReccomendedCard = ({
  storyId,
  author,
  thumbnail,
  title,
  subtitle,
  category,
  publishedAt,
}) => {
  const saveBookmark = (storyId) => {
    return new Promise((resolve, reject) => {
      const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
      if (bookmarks.includes(storyId)) reject();
      else {
        bookmarks.push(storyId);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
        resolve();
      }
    });
  };

  return (
    <div className="flex justify-between items-center border border-[#DFDFE9] text-black rounded-lg p-3">
      <div className="flex flex-col w-[100%] md:w-[75%] p-1">
        <div className="flex justify-start items-center gap-2">
          <img
            src={author.picture}
            alt="author-profile"
            className="h-[32px] w-[32px] rounded-full"
          />
          <Link to={`/user/${author._id}`}>
            <p className="text-md font-medium">{author.name}</p>
          </Link>
        </div>
        <Link to={`/stories/${storyId}`}>
          <div className="flex flex-col pr-5 gap-1.5 mt-2.5">
            <p className="text-sm lg:text-xl font-medium cursor-pointer">
              {title}
            </p>
            <p className="text-sm font-normal cursor-pointer">{subtitle}</p>
          </div>
        </Link>

        <div className="flex justify-between items-center w-100">
          <div className="flex justify-center items-center gap-4">
            <p className="text-sm font-light">
              {convertTimestampToText(publishedAt)}&nbsp;&nbsp;•&nbsp;&nbsp;
              <Link to={`/category/${category}`}>{category}</Link>
            </p>
          </div>

          <img
            className="transition-all hover:scale-105 duration-75 mr-6 cursor-pointer"
            src={bookmark}
            height={30}
            width={30}
            alt="bookmark"
            onClick={() =>
              toast.promise(saveBookmark(storyId), {
                loading: "Saving bookmark...",
                success: <b>Bookmark saved!</b>,
                error: <b>Bookmark already exists.</b>,
              })
            }
          />
        </div>
      </div>
      <img
        className="hidden md:block h-[140px] w-[250px] rounded-md"
        src={thumbnail}
        alt="story-thumbnail"
      />
    </div>
  );
};

export default ReccomendedCard;
