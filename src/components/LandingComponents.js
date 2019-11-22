import styled from "styled-components";
import * as Colors from "../styles/colors";
import media from "../styles/medias";
import React from "react";
import Img from "gatsby-image";

export const Content = styled.div`
  flex: 1;
  margin-top: -75px;
  padding-bottom: 60px;
  p {
    font-weight: 300;
  }
`;

export const BannerContainer = styled.section`
  width: 100%;
  position: relative;
  height: 700px;
  > div {
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    :nth-of-type(2) {
      position: absolute;
    }
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
  max-width: 85%;
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
  > div:first-of-type {
    flex: 1;
    /* Title */
    h1 {
      font-size: 30px;
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
      font-size: 18px;
      line-height: 1.8;
      font-family: "Poppins", sans-serif;
    }
    /* Buttons */
    div {
      display: flex;
      a {
        :first-child {
          margin-right: 0;
          margin-right: 12px;
        }
      }
    }
  }
  /* Side image */
  > div:nth-of-type(2) {
    display: none;
    width: 45%;
    object-fit: contain;
    ${media("medium")} {
      display: block;
    }
  }
`;

export const SectionContainer = Container.withComponent("section");

export const Manifest = styled(SectionContainer)`
  flex-direction: column;
  & *:not(h2) {
    color: ${Colors.darkGrey};
  }
  h2 {
    text-align: center;
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
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    font-weight: 300;
    margin: -8px;
    justify-content: center;
    a,
    h3,
    strong {
      font-size: 1.2em;
      font-weight: 400;
    }
    li {
      width: calc(95% - 16px);
      padding: 36px 24px 24px 24px;
      border-radius: 6px;
      box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
      margin: 8px;
      ${media("large")} {
        width: calc(33.3% - 16px);
      }
    }
  }
`;

export const ManifestItem = props => {
  const i = props.content;
  const image = props.content.image.childImageSharp;
  console.log(image);
  const md = props.md;
  return (
    <li>
      <Img
        {...image}
        style={{ height: 80, width: 80 * image.fixed.aspectRatio }}
      />
      <h3>{i.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: md.render(i.content) }} />
    </li>
  );
};

export const Projects = styled(SectionContainer)`
  margin-top: 30px;
  flex-direction: column;
  h2 {
    text-align: center;
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
  /* Lista de projetos */
  > ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${media("medium")} {
      flex-direction: row;
    }
    a {
      width: 100%;
      position: relative ${media("medium")} {
        flex: 1;
      }
      + a {
        margin-top: 20px;
        ${media("medium")} {
          margin: 0 0 0 20px;
        }
      }
    }
    /* Projeto */
    li {
      width: 100%;
      max-width: 260px;
      margin: auto;
      border-radius: 6px;
      box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.15);
      position: relative;
      overflow: hidden;
      ${media("medium")} {
        max-width: 33%;
        &:hover {
          > div:first-child {
            transform: translateY(-10%);
          }
          > div:nth-child(2) {
            transform: translateY(0%);
          }
        }
      }
      transition: all 0.2 ease-in-out;
      > div:first-child {
        transition: all 0.2s ease-in-out;
      }
      > div:nth-child(2) {
        padding: 14px;
        position: absolute;
        width: 100%;
        bottom: 0;
        background: white;
        transition: all 0.2s ease-in-out;
        ${media("medium")} {
          transform: translateY(100%);
        }
        h2 {
          margin: 4px 0 8px 0;
          font-weight: 400;
        }
        p {
          margin: 0;
          line-height: 1.6em;
        }
      }
    }
  }
`;

export const OurWork = styled(SectionContainer)`
  margin-top: 80px;
  align-items: center;
  flex-direction: column;
  ${media("medium")} {
    flex-direction: row;
  }
  h2 {
    font-weight: 400;
    font-size: 32px;
    ${media("medium")} {
      font-size: 40px;
    }
  }
  p {
    color: ${Colors.darkGrey};
    line-height: 1.8em;
    display: flex;
  }
  div {
    display: flex;
    flex-direction: column;
    :first-child {
      flex: 1;
      ${media("medium")} {
        margin-right: 16px;
      }
      img {
        justify-self: center;
        margin: auto;
        width: 100%;
        height: 100%;
        object-fit: contain;
        ${media("medium")} {
          max-height: 350px;
        }
      }
    }
    :nth-child(2) {
      max-width: 65vw;
      width: 100%;
      ${media("medium")} {
        width: 45%;
      }
    }
  }
`;

export const Testimonies = styled(SectionContainer)`
  margin: 65px auto 80px auto;
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
      > div {
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
  h2 {
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
  justify-content: center;
  background-color: ${Colors.blue};
  h2 {
    font-weight: 800;
    font-size: 45px;
    ${media("medium")} {
      font-size: 40px;
    }
  }
  p {
    line-height: 1.8em;
    margin: 10px auto;
    max-width: 80%;
    ${media("large")} {
      max-width: 45%;
    }
    a {
      font-weight: 400;
      text-decoration: underline !important;
    }
  }
  > div:nth-of-type(2) {
    button {
      margin: 6px;
    }
  }
  > picture {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const WeAreHiring = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  h2 {
    text-align: center;
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
  flex-direction: column;
  > div a {
    text-decoration: underline;
  }
  > a:last-child {
    align-self: center;
  }
`;

export const HowMuchIsMyApp = styled(SectionContainer)`
  h2 {
    text-align: center;
    font-weight: 400;
    font-size: 32px;
    ${media("medium")} {
      font-size: 40px;
    }
  }
  p {
    text-align: center;
    display: flex;
    flex-direction: column;
    color: ${Colors.darkGrey};
    line-height: 1.8em;
    line-height: 1.8em;
    margin: 10px auto;
    ${media("large")} {
      max-width: 60%;
    }
    a {
      font-weight: 400;
      text-decoration: underline !important;
    }
  }
  flex-direction: column;
  a {
    align-self: center;
    margin: 32px auto 0 auto;
  }
`;
