import React from "react";
import Helmet from "react-helmet";
import { Banner } from "../components/Header";

const NotFoundPage = () => (
  <div style={{ width: "100%" }}>
    <Helmet>
      <title>404</title>
    </Helmet>
    <Banner title={"404 - Page not found"} />
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
);

export default NotFoundPage;
