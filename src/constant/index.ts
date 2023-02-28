import { Mode } from "constant/types";
export const OG_IMAGE = process.env.OG_IMAGE as string;
export const API_URL = process.env.API_URL as string;

export const DEFAULT_MODE: Mode = "system";
export const DARK_THEME_MEDIA_SYSTEM = "(prefers-color-scheme: dark)";

export const FORM_DATA_HEADER = {
  "Content-Type": "multipart/form-data",
};
