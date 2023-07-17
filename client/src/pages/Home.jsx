import laptopUser from "../assets/images/writing.png";
import Footer from "../components/Footer";
import LatestStories from "../components/LatestStories";
import Navbar from "../components/Navbar";
import Reccomended from "../components/Reccomended";
import Button from "../components/Button";
const Home = () => {
  const scrollToReccomended = () => {
    document
      .querySelector(".reccomended")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar color={"[#0667AE]"} bordered={false}></Navbar>
      <div className="pt-5 md:pt-0 border-b border-black bg-[#0667AE] h-[550px] flex flex-col md:flex-row justify-between items-center md:pl-10 md:pr-28">
        <div className="px-6 lg:px-10 flex-col flex gap-5 lg:gap-7 h-[100%] items-start justify-center">
          <h1 className="font-montse text-[#FFEB3B] text-3xl md:text-5xl xl:text-7xl">
            Share your story.
          </h1>
          <p className="text-lg font-normal lg:text-xl text-white font-arial">
            Put your story out there and give words
            <br className="hidden md:block" />
            to your thoughts.
          </p>

          <Button
            text="Start Reading"
            bgColor={"[#7CB342]"}
            fgColor={"white"}
            hoverColor={"[#388E3C]"}
            onClick={scrollToReccomended}
          />
        </div>

        <img
          className="lg:block h-auto max-w-[300px] md:max-w-sm lg:max-w-lg"
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
