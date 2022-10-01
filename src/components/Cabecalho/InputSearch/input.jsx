import React from "react";
import { BoxImput } from "./style";
import { ButtonGreen } from "../../../styles/buttons";

export const Input = ({setOpenDiv, filteredProducts, setProducts, inputSearch, setInputSearch }) => {

  const showProducts = (event) => {  
    event.preventDefault();
    const filtered = filteredProducts.filter(product => product.name.includes(inputSearch) || product.name.toLowerCase().includes(inputSearch) || product.category.includes(inputSearch) || product.category.toLowerCase().includes(inputSearch));

    setOpenDiv(true)
    setProducts(filtered)
}

  return (
    <BoxImput>
      <input
        type="text"
        placeholder="Digitar pesquisa"
        value={inputSearch}
        onChange={(event) => setInputSearch(event.target.value)}
        required
      />
      <ButtonGreen onClick={(event) => showProducts(event)} size="small">
        Pesquisar
      </ButtonGreen>
    </BoxImput>
  );
};
