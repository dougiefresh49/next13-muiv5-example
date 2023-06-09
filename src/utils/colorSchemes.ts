import { AppearanceType } from "constant/enum";

// Create a theme instance.
const colorSchemes = {
  [AppearanceType.LIGHT]: {
    palette: {
      common: {
        black: "#000000",
        white: "#FFFFFF",
      },
      primary: {
        main: "#1976D2",
        light: "#42A5F5",
        dark: "#1565C0",
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: "#9C27B0",
        light: "#BA68C8",
        dark: "#7B1FA2",
        contrastText: "#FFFFFF",
      },
      error: {
        main: "#D32F2F",
        light: "#EF5350",
        dark: "#C62828",
        contrastText: "#FFFFFF",
      },
      warning: {
        main: "#ED6C02",
        light: "#FF9800",
        dark: "#E65100",
        contrastText: "#FFFFFF",
      },
      info: {
        main: "#0288D1",
        light: "#03A9F4",
        dark: "#01579B",
        contrastText: "#FFFFFF",
      },
      success: {
        main: "#2E7D32",
        light: "#4CAF50",
        dark: "#1B5E20",
        contrastText: "#FFFFFF",
      },
      grey: {
        50: "#FAFAFA",
        100: "#F5F5F5",
        200: "#EEEEEE",
        300: "#E0E0E0",
        400: "#BDBDBD",
        500: "#9E9E9E",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
        A100: "#F5F5F5",
        A200: "#EEEEEE",
        A400: "#BDBDBD",
        A700: "#616161",
      },
      text: {
        primary: "rgba(0, 0, 0, .87)",
        secondary: "rgba(0, 0, 0, .6)",
        disabled: "rgba(0, 0, 0, .12)",
      },
      divider: "rgba(0, 0, 0, .12)",
      background: {
        paper: "#FFFFFF",
        default: "#FFFFFF",
      },
      action: {
        active: "rgba(0, 0, 0, .54)",
        hover: "rgba(0, 0, 0, .04)",
        hoverOpacity: 0.04,
        selected: "rgba(0, 0, 0, .08)",
        selectedOpacity: 0.08,
        disabled: "rgba(0, 0, 0, .26)",
        disabledBackground: "rgba(0, 0, 0, .12)",
        disabledOpacity: 0.12,
        focus: "rgba(0, 0, 0, .38)",
        focusOpacity: 0.12,
        activatedOpacity: 0.12,
      },
    },
  },
  [AppearanceType.DARK]: {
    palette: {
      common: {
        black: "#000000",
        white: "#FFFFFF",
      },
      primary: {
        main: "#90CAF9",
        light: "#E3F2FD",
        dark: "#42A5F5",
        contrastText: "rgba(0, 0, 0, .87)",
      },
      secondary: {
        main: "#CE93D8",
        light: "#F3E5F5",
        dark: "#AB47BC",
        contrastText: "rgba(0, 0, 0, .87)",
      },
      error: {
        main: "#F44336",
        light: "#E57373",
        dark: "#D32F2F",
        contrastText: "rgba(0, 0, 0, .87)",
      },
      warning: {
        main: "#FFA726",
        light: "#FFB74D",
        dark: "#F57C00",
        contrastText: "rgba(0, 0, 0, .87)",
      },
      info: {
        main: "#29B6F6",
        light: "#4FC3F7",
        dark: "#0288D1",
        contrastText: "rgba(0, 0, 0, .87)",
      },
      success: {
        main: "#66BB6A",
        light: "#81C784",
        dark: "#388E3C",
        contrastText: "rgba(0, 0, 0, .87)",
      },
      grey: {
        50: "#FAFAFA",
        100: "#F5F5F5",
        200: "#EEEEEE",
        300: "#E0E0E0",
        400: "#BDBDBD",
        500: "#9E9E9E",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
        A100: "#F5F5F5",
        A200: "#EEEEEE",
        A400: "#BDBDBD",
        A700: "#616161",
      },
      text: {
        primary: "#FFFFFF",
        secondary: "rgba(255, 255, 255, .7)",
        disabled: "rgba(255, 255, 255, .5)",
        icon: "rgba(255, 255, 255, .5)",
      },
      divider: "rgba(255, 255, 255, .12)",
      background: {
        paper: "#121212",
        default: "#121212",
      },
      action: {
        active: "#FFFFFF",
        hover: "rgba(255, 255, 255, .08)",
        hoverOpacity: 0.08,
        selected: "rgba(255, 255, 255, .16)",
        selectedOpacity: 0.16,
        disabled: "rgba(255, 255, 255, .3)",
        disabledBackground: "rgba(255, 255, 255, .12)",
        disabledOpacity: 0.38,
        focus: "rgba(255, 255, 255, .12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.24,
      },
    },
  },
};

export default colorSchemes;
