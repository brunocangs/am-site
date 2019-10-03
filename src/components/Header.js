import styled from "styled-components";
import React from "react";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NavItem = styled.li`
  & a {
  }
`;

const Logo = styled.img.attrs({
  src: "/img/logo.png"
})`
  height: 100%;
  width: auto;
`;

export default function Header(props) {
  return (
    <Nav>
      <Logo />
      <NavMenu>
        <NavItem>Hi</NavItem>
      </NavMenu>
    </Nav>
  );
}
