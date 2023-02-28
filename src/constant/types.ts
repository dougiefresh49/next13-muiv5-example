import { AppearanceType } from "./enum";

export interface Option {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
}

export interface Paging {
  pageIndex: number;
  pageSize: number;
  totalPages?: number;
  totalItems?: number;
}

export type Mode = AppearanceType.LIGHT | AppearanceType.DARK | "system";

export type Size = {
  width: number;
  height: number;
};
