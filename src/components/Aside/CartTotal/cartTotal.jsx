import React from 'react'
import { ButtonGrey } from '../../../styles/buttons'
import { ThemeSpan, ThemeTitle } from '../../../styles/typography'
import { BoxTotal } from './style'

export const CartTotal = ({currentSale}) => {
  
  const total = currentSale.reduce((acc, act) => act.price + acc, 0)
  
  return (
    <BoxTotal>
      <div>
        <ThemeTitle size="default">Total</ThemeTitle>
        <ThemeSpan>{total.toFixed(2)}</ThemeSpan>
      </div>
      <ButtonGrey>Remover todos</ButtonGrey>
    </BoxTotal>
  )
}

