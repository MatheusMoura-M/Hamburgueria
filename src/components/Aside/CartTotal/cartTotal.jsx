import React from 'react'
import { ButtonGrey } from '../../../styles/buttons'
import { ThemeSpan, ThemeTitle } from '../../../styles/typography'
import { BoxTotal } from './style'

export const CartTotal = () => {
  return (
    <BoxTotal>
      <div>
        <ThemeTitle size="default">Total</ThemeTitle>
        <ThemeSpan>R$ 40,00</ThemeSpan>
      </div>
      <ButtonGrey>Remover todos</ButtonGrey>
    </BoxTotal>
  )
}

