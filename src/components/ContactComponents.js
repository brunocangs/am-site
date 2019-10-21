import styled from "styled-components";
import { BaseContainer } from "./ProjectComponents";
import media from "../styles/medias";
import * as Colors from "../styles/colors";

export const Contact = styled(BaseContainer)`
  ${media("large")} {
    max-width: 50%;
  }
  div {
    font-weight: 300;
    width: 100%;
    div {
      width: 100%;
      padding: 4px 0;
      input,
      textarea {
        font-size: 1em;
        font-weight: 300;
        transition: border-color 0.2s ease-in-out;
        width: 100%;
        border: 1px solid ${Colors.lightestGrey};
        padding: 8px;
        border-radius: 6px;
        :focus,
        :active,
        :focus-within {
          border-color: ${Colors.blue};
        }
      }
    }
  }
`;
