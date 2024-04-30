import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { Suspense, lazy } from "react";

const PageRouter = () => {
  const LadingPage = lazy(() => import("./pages/Home/Home"));
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LadingPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default PageRouter;
