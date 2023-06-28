import LatestStoryCard from "./LatestStoryCard";
const LatestStories = () => {
  const stories = [
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
      <div className="grid grid-rows-6 md:grid-rows-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-start md:place-items-center gap-10 px-6 py-20">
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
