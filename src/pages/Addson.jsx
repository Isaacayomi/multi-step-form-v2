import { Link, useNavigate } from "react-router-dom";

import { useForm } from "../context/FormContext";

import Button from "../components/Button";
import ContentLayout from "../components/ContentLayout";
import Sidebar from "../components/Sidebar";
import MainContainer from "../components/MainContainer";
import Headings from "../components/Headings";
import Subheading from "../components/Subheading";
import AddonCard from "../components/AddonCard";

const Addson = () => {
  const { isActive = 1, dispatch } = useForm();
  const navigate = useNavigate();

  return (
    <ContentLayout>
      <Sidebar isActive={isActive} />
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
            <button
              className="text-darkBlue font-medium mt-[5.75rem]"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
            <Button>
              <Link
                to="/checkout"
                onClick={() => dispatch({ type: "nextpage" })}
              >
                Next Step
              </Link>
            </Button>
          </footer>
        </div>
      </MainContainer>
    </ContentLayout>
  );
};

export default Addson;
