import Comment from "./Comment";
import CommentBox from "./CommentBox";
import { useState } from "react";
const Comments = () => {
  const [comments, setComments] = useState([
    "Hello World",
    "Hello World",
    "Hello World",
    "Hello World",
    "Hello World",
    "Hello World",
  ]);
  return (
    <div className="flex flex-col items-center py-16 px-4 lg:px-12">
      <h1 className="self-start mb-5 text-xl lg:text-2xl font-normal">
        Comments
      </h1>
      {comments.map((comment) => {
        return <Comment text={comment} />;
      })}

      <CommentBox comments={comments} setComments={setComments}></CommentBox>
    </div>
  );
};

export default Comments;
