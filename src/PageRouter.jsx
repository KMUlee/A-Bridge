import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { Suspense, lazy } from "react";

const PageRouter = () => {
  const LadingPage = lazy(() => import("./pages/Home/Home"));
  const ABTestPage = lazy(() => import("./pages/Test/Home"));
  const LoginPage = lazy(() => import("./pages/Login/Login"));
  const TestingPage = lazy(() => import("./pages/Test/Testing/Testing"));
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LadingPage />} />
            <Route path="test" element={<ABTestPage />} />
            <Route path="test/:id" element={<TestingPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default PageRouter;
