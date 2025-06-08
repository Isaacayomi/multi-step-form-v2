const Sidebar = () => {
  const isActive = 0;
  const sideBarTexts = {
    0: "YOUR INFO",
    1: "SELECT PLAN",
    2: "ADD-ONS",
    3: "SUMMARY",
  };

  return (
    <div className="bg-mobile-sidebar-bg bg-no-repeat bg-top bg-cover h-[10.75rem] pt-[2rem] md:bg-desktop-sidebar-bg md:bg-no-repeat md:bg-left md:bg-contain md:h-[35.5rem] md:w-[17.125rem]">
      <div className="flex justify-center items-center gap-[1rem] md:flex md:flex-col md:items-start md:gap-[2rem]">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className="flex md:gap-[1rem] md:pl-[2rem]">
            <div
              className={`${
                i === isActive
                  ? "bg-buttonColor text-darkBlue border-buttonColor"
                  : "text-white "
              }  rounded-full py-[0.31rem] px-[0.75rem] ] text-[0.875rem] font-semibold border-2 text-center leading-normal tracking-[0.0625rem] md:px-4 md:py-2 md:text-base`}
            >
              {i + 1}
            </div>
            <div className="hidden md:flex md:flex-col ">
              <span className="text-lightBlue font-normal text-[0.75rem]">
                STEP {i + 1}
              </span>
              <span className="text-white font-bold text-[0.875rem] tracking-[0.0625rem]">
                {sideBarTexts[i]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
