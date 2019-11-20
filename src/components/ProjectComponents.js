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
  padding: 30px 0 80px 0;
  > h2 {
    margin: 48px 0 30px 0;
    :first-of-type {
      margin-bottom: 8px;
    }
  }
  > span {
    display: block;
    margin: 2px 0 24px 0;
    font-weight: 300;
  }
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
  /* Item da lista */
  li {
    border-radius: 6px;
    box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    position: relative;
    margin: 8px;
    /* Tamanhos pra grid */
    /* Menor que medium => 1 item */
    ${media("medium", true)} {
      width: 100%;
    }
    /* Medium - Large => 2 items */
    ${media("medium", "large")} {
      width: calc(50% - 16px);
    }
    /* Large => 3 items */
    ${media("large")} {
      width: calc(${100 / 3}% - 16px);
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
      display: flex;
      > div {
        display: inline-flex;
        :first-child {
          flex: 1;
          text-align: left;
          color: ${Colors.lightGrey};
          flex-direction: column;
          align-items: flex-start;
          padding-bottom: 6px;
          span {
            :first-child {
              color: ${Colors.black};
            }
            font-weight: 300;
          }
        }
        :nth-child(2) {
          svg {
            height: 1.35em;
            width: 1.35em;
            padding: 0.1em;
          }
          flex: 1;
          text-align: right;
          flex-direction: column;
          align-items: flex-end;
          font-size: 1em;
          font-weight: 300;
          margin-bottom: 10px;
        }
      }
    }
    :nth-child(2) {
      p {
        font-weight: 300;
        height: ${lineHeight * 3}em;
      }
    }
    > div:nth-of-type(2) {
      display: flex;
      flex-wrap: wrap;
      margin: -3px;
      a {
        padding: 4px 6px;
        border: 1px solid ${Colors.blue};
        border-radius: 3px;
        color: ${Colors.blue};
        margin: 3px;
        transition: all 0.1s ease-in-out;
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
  > div:first-child {
    img {
      object-position: center top !important;
    }
    max-height: 650px;
  }
`;

export const ProjectDetailsContainer = styled(AllProjectsContainer)`
  h2 {
    margin-top: 48px;
  }
  > div {
    :nth-of-type(2) {
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
      > div {
        margin-top: 36px;
        display: flex;
        justify-content: center;
        a {
          margin: 8px;
        }
      }
    }
    :nth-of-type(4) {
      ul {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: row;
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
