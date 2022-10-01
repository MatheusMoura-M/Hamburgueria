import React from "react";
import {
  ThemeParagraph,
  ThemeSpan,
  ThemeTitle,
} from "../../../styles/typography";
import { BoxInfo, Card } from "./style";
import { ButtonGreen } from "../../../styles/buttons";

export const Product = ({ product, handleClick }) => {
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
        <ThemeTitle size="default">{product.name}</ThemeTitle>
        <ThemeSpan>{product.category}</ThemeSpan>
        <ThemeParagraph>
          {product.id > 4 ? `R$ ${product.price}`.replace(".", ",") : `R$ ${product.price}.00`.replace(".", ",")}
        </ThemeParagraph>
        <ButtonGreen onClick={() => handleClick(product.id)} size="small">
          Adicionar
        </ButtonGreen>
      </BoxInfo>
    </Card>
  );
};
