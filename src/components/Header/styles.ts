import styled from 'styled-components';

export const Container = styled.header`
  height: 4em;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secundary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2em;

  section {
    width: 8em;
    display: flex;
    align-items: center;
    gap: 3.5em;
  }
`;

export const Title = styled.h1`
  font-size: 2em;
  font-weight: 600;

  span {
    font-size: .6em;
    font-weight: 300;
  }
`
    
