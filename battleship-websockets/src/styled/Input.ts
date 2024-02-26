import { styled } from 'styled-components';

export const Input = styled.input`
  padding: 8px 12px;
  font-size: 16px;
  line-height: 1.5;
  appearance: none;
  border-radius: 8px;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  color: ${({theme}) => theme.colors.primary};
  background-color: ${({theme}) => theme.colors.fieldsBg};
  border: 1px solid ${({theme}) => theme.colors.primary05};
  text-align: center;

  &:focus{
      outline: 0;
      box-shadow: 0 0 0 0.25rem ${({theme}) => theme.colors.primary05};;
      border-color: ${({theme}) => theme.colors.primary};
  }
  `;