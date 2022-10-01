import React from "react";
import { ButtonGreen } from "../../../styles/buttons";
import { ThemeSpan, ThemeTitle } from "../../../styles/typography";
import { BoxTotal } from "./style";

export const CartTotal = ({ currentSale }) => {
  const price = currentSale.map((elem) => elem.price * elem.count);
  const total = price.reduce((acc, act) => act + acc, 0);

  return (
    <BoxTotal>
      <div>
        <ThemeTitle size="default">Total</ThemeTitle>
        <ThemeSpan>{`R$ ${total.toFixed(2)}`.replace(".", ",")}</ThemeSpan>
      </div>
      <ButtonGreen>Finalizar</ButtonGreen>
    </BoxTotal>
  );
};
