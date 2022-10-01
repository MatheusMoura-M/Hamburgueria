import React from 'react'
import { ButtonGrey } from '../../../styles/buttons'
import { ThemeSpan, ThemeTitle } from '../../../styles/typography'
import { BoxTotal } from './style'

export const CartTotal = ({currentSale}) => {
  const price = currentSale.map(elem => elem.price * elem.count)
  const total = price.reduce((acc, act) => act + acc, 0)
  
  return (
    <BoxTotal>
      <div>
        <ThemeTitle size="default">Total</ThemeTitle>
        <ThemeSpan>{`R$ ${total.toFixed(2)}`}</ThemeSpan>
      </div>
      <ButtonGrey>Remover todos</ButtonGrey>
    </BoxTotal>
  )
}

