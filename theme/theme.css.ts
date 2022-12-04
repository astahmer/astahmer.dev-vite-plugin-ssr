import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

import {
  interactiveProperties,
  responsiveProperties,
  unresponsiveProperties,
} from "./base.css";
import { colorStyles } from "./colors.css";
import { spacingStyles } from "./spacing.css";

export const themeSprinkles = createSprinkles(
  unresponsiveProperties,
  responsiveProperties,
  interactiveProperties,
  spacingStyles,
  colorStyles
);
// export const themeSprinkles = createSprinkles(
//   defineProperties({
//     properties: {
//       color: { "red.100": "red" },
//       padding: {
//         2: "2px",
//         small: "4px",
//       },
//     },
//   })
// );

export type ThemeSprinkles = Parameters<typeof themeSprinkles>[0];
