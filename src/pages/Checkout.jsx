import { Link } from "react-router-dom";
import Button from "../components/Button";
import ContentLayout from "../components/ContentLayout";
import Sidebar from "../components/Sidebar";
import MainContainer from "../components/MainContainer";
import Headings from "../components/Headings";
import Subheading from "../components/Subheading";
import SummaryItem from "../components/SummaryItem";
const Checkout = () => {
  return (
    <ContentLayout>
      <Sidebar />
      <MainContainer>
        <div className="w-[18.4375rem] max-w-full mx-auto pt-[2rem] md:w-[28.125rem] md:max-w-full md:mx-auto">
          <Headings>Finishing up</Headings>
          <Subheading>
            Double-check everything looks OK before confirming.
          </Subheading>
        </div>

        <div className="bg-toggleBg w-[18.4375rem] mx-auto rounded-[0.5rem] px-[1rem] md:w-[28.125rem]">
          <p className="text-darkBlue text-[0.875rem] font-medium pt-[1rem]">
            Arcarde (Yearly)
          </p>
          <p className="flex items-center justify-between  md:pb-[1.5rem]">
            <span className="underline underline-offset-[0.2rem] text-grey pb-[0.75rem] cursor-pointer hover:text-purpleOutline">
              Change
            </span>
            <span className="text-darkBlue text-[0.875rem] font-bold text-right">
              $90/yr
            </span>
          </p>
          <div className="border-t border-grey border-opacity-[0.2043]">
            <SummaryItem details="Online service" price="+$10/yr" />
            <SummaryItem details="Larger storage" price="+$20/yr" />
          </div>
        </div>
        <p className="w-[18.4375rem] mx-auto flex justify-between items-center px-[1rem] pt-[1.5rem]  md:w-[28.125rem]">
          <span className="underlinetext text-grey">Total (per year)</span>
          <span className="text-purpleOutline text-[1rem] font-bold text-right md:text-[1.25rem]">
            $90/yr
          </span>
        </p>

        <footer className="flex justify-between">
          <button className="text-darkBlue font-medium mt-[5.75rem] ">
            Go Back
          </button>
          <Button className="">
            <Link to="/success">Confirm</Link>
          </Button>
        </footer>
      </MainContainer>
    </ContentLayout>
  );
};

export default Checkout;
