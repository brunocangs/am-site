import styled from "styled-components";
import { BaseContainer } from "./ProjectComponents";
import media from "../styles/medias";

export const Content = styled(BaseContainer)`
  padding-bottom: 60px;
  flex-direction: column;
  > div {
    display: flex;
    flex-wrap: wrap;
  }
  > section:last-of-type {
    margin-bottom: 40px;
  }
`;

export const Service = styled.section`
  display: flex;
  flex-direction: column-reverse;
  ${media("medium")} {
    flex-direction: row;
    /* Elementos impares, inverte ordem para alternar posição da imagem */
    :nth-child(2n + 1) {
      flex-direction: row-reverse;
      /* Margin do div de texto, muda pra margin-left quando impar */
      > div:first-child {
        ${media("medium")} {
          margin-right: 0;
          margin-left: 26px;
        }
      }
    }
  }
  & + & {
    margin-top: 30px;
  }
  /* Div com markdown */
  > div:first-child {
    flex: 1;
    h2,
    h3 {
      ${media("medium", true)} {
        margin-top: 18px;
      }
      margin: 0;
      margin-bottom: 8px;
    }
    ${media("medium")} {
      margin-right: 26px;
    }
  }
  /* Div da <Img /> */
  > div:nth-child(2) {
    /* Somente viewports menor que medium */
    ${media("medium", true)} {
      max-width: ${props => Math.round(props.image.aspectRatio * 350)}px;
      width: 100%;
      margin: auto;
      /* Controla altura da imagem através da largura */
    }
    /* Maior que medium */
    ${media("medium")} {
      width: 45%;
    }
  }
`;
