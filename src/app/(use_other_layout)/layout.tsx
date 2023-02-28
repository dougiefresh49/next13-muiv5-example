"use client";

import { Box, Stack } from "@mui/material";
import { Text } from "components/shared";
import { usePathname } from "next/navigation";

type OtherLayoutProps = {
  children: React.ReactNode;
};

const OtherLayout = (props: OtherLayoutProps) => {
  const { children } = props;

  const pathname = usePathname();

  return (
    <Stack
      p={3}
      m={5}
      flex={1}
      sx={{
        border: "1px solid",
        borderColor: "grey.800",
        backgroundColor: "warning.light",
      }}
    >
      <Text textTransform="uppercase" variant="h5">
        Other Layout
      </Text>
      <Text textAlign="center" textTransform="uppercase" variant="overline">
        {`Current path is ${pathname}`}
      </Text>
      <Box
        my={3}
        py={3}
        className="center-root"
        sx={{
          border: "1px solid",
          borderColor: "grey.800",
          backgroundColor: "error.light",
        }}
      >
        <Text>Other Layout Header</Text>
      </Box>
      {children}
    </Stack>
  );
};

export default OtherLayout;
