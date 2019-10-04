import styled from "styled-components";

export const Banner = styled.img.attrs(props => ({
  srcSet: props.srcSet,
  sizes: props.sizes
}))`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
