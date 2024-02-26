import { styled, keyframes } from 'styled-components';

const bell = keyframes`
  0% {
        transform: rotate(0deg);
      }
      7.5% {
        transform: rotate(25deg);
      }
      30% {
        transform: rotate(-25deg);
      }
      45% {
        transform: rotate(15deg);
      }
      58% {
        transform: rotate(-10deg);
      }
      70% {
        transform: rotate(5deg);
      }
      87.5% {
        transform: rotate(-2deg);
      }
      100% {
        transform: rotate(0deg);
      }
`;

export const Bell = styled.div`
  margin: 0 20px;
  background-color: ${({theme}) => theme.colors.accent};
  min-width: 12px;
  height: 16px;
  border-radius: 50% 50% 0 0;
  position: relative;

  animation: ${bell} 0.7s 0.7s;
  animation-iteration-count: 1;

  &:before {
    content: ' ';
    position: absolute;
    clip-path: polygon(50% 40%, 100% 90%, 100% 100%, 0 100%, 0 90%);
    background-color: ${({theme}) => theme.colors.accent};
    width: 16px;
    left: -2px;
    height: 18px;
  }

  &:after {
    content: ' ';
    position: absolute;
    width: 4px;
    height: 4px;
    top: 120%;
    left: 4px;
    border-radius: 0 0 50% 50%;
    background-color: ${({theme}) => theme.colors.accent};
  }
`