import React from "react";
import { BoxCart } from "./style";
import { ThemeTitle, ThemeSpan } from "../../../styles/typography";
import { CartProduct } from "../cartProduct/cartProduct";
import { CartTotal } from "../CartTotal/cartTotal";
import { v4 as uuidv4 } from "uuid";

export const Cart = ({ currentSale }) => {
  return (
    <BoxCart>
      {/* <ThemeTitle>Sua sacola está vazia</ThemeTitle>
      <ThemeSpan>Adicione itens</ThemeSpan> */}
      <ul>
        {currentSale.map((product) => (
          <CartProduct product={product} key={uuidv4()} />
        ))}
      </ul>
      <CartTotal />
    </BoxCart>
  );
};
