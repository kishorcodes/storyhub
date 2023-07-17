const Button = ({
  text,
  bgColor,
  fgColor,
  hoverColor,
  onClick,
  additionalClasses,
}) => {
  const generateClassName = () => {
    return `transition-all duration-75 ease-in inline-flex justify-center items-center font-medium rounded-lg px-5 py-3 text-sm md:text-md bg-${bgColor} text-${fgColor} hover:bg-${hoverColor} ${additionalClasses}`;
  };

  return (
    <button
      type="button"
      className={generateClassName()}
      id="tk-dropdown"
      aria-haspopup="true"
      aria-expanded="true"
      onClick={onClick ? onClick : null}
    >
      {text}
    </button>
  );
};

export default Button;
