import * as Screens from "./screens";

export default (min, max) => {
  if (typeof max === "boolean")
    return `@media screen and (max-width:${Screens[min]})`;
  if (!max) return `@media screen and (min-width:${Screens[min]})`;
  return `@media screen and (min-width:${Screens[min]}) and (max-width:${Screens[max]})`;
};
