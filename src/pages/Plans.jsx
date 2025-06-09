import { Link } from "react-router-dom";

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

function Plans() {
  return (
    <ContentLayout>
      <Sidebar />
      <MainContainer>
        <div className="w-[18.4375rem] max-w-full mx-auto pt-[2rem] md:w-[28.125rem] md:max-w-full md:mx-auto">
          <Headings>Select your plan</Headings>
          <Subheading>
            You have the option of monthly or yearly billing
          </Subheading>

          <div className=" md:flex md:flex-row md:gap-[1.12rem]">
            <PlansCard>
              <img
                src={ARCADE_IMG}
                alt="Arcade Plan"
                className="md:pb-[2.44rem]"
              />
              <div>
                <h3 className="mb-[0.44rem] text-darkBlue font-medium text-[1rem]">
                  Arcade
                </h3>
                <p className="text-grey text-[0.875rem] font-normal md:pb-[1rem]">
                  $9/mo
                </p>
              </div>
            </PlansCard>

            <PlansCard>
              <img
                src={ADVANCED_IMG}
                alt="Arcade Plan"
                className="md:pb-[2.44rem]"
              />
              <div>
                <h3 className="mb-[0.44rem] text-darkBlue font-medium text-[1rem]">
                  Advanced
                </h3>
                <p className="text-grey text-[0.875rem] font-normal md:pb-[1rem]">
                  $12/mo
                </p>
              </div>
            </PlansCard>

            <PlansCard>
              <img
                src={PRO_IMG}
                alt="Arcade Plan"
                className="md:pb-[2.44rem]"
              />
              <div>
                <h3 className="mb-[0.44rem] text-darkBlue font-medium text-[1rem]">
                  Pro
                </h3>
                <p className="text-grey text-[0.875rem] font-normal md:pb-[1rem]">
                  $15/mo
                </p>
              </div>
            </PlansCard>
          </div>
          <Link to="/addson" className="flex justify-end">
            <Button className="mr-[0]">Next Step</Button>
          </Link>
        </div>
      </MainContainer>
    </ContentLayout>
  );
}

export default Plans;
