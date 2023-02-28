import { useMemo } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { BreakpointsOptions } from "constant/enum";

const useBreakpoints = () => {
  const theme = useTheme();
  const isXsSmaller = useMediaQuery(
    theme.breakpoints.down(BreakpointsOptions.XS),
  );
  const isSmSmaller = useMediaQuery(
    theme.breakpoints.down(BreakpointsOptions.SM),
  );
  const isMdSmaller = useMediaQuery(
    theme.breakpoints.down(BreakpointsOptions.MD),
  );
  const isLgSmaller = useMediaQuery(
    theme.breakpoints.down(BreakpointsOptions.LG),
  );
  const isXlSmaller = useMediaQuery(
    theme.breakpoints.down(BreakpointsOptions.XL),
  );

  const ratio = useMemo(() => {
    switch (true) {
      case Boolean(isSmSmaller):
        return BreakpointsOptions.XS;
      case Boolean(isMdSmaller):
        return BreakpointsOptions.SM;
      case Boolean(isLgSmaller):
        return BreakpointsOptions.MD;
      case Boolean(isXlSmaller):
        return BreakpointsOptions.LG;
      default:
        return BreakpointsOptions.XL;
    }
  }, [isSmSmaller, isMdSmaller, isLgSmaller, isXlSmaller]);

  return {
    isXsSmaller,
    isSmSmaller,
    isMdSmaller,
    isLgSmaller,
    isXlSmaller,
    currentRatio: ratio,
  };
};

export default useBreakpoints;
