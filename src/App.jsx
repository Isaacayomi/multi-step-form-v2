import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { FormProvider } from "./context/FormContext";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy load your pages
const Infos = lazy(() => import("./pages/Infos"));
const Plans = lazy(() => import("./pages/Plans"));
const Addson = lazy(() => import("./pages/Addson"));
const Checkout = lazy(() => import("./pages/Checkout"));
const SuccessScreen = lazy(() => import("./pages/SuccessScreen"));

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 600); // Spinner duration per route
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <main className="font-ubuntu md:grid md:items-center md:justify-center h-[100vh]">
      {loading && (
        <div className="absolute inset-0 grid place-items-center bg-white z-50">
          <LoadingSpinner />
        </div>
      )}

      <FormProvider>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes location={location}>
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
