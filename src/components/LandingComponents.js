import styled from "styled-components";
import { white, lightestGrey } from "../styles/colors";
import { medium } from "../styles/screens";

export const Content = styled.div`
  flex: 1;
  > div:not(:first-child) {
    margin: 18px;
    padding: 4px;
  }
  > div + div {
    border-top: 1px solid ${lightestGrey};
  }
`;

export const BannerContainer = styled.div`
  width: 100%;
  height: 0;
  padding-top: ${props => (1 / props.aspectRatio) * 100}%;
  overflow: hidden;
  position: relative;
  img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  min-height: 300px;
`;

export const BannerContent = styled.div`
  width: 100%;
  height: 300px;
  padding: 16px;
  font-size: 22px;
  margin: 22px 0;
  color: ${white};
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  h2 {
    margin: 8px 0;
  }
  @media screen and (min-width: ${medium}) {
    height: 400px;
    font-size: 28px;
    width: 60%;
    margin-right: 40%;
    text-align: initial;
  }
`;

export const Manifest = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    border-radius: 3px;
    background-color: rgba(0, 0, 0, 0.05);
    li {
      padding: 12px;
    }
    li + li {
      border-top: 1px solid rgba(0, 0, 0, 0.05);
    }
  }
`;

export const Projects = styled.div``;

export const Testimonies = styled.div``;

export const HireUs = styled.div``;

export const WeAreHiring = styled.div``;

export const HowMuchIsMyApp = styled.div`
  a {
    display: block;
  }
`;
