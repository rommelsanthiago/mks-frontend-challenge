import React, { useContext } from 'react';
import { shade } from 'polished';
import Switch from 'react-switch';
import { ShoppingCart } from 'react-feather';
import { ThemeContext } from 'styled-components';

import * as S from './styles';
import { Button } from '../Button';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <S.Container>
      <S.Title>MKS <span>Sistemas</span></S.Title>
      <section>
        <Button>
          <ShoppingCart color="#fff" size={26}/>
        </Button>
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
