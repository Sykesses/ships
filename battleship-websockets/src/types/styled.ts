export interface Theme {
  colors: {
    primary: string,
    primary05: string,
    primary025: string,
    primary005: string,
    accent: string,
    accent03: string,
    neutral: string,
    text: string,
    fieldsBg: string,
    bg: string,
    transparency05: string,
    transparency005: string,
  }
}

export enum ThemeType  {
  light = "light",
  dark = "dark"
}