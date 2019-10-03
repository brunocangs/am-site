import {} from "gatsby";

export default () => {
  if (navigator) {
    if (navigator.language.toLowerCase().startsWith("pt"))
      window.location = "/pt";
    else window.location = "/en";
  } else {
    window.location = "/en";
  }
  return null;
};
