const ContentLayout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row md:gap-[1.5rem] md:bg-white md:rounded-[0.625rem] md:p-[1rem] lg:gap-[6.25rem] lg:pr-[6.25rem]">
      {children}
    </div>
  );
};

export default ContentLayout;
