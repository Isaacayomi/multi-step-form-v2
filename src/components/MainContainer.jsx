const MainContainer = ({ children }) => {
  return (
    <div className="bg-white rounded-[0.625rem] w-[21.4375rem] max-w-full mx-auto mt-[-4.78rem] md:mt-[0rem] md:w-[28.125rem] md:max-w-full md:mx-auto">
      {children}
    </div>
  );
};

export default MainContainer;
