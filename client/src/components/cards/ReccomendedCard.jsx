import { useContext } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import bookmark from "../../assets/images/bookmark.svg";
import { AuthContext } from "../../context/AuthContext";
import axios from "../../utils/axios";
import convertTimestampToText from "../../utils/convertTimestampToText";
const ReccomendedCard = ({ story }) => {
  const handleStoryClick = () => {
    navigate(`/stories/${story._id}`);
  };

  const navigate = useNavigate();
  const { userProfile } = useContext(AuthContext);
  const userId = userProfile?._id;

  const saveBookmark = (storyId) => {
    return new Promise((resolve, reject) => {
      axios
        .post("/api/bookmarks", { storyId: story.storyId, userId })
        .then((res) => {
          resolve();
        })
        .catch(() => reject());
    });
  };

  return (
    <div
      onClick={handleStoryClick}
      className="flex justify-between items-center border border-[#DFDFE9] text-black rounded-lg p-3 cursor-pointer"
    >
      <div className="flex flex-col w-[100%] md:w-[75%] p-1">
        <div className="flex justify-start items-center gap-2">
          <img
            src={story.author.picture}
            alt="author-profile"
            className="h-[32px] w-[32px] rounded-full"
          />
          <p className="text-md font-medium">{story.author.name}</p>
        </div>

        <div className="flex flex-col pr-5 gap-1.5 mt-2.5">
          <p className="text-sm lg:text-xl font-medium">{story.title}</p>
          <p className="text-sm font-normal">{story.subtitle}</p>
        </div>

        <div className="flex justify-between items-center w-100">
          <div className="flex justify-center items-center gap-4">
            <p className="text-sm font-light">
              {convertTimestampToText(story.publishedAt)}
              &nbsp;&nbsp;•&nbsp;&nbsp;
              {story.category}
            </p>
          </div>

          <img
            className="transition-all hover:scale-105 duration-75 mr-6"
            src={bookmark}
            height={30}
            width={30}
            alt="bookmark"
            onClick={() =>
              toast.promise(saveBookmark(story.storyId), {
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
        src={story.thumbnail}
        alt="story-thumbnail"
      />
    </div>
  );
};

export default ReccomendedCard;
