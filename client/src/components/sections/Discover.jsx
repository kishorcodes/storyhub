import { useNavigate } from "react-router-dom";
const Discover = () => {
  const navigate = useNavigate();

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

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`, {
      state: {
        title: `${category} Stories`,
        apiUrl: `/api/category/${category}`,
      },
    });
  };

  return (
    <aside className="sticky top-0 w-full lg:w-2/5 h-fit py-12 px-8 flex flex-col justify-center gap-3 items-start border-b border-t border-[#e5e7eb] ">
      <p className="text-sm font-medium">
        DISCOVER MORE OF WHAT MATTERS TO YOU
      </p>
      <div className="flex flex-wrap gap-1.5">
        {categories.map((category, index) => (
          <div
            onClick={() => handleCategoryClick(category)}
            key={index}
            className="flex items-center justify-center text-xs text-[#482E5B] font-normal px-3 py-2 border border-cyan rounded-md cursor-pointer"
          >
            {category}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Discover;
