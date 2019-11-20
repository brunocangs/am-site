import styled from "styled-components";
import { BaseContainer } from "./ProjectComponents";
import * as Colors from "../styles/colors";

export const Content = styled(BaseContainer)`
  padding: 0;
  flex-direction: column;
  > div:last-child > div {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
  }
`;

export const AllTagContent = styled(BaseContainer)`
  flex-direction: column;
  line-height: 2.2em;
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    /* Tag */
    a {
      padding: 4px 6px;
      border: 1px solid ${Colors.blue};
      border-radius: 3px;
      margin: 0px 6px;
      font-size: 1.1em;
      transition: all 0.1s ease-in-out;
      color: ${Colors.blue};
      :first-child {
        margin-left: 0;
      }
      :hover {
        color: ${Colors.white};
        background-color: ${Colors.blue};
      }
    }
  }
`;
