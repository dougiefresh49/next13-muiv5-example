export enum BreakpointsOptions {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl",
}

export enum AppearanceType {
  LIGHT = "light",
  DARK = "dark",
}

export enum DataStatus {
  IDLE,
  LOADING,
  SUCCEEDED,
  FAILED,
}

export enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  TOO_MANY_REQUEST = 429,
  INTERNAL_SERVER = 500,
}
