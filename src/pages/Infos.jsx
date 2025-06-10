import { Link } from "react-router-dom";
import Button from "../components/Button";
import MainContainer from "../components/MainContainer";
import Sidebar from "../components/Sidebar";
import ContentLayout from "../components/ContentLayout";
import Headings from "../components/Headings";
import Subheading from "../components/Subheading";

const Infos = () => {
  return (
    <ContentLayout>
      <Sidebar />
      <MainContainer>
        <div className="w-[18.4375rem] max-w-full mx-auto pt-[2rem] md:w-[28.125rem] md:max-w-full md:mx-auto">
          <Headings>Personal Info</Headings>
          <Subheading>
            Please provide your name, email address and phone number.
          </Subheading>

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
        <footer className="flex justify-end">
          <Button className="mr-[0]">
            <Link to="/plans">Next Step</Link>
          </Button>
        </footer>
      </MainContainer>
    </ContentLayout>
  );
};

export default Infos;
