import { Open_Sans } from "next/font/google";

export const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Open Sans", "Arial", "sans-serif"],
});

const typography = {
  fontFamily: openSans.style.fontFamily,
  lineHeight: 1.5,
  body1: {
    fontSize: 16,
  },
  body2: {
    fontSize: 14,
  },
  subtitle1: {
    fontSize: 20,
  },
  subtitle2: {
    fontSize: 17,
  },
  caption: {
    fontSize: 12,
  },
  overline: {
    fontSize: 18,
  },
};

export default typography;
