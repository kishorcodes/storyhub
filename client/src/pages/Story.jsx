import bookmark from "../assets/images/bookmark2.svg";
import whatsapp from "../assets/images/whatsapp.svg";
import twitter from "../assets/images/twitter.svg";
import link from "../assets/images/link.svg";
import ReadmoreCard from "../components/ReadmoreCard";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
const Story = () => {
  const navigate = useNavigate();

  return (
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
          <div className="flex flex-col">
            <div className="flex items-end justify-between px-4 lg:px-12 lg:py-12 py-8">
              <div className="user flex justify-start items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDE2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA5NDk2ODY&ixlib=rb-4.0.3&q=80"
                  alt=""
                  className="rounded-full h-[48px] w-[48px]"
                />
                <div className="flex flex-col">
                  <p className="text-md font-medium">Kishor</p>
                  <div className="flex gap-4 justify-center items-center">
                    <p className="text-xs lg:text-sm font-light">
                      Mon Feb 13 •
                    </p>
                    <div className="text-xs lg:text-sm font-light rounded-lg">
                      Personal
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-5">
                <img className="h-[18px] w-[18px]" src={whatsapp} alt="" />
                <img className="h-[18px] w-[18px]" src={twitter} alt="" />
                <img className="h-[18px] w-[18px]" src={bookmark} alt="" />
                <img className="h-[18px] w-[18px]" src={link} alt="" />
              </div>
            </div>

            <div className="content flex flex-col gap-5 px-4 lg:px-12">
              <h1 className="text-2xl lg:text-4xl">
                GOVT.JOB PREPARATION AND THEIR PATHETIC WORKING ENVIRONMENT
              </h1>
              <p className="text-md lg:text-2xl font-normal text-[gray]">
                Backfalls and history behind preparation
              </p>
              <p className="text-sm font-normal lg:text-md leading-8">
                So hey this is ankit.I m a govt job aspirant and here to give u
                some backfalls, suggestions, , some queries and life after govt
                job.I m preparing for last three years or wasted my three years
                to get a 60k/month job. I barely study 2 hrs a day and rest is
                god.First suggestion is that if u want to prepare for such exams
                then never go for private bachelor degree +SSC preparation for
                three years.because if u have that caliber then u would easily
                crack this exam within 6 months hardcore prep after completing
                your regular bachelors degree.I also opted for 3years
                corresponding bachelor + SSC exam prep which made me pathetic. I
                m a 21st century kid have no idea about college culture and how
                they live there most fav time for 3 years.I think those 3 years
                make u emotionally strong,strenghthen your mindset ,give u so
                much relationships and fill your communication gaps.When u
                prepare for govt exams u add no skill..u are like unskilled
                labour knows some englsih vocabs and how to calculate faster
                thatsit.One of the most darkest sides is the time between exam
                and and joining is about 3 years. Which left u with no hope to
                prepare.and bychance u didnt able to crack exam for 1st time its
                better to start spare parts business or any other work. Though
                after cracking govt exams u get a lot from society ,govt and
                lauds everywhere because of the respect which is fitted in the
                minds of traditional indian society and parents about govt
                job(inse mt lado inka ladka daroga h delhi police mei).But i
                think todays youngesters demand is money not daroga.then why to
                waste time.you have no time boundation of work in govt
                offices,one can do according to his/her will.one becomes
                pathetic after joining as govt employee.They basically use no
                mind and work according to higher authorities.This is the reason
                why they have slowest promotion rate and get salary hikes at
                snails pace,also govt employees are not allowed to involve in
                any other business except their jobs as they already pay you in
                crores(parody).While if u do business,work for any startup,You
                get idea about different zones and experiences and get promotion
                and money according to work.You search out different stratigies
                to keep yourself at top.So if u want to prepare for UPSC then it
                may be ur passion but ssc and other one day exams can shoot you
                out of the game of life.
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-cyan hidden lg:flex flex-col justify-start items-center w-[400px] h-[700px]">
          <div className="border-b border-cyan relative py-24 px-1 flex w-[100%] h-[150px] flex-col items-center justify-center">
            <button
              type="button"
              className="scale-100 w-[96%] hover:scale-105  transition-all duration-75 ease-in inline-flex justify-center items-center font-semibold rounded-lg px-5 py-3 text-md bg-black text-white hover:text-white"
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
            return <ReadmoreCard />;
          })}
        </div>
      </div>
    </>
  );
};

export default Story;
