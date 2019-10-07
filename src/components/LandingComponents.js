import styled from "styled-components";
import { white } from "../styles/colors";
import { medium } from "../styles/screens";
export const Content = styled.div`
  flex: 1;
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
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  font-size: 22px;
  color: ${white};
  text-align: center;
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  h2 {
    margin: 8px;
  }
  @media screen and (min-width: ${medium}) {
    font-size: 28px;
    right: 33%;
    text-align: initial;
  }
`;
