import LatestStoryCard from "./LatestStoryCard"
const LatestStories = () => {
  return (
    <div className="grid grid-rows-6 md:grid-rows-2 px-6 md:px-8 py-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start md:place-items-center gap-10">
        <LatestStoryCard></LatestStoryCard>
        <LatestStoryCard></LatestStoryCard>

        <LatestStoryCard></LatestStoryCard>

        <LatestStoryCard></LatestStoryCard>

        <LatestStoryCard></LatestStoryCard>

        <LatestStoryCard></LatestStoryCard>

    </div>
  )
}

export default LatestStories