import * as Screens from "./screens";

export default (min, max) => {
  if (!max) return `@media screen and (min-width:${Screens[min]})`;
  return `@media screen and (min-width:${Screens[min]}) and (max-width:${Screens[max]})`;
};
