import { BrowserRouter } from "react-router-dom";

import { Layout } from "../modules/layout/Layout";
import { Router } from "./Router";

import "./styles.scss";

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  );
};
