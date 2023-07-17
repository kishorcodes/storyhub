import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import bookmark from "../assets/images/bookmark2.svg";
import flash from "../assets/images/flash.svg";
import heart from "../assets/images/heart.svg";
import link from "../assets/images/link.svg";
import sad from "../assets/images/sad.svg";
import shock from "../assets/images/shock.svg";
import smile from "../assets/images/smile.svg";
import twitter from "../assets/images/twitter.svg";
import whatsapp from "../assets/images/whatsapp.svg";
import axios from "../axios";
import Comments from "../components/Comments";
import MoonLoader from "../components/MoonLoader";
import Navbar from "../components/Navbar";
import ReadmoreCard from "../components/ReadmoreCard";
import convertTimestampToFormat from "../utils/convertTimestampToText";
const Story = () => {
  const { userProfile } = useContext(AuthContext);
  const userId = userProfile?._id;
  const [story, setStory] = useState(null);
  const { id } = useParams();
  const reactions = ["heart", "smile", "flash", "shock", "sad"];
  useEffect(() => {
    if (id) {
      axios
        .get(`/api/stories/${id}`)
        .then(({ data: { data } }) => {
          setStory(data);
        })
        .catch(() => {});
    }
  }, []);
  const navigate = useNavigate();

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
      {story ? (
        <>
          <Navbar theme={"dark"} color="white"></Navbar>
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
                      <p className="cursor-pointer text-md font-medium">
                        {story.author.name}
                      </p>
                      <div className="flex justify-center items-center">
                        <p className="text-xs lg:text-sm font-light">
                          {convertTimestampToFormat(story.publishedAt)}
                          &nbsp;&nbsp;•
                        </p>
                        &nbsp;&nbsp;
                        <div className="cursor-pointer text-xs lg:text-sm font-light rounded-lg">
                          {story.category}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2 lg:gap-5">
                    <img className="h-[18px] w-[18px]" src={whatsapp} alt="" />
                    <img className="h-[18px] w-[18px]" src={twitter} alt="" />
                    <img className="h-[18px] w-[18px]" src={bookmark} alt="" />
                    <img className="h-[18px] w-[18px]" src={link} alt="" />
                  </div>
                </div>

                <div className="border-b border-cyan content flex flex-col gap-5 px-4 lg:px-12">
                  <h1 className="text-2xl lg:text-4xl">{story.title}</h1>
                  <p className="text-md lg:text-2xl font-normal text-[gray]">
                    {story.subtitle}
                  </p>
                  <div className="gap-8 pb-5 flex flex-col">
                    <p
                      dangerouslySetInnerHTML={{ __html: story.content }}
                      className="text-md font-normal lg:text-md leading-8"
                    ></p>
                    <div className="p-3 rounded-lg border border-cyan self-center flex gap-3 items-center justify-center">
                      {reactions.map((type) => (
                        <div className="flex items-center justify-center">
                          <img
                            onClick={() => {
                              axios
                                .post(`/api/stories/${id}/reaction`, {
                                  reactionType: type,
                                })
                                .then(({ data: { data } }) => {
                                  setStory(data);
                                })
                                .catch(() => {});
                            }}
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
              <Comments storyId={story._id} userId={userId}></Comments>
            </div>
            <div className="border-t border-cyan hidden lg:flex flex-col justify-start items-center w-[400px] h-[700px]">
              <div className="border-b border-cyan relative py-24 px-1 flex w-[100%] h-[150px] flex-col items-center justify-center">
                <button
                  type="button"
                  className="w-[96%]  transition-all duration-75 ease-in inline-flex justify-center items-center font-semibold rounded-lg px-5 py-3 text-md bg-black text-white hover:text-white"
                  id="tk-dropdown"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  Write
                </button>
                <h1 className="absolute left-1.3 bottom-1 font-light self-start ml-2">
                  Read More From People!
                </h1>
              </div>
              {Array.from({ length: 6 }).map((element, index) => {
                return <ReadmoreCard key={index} />;
              })}
            </div>
          </div>
        </>
      ) : (
        <MoonLoader></MoonLoader>
      )}
    </>
  );
};

export default Story;
