import 'styled-components';
import { Theme } from './types/styled';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    type: ThemeEnum
  }
}