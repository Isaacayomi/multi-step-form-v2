const ToggleButton = () => {
  return (
    <div className="flex justify-center items-end gap-[1.5rem] bg-toggleBg py-[1rem] md:w-[28.125rem] md:max-w-full rounded-[0.5rem]">
      <p className="text-darkBlue text-[0.875rem] font-medium">Monthly</p>
      <button className="w-[2.5rem] h-[1.5rem] rounded-xl bg-darkBlue">
        <div className="w-[1rem] h-[1rem] bg-white rounded-xl ml-[0.2rem] cursor-pointer"></div>
      </button>
      <p className="text-grey text-[0.875rem] font-medium">Yearly</p>
    </div>
  );
};

export default ToggleButton;
