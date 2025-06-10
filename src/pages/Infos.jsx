import { useNavigate } from "react-router-dom";
import { useForm } from "../context/FormContext";

import Button from "../components/Button";
import MainContainer from "../components/MainContainer";
import Sidebar from "../components/Sidebar";
import ContentLayout from "../components/ContentLayout";
import Headings from "../components/Headings";
import Subheading from "../components/Subheading";

const Infos = () => {
  const navigate = useNavigate();
  const { isActive, input, email, phone, errors, dispatch } = useForm();

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleForm() {
    const newErrors = {
      name: !input.trim(),
      email: !email.trim(),
      phone: !phone.trim(),
    };
    dispatch({ type: "seterrors", payload: newErrors });
  }

  return (
    <ContentLayout>
      <Sidebar isActive={isActive} />
      <MainContainer>
        <div className="w-[18.4375rem] max-w-full mx-auto pt-[2rem] md:w-[28.125rem] md:max-w-full md:mx-auto">
          <Headings>Personal Info</Headings>
          <Subheading>
            Please provide your name, email address and phone number.
          </Subheading>

          <form onSubmit={handleSubmit}>
            <label
              htmlFor="Name"
              className="text-darkBlue text-[0.75rem] font-normal pb-[0.19rem] flex justify-between"
            >
              <span>Name</span>
              {errors.name && (
                <span className="text-red-500 font-medium">
                  Please enter your name (letters a-z)
                </span>
              )}
            </label>
            <input
              className="block mb-[1rem] border border-formOutline rounded-[0.25rem] bg-white w-[18.4375rem] max-w-full mx-auto pt-[0.65rem] pb-[0.75rem] pl-[1rem] md:w-[28.125rem] md:max-w-full md:mx-auto"
              type="text"
              id="Name"
              placeholder="e.g. Stephen King"
              value={input}
              onChange={(e) =>
                dispatch({ type: "inputField", payload: e.target.value })
              }
            />

            <label
              htmlFor="Email"
              className="text-darkBlue text-[0.75rem] font-normal pb-[0.19rem] flex justify-between"
            >
              <span>Email Address</span>
              {errors.email && (
                <span className="text-red-500 font-medium">
                  Please enter a valid mail
                </span>
              )}
            </label>
            <input
              className="block mb-[1rem] border border-formOutline rounded-[0.25rem] bg-white w-[18.4375rem] max-w-full mx-auto pt-[0.65rem] pb-[0.75rem] pl-[1rem] md:w-[28.125rem] md:max-w-full md:mx-auto"
              type="text"
              id="Email"
              placeholder="e.g. stephenking@lorem.com"
              value={email}
              onChange={(e) =>
                dispatch({ type: "emailField", payload: e.target.value })
              }
            />
            <label
              htmlFor="Phone"
              className="text-darkBlue text-[0.75rem] font-normal pb-[0.19rem] flex justify-between"
            >
              <span>Phone Number</span>
              {errors.phone && (
                <span className="text-red-500 font-medium">
                  Please enter a valid number
                </span>
              )}
            </label>
            <input
              className="block mb-[1rem] border border-formOutline rounded-[0.25rem] bg-white w-[18.4375rem] max-w-full mx-auto pt-[0.65rem] pb-[0.75rem] pl-[1rem] md:w-[28.125rem] md:max-w-full md:mx-auto"
              type="number"
              id="Phone"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="e.g. +1 234 567 890"
              value={phone}
              onChange={(e) =>
                dispatch({ type: "phoneField", payload: e.target.value })
              }
            />
          </form>
        </div>
        <footer className="flex justify-end">
          <Button
            className="mr-[0]"
            onClick={(e) => {
              e.preventDefault();
              handleForm();
              if (input && email && phone) {
                dispatch({ type: "nextpage" });
                navigate("/plans");
              }
            }}
          >
            Next Step
          </Button>
        </footer>
      </MainContainer>
    </ContentLayout>
  );
};

export default Infos;
