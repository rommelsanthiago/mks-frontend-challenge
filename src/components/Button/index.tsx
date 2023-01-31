import React from 'react'

import * as S from './styles'

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    specialProp?: string;
}

export const Button = (props: ButtonProps) => {
    const { specialProp, ...rest } = props;

  return (
    <S.Container onClick={props.onClick} style={props.style} {...rest}>
        {props.children}
    </S.Container>
  )
}