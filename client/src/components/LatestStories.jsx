import LatestStoryCard from "./LatestStoryCard";
import arrow from "../assets/images/diagonal_arrow.svg";
const LatestStories = () => {
  const stories = [
    {
      authorName: "Kishor",
      authorImage:
        "https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDE2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA5NDk2ODY&ixlib=rb-4.0.3&q=80&w=15",
      title: "Hard Work vs Talent",
      publishDate: "Mon Feb 13",
      category: "Self Improvment",
    },
    {
      authorName: "Kishor",
      authorImage:
        "https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDE2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA5NDk2ODY&ixlib=rb-4.0.3&q=80&w=15",
      title: "Hard Work vs Talent",
      publishDate: "Mon Feb 13",
      category: "Self Improvment",
    },
    {
      authorName: "Kishor",
      authorImage:
        "https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDE2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA5NDk2ODY&ixlib=rb-4.0.3&q=80&w=15",
      title: "Hard Work vs Talent",
      publishDate: "Mon Feb 13",
      category: "Self Improvment",
    },
    {
      authorName: "Kishor",
      authorImage:
        "https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDE2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA5NDk2ODY&ixlib=rb-4.0.3&q=80&w=15",
      title: "Hard Work vs Talent",
      publishDate: "Mon Feb 13",
      category: "Self Improvment",
    },
    {
      authorName: "Kishor",
      authorImage:
        "https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDE2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA5NDk2ODY&ixlib=rb-4.0.3&q=80&w=15",
      title: "My Journey",
      publishDate: "Mon Feb 13",
      category: "Self Improvment",
    },
    {
      authorName: "Kishor",
      authorImage:
        "https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDE2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA5NDk2ODY&ixlib=rb-4.0.3&q=80&w=15",
      title: "My Journey",
      publishDate: "Mon Feb 13",
      category: "Self Improvment",
    },
  ];
  return (
    <>
      <div className="grid relative grid-rows-6 md:grid-rows-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-start md:place-items-center gap-10 px-6 lg:px-2 pt-24 pb-16">
        <p className="flex absolute top-11 left-5 lg:left-16 items-center text-sm font-medium justify-center gap-1">
          <img
            src={arrow}
            className="h-[20px] w-[20px]"
            alt="diagonal-right-arrow"
          />
          LATEST STORIES
        </p>
        {stories.map((story, index) => {
          return (
            <LatestStoryCard
              key={index}
              position={"0" + (index + 1)}
              authorName={story.authorName}
              authorImage={story.authorImage}
              title={story.title}
              publishDate={story.publishDate}
              category={story.category}
            ></LatestStoryCard>
          );
        })}
      </div>
    </>
  );
};

export default LatestStories;
