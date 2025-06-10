import { Link, useNavigate } from "react-router-dom";

import ARCADE_IMG from "../assets/Group 11.png";
import ADVANCED_IMG from "../assets/Group 12.png";
import PRO_IMG from "../assets/Group 13.png";

import Button from "../components/Button";
import Sidebar from "../components/Sidebar";
import MainContainer from "../components/MainContainer";
import ContentLayout from "../components/ContentLayout";
import Headings from "../components/Headings";
import Subheading from "../components/Subheading";
import PlansCard from "../components/PlansCard";
import ToggleButton from "../components/ToggleButton";

import { useForm } from "../context/FormContext";

const Plans = () => {
  const { isActive = 1, dispatch } = useForm();
  const navigate = useNavigate();
  return (
    <ContentLayout>
      <Sidebar isActive={isActive} />
      <MainContainer>
        <div className="w-[18.4375rem] max-w-full mx-auto pt-[2rem] md:w-[28.125rem] md:max-w-full md:mx-auto">
          <Headings>Select your plan</Headings>
          <Subheading>
            You have the option of monthly or yearly billing
          </Subheading>

          <div className=" md:flex md:flex-row md:gap-[1.12rem]">
            <PlansCard
              src={ARCADE_IMG}
              alt="Arcard Image"
              heading="Arcade"
              price="$9/mo"
            />

            <PlansCard
              src={ADVANCED_IMG}
              alt="Advanced Image"
              heading="Advanced"
              price="$12/mo"
            />

            <PlansCard
              src={PRO_IMG}
              alt="Pro Image"
              heading="Pro"
              price="$15/mo"
            />
          </div>
          <ToggleButton />

          <footer className="flex justify-between">
            <button
              className="text-darkBlue font-medium mt-[5.75rem]"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
            <Button>
              <Link to="/addson" onClick={() => dispatch({ type: "nextpage" })}>
                Next Step
              </Link>
            </Button>
          </footer>
        </div>
      </MainContainer>
    </ContentLayout>
  );
};

export default Plans;
