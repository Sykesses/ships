import { DefaultTheme } from 'styled-components';
import { ThemeType } from '../../types/styled';

export const darkTheme: DefaultTheme = {
  type: ThemeType.dark,
  colors: {
    primary: `var(--moonstone)`,
    primary05: `var(--moonstone05)`,
    primary025: `var(--moonstone025)`,
    primary005: `var(--gunmetal)`,

    accent: `var(--coral)`,
    accent03: `var(--giants-orange03)`,

    neutral: `var(--dark05)`,
    text: `var(--flash-white)`,

    fieldsBg: `var(--black)`,
    bg: `var(--gunmetal)`,

    transparency05: `var(--dark05)`,
    transparency005: `var(--dark005)`,
  }
}