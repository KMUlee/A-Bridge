import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { Suspense, lazy } from "react";
import PrivateRoute from "./components/Layout/PrivateRoute";
import { RecoilRoot } from "recoil";

const PageRouter = () => {
  const LadingPage = lazy(() => import("./pages/Home/Home"));
  const ABTestPage = lazy(() => import("./pages/Test/Home"));
  const LoginPage = lazy(() => import("./pages/Login/Login"));
  const TestingPage = lazy(() => import("./pages/Test/Testing/Testing"));
  const ResultPage = lazy(() => import("./pages/Result/Result"));
  const AdminPage = lazy(() => import("./pages/admin/Home"));

  return (
    <BrowserRouter>
      <RecoilRoot>
        <Suspense>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<LadingPage />} />
              <Route
                path="test"
                element={
                  <PrivateRoute>
                    <ABTestPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="test/:id"
                element={
                  <PrivateRoute>
                    <TestingPage />
                  </PrivateRoute>
                }
              />
              <Route path="admin" element={<AdminPage />} />
              <Route path="result" element={<ResultPage />} />
              <Route path="login" element={<LoginPage />} />
            </Route>
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </Suspense>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default PageRouter;
