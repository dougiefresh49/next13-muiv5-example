import React from "react";
import { NextAppDirEmotionCacheProvider } from "tss-react/next/appDir";
import ThemeProvider from "./ThemeProvider";

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = (props: AppProviderProps) => {
  const { children } = props;
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "css" }}>
      <ThemeProvider>{children}</ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
};

export default AppProvider;
