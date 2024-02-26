import { styled } from 'styled-components';

export const Board = styled.div<{$highlight: boolean}>`
  display: grid;
  grid-template-columns: repeat(10, 28px);
  grid-template-rows: repeat(10, 28px);
  border-radius: 2px;
  background: ${({theme}) => theme.colors.primary005};

  ${({$highlight, theme}) => $highlight && `
  outline: 2px solid ${theme.colors.accent};
  outline-offset: 4px;
  `};
`;