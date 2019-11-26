import styled from "styled-components";
import { BaseContainer } from "./ProjectComponents";
import media from "../styles/medias";
import * as Colors from "../styles/colors";

export const ContactContent = styled.div`
  width: 100%;
`;
export const Input = styled.input`
  ::placeholder {
    font-size: 0.9em;
    color: ${Colors.lighterGrey};
  }
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
`;
export const Contact = styled(BaseContainer)`
  ${media("large")} {
    max-width: 50%;
  }
  div {
    padding-top: 32px;
    font-weight: 300;
    width: 100%;
    div {
      width: 100%;
      padding: 4px 0;
      input,
      textarea {
        ::placeholder {
          font-size: 0.9em;
          color: ${Colors.lighterGrey};
        }
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
      span {
        margin-top: 10px 0;
        display: block;
      }
      span#error {
        color: ${Colors.red};
      }
      span#success {
        color: ${Colors.green};
      }
    }
  }
`;
