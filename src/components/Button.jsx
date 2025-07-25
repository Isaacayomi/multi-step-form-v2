const Button = ({ onClick, children, className, disabled, dispatch }) => {
  return (
    <button
      dispatch={dispatch}
      disabled={disabled}
      className={`${className}  w-[7.6875rem] h-[3rem] bg-buttonBg text-white rounded-[0.5rem] cursor-pointer text-[1rem] font-medium mt-[5.75rem] mb-[1rem] hover:bg-hoverBg `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
