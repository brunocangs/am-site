import styled from "styled-components";
import { SectionContainer } from "./LandingComponents";
import media from "../styles/medias";
import * as Colors from "../styles/colors";
const lineHeight = 1.8;
export const BaseContainer = styled(SectionContainer)`
  margin-top: 0;
  h1 {
    font-weight: 400;
    font-size: 32px;
    ${media("medium")} {
      font-size: 40px;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 400;
  }
  p {
    color: ${Colors.darkGrey};
    line-height: ${lineHeight}em;
  }
`;

export const AllProjectsContainer = styled(BaseContainer)`
  flex-direction: column;
`;
const ContainerList = BaseContainer.withComponent("ul");

/* Lista de Projetos */
export const ProjectsList = styled(ContainerList)`
  font-size: 0.8rem;
  padding: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  flex-direction: row;
  justify-content: space-between;
  /* Item da lista */
  li {
    border-radius: 6px;
    box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    position: relative;
    /* Tamanhos pra grid */
    /* Menor que medium => 1 item */
    ${media("medium", true)} {
      width: 100%;
      + li {
        margin-top: 16px;
      }
    }
    /* Medium - Large => 2 items */
    ${media("medium", "large")} {
      width: calc(50% - 12px);
      /* A partir do terceiro item => segunda linha */
      + li + li {
        margin-top: 16px;
      }
    }
    /* Large => 3 items */
    ${media("large")} {
      width: calc(33.33% - 12px);
      /* A partir do quarto item => segunda linha */
      + li + li + li {
        margin-top: 16px;
      }
    }
  }
`;

export const ProjectItemDetails = styled.div`
  padding: 18px;
  transition: transform 0.2s ease-in-out;
  background-color: white;
  h2 {
    margin: 0;
  }
  > div {
    color: ${Colors.black};
    /* Parte com nome do cliente e localização */
    :first-child {
      > div {
        :first-child {
          color: ${Colors.lightGrey};
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 6px;
          span {
            font-weight: 300;
          }
        }
        :nth-child(2) {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 1rem;
          font-weight: 300;
          margin-bottom: 10px;
          span:first-child {
            font-weight: 400;
          }
          span:nth-child(2) {
            letter-spacing: 1.05px;
          }
        }
      }
    }
    :nth-child(2) {
      p {
        height: ${3 * lineHeight}em;
      }
    }
    div {
      display: flex;
      flex-wrap: wrap;
      a {
        padding: 4px 6px;
        border: 1px solid ${Colors.blue};
        border-radius: 3px;
        color: ${Colors.blue};
        margin: 0px 3px;
        transition: all 0.1s ease-in-out;
        :first-child {
          margin-left: 0;
        }
        :hover {
          color: ${Colors.white};
          background-color: ${Colors.blue};
        }
      }
    }
  }
`;

// Projects detail components
export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-weight: 300;
  blockquote {
    border-left: 3px solid #ccc;
    margin: 0;
    padding-left: 14px;
  }
  padding-bottom: 60px;
`;

export const ProjectDetailsContainer = styled(AllProjectsContainer)`
  h2 {
    margin-top: 48px;
  }
  > div {
    :nth-child(2) {
      ul {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        ${media("medium")} {
          flex-direction: row;
          justify-content: space-between;
        }
        li {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          ${media("medium", true)} {
            + li {
              margin-top: 26px;
            }
          }
          h3 {
            font-size: 60px;
            margin: 0;
            font-weight: 300;
            color: ${Colors.darkBlue};
          }
        }
      }
    }
    :nth-child(3) {
      ul {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        margin: 0;
        li {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          flex: 1;
          ${media("medium")} {
            max-width: 180px;
          }
          a {
            width: 100%;
            > div {
              width: 100%;
              max-width: 85px;
              margin: auto;
            }
            p {
              line-height: 1.2em;
            }
          }
        }
      }
    }
  }
`;
