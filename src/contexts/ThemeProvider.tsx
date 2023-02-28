"use client";

import React from "react";
import { typography, breakpoints } from "public/material";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  getInitColorSchemeScript,
} from "@mui/material/styles";
import colorSchemes from "utils/colorSchemes";
import CssBaseline from "@mui/material/CssBaseline";
import { DEFAULT_MODE } from "constant";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const theme = extendTheme({
  colorSchemes,
  typography,
  breakpoints,
});

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;
  getInitColorSchemeScript({
    defaultMode: DEFAULT_MODE,
  });
  return (
    <CssVarsProvider theme={theme} defaultMode={DEFAULT_MODE}>
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
};

export default ThemeProvider;
