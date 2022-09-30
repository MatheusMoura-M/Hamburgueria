import React from "react";
import { Input } from "../../InputSearch/input";
import { Logo } from "../../Logo/logo";
import { Cabecalho } from "./style";

export const Header = ({setOpenDiv, showProducts, filteredProducts, setProducts, inputSearch, setInputSearch}) => {
  return (
    <Cabecalho>
      <Logo />
      <Input setOpenDiv={setOpenDiv} showProducts={showProducts} filteredProducts={filteredProducts} setProducts={setProducts} inputSearch={inputSearch} setInputSearch={setInputSearch}/>
    </Cabecalho>
  );
};
