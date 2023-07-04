import bookmark from "../assets/images/bookmark2.svg";
import whatsapp from "../assets/images/whatsapp.svg";
import twitter from "../assets/images/twitter.svg";
import link from "../assets/images/link.svg";
import { useNavigate } from "react-router-dom";
const Story = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-100">
      <div className="flex flex-col flex-1 border border-cyan ">
        <div className="h-[70px] border border-cyan flex items-center justify-center">
          <div
            onClick={() => navigate("/write")}
            className="cursor-pointer p-3 rounded-2xl w-[80%] border border-cyan font-sm font-light"
          >
            We would appreciate if you write something
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="flex items-end justify-between px-10 py-16 py-1">
            <div className="user flex justify-start items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDE2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA5NDk2ODY&ixlib=rb-4.0.3&q=80"
                alt=""
                className="rounded-full h-[48px] w-[48px]"
              />
              <div className="flex flex-col">
                <p className="text-md font-medium">Kishor</p>
                <div className="flex gap-4 justify-center items-center">
                  <p className="text-sm font-light">Mon Feb 13 •</p>
                  <div className="text-sm font-light rounded-lg">Personal</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-5">
              <img className="h-[20px] w-[20px]" src={whatsapp} alt="" />
              <img className="h-[20px] w-[20px]" src={twitter} alt="" />
              <img className="h-[20px] w-[20px]" src={bookmark} alt="" />
              <img className="h-[20px] w-[20px]" src={link} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-400 w-[400px] h-[700px] flex flex-col"></div>
    </div>
  );
};

export default Story;
