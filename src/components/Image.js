import React from "react";
import Image from "gatsby-image";

export default function Img(props) {
  const { image, ...rest } = props;
  if (!image) return;
  return image.childImageSharp ? (
    <Image fluid={image.childImageSharp.fluid} {...rest} />
  ) : (
    <img src={image} {...rest} alt={rest.alt || ""} />
  );
}
