
const ReactionIcon = ({ type, onClick, count }) => {
  return (
    <div className="flex items-center justify-center">
      <img
        onClick={onClick}
        className="scale-100 hover:scale-105 transition-all duration-75"
        height={50}
        width={50}
        src={type}
        alt={type}
      />
      <p>{count}</p>
    </div>
  );
};

export default ReactionIcon;
