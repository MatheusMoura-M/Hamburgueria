import React from "react";
import { Product } from "../Product/product";
import { SectionProduct, UlProducts } from "./style";
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
  setInputSearch,
  animation,
  margin,
  setMargin,
}) => {

  const showProductsDeafult = (event) => {
    event.preventDefault();

    setProducts(filteredProducts);
    setInputSearch("")
    setOpenDiv(false)
    setMargin(true)
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
      <UlProducts margin={margin}>
        {products.map((product) => (
          <Product animation={animation} handleClick={handleClick} product={product} key={uuidv4()} />
        ))}
      </UlProducts>
    </SectionProduct>
  );
};
