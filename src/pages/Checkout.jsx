import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../context/FormContext";

import Button from "../components/Button";
import ContentLayout from "../components/ContentLayout";
import Sidebar from "../components/Sidebar";
import MainContainer from "../components/MainContainer";
import Headings from "../components/Headings";
import Subheading from "../components/Subheading";
import SummaryItem from "../components/SummaryItem";
const Checkout = () => {
  const navigate = useNavigate();

  const {
    isActive = 1,
    click,
    heading,
    prices,
    selectedAddons,
    selectedCard,
    dispatch,
  } = useForm();

  const planPrice = click
    ? prices[selectedCard].yearly
    : prices[selectedCard].monthly;

  const addonsTotal = selectedAddons.reduce(
    (sum, addon) => sum + addon.price,
    0
  );

  const total = planPrice + addonsTotal;
  return (
    <ContentLayout>
      <Sidebar isActive={isActive} />
      <MainContainer>
        <div className="w-[18.4375rem] max-w-full mx-auto pt-[2rem] md:w-[28.125rem] md:max-w-full md:mx-auto">
          <Headings>Finishing up</Headings>
          <Subheading>
            Double-check everything looks OK before confirming.
          </Subheading>
        </div>

        <div className="bg-toggleBg w-[18.4375rem] mx-auto rounded-[0.5rem] px-[1rem] md:w-[28.125rem]">
          <p className="text-darkBlue text-[0.875rem] font-medium pt-[1rem]">
            {heading} ({click ? "yr" : "mo"})
          </p>
          <p className="flex items-center justify-between  md:pb-[1.5rem]">
            <span className="underline underline-offset-[0.2rem] text-grey pb-[0.75rem] cursor-pointer hover:text-purpleOutline">
              {/* <Link to="/plans">Change</Link> */}
              Change
            </span>
            <span className="text-darkBlue text-[0.875rem] font-bold text-right">
              ${planPrice}/{click ? "yr" : "mo"}
            </span>
          </p>
          <div className="border-t border-grey border-opacity-[0.2043]">
            {selectedAddons.map((addon) => (
              <SummaryItem
                key={addon.label}
                details={addon.label}
                price={`+$${addon.price}/${click ? "yr" : "mo"}`}
              />
            ))}
          </div>
        </div>
        <p className="w-[18.4375rem] mx-auto flex justify-between items-center px-[1rem] pt-[1.5rem]  md:w-[28.125rem]">
          <span className="underlinetext text-grey">
            Total (per {click ? "year" : "month"})
          </span>
          <span className="text-purpleOutline text-[1rem] font-bold text-right md:text-[1.25rem]">
            ${`${Number(total)}`}/{click ? "yr" : "mo"}
          </span>
        </p>

        <footer className="flex justify-between">
          <button
            className="text-darkBlue font-medium mt-[5.75rem]"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
          <Button>
            <Link to="/success" onClick={() => dispatch({ type: "nextpage" })}>
              Confirm
            </Link>
          </Button>
        </footer>
      </MainContainer>
    </ContentLayout>
  );
};

export default Checkout;
