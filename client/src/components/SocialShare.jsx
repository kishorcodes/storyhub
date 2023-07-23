import link from "../assets/images/link.svg";
import twitter from "../assets/images/twitter.svg";
import whatsapp from "../assets/images/whatsapp.svg";
import bookmark from "../assets/images/bookmark2.svg";

const SocialShare = () => {
  return (
    <div className="flex items-center justify-center gap-2 lg:gap-5">
      <img className="h-[18px] w-[18px]" src={whatsapp} alt="" />
      <img className="h-[18px] w-[18px]" src={twitter} alt="" />
      <img className="h-[18px] w-[18px]" src={bookmark} alt="" />
      <img className="h-[18px] w-[18px]" src={link} alt="" />
    </div>
  );
};

export default SocialShare;
