import React from "react";
import { ThemeParagraph, ThemeSpan, ThemeTitle } from "../../../styles/typography";
import { BoxInfo, Card } from "./style";
import { ButtonRemove } from "../../../styles/buttons";

export const CartProduct = ({ product, removeProducts}) => {
  return (
    <Card id={product.id}>
      <figure>
        <img
          src={product.img}
          alt={product.name}
          referrerPolicy="no-referrer"
        />
      </figure>
      <BoxInfo>
        <ThemeTitle size="small">{product.name}</ThemeTitle>
        <ThemeParagraph size="small">{product.category}</ThemeParagraph>
        <ThemeSpan>Qnt: {product.count}</ThemeSpan>
      </BoxInfo>
      <ButtonRemove onClick={() => removeProducts(product.id)} size="small">
        X
      </ButtonRemove>
    </Card>
  );
};
