import styled from "styled-components";
import { BaseContainer } from "./ProjectComponents";
import media from "../styles/medias";
import * as Colors from "../styles/colors";
import { Link } from "gatsby";

export const Content = styled(BaseContainer)`
  padding-top: 32px;
  flex-direction: column;
  align-items: center;
  > div:nth-of-type(2) {
    padding-top: 24px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  > div:nth-of-type(1) {
    p {
      font-weight: 300;
    }
  }
`;

export const TechnologyWrapper = styled(Link)`
  width: calc(50% - 20px);
  margin: 10px;
  text-align: center;
  ${media("medium")} {
    width: calc(25% - 16px);
    margin: 8px;
  }
  :hover {
    > div > div:first-child {
      box-shadow: 1px 1px 5px 0px #aaa;
    }
  }
  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    > div:first-child {
      height: ${Math.round(70 * Math.sqrt(2) * 1.1)}px;
      width: ${Math.round(70 * Math.sqrt(2) * 1.1)}px;
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
  *:not(h1):not(h2) {
    font-weight: 300;
  }
  span {
    color: ${Colors.blue};
    position: absolute;
    top: 56px;
    left: 12px;
    cursor: pointer;
    :hover {
      color: ${Colors.darkBlue};
    }
  }
`;
