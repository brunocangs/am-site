import styled from "styled-components";
import { BaseContainer } from "./ProjectComponents";

export const AboutContainer = styled(BaseContainer)`
  flex-direction: column;
  padding-bottom: 60px;
  padding-top: 32px;
  p,
  li,
  ul,
  ol {
    font-weight: 300;
    a,
    strong {
      font-weight: 400;
    }
    a {
      text-decoration: underline;
    }
  }
`;
