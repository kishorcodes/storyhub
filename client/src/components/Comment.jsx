const Comment = ({ comment, isOwnComment }) => {
  const authorName = isOwnComment ? "You" : comment.author.name;

  return (
    <div className="flex justify-start items-center gap-4 py-5 w-[100%]">
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
  );
};

export default Comment;
