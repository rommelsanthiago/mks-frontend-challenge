import styled from 'styled-components';

export const Container = styled.div`
    height: 18em;
    min-width: 14em;
    max-width: 14.5em;
`

export const Card = styled.div.attrs(props => ({
	className: props.className,
}))`
  min-height: 18em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding-top: .5em;
  border-radius: 0.5em;
  background: #FFF;
  box-shadow: outset 0px 0px 15px 5px rgb(0 0 0 / 8%);
  transition: 0.2s;
  overflow: hidden;
  ::before{
      width: 0;
      height: 100%;
      content: '';
      position: absolute;
      left:0;
      bottom:0;
      box-sizing: border-box;
      border-bottom: 5px solid transparent;
      border-left: 5px solid transparent;
      transition: all .8s ease;
  }
  ::after{
      width: 0;
      height:100%;
      content: '';
      position: absolute;
      right:0;
      top:0;
      box-sizing: border-box;
      border-top: 5px solid transparent;
      border-right: 5px solid transparent;
      transition: all .8s ease;
  }
  &:hover::before{
      width: 100%;
      height: 0;
      border-color: ${({ theme }) => theme.colors.primary};
  }
  &:hover::after {
      width: 100%;
      height: 0;
      border-color: ${({ theme }) => theme.colors.primary};
  }
  &:focus {
    transform: translateY(-5px);
  }

  h2,
  p {
      width: 80%;
      display: block;
      font-size: 1.2em;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
  }

  & .active {
    font-size: 5rem;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
    div {
      display: flex;
      align-items: start;
      justify-content: space-between;
      margin-bottom: 8px;
      h1 {
          max-width: 108px;
          max-height: 38px;
          display: block; 
          display: -webkit-box;
          font-size: 16px;
          font-weight: 400;
          color: #2C2C2C;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          line-height: 19px;
          overflow: hidden;
      }
      span {
          font-size: 15px;
          font-weight: 700;
          color: white;
          padding: 4px;
          border-radius: 5px;
          background-color: #373737;
      }
    }
    
    p {
        max-height: 25px;
        max-width: 192px;
        display: block; 
        font-size: 10px;
        font-weight: 300;
        color: #2C2C2C;
    }
`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  margin-bottom: 14px;
`;

export const ButtonCard = styled.button`
  width: 100%;
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 0 0 8px 8px;
  color: white;
  background: #0F52BA;
  cursor: pointer;
  line-height: 18px;

  img {
    margin-right: 14px;
  }
`;
