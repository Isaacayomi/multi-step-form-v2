import { BrowserRouter, Routes, Route } from "react-router-dom";

import { FormProvider } from "./context/FormContext";

import Infos from "./pages/Infos";
import Plans from "./pages/Plans";
import Addson from "./pages/Addson";
import Checkout from "./pages/Checkout";
import SuccessScreen from "./pages/SuccessScreen";

const App = () => {
  return (
    <main className=" font-ubuntu md:grid md:items-center md:justify-center h-[100vh] ">
      <BrowserRouter>
        <FormProvider>
          <Routes>
            <Route path="/" element={<Infos />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/addson" element={<Addson />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<SuccessScreen />} />
          </Routes>
        </FormProvider>
      </BrowserRouter>
    </main>
  );
};

export default App;
