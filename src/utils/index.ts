import { Breakpoint } from "@mui/material";
import { BreakpointsOptions } from "constant/enum";

export const parseJSON = (
  data: string | undefined,
  defaultData: unknown,
): unknown => {
  try {
    if (!data) return defaultData;
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
    return defaultData;
  }
};

export const getActiveBreakpoint = (
  currentRatio: Breakpoint,
  options: { [key: string]: string },
) => {
  switch (currentRatio) {
    case BreakpointsOptions.XL:
      return (
        options[BreakpointsOptions.XL] ??
        options[BreakpointsOptions.LG] ??
        options[BreakpointsOptions.MD] ??
        options[BreakpointsOptions.SM] ??
        options[BreakpointsOptions.XS]
      );
    case BreakpointsOptions.LG:
      return (
        options[BreakpointsOptions.LG] ??
        options[BreakpointsOptions.MD] ??
        options[BreakpointsOptions.SM] ??
        options[BreakpointsOptions.XS]
      );
    case BreakpointsOptions.MD:
      return (
        options[BreakpointsOptions.MD] ??
        options[BreakpointsOptions.SM] ??
        options[BreakpointsOptions.XS]
      );
    case BreakpointsOptions.SM:
      return options[BreakpointsOptions.SM] ?? options[BreakpointsOptions.XS];
    case BreakpointsOptions.XS:
      return options[BreakpointsOptions.XS];
    default:
      return;
  }
};
