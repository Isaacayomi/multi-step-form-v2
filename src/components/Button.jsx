function Button({ onClick, children, className }) {
  return (
    <button
      className={`${className}  w-[7.6875rem] h-[3rem] bg-buttonBg text-white rounded-[0.5rem] cursor-pointer text-[1rem] font-medium mt-[5.75rem] `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
