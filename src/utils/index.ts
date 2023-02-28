import { Breakpoint } from "@mui/material";
import { DARK_THEME_MEDIA_SYSTEM } from "constant";
import { AppearanceType, BreakpointsOptions } from "constant/enum";
import { clientStorage } from "./storage";

export const getTheme = (
  key: string,
  fallback: AppearanceType,
): AppearanceType => {
  if (typeof window === "undefined") return fallback;
  try {
    const theme =
      (clientStorage.get(key) as AppearanceType) || getThemeSystem();
    return theme || fallback;
  } catch (error) {
    // Unsupported
    console.error(error);
  }
  return fallback;
};

export const getThemeSystem = (e?: MediaQueryList): AppearanceType => {
  if (!e) {
    e = window.matchMedia(DARK_THEME_MEDIA_SYSTEM);
  }

  const isDark = e.matches;

  const themeSystem = isDark ? AppearanceType.DARK : AppearanceType.LIGHT;
  return themeSystem;
};

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
