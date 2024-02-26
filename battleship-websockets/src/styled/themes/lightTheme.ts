import { DefaultTheme } from 'styled-components';
import { ThemeType } from '../../types/styled';

export const lightTheme: DefaultTheme = {
  type: ThemeType.light,
  colors: {
    primary: `var(--cerulean)`,
    primary05: `var(--cerulean05)`,
    primary025: `var(--cerulean025)`,
    primary005: `var(--cerulean005)`,

    accent: `var(--giants-orange)`,
    accent03: `var(--giants-orange03)`,
    
    neutral: `var(--platinum)`,
    text: `var(--eerie-black)`,

    fieldsBg: `var(--snow)`,
    bg: `var(--cerulean005)`,

    transparency05: `var(--white05)`,
    transparency005: `var(--white005)`,
  }
}
