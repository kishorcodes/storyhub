import laptopUser from "../assets/images/cc.svg";
import Button from "../components/common/Button";
import Footer from "../components/layout/Footer";
import LatestStories from "../components/LatestStories";
import Navbar from "../components/layout/Navbar";
import Reccomended from "../components/Reccomended";

const Home = () => {
  const scrollToReccomended = () => {
    document
      .querySelector(".reccomended")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar color={"[#F6F6FF]"} bordered={false} theme={"dark"}></Navbar>
      <div className="pt-5 md:pt-0 border-b border-[#DFDFE9] h-[550px] flex flex-col md:flex-row justify-between items-center md:pl-10 md:pr-28">
        <div className="px-6 lg:px-10 flex-col flex gap-5 lg:gap-7 h-[100%] items-start justify-center">
          <h1 className="font-montse font-medium text-3xl md:text-5xl xl:text-7xl">
            Share your story.
          </h1>
          <p className="text-lg font-normal lg:text-xl text-[#482E5B] font-arial">
            Put your story out there and give words
            <br className="hidden md:block" />
            to your thoughts.
          </p>

          <Button
            text="Start Reading"
            bgColor={"[#0029FF]"}
            fgColor={"white"}
            hoverColor={"[#001C8C]"}
            onClick={scrollToReccomended}
          />
        </div>

        <img
          className="lg:block h-auto max-w-[300px] md:max-w-sm lg:max-w-md"
          src={laptopUser}
          alt="kid-writing"
        />
      </div>
      <LatestStories></LatestStories>
      <Reccomended></Reccomended>
      <Footer></Footer>
    </>
  );
};

export default Home;
