import styled from "styled-components";
import { white, lightestGrey } from "../styles/colors";
import media from "../styles/medias";

export const Content = styled.div`
  flex: 1;
  /* > div:not(:first-child) {
    margin: 18px;
    padding: 4px;
  }
  > div + div {
    border-top: 1px solid ${lightestGrey};
  } */
`;

export const BannerContainer = styled.section`
  width: 100%;
  position: relative;
  height: 700px;
  > img {
    position: absolute;
    top: 75px;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: calc(100% - 75px);
    object-fit: cover;
  }
  ${media("medium", "large")} {
    height: 750px;
  }
  ${media("large")} {
    height: 1020px;
  }
`;

export const BannerContent = styled.div`
  /* Container */
  position: relative;
  margin-top: 75px;
  z-index: 0;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: auto;
  font-family: "Poppins", sans-serif;
  color: #fff;

  ${media("medium", "large")} {
    max-width: 70%;
  }

  ${media("large")} {
    max-width: 1120px;
  }

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

export const Manifest = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    border-radius: 3px;
    background-color: rgba(0, 0, 0, 0.05);
    li {
      padding: 12px;
    }
    li + li {
      border-top: 1px solid rgba(0, 0, 0, 0.05);
    }
  }
`;

export const OurWork = styled.div`
  max-width: 100vw;
  overflow: hidden;
`;

export const Projects = styled.div``;

export const Testimonies = styled.div``;

export const HireUs = styled.div``;

export const WeAreHiring = styled.div``;

export const HowMuchIsMyApp = styled.div`
  a {
    display: block;
  }
`;
