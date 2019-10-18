import styled from "styled-components";
import { BaseContainer } from "./ProjectComponents";
import media from "../styles/medias";
import * as Colors from "../styles/colors";
import { Link } from "gatsby";

export const Content = styled(BaseContainer)`
  flex-direction: column;
  > div:first-of-type {
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const TechnologyWrapper = styled(Link)`
  width: 45%;
  ${media("medium")} {
    width: 22%;
  }
  :hover {
    div > div:first-child {
      box-shadow: 1px 1px 5px 0px #aaa;
    }
  }
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    > div:first-child {
      height: ${80 * Math.sqrt(2) * 1.05}px;
      width: ${80 * Math.sqrt(2) * 1.05}px;
      transition: all 0.1s ease-in-out;
      overflow: visible;
      box-shadow: 1px 1px 4px 0px #ccc;
      border-radius: 100%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        position: absolute;
      }
    }
  }
`;

export const TechnologyPageWrapper = styled(BaseContainer)`
  position: relative;
  padding: 60px 12px;
  flex-direction: column;
  ${media("large")} {
    max-width: 50%;
  }
  ul {
    padding-left: 18px;
  }
  > div:first-child {
    > div {
      display: flex;
      align-items: center;
      h1,
      img {
        display: inline-block;
        min-width: 80px;
      }
      h1 {
        margin-right: 42px;
        flex: 1;
      }
    }
  }
  > div:nth-child(2) {
    h1,
    h2 {
      margin-top: 8px;
    }
  }
  p {
    font-weight: 300;
  }
`;
