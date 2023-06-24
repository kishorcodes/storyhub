const LatestStoryCard = () => {
  return (
    <div className="flex w-fit gap-7">
      <p className="text-[#38BDF8] text-3xl">01</p>
      <div className="p-1 gap-2.5 flex flex-col justify-start">
        <div className="user flex justify-start items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDE2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA5NDk2ODY&ixlib=rb-4.0.3&q=80&w=15"
            alt=""
          />
          <p className="text-md">Kishor</p>
        </div>
        <p className="text-md font-bold">My Journey</p>

        <div className="flex gap-4 justify-content items-center">
          <p className="text-sm font-light">Mon Feb 13</p>
          <div className="text-sm border p-1 border-black rounded-lg">
            Self Improvment
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestStoryCard;
