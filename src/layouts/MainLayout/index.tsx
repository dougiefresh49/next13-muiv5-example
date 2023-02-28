"use client";

import React, { memo } from "react";
import { Stack } from "@mui/material";
import Header from "layouts/Header";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;
  return (
    <Stack flex={1}>
      <Header />
      {children}
    </Stack>
  );
};

export default memo(MainLayout);
