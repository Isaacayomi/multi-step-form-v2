const ToggleButton = ({ onClick, click }) => {
  return (
    <div className="flex justify-center items-end gap-[1.5rem] bg-toggleBg py-[1rem] md:w-[28.125rem] md:max-w-full rounded-[0.5rem]">
      <p
        className={`${
          !click ? "text-darkBlue" : "text-grey"
        }  text-[0.875rem] font-medium`}
      >
        Monthly
      </p>
      <button
        className="w-[2.5rem] h-[1.5rem] rounded-xl bg-darkBlue"
        onClick={onClick}
        type="button"
      >
        <div
          className={`${
            click ? "ml-[1.16rem]" : "ml-[0.2rem]"
          } w-[1rem] h-[1rem] bg-white rounded-xl cursor-pointer`}
        ></div>
      </button>
      <p
        className={`${
          click ? "text-darkBlue" : "text-grey"
        }  text-[0.875rem] font-medium`}
      >
        Yearly
      </p>
    </div>
  );
};

export default ToggleButton;
