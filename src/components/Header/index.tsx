import React, { useContext } from 'react';
import { shade } from 'polished';
import Switch from 'react-switch';
import { ShoppingCart } from 'react-feather';
import { ThemeContext } from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';

import * as S from './styles';
import { Button } from '../Button';
import {RootState} from '../../store';
import {openCart} from '../../store/Stock.store';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  const dispatch = useDispatch();
	const cart = useSelector((state: RootState) => state.cart);

	const cartOpen = () => dispatch(openCart());


  return (
    <S.Container>
      <S.Title>MKS <span>Sistemas</span></S.Title>
      <section>
        <S.Button
          style={{display: cart.cartOpen === 'flex' ? 'none' : 'flex'}}
          onClick={() => cartOpen()}
          data-testid='button-cart'
        >
          <ShoppingCart color="#fff" size={26} />
          {
            cart.productsSelected.length > 0 &&
            <span>{cart.productsSelected.length}</span>
          }
        </S.Button>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={15}
          width={40}
          handleDiameter={20}
          offColor={shade(0.15, colors.indicator)}
          onColor={colors.indicator}
        />
      </section>
    </S.Container>
  );
};

export default Header;
