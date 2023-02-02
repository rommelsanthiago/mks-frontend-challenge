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

export const Button = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    position: relative;

    span {
      display: inline;
      position: absolute;
      top: -8px;
      right: -8px;
      width: 1.8em;
      height: 1.8em;
      border: 2px solid ${({ theme }) => theme.colors.secundary};
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.primary};
      text-align: center;
      color: ${({ theme }) => theme.colors.secundary};
      font-size: 0.8em;
      font-weight: 500;
      padding: 0.18em;
    }
`    
