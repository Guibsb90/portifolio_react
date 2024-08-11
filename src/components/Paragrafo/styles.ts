import { styled } from 'styled-components'

import { Props } from './'

export const P = styled.h3<Props>`
  font-weight: normal;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  line-height: 22px;
  color: ${(props) =>
    props.tipo === 'principal'
      ? props.theme.corPrincipal
      : props.theme.corSecundaria};
`
