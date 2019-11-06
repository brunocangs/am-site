import { useEffect } from "react";
import { Banner } from "../components/Header";
import React from "react";
import { Link } from "gatsby";
export default () => {
  useEffect(() => {
    // if (typeof navigator !== "undefined") {
    //   if (navigator.language.toLowerCase().startsWith("pt"))
    //     window.location = "/pt";
    //   else window.location = "/en";
    // } else {
    //   window.location = "/en";
    // }
  });
  return (
    <div style={{ width: "100%" }}>
      <Banner title="Oops" />
      <p>
        <Link to="/pt">Página em portuges</Link>
      </p>
      <p>
        <Link to="/en">English page</Link>
      </p>
    </div>
  );
};
