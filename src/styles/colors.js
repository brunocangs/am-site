import color from "color";

export const black = "#222";
export const lightBlack = color(black)
  .lighten(0.1)
  .hex();
export const darkBlack = color(black)
  .darken(0.1)
  .hex();

export const grey = "#666";
export const lightGrey = color(grey)
  .lighten(0.1)
  .hex();
export const darkGrey = color(grey)
  .darken(0.1)
  .hex();
