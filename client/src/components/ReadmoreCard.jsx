
const ReadmoreCard = () => {
  return (
    <div className="border-b border-cyan px-5 py-4 user flex justify-start items-center gap-4 cursor-pointer">
      <div className="flex flex-col gap-3">
    <div className="flex items-center justify-start gap-3 ">
    <img
        src="https://avatars.githubusercontent.com/u/76237264?v=4"
        alt=""
        className="rounded-full w-[25px]"
      />
        <p className="text-sm font-normal">Kishor</p>
    </div>
        <div className="flex gap-4 justify-center items-center">
          <p className="text-xs lg:text-sm font-light">
            Pursuing My Dream: How I Turned My Music Passion into a Successful
            Career
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReadmoreCard;
