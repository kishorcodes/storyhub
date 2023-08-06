import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import trash from "../assets/images/trash.svg";
const Comment = ({ comment, isOwnComment }) => {
  const authorName = isOwnComment ? "You" : comment.author.name;

  const handleDeleteClick = async () => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure to delete this comment?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {},
        },
        {
          label: "No",
        },
      ],
    });
  };

  return (
    <div className="flex justify-between items-center py-5 w-[100%]">
      <div className="flex items-center justify-center gap-4">
        <img
          src={comment.author.picture}
          className="w-[40px] w-[40px] rounded-full"
          alt="author"
        />
        <div className="flex flex-col items-start">
          <p className="text-md font-medium">{authorName}</p>
          <p className="text-sm font-normal">{comment.text}</p>
        </div>
      </div>
      {isOwnComment && (
        <img
          src={trash}
          onClick={handleDeleteClick}
          alt="trash"
          className="h-[25px] w-[25px] hover:scale-105"
        />
      )}
    </div>
  );
};

export default Comment;
