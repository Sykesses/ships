import { styled, keyframes } from 'styled-components';

const moveOut = keyframes`
  0% {
    transform: translate(0, -200px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const moveOff = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, -300px);
  }
`;

export const NotificationWrapper = styled.div<{$hide: boolean}>`
    z-index: 1000;
    position: fixed;
    padding: 20px 10px;
    width: 280px;
    left: calc(50% - 140px);
    border: 4px solid ${({theme}) => theme.colors.accent};
    border-color: ${({theme}) => theme.colors.accent} transparent ${({theme}) => theme.colors.accent} transparent;
    background: ${({theme}) => theme.colors.fieldsBg};
    color: ${({theme}) => theme.colors.text};
    box-shadow: 0px 4px 8px 0px ${({theme}) => theme.colors.neutral};
    animation-iteration-count: 1;
    animation: ${({$hide}) => $hide ? moveOff : moveOut} 0.7s ease-out;

    ${({$hide}) => {
      if($hide) {
        return `
        animation-fill-mode: forwards;
        `
      }
    }};

    &:hover {
      cursor: pointer;
      border-color: ${({theme}) => theme.colors.accent03} transparent ${({theme}) => theme.colors.accent03} transparent;
      &:after {
        background: ${({theme}) => theme.colors.primary};
      }
    }

    &:after {
      content: " ";
      width: 21px;
      height: 20px;
      margin: 10px auto 0;
      display: block;
      background: ${({theme}) => theme.colors.accent};
      clip-path: polygon(100% 80%, 100% 100%, 50% 70%, 0% 100%, 0 80%, 50% 50%);
    }
`;
