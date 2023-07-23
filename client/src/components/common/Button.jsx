const Button = ({
  text,
  bgColor,
  fgColor,
  hoverColor,
  onClick,
  additionalClasses,
}) => {
  
  const generateClassName = () => {
    return `bg-${bgColor} transition-all duration-75 ease-in font-medium rounded-lg px-5 py-3 text-sm md:text-md text-${fgColor} hover:bg-${hoverColor} ${
      additionalClasses ? additionalClasses : ""
    }`;
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
