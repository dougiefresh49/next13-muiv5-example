import React, { memo } from "react";
import { Stack } from "@mui/material";
import { Text } from "components/shared";

const Header = () => {
  return (
    <Stack
      direction="row"
      height={80}
      sx={{
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
      className="center-root"
    >
      <Text>MIGRATE NEXTJS 13</Text>
    </Stack>
  );
};

export default memo(Header);
