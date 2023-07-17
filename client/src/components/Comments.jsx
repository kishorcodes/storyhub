import Comment from "./Comment";
import CommentBox from "./CommentBox";
import { useEffect, useState } from "react";
import axios from "../axios";

const Comments = ({ userId, storyId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/stories/${storyId}`)
      .then(({ data: { data } }) => {
        setComments(data.comments);
      })
      .catch(() => {});
  }, [storyId]);

  const saveComment = (comment) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`/api/stories/${storyId}/comments`, {
          text: comment,
          author: userId,
          story: storyId,
          createdAt: new Date(),
        })
        .then(({ data: { data: { comments } } }) => {
          setComments([...comments]);
          resolve();
        })
        .catch(() => reject());
    });
  };

  return (
    <div className="flex flex-col items-center py-16 px-5 lg:px-12">
      {comments.length > 0 ? (
        <>
          <h1 className="self-start mb-5 text-xl lg:text-2xl font-normal">
            {comments.length} Comment{comments.length > 1 ? "s" : ""}
          </h1>
          <div className="rounded-xl w-full">
            {comments.map((comment, index) => (
              <Comment
                key={index}
                isOwnComment={comment.author._id === userId}
                comment={comment}
              />
            ))}
          </div>
        </>
      ) : (
        <h1 className="text-md lg:text-xl pb-8">
          Be the first one to comment!
        </h1>
      )}

      <CommentBox saveComment={saveComment} />
    </div>
  );
};

export default Comments;
