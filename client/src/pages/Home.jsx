import laptopUser from "../assets/images/laptop_user.svg";
import Footer from "../components/Footer";
import LatestStories from "../components/LatestStories";
import Navbar from "../components/Navbar";
import Reccomended from "../components/Reccomended";
import Button from "../components/Button";
const Home = () => {
  return (
    <>
      <Navbar color={"[#0667AE]"} bordered={false}></Navbar>
      <div className="pt-5 md:pt-0 border-b border-black bg-[#0667AE] h-[550px] flex flex-col md:flex-row justify-between items-center md:pl-10 md:pr-24">
        <div className="px-6 lg:px-10 flex-col flex gap-5 lg:gap-7 h-[100%] items-start justify-center">
          <h1 className="font-montse text-[#FFEB3B] text-3xl md:text-5xl lg:text-7xl">
            Share your story.
          </h1>
          <p className="text-lg lg:text-xl text-white font-arial">
            Put your story out there and let the world{" "}
            <br className="hidden md:block" />
            know what you have to say.
          </p>

          <Button
            text="Start Reading"
            bgColor={"[#7CB342]"}
            fgColor={"white"}
            hoverColor={"[#388E3C]"}
            onClick={() => {
              document
                .querySelector(".reccomended")
                .scrollIntoView({ behavior: "smooth" });
            }}
          ></Button>
        </div>

        <img
          className="lg:block max-w-[300px] md:max-w-sm lg:max-w-xl xl-max-w-2xl h-auto"
          src={laptopUser}
          alt="laptop-user"
        />
      </div>
      <LatestStories></LatestStories>
      <Reccomended></Reccomended>
      <Footer></Footer>
    </>
  );
};

export default Home;
