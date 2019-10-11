import styled from "styled-components";
import * as Colors from "../styles/colors";
import media from "../styles/medias";
import React, { useRef, useState, useLayoutEffect } from "react";
export const Content = styled.div`
  flex: 1;
  margin-top: -75px;
`;

export const BannerContainer = styled.section`
  width: 100%;
  position: relative;
  height: 700px;
  > img {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  ${media("medium", "large")} {
    height: 750px;
  }
  ${media("large")} {
    height: 1020px;
  }
`;
const Container = styled.div`
  position: relative;
  z-index: 0;
  padding: 12px;
  display: flex;
  width: 100%;
  height: inherit;
  margin: auto;
  font-family: "Poppins", sans-serif;
  max-width: 75%;
  ${media("large", "extraLarge")} {
    max-width: 950px;
  }
  ${media("extraLarge")} {
    max-width: 1120px;
  }
`;
export const BannerContent = styled(Container)`
  /* Container */
  justify-content: center;
  align-items: center;
  color: #fff;
  /* Text container */
  div {
    /* Title */
    h1 {
      text-transform: capitalize;
      font-size: 34px;
      line-height: 1.2em;
      ${media("medium", "large")} {
        font-size: 45px;
      }
      ${media("large")} {
        font-size: 55px;
      }
    }
    /* Content */
    p {
      font-size: 15px;
      line-height: 1.8;
      font-family: "Poppins", sans-serif;
      ${media("medium", "large")} {
      }
      ${media("large")} {
      }
    }
  }
  /* Side image */
  img {
    display: none;
    height: 100%;
    width: 45%;
    object-fit: contain;
    ${media("medium")} {
      display: block;
    }
  }
`;

const SectionContainer = Container.withComponent("section");

export const Manifest = styled(SectionContainer)`
  flex-direction: column;
  & *:not(h1) {
    color: ${Colors.darkGrey};
  }
  h1 {
    font-weight: 400;
    font-size: 32px;
    ${media("medium")} {
      font-size: 40px;
    }
  }
  p {
    line-height: 1.8em;
  }
  /* Lista de items do manifesto */
  > ul {
    list-style: none;
    padding: 0;
    margin: 0;
    border-radius: 6px;
    border: 1px solid ${Colors.lightestGrey};
    /* Item da lista */
    > li {
      /* Titulo */
      > p {
        cursor: pointer;
        margin: 0;
        font-size: 1.15em;
      }
      padding: 12px;
      /* Toggle */
      ul {
        overflow: hidden;
        transition: all 0.3s ease-in-out;
        padding: 0;
        margin: 0;
        /* Item do toggle */
        li {
        }
      }
    }
    /* Item a partir do segundo */
    li + li {
      border-top: 1px solid ${Colors.lightestGrey};
    }
  }
`;

export const ManifestItem = props => {
  const i = props.content;
  const md = props.md;
  const content = useRef(null);
  const [height, setHeight] = useState(0);
  const [open, setOpen] = useState(false);
  useLayoutEffect(() => {
    if (content.current) {
      setHeight(content.current.scrollHeight);
    }
  }, [open, height, content]);
  return (
    <li>
      <p onClick={() => setOpen(!open)}>{i.title}</p>
      <ul ref={content} style={{ height: open ? height : 0 }}>
        <li dangerouslySetInnerHTML={{ __html: md.render(i.content) }} />
      </ul>
    </li>
  );
};

export const OurWork = styled.section``;

export const Projects = styled(SectionContainer)`
  margin-top: 80px;
  h1 {
    font-weight: 400;
    font-size: 32px;
    ${media("medium")} {
      font-size: 40px;
    }
  }
  p {
    color: ${Colors.darkGrey};
    line-height: 1.8em;
  }
`;

export const Testimonies = styled(SectionContainer)`
  margin-top: 65px;
  flex-direction: column-reverse;
  ${media("large")} {
    flex-direction: row;
  }
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    ${media("large")} {
      width: 56%;
      flex-direction: row;
    }
    li {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      div {
        margin: 12px;
        padding: 8px;
        box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.15);
        /* border: 1px solid ${Colors.lightestGrey}; */
        border-radius: 8px;
        width: 100%;
        ${media("large")} {
          width: calc(100% - 16px);
          margin: 8px;
        }
        h3 {
          margin: 0;
          line-height: 1.5em;
          font-weight: 400;
        }
        div {
        }
        img {
          border-radius: 100%;
          height: 42px;
          width: 42px;
        }
      }
    }
  }
  > div {
    flex: 1;
    ${media("large")} {
      margin-left: 18px;
    }
  }
  h1 {
    font-weight: 400;
    font-size: 32px;
    ${media("medium")} {
      font-size: 40px;
    }
  }
  p {
    color: ${Colors.darkGrey};
    line-height: 1.8em;
  }
`;

export const HireUs = styled(SectionContainer)`
  padding: 80px 0;
  margin: 0;
  color: white !important;
  max-width: unset !important;
  flex-direction: column;
  text-align: center;
  background-image: url(/img/cta_bg.png);
  background-position: center center;
  background-size: cover;
  h1 {
    font-weight: 800;
    font-size: 45px;
    ${media("medium")} {
      font-size: 40px;
    }
  }
  p {
    line-height: 1.8em;
    margin: auto;
    max-width: 80%;
    ${media("large")} {
      max-width: 45%;
    }
  }
`;

export const WeAreHiring = styled.section``;

export const HowMuchIsMyApp = styled.section`
  a {
    display: block;
  }
`;
