import { useContext } from "react";
import { toast } from "react-hot-toast";
import { TwitterShareButton, WhatsappShareButton } from "react-share";
import bookmark from "../assets/images/bookmark2.svg";
import link from "../assets/images/link.svg";
import twitter from "../assets/images/twitter.svg";
import whatsapp from "../assets/images/whatsapp.svg";
import { AuthContext } from "../context/AuthContext";
import axios from "../utils/axios";
const SocialShare = ({ storyId }) => {
  const clientUrl = process.env.REACT_APP_CLIENT_URL;
  const storyUrl = `${clientUrl}/stories/${storyId}`;
  const { userProfile, isLoggedIn } = useContext(AuthContext);

  const copyTextToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Link copied to clipboard");
  };

  const saveBookmark = async () => {
    if (!isLoggedIn) return toast.error("You must be logged in");
    try {
      await axios.post("/api/bookmarks", { storyId, userId: userProfile?._id });
      toast.success(<b>Bookmark saved!</b>);
    } catch (error) {
      toast.error(<b>Bookmark already exists.</b>);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center gap-2 lg:gap-5">
        <div>
          <WhatsappShareButton
            url={storyUrl}
            title="Read this trending article from Storyhub"
          >
            <img className="h-[18px] w-[18px]" src={whatsapp} alt="" />
          </WhatsappShareButton>
        </div>
        <div>
          <TwitterShareButton
            url={storyUrl}
            title="Read this trending article from Storyhub"
            hashtag="#storyhub"
          >
            <img className="h-[18px] w-[18px]" src={twitter} alt="" />
          </TwitterShareButton>
        </div>

        <div onClick={() => saveBookmark()}>
          <img
            className="h-[18px] w-[18px] mb-1.5 cursor-pointer"
            src={bookmark}
            alt="bookmark"
          />
        </div>

        <div onClick={() => copyTextToClipboard(storyUrl)}>
          <img
            className="h-[18px] w-[18px] mb-1.5 cursor-pointer"
            src={link}
            alt="copy-link"
          />
        </div>
      </div>
    </>
  );
};

export default SocialShare;
