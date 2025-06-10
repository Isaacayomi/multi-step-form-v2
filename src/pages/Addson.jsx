import { Link } from "react-router-dom";
import Button from "../components/Button";
import ContentLayout from "../components/ContentLayout";
import Sidebar from "../components/Sidebar";
import MainContainer from "../components/MainContainer";
import Headings from "../components/Headings";
import Subheading from "../components/Subheading";
import AddonCard from "../components/AddonCard";
const Addson = () => {
  return (
    <ContentLayout>
      <Sidebar />
      <MainContainer>
        <div className="w-[18.4375rem] max-w-full mx-auto pt-[2rem] md:w-[28.125rem] md:max-w-full md:mx-auto">
          <Headings>Pick add-ons</Headings>
          <Subheading>Add-ons help enhance your gaming experience.</Subheading>
          <AddonCard
            label="Online service"
            description="Access to multiplayer games"
            price="+$1/mo"
          />

          <AddonCard
            label="Larger storage"
            description="Extra 1TB of cloud save"
            price="+$2/mo"
          />

          <AddonCard
            label="Customizable profile"
            description="Custom theme on your profile"
            price="+$2/mo"
          />

          <footer className="flex justify-between">
            <button className="text-darkBlue font-medium mt-[5.75rem] ">
              Go Back
            </button>
            <Button className="">
              <Link to="/checkout">Next Step</Link>
            </Button>
          </footer>
        </div>
      </MainContainer>
    </ContentLayout>
  );
};

export default Addson;
