"use client";

import { Stack } from "@mui/material";
import { Link, Text } from "components/shared";
import React from "react";

export default function Page() {
  return (
    <Stack height={200} p={3} sx={{ backgroundColor: "primary.dark" }}>
      <Text>Page Usage</Text>
      <Link href="/test" color="error.main" underline="none">
        Go to test
      </Link>
    </Stack>
  );
}
