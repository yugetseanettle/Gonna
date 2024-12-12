import { defineConfig } from "@pandacss/dev";
import { themes } from "./src/constants/Themes";

const config = {
  conditions: {
    ...Object.fromEntries(
      Object.keys(themes).map((theme) => [
        `${theme}Theme`,
        `[data-theme=${theme}] &`,
      ]),
    ),
    light: "[data-color-mode=light] &",
    dark: "[data-color-mode=dark] &",
  },
};

const createThemeValues = (baseColor: string, darkColor: string) =>
  Object.fromEntries(
    Object.keys(themes).map((theme) => [
      `_${theme}Theme`,
      {
        base: `{colors.${theme}.${baseColor}}`,
        _dark: `{colors.${theme}.${darkColor}}`,
      },
    ]),
  );

const createBgtextthemeValues = (baseColor: string, darkColor: string) =>
  Object.fromEntries(
    Object.keys(themes).map((theme) => [
      `_${theme}Theme`,
      {
        base: `{colors.stone.${baseColor}}`,
        _dark: `{colors.stone.${darkColor}}`,
      },
    ]),
  );

const theme = {
  semanticTokens: {
    colors: {
      background: {
        value: createBgtextthemeValues("50", "800"),
      },
      text: {
        value: createBgtextthemeValues("800", "50"),
      },
      primary: {
        value: createThemeValues("500", "500"),
      },
      secondary: {
        value: createThemeValues("300", "700"),
      },
      acccent: {
        value: createThemeValues("700", "300"),
      },
    },
  },
};

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors: {},
      },
      semanticTokens: theme.semanticTokens,
    },
  },
  outdir: "styled-system",
  conditions: config.conditions,
});
