import React from "react";
import {
  NewThemeParagraph,
  NewThemeSpan,
  NewThemeTitle,
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
        <div className="animeTitle">
          <NewThemeTitle size="default">{product.name}</NewThemeTitle>
        </div>
        <div className="animeSpan">
          <NewThemeSpan>{product.category}</NewThemeSpan>
        </div>
        <div className="animeParagraph">
          <NewThemeParagraph>
            {product.id > 4
              ? `R$ ${product.price}`.replace(".", ",")
              : `R$ ${product.price}.00`.replace(".", ",")}
          </NewThemeParagraph>
        </div>
        <ButtonGreen onClick={() => handleClick(product.id)} size="small">
          Adicionar
        </ButtonGreen>
      </BoxInfo>
    </Card>
  );
};
