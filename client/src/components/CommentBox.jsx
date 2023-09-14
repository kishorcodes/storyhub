import { useState } from "react";
import { toast } from "react-hot-toast";
import Button from "./common/Button";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
const CommentBox = ({ saveComment }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (!isLoggedIn) return toast.error("You must be logged in");
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
