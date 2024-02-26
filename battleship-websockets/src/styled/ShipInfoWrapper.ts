import { styled } from 'styled-components';

export const ShipInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    & p {
      margin-right: 16px;
      font-size: larger;
      color: ${({theme}) => theme.colors.accent};
    }
`;