import styled from "styled-components";
import { Link } from "gatsby";
import { FaLanguage } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import * as Colors from "../styles/colors";
import { mediumPlus } from "../styles/screens";
import Logo from "../styles/svgs/white_logo.svg";

const Nav = styled.nav`
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  z-index: 9;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  height: 75px;
  background: ${props =>
    !props.isIndex || props.scroll > 75 ? "#fff" : "transparent"};
  color: ${props =>
    !props.isIndex || props.scroll > 75 ? Colors.black : Colors.white};
  box-shadow: ${props =>
    !props.isIndex || props.scroll > 75
      ? "0px 1px 3px -2px rgba(0,0,0,0.6)"
      : "none"};
  transition: all 0.3s ease-in-out;
  & > a {
    padding: 6px;
    height: inherit;
    justify-self: center;
  }
  ul {
    transition: all 0.4s ease-in-out;
    color: ${props =>
      !props.isIndex || props.scroll > 75 ? Colors.grey : Colors.white};
    > li {
      &:hover {
        color: ${props =>
          !props.isIndex || props.scroll > 75 ? Colors.darkGrey : Colors.white};
      }
    }
  }
  svg {
    max-width: 60vw;
  }
`;

const NavMenu = styled.ul`
  list-style: none;
  flex-direction: row;
  align-items: center;
  display: none;
  @media screen and (min-width: ${mediumPlus}) {
    display: flex;
  }
`;

const Drowpdown = styled.ul`
  list-style: none;
  position: absolute;
  z-index: 999;
  top: 100%;
  right: 50%;
  transform: translateX(50%);
  display: none;
  background: white;
  border-radius: 5px;
  padding: 0;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.3);
`;

const DropdownItem = styled.li`
  padding: 6px;
`;

const NavItem = styled.li`
  display: inline-flex;
  align-items: center;
  a {
    padding: 8px;
  }
  svg {
    font-size: 1.8em;
    margin-right: 4px;
  }
  &:first-child {
    position: relative;
    margin-right: 8px;
    cursor: pointer;
    &:hover {
      & ${Drowpdown} {
        display: block;
        color: ${Colors.grey};
        li:hover {
          color: ${Colors.darkGrey};
          text-decoration: underline;
        }
      }
    }
  }
`;

const getLinks = language => {
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
        label: "Sobre nós"
      }
    ];
  }
  return navLinks;
};

const useWindowScroll = () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const handler = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  });
  return scroll;
};

export default function Header(props) {
  const { language } = props;
  const navLinks = getLinks(language);
  const scroll = useWindowScroll();
  return (
    <Nav scroll={scroll} isIndex={props.path.split("/")[2] === ""}>
      <Link to={`/${language || ""}`}>
        <Logo style={{ height: "100%" }} />
      </Link>
      <NavMenu>
        <NavItem>
          <FaLanguage />
          {language.charAt(0).toUpperCase() + language.slice(1)}
          <Drowpdown>
            <DropdownItem>
              <Link to={"/en"}>{language === "en" ? "English" : "Inglês"}</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to={"/pt"}>
                {language === "en" ? "Portuguese" : "Português"}
              </Link>
            </DropdownItem>
          </Drowpdown>
        </NavItem>
        {navLinks.map(({ url, label }, i) => (
          <NavItem key={i}>
            <Link to={`/${language}/${url}`}>{label}</Link>
          </NavItem>
        ))}
      </NavMenu>
    </Nav>
  );
}
