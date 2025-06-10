const Headings = ({ children }) => {
  return (
    <div>
      <h2 className="text-darkBlue text-[1.5rem] font-bold pb-[0.56rem]  md:text-[2rem]">
        {children}
      </h2>
    </div>
  );
};

export default Headings;
