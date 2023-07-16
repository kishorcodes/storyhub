const Comment = ({ comment, isOwnComment }) => {
  return (
    <div className="gap-4 justify-start items-center py-5 w-[100%] flex">
      <img
        src={comment.author.picture}
        className="w-[40px] w-[40 px] rounded-full"
        alt="author"
      />

      <div className="flex flex-col items-start">
        <p className="text-md font-medium">
          {" "}
          {isOwnComment ? "You" : comment.author.name}
        </p>
        <p className="text-sm font-normal"> {comment.text} </p>
      </div>
    </div>
  );
};

export default Comment;
