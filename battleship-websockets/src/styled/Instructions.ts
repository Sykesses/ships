import { styled } from 'styled-components';

export const Instructions = styled.div`
  min-height: 120px;
  font-size: larger;
  white-space: pre-wrap;
  display: flex;
  place-items: center;
  color: ${({theme}) => theme.colors.text};
`;