import styled from "styled-components";
import { BaseContainer } from "./ProjectComponents";
import media from "../styles/medias";
import * as Colors from "../styles/colors";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 60px;
  > div {
    :first-child {
      margin-top: -75px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      > div {
        width: 100%;
        min-height: 300px;
      }
      h1 {
        color: #fff;
        position: absolute;
        margin: 0;
        text-transform: capitalize;
        font-size: 34px;
        line-height: 1.2em;
        ${media("medium", "large")} {
          font-size: 45px;
        }
        ${media("large")} {
          font-size: 55px;
        }
      }
    }
  }
`;
export const Button = styled.button`
  width: 25%;
  margin: auto;
  border: 1px solid ${Colors.blue};
  padding: 12px 18px;
  font-size: 1.2em;
  font-weight: 300;
  color: ${Colors.blue};
  border-radius: 6px;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  :hover {
    background-color: ${Colors.blue};
    color: white;
  }
`;
export const AllBlogContainer = styled(BaseContainer)`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  ${props => (props.related ? "padding: 0;" : "")}
  /* Lista de posts */
  > ul {
    margin: 0;
    list-style: none;
    margin-top: 12px;
    padding: 0;
    width: 100%;
    display: ${props => (props.related ? "flex" : "block")};
    ${props =>
      props.related
        ? `
        flex-direction: column;
        justify-content: space-between;
      ${media("large")} {
        flex-direction: row;
      }
    `
        : ""}
  }
  /* Sidebar com search input */
  > div {
    margin-top: 1em;
    width: 100%;
    display: block;
    position: relative;
    /* Só mostra resultados se foco no input */
    :focus-within {
      ul {
        visibility: visible;
      }
    }
    /* Input */
    input {
      width: 100%;
      border: 1px solid ${Colors.lighterGrey};
      padding: 8px 12px;
      margin: 0;
      font-size: 1.1em;
      font-weight: 300;
      border-radius: 6px;
      outline: none;
      :active,
      :focus {
        border-color: ${Colors.blue};
      }
    }
    /* Lista de resultados da busca */
    > ul {
      visibility: hidden;
      list-style: none;
      padding: 0;
      right: 0;
      left: 0;
      position: absolute;
      top: calc(100% + 6px);
      margin: 0;
      z-index: 1;
      /* Items da busca */
      li {
        padding: 8px 16px;
        background-color: white;
        border: 1px solid ${Colors.lightestGrey};
        /* Lógica de borda pra não exibir quando não houver resultados */
        :first-child {
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          :not(:last-child) {
            border-bottom-width: 0;
          }
        }
        :last-child {
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
        }
        + li {
          border-bottom-width: 0;
        }
      }
    }
  }
`;

export const PostWrapper = styled.li`
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.1);
  width: 100%;
  ${props =>
    props.related
      ? `
          ${media("large")} {
            max-width: 32%;
          }
          `
      : ""}
  /* Margin para elementos a partir do segundo */
  + li {
    ${props => (props.related ? `` : "margin-top: 36px;")}
  }
  /* Segundo div do item => conteúdo de texto */
  > div {
    :nth-of-type(2) {
      position: relative;
      padding: 14px 24px;
      /* Link */
      a {
        /* Título */
        h2 {
          margin: 0;
          font-size: 20px;
          ${media("medium")} {
            font-size: 28px;
          }
        }
        /* Autor e data */
        span {
          color: ${Colors.lighterGrey};
          font-size: 0.8em;
        }
      }
      /* Texto */
      p {
        color: ${Colors.grey};
        font-weight: 300;
        font-size: 0.95em;
        margin-bottom: 0;
      }
      /* Lista de tags */
      > div:nth-of-type(2) {
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 8px;
        margin-top: 16px;
        /* Tag */
        a {
          padding: 4px 6px;
          border: 1px solid ${Colors.blue};
          border-radius: 3px;
          margin: 0px 3px;
          transition: all 0.1s ease-in-out;
          font-size: 0.8em;
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
    }
  }
`;

export const Post = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
`;

export const PostContent = styled(BaseContainer)`
  flex-direction: column;
  h1 {
    margin-bottom: 0;
  }
  > div {
    :nth-of-type(1) {
      display: flex;
      flex-wrap: wrap;
      padding-bottom: 8px;
      margin-top: 6px;
      /* Tag */
      a {
        padding: 4px 6px;
        border: 1px solid ${Colors.blue};
        border-radius: 3px;
        margin: 0px 3px;
        transition: all 0.1s ease-in-out;
        font-size: 0.8em;
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
    /* Wrapper de autor */
    :nth-of-type(2) {
      display: flex;
      align-items: flex-start;
      /* Divs internos */
      > div {
        margin-bottom: 16px;
        /* Div com texto */
        :nth-of-type(2) {
          flex: 1;
          margin-left: 14px;
          h3,
          p {
            margin: 0;
          }
        }
      }
    }
  }
`;
