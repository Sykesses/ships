import { styled } from 'styled-components';

export const TwoPanelWrapper = styled.div<{ $divider: boolean;}>`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    gap: 80px;
    flex-wrap: wrap;
    position: relative;

    &:before {
      ${({$divider, theme}) =>
        {
          if($divider) {
            return `
              background-color: ${theme.colors.accent03};
              content: "";
              position: absolute;
              left: calc(50% - 1px);
              width: 1px;
              height: 100%;
              `
            }
          }
        }
      }

    @media (max-width: 767px) {
      &:before {
                background: none;
        }
    }

`;