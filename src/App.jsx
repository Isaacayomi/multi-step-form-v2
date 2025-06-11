import { lazy, Suspense } from "react";
import { FormProvider } from "./context/FormContext";
import { Routes, Route } from "react-router-dom";

import LoadingSpinner from "./components/LoadingSpinner";

const Infos = lazy(() => import("./pages/Infos"));
const Plans = lazy(() => import("./pages/Plans"));
const Addson = lazy(() => import("./pages/Addson"));
const Checkout = lazy(() => import("./pages/Checkout"));
const SuccessScreen = lazy(() => import("./pages/SuccessScreen"));

const App = () => {
  return (
    <main className="font-ubuntu md:grid md:items-center md:justify-center h-[100vh]">
      <FormProvider>
        <Suspense
          fallback={
            <div className="absolute inset-0 grid place-items-center bg-white">
              <LoadingSpinner />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Infos />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/addson" element={<Addson />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<SuccessScreen />} />
          </Routes>
        </Suspense>
      </FormProvider>
    </main>
  );
};

export default App;
