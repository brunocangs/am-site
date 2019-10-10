import styled from "styled-components";
import * as Colors from "../styles/colors";
import media from "../styles/medias";

export const Content = styled.div`
  flex: 1;
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

const SectionContainer = Container.withComponent("section");

export const OurWork = styled.section``;

export const Projects = styled.section``;

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
      width: 60%;
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
        border: 1px solid ${Colors.lightestGrey};
        border-radius: 8px;
        width: 100%;
        ${media("large")} {
          width: 85%;
          margin: 8px auto;
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
      margin-left: 12px;
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

export const HireUs = styled.section``;

export const WeAreHiring = styled.section``;

export const HowMuchIsMyApp = styled.section`
  a {
    display: block;
  }
`;
