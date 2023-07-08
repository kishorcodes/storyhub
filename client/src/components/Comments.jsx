import Comment from "./Comment";
import CommentBox from "./CommentBox";
const Comments = () => {
  return (
    <div className="flex flex-col items-center py-16 px-4 lg:px-12">
      <h1 className="self-start mb-5 text-xl lg:text-2xl font-normal">
        Comments
      </h1>
      {Array.from({ length: 6 }).map(() => {
        return <Comment text={"Hello world"} />;
      })}

      <CommentBox></CommentBox>
    </div>
  );
};

export default Comments;
