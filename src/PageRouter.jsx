import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { Suspense, lazy } from "react";
import config from "./amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";

Amplify.configure(config);

const PageRouter = () => {
  const LadingPage = lazy(() => import("./pages/Home/Home"));
  const ABTestPage = lazy(() => import("./pages/Test/Home"));
  const LoginPage = lazy(() => import("./pages/Login/Login"));
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LadingPage />} />
            <Route path="test" element={<ABTestPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default PageRouter;
