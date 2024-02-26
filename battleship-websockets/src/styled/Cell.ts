import { styled } from 'styled-components';
import { CELL_STATES } from '../constants';

export const Cell = styled.div<{ $state: CELL_STATES; $isActive: boolean}>`
  border: ${({$state, theme}) => $state === CELL_STATES.UNKNOWN ? `1px solid ${theme.colors.primary05}` : `1px solid ${theme.colors.transparency005}`};
  width: 28px;
  height: 28px;
  border-radius: 2px;
  background: ${({$state, theme}) => {
      switch($state) {
        case CELL_STATES.CHECK: {
          return theme.colors.primary025;
        }
        case CELL_STATES.WOUNDED: {
          return `radial-gradient(50% 50% at 50% 50%, ${theme.colors.accent} 40%, ${theme.colors.transparency05} 55%, ${theme.colors.primary025} 65%);`;
        }
        case CELL_STATES.UNKNOWN: {
          return theme.colors.primary05;
        }
        default: {
          return theme.colors.primary;
        }
      }
    }};

  &:before {
    ${({$state, theme}) => $state === CELL_STATES.UNKNOWN && `
      content: '?';
      color: ${theme.colors.transparency05};
      ` };
    }

  &:hover {
    ${({$isActive, theme}) => {
      if($isActive){
        return `
        cursor: pointer;
        transition: 0.3s ease-in-out;
        box-shadow: 0px 0px 8px 4px ${theme.colors.transparency05};
        border: 1px solid${theme.colors.transparency05};
        z-index: 1;
      `}
      }
    }
  }

`;
