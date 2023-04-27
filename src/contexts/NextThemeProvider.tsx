"use client";

import * as React from "react";
import { ThemeProvider } from "next-themes";

type Props = {
  children: React.ReactNode;
};

/**
 * Note:
 * the prop attribute="data-mui-color-scheme" is what allows next-themes to work with
 * the default MUI theme logic
 */
export const NextThemeProvider = (props: Props) => {
  return (
    <ThemeProvider attribute="data-mui-color-scheme" defaultTheme="light">
      {props.children}
    </ThemeProvider>
  );
};
