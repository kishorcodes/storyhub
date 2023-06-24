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
    "Environment,Others",
  ]);
  return (
    <div className="w-full lg:w-2/5 h-fit py-12 px-8 flex flex-col justify-center gap-3 items-start border-b border-t border-[#e5e7eb] ">
      <p>DISCOVER MORE OF WHAT MATTERS TO YOU</p>
      <div className="flex flex-wrap gap-1.5">
        {categories.map((category) => (
          <div className="flex items-center justify-center px-1 py-1 text-sm border border-cyan rounded-md hover:border-black cursor-pointer">
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
