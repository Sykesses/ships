import { styled } from 'styled-components';

export const Button = styled.button`
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    background-color: ${({theme}) => theme.colors.primary005};
    border: 1px solid transparent;
    padding: 8px 24px;
    font-size: 16px;
    border-radius: 8px;
    transition: 0.3s ease-in-out;
    color: ${({theme}) => theme.colors.primary};
    border-color: ${({theme}) => theme.colors.primary};

    &:hover {
      cursor: pointer;
      color: ${({theme}) => theme.colors.fieldsBg};
      background-color: ${({theme}) => theme.colors.primary};
    }

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 0.25rem ${({theme}) => theme.colors.primary05};
      border-color: ${({theme}) => theme.colors.primary};
    }

    &:last-child {
      margin-top: var(--margin40);
    }

    &[disabled] {
      background-color: ${({theme}) => theme.colors.neutral};
      border-color: ${({theme}) => theme.colors.neutral};
      color: ${({theme}) => theme.colors.text};
      &:hover {
        cursor: auto;
      }
  }
  `;