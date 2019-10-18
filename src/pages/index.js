import { useEffect } from "react";

export default () => {
  useEffect(() => {
    if (typeof navigator !== "undefined") {
      if (navigator.language.toLowerCase().startsWith("pt"))
        window.location = "/pt";
      else window.location = "/en";
    } else {
      window.location = "/en";
    }
  });
  return null;
};
