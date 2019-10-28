import styled from "styled-components";
import { Link } from "gatsby";
import { FaLanguage } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import * as Colors from "../styles/colors";
import { mediumPlus } from "../styles/screens";
import Logo from "../styles/svgs/white_logo.svg";
import media from "../styles/medias";

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
    props.isIndex && props.scroll < 75 ? "transparent" : "#fff"};
  color: ${props =>
    props.isIndex && props.scroll < 75 ? Colors.white : Colors.black};
  box-shadow: ${props =>
    props.isIndex && props.scroll < 75
      ? "none"
      : "0px 1px 3px -2px rgba(0,0,0,0.6)"};
  transition: all 0.3s ease-in-out;
  & > a {
    padding: 6px;
    height: inherit;
    justify-self: center;
  }
  ul {
    transition: all 0.4s ease-in-out;
    color: ${props =>
      props.isIndex && props.scroll < 75 ? Colors.white : Colors.grey};
    > li {
      &:hover {
        color: ${props =>
          props.isIndex && props.scroll < 75 ? Colors.white : Colors.darkGrey};
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
  ${media("mediumPlus")} {
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

const Hamburger = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  ${media("mediumPlus")} {
    display: none;
  }
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  cursor: pointer;
  position: relative;
  span {
    position: absolute;
    display: block;
    right: 0;
    left: 0;
    padding: 2px;
    transition: all 0.3s ease-in-out;
    background-color: ${props =>
      props.isIndex && props.scroll < 75 ? Colors.white : Colors.darkBlue};
    border-radius: 4px;
    :nth-child(1) {
      transform: ${props =>
        props.open ? "rotate(-45deg)" : "translateY(-10px)"};
    }
    :nth-child(2) {
      opacity: ${props => (props.open ? "0" : "1")};
    }
    :nth-child(3) {
      transform: ${props =>
        props.open ? "rotate(45deg)" : "translateY(10px)"};
    }
  }
`;

const HamburgerMenu = styled.div`
  position: fixed;
  top: 75px;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 8px 14px;
  background-color: ${Colors.white};
  z-index: 8;
  ${media("mediumPlus")} {
    display: none;
  }
  overflow: auto;
  transition: transform 0.2s ease-in-out;
  transform: translateX(${props => (props.open ? "0" : "calc(-100%)")});
  div {
    color: ${Colors.grey};
    font-weight: 300;
    padding: 18px;
    text-align: center;
    font-size: 1.3em;
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
        url: "/services",
        label: "Services"
      },
      {
        url: "/blog",
        label: "Blog"
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
        url: "/servicos",
        label: "Serviços"
      },
      {
        url: "/blog",
        label: "Blog"
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
  const [open, setOpen] = useState(false);
  const { language } = props;
  const navLinks = getLinks(language);
  const scroll = useWindowScroll();
  const allowedRoutes = ["", "blog", "*"];
  const isIndex =
    allowedRoutes.indexOf(props.path.split("/")[2]) > -1 &&
    props.path.split("/").length <= 3;
  return (
    <Nav scroll={scroll + (open ? 76 : 0)} isIndex={isIndex}>
      <Link to={`/${language || ""}`} onClick={() => setOpen(false)}>
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
      <Hamburger
        open={open}
        onClick={() => setOpen(!open)}
        scroll={scroll + (open ? 76 : 0)}
        isIndex={isIndex}
      >
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <HamburgerMenu open={open}>
        {navLinks.map(({ url, label }, i) => (
          <Link to={`/${language}/${url}`}>
            <div key={i} onClick={() => setOpen(false)}>
              {label}
            </div>
          </Link>
        ))}
      </HamburgerMenu>
    </Nav>
  );
}
