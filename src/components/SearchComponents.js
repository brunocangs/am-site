import styled from "styled-components";
import * as Colors from "../styles/colors";

export const Content = styled.div`
  h2 {
    margin-bottom: 4px;
  }
  div div {
    font-weight: 300;
    color: ${Colors.darkGrey};
    span {
      display: inline !important;
    }
    :nth-of-type(1) {
      width: fit-content;
      padding: 4px 6px;
      border: 1px solid ${Colors.blue};
      border-radius: 3px;
      margin-bottom: 16px;
      transition: all 0.1s ease-in-out;
      font-size: 0.8em;
      color: ${Colors.blue};
    }
  }
`;
