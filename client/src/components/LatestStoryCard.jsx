const LatestStoryCard = ({
  position,
  title,
  authorName,
  authorImage,
  category,
  publishDate,
}) => {
  return (
    <div className="flex w-fit gap-7 cursor-pointer">
      <p className="text-[#38BDF8] text-3xl">{position}</p>
      <div className="p-1 gap-2.5 flex flex-col justify-start">
        <div className="user flex justify-start items-center gap-3">
          <img src={authorImage} alt="" />
          <p className="text-sm">{authorName}</p>
        </div>
        <p className="text-sm font-bold">{title}</p>

        <div className="flex gap-4 justify-content items-center">
          <p className="text-sm font-light">{publishDate}</p>
          <div className="text-sm border p-1 border-black rounded-lg">
            {category}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestStoryCard;
