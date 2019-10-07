import color from "color";

export const black = "#222";
export const lightBlack = color(black)
  .lighten(0.2)
  .hex();
export const darkBlack = color(black)
  .darken(0.2)
  .hex();

export const grey = "#666";
export const lightGrey = color(grey)
  .lighten(0.2)
  .hex();
export const lighterGrey = color(grey)
  .lighten(0.7)
  .hex();
export const lightestGrey = color(grey)
  .lighten(1.2)
  .hex();
export const darkGrey = color(grey)
  .darken(0.2)
  .hex();

export const blue = "#1693cb";
export const lightBlue = color(blue)
  .lighten(0.2)
  .hex();
export const darkBlue = color(blue)
  .darken(0.2)
  .hex();
