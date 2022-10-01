import React from "react";
import {
  ThemeParagraph,
  ThemeSpan,
  ThemeTitle,
} from "../../../styles/typography";
import { BoxInfo, Card } from "./style";
import { ButtonRemove } from "../../../styles/buttons";
import { IoMdTrash } from "react-icons/io";

export const CartProduct = ({ product, removeProducts }) => {
  return (
    <Card id={product.id}>
      <div className="content">
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
      </div>
      <ButtonRemove onClick={() => removeProducts(product)} size="small">
        <IoMdTrash />
      </ButtonRemove>
    </Card>
  );
};
