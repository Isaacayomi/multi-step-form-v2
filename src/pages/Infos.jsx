import Button from "../components/Button";
import MainContainer from "../components/MainContainer";
import Sidebar from "../components/Sidebar";

const Infos = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-[1.5rem] md:bg-white md:rounded-[0.625rem] md:p-[1rem] lg:gap-[6.25rem] lg:pr-[6.25rem]">
      <Sidebar />
      <MainContainer>
        <div className="w-[18.4375rem] max-w-full mx-auto pt-[2rem] md:w-[28.125rem] md:max-w-full md:mx-auto">
          <h2 className="text-darkBlue text-[1.5rem] font-bold pb-[0.56rem]  md:text-[2rem]">
            Personal info
          </h2>
          <p className="text-grey pb-[1.38rem] md:text-[1rem] md:w-[28.125rem] md:max-w-full md:mx-auto">
            Please provide your name, email, address, and phone number.
          </p>

          <form>
            <label
              htmlFor="Name"
              className="text-darkBlue text-[0.75rem] font-normal pb-[0.19rem]"
            >
              Name
            </label>
            <input
              className="block mb-[1rem] border border-formOutline rounded-[0.25rem] bg-white w-[18.4375rem] max-w-full mx-auto pt-[0.65rem] pb-[0.75rem] pl-[1rem] md:w-[28.125rem] md:max-w-full md:mx-auto"
              type="text"
              id="Name"
              placeholder="e.g. Stephen King"
            />

            <label
              htmlFor="Email"
              className="text-darkBlue text-[0.75rem] font-normal pb-[0.19rem]"
            >
              Email Address
            </label>
            <input
              className="block mb-[1rem] border border-formOutline rounded-[0.25rem] bg-white w-[18.4375rem] max-w-full mx-auto pt-[0.65rem] pb-[0.75rem] pl-[1rem] md:w-[28.125rem] md:max-w-full md:mx-auto"
              type="text"
              id="Email"
              placeholder="e.g. stephenking@lorem.com"
            />
            <label
              htmlFor="Phone"
              className="text-darkBlue text-[0.75rem] font-normal pb-[0.19rem]"
            >
              Phone Number
            </label>
            <input
              type="number"
              id="Phone"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="e.g. +1 234 567 890"
              className="block mb-[1rem] border border-formOutline rounded-[0.25rem] bg-white w-[18.4375rem] max-w-full mx-auto pt-[0.65rem] pb-[0.75rem] pl-[1rem] md:w-[28.125rem] md:max-w-full md:mx-auto"
            />
          </form>
        </div>
        <Button>Next Step</Button>
      </MainContainer>
    </div>
  );
};

export default Infos;
