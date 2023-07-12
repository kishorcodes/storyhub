import Button from "./Button";
import { toast } from "react-hot-toast";
import { useState } from "react";
import axios from "axios";
const CommentBox = ({ saveComment }) => {
  const [comment, setComment] = useState("");

  return (
    <div class="mt-4 flex gap-3 w-full items-center">
      <input
        value={comment}
        type="text"
        id="large-input"
        onChange={(e) => {
          setComment(e.target.value);
        }}
        class="block w-full p-4 text-gray-900 border border-black rounded-lg sm:text-md"
      />
      <Button
        text="Comment"
        bgColor="black"
        fgColor="white"
        onClick={() => {
          toast.promise(saveComment(comment), {
            loading: "Commenting...",
            success: <b>Comment added</b>,
            error: <b>Could not add comment.</b>,
          });
        }}
      />
    </div>
  );
};

export default CommentBox;
