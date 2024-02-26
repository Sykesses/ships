import { styled } from 'styled-components';

export const ThemeSwitcherButton = styled.button`
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 400;
    line-height: 1.5;

    background: transparent;
    border: none;
    border-radius: 50%;

    font-size: 14px;

    transition: 0.3s ease-in-out;
    color: ${({theme}) => theme.colors.primary};
    position: relative;

    &:hover {
      cursor: pointer;
      color: ${({theme}) => theme.colors.fieldsBg};
      background-color: ${({theme}) => theme.colors.primary};
      border-radius: 50%;
    }

    &:focus-visible {
      outline: 0;
      box-shadow: 0 0 0 0.25rem ${({theme}) => theme.colors.primary05};
      border-color: ${({theme}) => theme.colors.primary};
    }
  `;