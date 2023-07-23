import { useState } from "react";
import { toast } from "react-hot-toast";
import Button from "./common/Button";

const CommentBox = ({ saveComment }) => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    toast.promise(saveComment(comment), {
      loading: "Commenting...",
      success: () => {
        setComment("");
        return <b>Comment added</b>;
      },
      error: <b>Could not add comment.</b>,
    });
  };

  return (
    <div className="flex items-center gap-3 w-full mt-4">
      <input
        value={comment}
        type="text"
        placeholder="Say what's on your mind..."
        id="large-input"
        onChange={handleCommentChange}
        className="block outline-none w-full p-4 border border-black rounded-lg sm:text-md"
      />
      <Button
        text="Comment"
        bgColor="black"
        fgColor="white"
        additionalClasses="h-[100%]"
        onClick={handleCommentSubmit}
      />
    </div>
  );
};

export default CommentBox;
