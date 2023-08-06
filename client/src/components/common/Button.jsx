const Button = ({ text, onClick, additionalClasses }) => {
  const generateClassName = () => {
    return `bg-gray-700 transition-all duration-75 ease-in font-medium rounded-lg px-5 py-3 text-sm md:text-md text-white hover:bg-gray-800 ${
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
