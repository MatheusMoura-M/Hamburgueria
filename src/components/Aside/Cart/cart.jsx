import React from "react";
import { BoxCart } from "./style";
import { ThemeTitle, ThemeSpan } from "../../../styles/typography";
import { CartProduct } from "../cartProduct/cartProduct";
import { CartTotal } from "../CartTotal/cartTotal";
import { v4 as uuidv4 } from "uuid";

export const Cart = ({ currentSale, removeProducts }) => {
  return currentSale.length >= 1 ? (
    <BoxCart>
      <ul>
        {currentSale.map((product) => (
          <CartProduct
            product={product}
            key={uuidv4()}
            removeProducts={removeProducts}
          />
        ))}
      </ul>
      <CartTotal currentSale={currentSale} />
    </BoxCart>
  ) : (
    <BoxCart>
      <ThemeTitle size="small">Sua sacola está vazia</ThemeTitle>
      <ThemeSpan>Adicione itens</ThemeSpan>
    </BoxCart>
  );
};
