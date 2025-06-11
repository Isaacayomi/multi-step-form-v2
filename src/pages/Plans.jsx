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
  // const [click, setClick] = useState(false);
  // const [selectedCard, setSelectedCard] = useState(0);
  const { isActive = 1, selectedCard, click, dispatch } = useForm();
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
              index={0}
              selectedCard={selectedCard}
              dispatch={dispatch}
              // setSelectedCard={setSelectedCard}
              click={click}
              src={ARCADE_IMG}
              alt="Arcard Image"
              heading="Arcade"
              monthlyPrice={9}
              yearlyPrice={29}
              monthly="mo"
              yearly="yr"
            />

            <PlansCard
              index={1}
              selectedCard={selectedCard}
              dispatch={dispatch}
              // setSelectedCard={setSelectedCard}
              click={click}
              src={ADVANCED_IMG}
              alt="Advanced Image"
              heading="Advanced"
              monthlyPrice={12}
              yearlyPrice={212}
              monthly="mo"
              yearly="yr"
            />

            <PlansCard
              index={2}
              selectedCard={selectedCard}
              dispatch={dispatch}
              // setSelectedCard={setSelectedCard}
              click={click}
              src={PRO_IMG}
              alt="Pro Image"
              heading="Pro"
              monthlyPrice={15}
              yearlyPrice={215}
              monthly="mo"
              yearly="yr"
            />
          </div>
          <ToggleButton
            click={click}
            onClick={() => dispatch({ type: "handleClick", payload: !click })}
          />

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
