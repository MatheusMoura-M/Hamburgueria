import React from "react";
import { Product } from "../Product/product";
import { SectionProduct } from "./style";
import { v4 as uuidv4 } from "uuid";
import { ButtonGreen } from "../../../styles/buttons";
import { ThemeSpan, ThemeTitle } from "../../../styles/typography";

export const ProductsList = ({
  openDiv,
  setOpenDiv,
  filteredProducts,
  setProducts,
  products,
  handleClick,
  inputSearch,
  setInputSearch
}) => {

  const showProductsDeafult = (event) => {
    event.preventDefault();

    setProducts(filteredProducts);
    setInputSearch("")
    setOpenDiv(false)
  };

  return (
    <SectionProduct>
      {openDiv !== false && inputSearch !== "" && (
        <div className="boxPesquisa">
          <ThemeTitle size="default">Resultados para: <ThemeSpan size="big">{inputSearch}</ThemeSpan> </ThemeTitle>
          <ButtonGreen
            onClick={(event) => showProductsDeafult(event)}
            size="small"
          >
            Limpar
          </ButtonGreen>
        </div>
      )}
      <ul>
        {products.map((product) => (
          <Product handleClick={handleClick} product={product} key={uuidv4()} />
        ))}
      </ul>
    </SectionProduct>
  );
};
