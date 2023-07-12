import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import bookmark from "../assets/images/bookmark.svg";
const StoryCard = ({
  author,
  authorPicture,
  title,
  subtitle,
  category,
  publishedAt,
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center">
      <div
        onClick={() => navigate("/about")}
        className="p-1 gap-2 flex w-[75%] flex-col"
      >
        <div className="user flex justify-start items-center gap-2">
          <img
            src={authorPicture}
            alt="author-profile"
            className="rounded-full h-[32px] w-[32px]"
          />
          <p className="text-md font-medium">{author}</p>
        </div>
        <div className="pr-5 flex flex-col gap-1.5">
          <p className="text-sm lg:text-xl font-medium cursor-pointer">
            {title}
          </p>
          <p className="text-sm font-normal cursor-pointer">{subtitle}</p>
        </div>
        <div className="flex justify-between items-center w-100">
          <div className="flex gap-4 justify-center items-center">
            <p className="text-sm font-light">{publishedAt}</p>
            <div className="text-sm font-light border p-1 border-cyan rounded-lg">
              {category}
            </div>
          </div>

          <img
            className="mr-6 cursor-pointer hover:scale-105 duration-75 transition-all"
            src={bookmark}
            height={30}
            width={30}
            alt="bookmark-icon"
            onClick={() => toast.success("Successfully Added")}
          />
        </div>
      </div>
      <img
        className="h-[140px] w-[250px] rounded-md"
        src="https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDE2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA5NDk2ODY&ixlib=rb-4.0.3&q=80"
        alt=""
      />
    </div>
  );
};

export default StoryCard;
