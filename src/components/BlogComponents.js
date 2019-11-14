import styled from "styled-components";
import { BaseContainer } from "./ProjectComponents";
import media from "../styles/medias";
import * as Colors from "../styles/colors";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 60px;
  button {
    margin: 32px auto 0 auto;
  }
`;

const getStartBgColor = props => {
  switch (props.variant) {
    case "secondary":
      return "transparent";
    case "tertiary":
      return "white";
    default:
      return "white";
  }
};

const getHoverBgColor = props => {
  // switch (props.variant) {
  //   case "secondary":
  //     return "transparent";

  //   default:
  //     return "transparent";
  // }
  return "transparent";
};

const getStartFontColor = props => {
  switch (props.variant) {
    case "secondary":
      return "white";
    case "tertiary":
      return Colors.blue;
    default:
      return Colors.black;
  }
};

const getHoverFontColor = props => {
  // switch (props.variant) {
  //   case "secondary":
  //     return "#fff";
  //   case "tertiary":
  //     return "white";
  //   default:
  //     return "white";
  // }
  return "white";
};

const getStartBorderColor = first => props => {
  switch (props.variant) {
    case "secondary":
      return "transparent";
    case "tertiary":
      return "transparent";
    default:
      return Colors.black;
  }
};

const getHoverBorderColor = first => props => {
  switch (props.variant) {
    case "secondary":
      return "#57ddff";
    case "tertiary":
      return "#57ddff";
    default:
      return first ? "#57ddff" : "#00b4ff";
  }
};

export const Button = styled.button`
  width: ${props => (props.fullWidth ? "100%" : "fit-content")};
  position: relative;
  padding: 10px 20px;
  font-size: 1em;
  ${media("medium")} {
    padding: 14px 40px;
    font-size: 1.2em;
  }
  font-weight: 400;
  color: ${getStartFontColor};
  border-radius: 6px;
  cursor: pointer;
  border: 1px solid ${getStartFontColor};
  background: ${getStartBgColor};
  :hover {
    border: 1px solid transparent;
    color: ${getHoverFontColor};
    background: ${getHoverBgColor};
    ::after {
      background-image: linear-gradient(
        to left,
        ${getHoverBorderColor(true)} 0%,
        ${getHoverBorderColor()} 100%
      );
    }
  }
  ::after {
    content: " ";
    position: absolute;
    border-radius: 7px;
    top: -1px;
    right: -1px;
    bottom: -1px;
    left: -1px;
    background-image: linear-gradient(
      to left,
      ${getStartBorderColor(true)} 0%,
      ${getStartBorderColor()} 100%
    );
    z-index: -1;
  }
`;
export const AllBlogContainer = styled(BaseContainer)`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  ${props => (props.related ? "padding: 0; margin: -8px;" : "")}
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
      ${media("large")} {
        flex-direction: row;
        align-items: flex-start;
      }
    `
        : ""}
  }
  button {
    /* margin: 32px auto 0 auto; */
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
          ${media("large", false)} {
            margin-top: 16px;
          }
          ${media("large")} {
            max-width: calc(33% - 16px);
            margin: 8px;
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
        :hover {
          text-decoration: none !important;
          h2 {
            color: ${Colors.blue};
            text-decoration: none !important;
          }
        }
        h2 {
          font-weight: 600;
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
        margin: -3px;
        margin-top: 16px;
        /* Tag */
        a {
          padding: 4px 6px;
          border: 1px solid ${Colors.blue};
          border-radius: 3px;
          margin: 3px;
          transition: all 0.1s ease-in-out;
          font-size: 0.8em;
          color: ${Colors.blue};
          :hover {
            color: white;
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
  > div:first-of-type {
    max-height: 650px;
  }
`;

export const PostContent = styled(BaseContainer)`
  flex-direction: column;
  h1 {
    margin-bottom: 12px;
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
          color: white;
          background-color: ${Colors.blue};
        }
      }
    }
    :nth-of-type(2),
    :nth-of-type(3) {
      p,
      ul,
      ol,
      li {
        font-weight: 300;
        line-height: 1.8em;
        color: ${Colors.grey};
        a,
        strong {
          font-weight: 400;
        }
        a {
          text-decoration: underline;
        }
      }
      .gatsby-resp-image-wrapper {
        max-height: 350px;
        max-width: 75% !important;
        margin: 10px;
        overflow: hidden;
        img {
          object-fit: contain;
          width: 100%;
          height: 100%;
        }
      }
    }
    /* Wrapper de autor */
    :nth-of-type(3) {
      margin-top: 34px;
      padding-bottom: 24px;
      border-bottom: 1px solid #eee;
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
            line-height: 1.4em;
            margin: 0;
          }
        }
      }
    }
  }
`;
