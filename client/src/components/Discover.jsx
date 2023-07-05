import { useState } from "react";
const Discover = () => {
  const [categories, setCategories] = useState([
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
  ]);
  return (
    <div className="sticky top-0 w-full lg:w-2/5 h-fit py-12 px-8 flex flex-col justify-center gap-3 items-start border-b border-t border-[#e5e7eb] ">
      <p className="font-semibold">DISCOVER MORE OF WHAT MATTERS TO YOU</p>
      <div className="flex flex-wrap gap-1.5">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex items-center justify-center text-sm font-normal px-1 py-1 border border-cyan rounded-md cursor-pointer hover:border-black"
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
