import { useEffect } from "react";
import close from "../assets/images/close.svg";
import Button from "./Button";
const Publish = ({ setPublishMode, content }) => {
  const categories = [
    "Personal",
    "Finance",
    "Health & Fitness",
    "Politics",
    "Entertainment",
    "Relationships",
    "Science and Technology",
    "Self improvment",
    "Environment",
    "Others",
  ];

  useEffect(() => {
    window.onpopstate = (e) => {
      console.log("pressed");
    };
  });
  return (
    <>
      <img
        src={close}
        className="h-[20px] w-[20px] lg:h-[25px] lg:w-[25px] absolute top-6 right-6 cursor-pointer"
        alt="close"
        onClick={() => {
          setPublishMode(false);
        }}
      />
      <div className="px-5 py-5 lg:p-28 flex flex-col md:flex-row items-center justify-center gap-10 min-h-[80vh] w-[100%]">
        <div className="flex flex-col justify-start gap-5 w-[100%] ">
          <p className="text-md font-semibold">Story Preview</p>
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            className="p-5 rounded-md bg-[#F1F5F9] min-h-[250px] h-fit w-[100%]"
          ></div>
          <input
            type="text"
            class="placeholder:bold w-full text-lg border-b-2 border-gray-400 outline-none focus:border-blue-400"
            placeholder="Write a preview title"
          />
          <input
            type="text"
            class="w-full text-sm border-b-2 border-gray-400 outline-none focus:border-blue-400"
            placeholder="Write a preview subtitle..."
          />
          <p className="text-sm text-[#828282]">
            <span className="font-semibold">Note: &nbsp;</span>
            Changes here will affect how your story appears in public places
            like homepage, not the contents of the story itself.
          </p>
        </div>

        <div className="flex flex-col gap-5 w-[100%]">
          <div className="flex gap-3 items-center justify-start">
            <p className="text-md font-semibold">Publishing to: </p>

            <input
              type="text"
              class="placeholder:bold w-50 text-md border-b-2 border-gray-400 outline-none focus:border-blue-400"
              placeholder="Your Name"
            />
          </div>
          <p className="text-sm">
            Choose topic so readers know what your story is about
          </p>
          <div>
            <select
              id="default"
              class="outline-none border border-gray-300 text-gray-900 text-sm rounded-lg block w-85 p-2.5"
            >
              <option>Choose a country</option>

              {categories.map((category) => {
                return (
                  <option selected={category === "Personal"} value={category}>
                    {category}
                  </option>
                );
              })}
            </select>
          </div>

          <p className="text-xs">
            We do not collect of your data. It's a free platform where you can
            share anything you like without login.
          </p>

          <div className="">
            <Button
              text={"Publish"}
              bgColor={"green-600"}
              fgColor={"white"}
              onClick={() => {
                console.log("publishing...");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Publish;
