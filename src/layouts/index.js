import React from "react";
import { graphql, Link } from "gatsby";

import { Nav, NavItem, NavMenu } from "../components/Header";

export default ({ children }) => (
  <>
    <header>
      <Nav>
        <Logo />
      </Nav>
    </header>
    <main>{children}</main>
    <footer></footer>
  </>
);
