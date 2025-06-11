import { createContext, useContext, useEffect, useReducer } from "react";
import { useLocation } from "react-router-dom";

const FormContext = createContext();

const prices = [
  { monthly: 9, yearly: 29 },
  { monthly: 12, yearly: 212 },
  { monthly: 15, yearly: 215 },
];

const initialState = {
  isActive: 0,
  input: "",
  email: "",
  phone: "",
  errors: {
    name: false,
    email: false,
    phone: false,
  },
  selectedCard: 0,
  click: false,
  heading: "Arcade",
  price: 9,
};

function reducer(state, action) {
  switch (action.type) {
    case "nextpage":
      return { ...state, isActive: state.isActive + 1 };

    case "setpage":
      return { ...state, isActive: action.payload };

    case "seterrors":
      return { ...state, errors: action.payload };

    case "inputField":
      return { ...state, input: action.payload };

    case "emailField":
      return { ...state, email: action.payload };

    case "phoneField":
      return { ...state, phone: action.payload };

    case "selectCard": {
      return {
        ...state,
        heading: action.planHeading,
        selectedCard: action.payload,
      };
    }

    case "handleClick": {
      const selected = prices[state.selectedCard];
      const newPrice = selected
        ? action.payload
          ? selected.yearly
          : selected.monthly
        : 0; // fallback if selected is undefined

      return {
        ...state,
        click: action.payload,
        price: newPrice,
      };
    }

    default:
      return state;
  }
}

const pageMap = {
  "/": 0,
  "/plans": 1,
  "/addson": 2,
  "/checkout": 3,
  "/success": 4,
};

const FormProvider = ({ children }) => {
  const location = useLocation();
  // console.log(location.pathname);
  const [
    {
      isActive,
      input,
      email,
      phone,
      errors,
      selectedCard,
      heading,
      price,
      click,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    const pageIndex = pageMap[location.pathname] ?? 0;

    if (isActive !== pageIndex) {
      dispatch({ type: "setpage", payload: pageIndex });
    }
  }, [location.pathname, isActive]);

  return (
    <FormContext.Provider
      value={{
        isActive,
        input,
        email,
        phone,
        errors,
        dispatch,
        selectedCard,
        click,
        heading,
        price,
        prices,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

const useForm = () => {
  const context = useContext(FormContext);
  return context;
};

export { FormProvider, useForm };
