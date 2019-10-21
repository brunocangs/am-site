import styled from "styled-components";
import { BaseContainer } from "./ProjectComponents";
import media from "../styles/medias";

export const Content = styled(BaseContainer)`
  padding: 0;
  flex-direction: column;
  > div:first-of-type {
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: space-between;
      ${media("large", true)} {
        flex-direction: column;
      }
      ${media("large")} {
        li + li + li + li {
          margin-top: 20px;
        }
      }
    }
  }
  > div:last-child > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex: 1;
  }
`;
