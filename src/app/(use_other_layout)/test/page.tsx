"use client";

import { Stack } from "@mui/material";
import { Text, Link } from "components/shared";
import React from "react";

export default function Page() {
  return (
    <Stack p={3} sx={{ backgroundColor: "secondary.main" }}>
      <Text>Page Test</Text>
      <Link href="/usage" underline="none">
        Go to usage
      </Link>
    </Stack>
  );
}
