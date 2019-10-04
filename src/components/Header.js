import styled from "styled-components";
import React from "react";
import { Link } from "gatsby";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  height: 75px;
  box-shadow: 0px 2px 3px -2px rgba(0, 0, 0, 0.3);
`;

const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NavItem = styled.li`
  & a {
    height: 100%;
    padding: 8px;
  }
`;

const Logo = styled.img.attrs({
  src: "/img/logo.png"
})`
  height: 100%;
  width: auto;
`;

export default function Header(props) {
  const { language } = props;
  let navLinks;
  if (language === "en") {
    navLinks = [
      {
        url: "/projects",
        label: "Projects"
      },
      {
        url: "/technologies",
        label: "Technologies"
      },
      {
        url: "/about",
        label: "About us"
      }
    ];
  } else {
    navLinks = [
      {
        url: "/projetos",
        label: "Projetos"
      },
      {
        url: "/tecnologias",
        label: "Tecnologias"
      },
      {
        url: "/sobre",
        label: "Sobre nos"
      }
    ];
  }
  return (
    <Nav>
      <Link to="/">
        <Logo />
      </Link>
      <NavMenu>
        {navLinks.map(({ url, label }, i) => (
          <NavItem key={i}>
            <Link to={`/${language}/${url}`}>{label}</Link>
          </NavItem>
        ))}
      </NavMenu>
    </Nav>
  );
}
