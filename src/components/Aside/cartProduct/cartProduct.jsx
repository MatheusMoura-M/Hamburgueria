import React from "react";
import { ThemeSpan, ThemeTitle } from "../../../styles/typography";
import { BoxInfo, Card } from "./style";
import { ButtonRemove } from "../../../styles/buttons";

export const CartProduct = ({ product }) => {
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
        <ThemeSpan>{product.category}</ThemeSpan>
      </BoxInfo>
      <ButtonRemove onClick={() => handleClick(product.id)} size="small">
        Remover
      </ButtonRemove>
    </Card>
  );
};
