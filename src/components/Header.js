import { match } from '@reach/router/lib/utils';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React, { useEffect, useState } from 'react';
import { FaLanguage, FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

import * as Colors from '../styles/colors';
import media from '../styles/medias';
import Logo from '../styles/svgs/white_logo.svg';
import { Button } from './BlogComponents';
import { Input } from './ContactComponents';

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
    props.isTransparent && props.scroll < 75 ? "transparent" : "#fff"};
  color: ${props =>
    props.isTransparent && props.scroll < 75 ? Colors.white : Colors.black};
  box-shadow: ${props =>
    props.isTransparent && props.scroll < 75
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
      props.isTransparent && props.scroll < 75 ? Colors.white : Colors.grey};
    > li {
      &:hover {
        color: ${props =>
          props.isTransparent && props.scroll < 75
            ? Colors.white
            : Colors.darkGrey};
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

const SearchInput = styled(Input)`
  padding: 3px 6px;
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
  &:nth-of-type(2),
  &:nth-of-type(1) {
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
      props.isTransparent && props.scroll < 75
        ? Colors.white
        : Colors.darkBlue};
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
    padding: 10px;
    text-align: center;
    font-size: 1.3em;
  }
  a:last-of-type {
    position: absolute;
    bottom: 20px;
    right: 0;
    left: 0;
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
        url: "/blog",
        label: "Blog"
      },
      {
        url: "/projetos",
        label: "Projetos"
      },
      {
        url: "/tecnologias",
        label: "Tecnologias"
      },
      {
        url: "/servicos",
        label: "Serviços"
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

const shouldBeTransparent = location => {
  if (!location || !location.pathname) return true;
  const urlWithoutLanguage = location.pathname.slice(3);
  // Adicionar aqui rotas que devem ter header branco por default
  const routesWithWhiteHeader = [
    "/projetos/:id",
    "/projects/:id",
    "/blog/:id",
    "/tecnologias/:id",
    "/technologies/:id",
    "/search"
  ];
  return !routesWithWhiteHeader.some(item => {
    return match(item, urlWithoutLanguage);
  });
};

export default function Header(props) {
  const SearchForm = ({ showButton }) => (
    <form action={`/${language}/${isEn ? "search" : "busca"}`}>
      <SearchInput
        isTransparent={isTransparent}
        scroll={scroll + (open ? 76 : 0)}
        id="q"
        name="q"
        pattern=".{3,}"
        required
        title="3 characters minimum"
        placeholder={isEn ? "Search" : "Busca"}
      />
      {showButton && (
        <Button
          fullWidth
          type="submit"
          style={{ margin: "10px 0", padding: "6px 0" }}
        >
          {isEn ? "Submit" : "Pesquisar"}
        </Button>
      )}
    </form>
  );
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState("");
  let { language } = props.pageContext;
  language = language || "pt";
  const navLinks = getLinks(language);
  const scroll = useWindowScroll();
  const isTransparent = shouldBeTransparent(props.location);
  const isEn = language === "en";
  return (
    <Nav scroll={scroll + (open ? 76 : 0)} isTransparent={isTransparent}>
      <Link
        to={`/${language || ""}`}
        onClick={() => setOpen(false)}
        alt="App Masters"
      >
        <Logo style={{ height: "100%" }} />
        <span hidden>App Masters</span>
      </Link>
      <NavMenu>
        {!isEn && (
          <NavItem>
            {searchOpen && <SearchForm />}
            <div
              style={{
                height: "1em",
                width: "calc(1em + 8px)",
                marginRight: 8,
                marginLeft: 8,
                display: "flex",
                alignItems: "center"
              }}
            >
              <FaSearch
                style={{
                  fontSize: "1em",
                  verticalAlign: "middle",
                  margin: 0
                }}
                onClick={() => setSearchOpen(!searchOpen)}
              />
            </div>
          </NavItem>
        )}
        <NavItem>
          <FaLanguage />
          {language.charAt(0).toUpperCase() + language.slice(1)}
          <Drowpdown>
            <DropdownItem>
              <Link to={"/en/"}>English</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to={"/pt/"}>Português</Link>
            </DropdownItem>
          </Drowpdown>
        </NavItem>
        {navLinks.map(({ url, label }, i) => (
          <NavItem key={i}>
            <Link to={`/${language}/${url}/`}>{label}</Link>
          </NavItem>
        ))}
      </NavMenu>
      <Hamburger
        open={open}
        onClick={() => setOpen(!open)}
        scroll={scroll + (open ? 76 : 0)}
        isTransparent={isTransparent}
      >
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <HamburgerMenu open={open}>
        <SearchForm showButton />
        {navLinks.map(({ url, label }, i) => (
          <Link to={`/${language}/${url}/`} key={i}>
            <div key={i} onClick={() => setOpen(false)}>
              {label}
            </div>
          </Link>
        ))}
        {isEn ? (
          <Link to={`/pt/`} key={"pt"}>
            <div onClick={() => setOpen(false)}>
              Ir para versão em Português
            </div>
          </Link>
        ) : (
          <Link to={`/en/`} key={"en"}>
            <div onClick={() => setOpen(false)}>Go to English version</div>
          </Link>
        )}
      </HamburgerMenu>
    </Nav>
  );
}

const BannerWrapper = styled.div`
  margin-top: -75px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  > div {
    width: 100%;
    min-height: 300px;
    background-color: ${Colors.blue};
  }
  h1 {
    text-align: center;
    color: #fff;
    position: absolute;
    margin: 0;
    text-transform: capitalize;
    font-weight: 600;
    font-size: 34px;
    line-height: 1.2em;
    ${media("medium", "large")} {
      font-size: 45px;
    }
    ${media("large")} {
      font-size: 55px;
    }
  }
`;
export const Banner = ({ title, fluid }) => {
  const {
    bannerImage: {
      childImageSharp: { fluid: image }
    }
  } = useStaticQuery(graphql`
    query BannerImage {
      bannerImage: file(relativePath: { eq: "breadcrumb.png" }) {
        ...SiteImageFluid
      }
    }
  `);
  return (
    <BannerWrapper>
      <Img fluid={fluid || image} alt="Blue gradient" />
      <h1>{title}</h1>
    </BannerWrapper>
  );
};
