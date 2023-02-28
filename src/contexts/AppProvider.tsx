import React from "react";
import EmotionProvider from "./EmotionProvider";
import ThemeProvider from "./ThemeProvider";

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = (props: AppProviderProps) => {
  const { children } = props;
  return (
    <EmotionProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </EmotionProvider>
  );
};

export default AppProvider;
