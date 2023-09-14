import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import flash from "../assets/images/flash.svg";
import heart from "../assets/images/heart.svg";
import sad from "../assets/images/sad.svg";
import shock from "../assets/images/shock.svg";
import smile from "../assets/images/smile.svg";
import Comments from "../components/Comments";
import SocialShare from "../components/SocialShare";
import MoonLoader from "../components/common/MoonLoader";
import Navbar from "../components/layout/Navbar";
import ReadMore from "../components/sections/ReadMore";
import { AuthContext } from "../context/AuthContext";
import axios from "../utils/axios";
import convertTimestampToFormat from "../utils/convertTimestampToText";

const Story = () => {
  const [story, setStory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { userProfile, isLoggedIn } = useContext(AuthContext);
  const userId = userProfile?._id;
  const { id } = useParams();
  const reactions = ["heart", "smile", "flash", "shock", "sad"];

  const handleReactionClick = async (type) => {
    if (isLoggedIn) {
      try {
        const response = await axios.post(`/api/stories/${id}/reaction`, {
          reactionType: type,
        });
        const { data } = response.data;
        setStory(data);
      } catch (error) {
        console.error("Error reacting to story:", error);
      }
    } else {
      toast.error("You need to login to react");
    }
  };

  const handleCategoryClick = () => {
    navigate(`/category/${story.category}`, {
      state: {
        title: `${story.category} Stories`,
        apiUrl: `/api/category/${story.category}`,
      },
    });
  };

  const handleAuthorClick = () => {
    navigate(`/user/${story.author._id}`, {
      state: {
        title: `${story.author.name}'s stories`,
        apiUrl: `/api/user/${story.author._id}`,
      },
    });
  };

  useEffect(() => {
    const fetchStory = async () => {
      if (id) {
        setIsLoading(true);
        try {
          const response = await axios.get(`/api/stories/${id}`);
          const { data } = response.data;
          setStory(data);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching story:", error);
          setIsLoading(false);
        }
      }
    };

    fetchStory();
  }, [id]);

  const getReactionIcon = (type) => {
    switch (type) {
      case "heart":
        return heart;
      case "smile":
        return smile;
      case "flash":
        return flash;
      case "shock":
        return shock;
      case "sad":
        return sad;
      default:
        return;
    }
  };

  return (
    <>
      {story && (
        <>
          <Navbar></Navbar>
          <div className="flex w-100">
            <div className="flex flex-col flex-1 border border-cyan ">
              <div className="h-[70px] flex items-center justify-center">
                <div
                  onClick={() => navigate("/write")}
                  className="cursor-pointer p-3.5 rounded-lg w-[93%] border border-cyan font-sm font-light"
                >
                  We would appreciate if you write something
                </div>
              </div>
              <div className="flex flex-col items-between justify-center">
                <div className="flex end gap-3 sm:gap-0 justify-between px-4 lg:px-12 lg:py-8 py-8">
                  <div className="user flex justify-start items-center gap-4">
                    <img
                      src={story.author.picture}
                      alt="author"
                      className="rounded-full h-[35px] w-[35px] md:h-[48px] md:w-[48px]"
                    />
                    <div className="flex flex-col">
                      <p
                        onClick={handleAuthorClick}
                        className="cursor-pointer text-md font-medium"
                      >
                        {story.author.name}
                      </p>
                      <div className="flex justify-start items-center">
                        <p className="text-xs lg:text-sm font-light">
                          {convertTimestampToFormat(story.publishedAt)}
                          &nbsp;&nbsp;•
                        </p>
                        &nbsp;&nbsp;
                        <div
                          onClick={handleCategoryClick}
                          className="cursor-pointer text-xs lg:text-sm font-light rounded-lg"
                        >
                          {story.category}
                        </div>
                      </div>
                    </div>
                  </div>
                  <SocialShare storyId={story._id} />
                </div>
                <div className="border-b border-cyan content flex flex-col gap-5 px-4 lg:px-12">
                  <h1 className="text-2xl lg:text-4xl">{story.title}</h1>
                  <p className="text-md lg:text-2xl font-normal text-[gray]">
                    {story.subtitle}
                  </p>
                  <div className="gap-8 pb-5 flex flex-col">
                    <div
                      dangerouslySetInnerHTML={{ __html: story.content }}
                      className="leading-7 text-md font-normal lg:text-md"
                    ></div>
                    <div className="p-3 rounded-lg border border-cyan self-center flex gap-3 items-center justify-center">
                      {reactions.map((type, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-center"
                        >
                          <img
                            onClick={() => handleReactionClick(type)}
                            className="scale-100 hover:scale-105 transition-all duration-75"
                            height={50}
                            width={50}
                            src={getReactionIcon(type)}
                            alt={type}
                          />
                          <p>{story.reactions[type]}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <Comments storyId={id} userId={userId}></Comments>
            </div>
            <ReadMore currentStoryId  = {id}></ReadMore>
          </div>
        </>
      )}
      {isLoading && <MoonLoader />}
    </>
  );
};

export default Story;
