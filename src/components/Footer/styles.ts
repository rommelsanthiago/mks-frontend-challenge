import styled from 'styled-components';

export const Container = styled.footer`
    width: 100%;
    height: 34px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secundary};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    position: relative;
    bottom: 0;
    left: 0;
`;
