import React from "react";
import { Input } from "../InputSearch/input";
import { Logo } from "../Logo/logo";
import { Cabecalho } from "./style";

export const Header = ({
  setMargin,
  setAnimation,
  setOpenDiv,
  showProducts,
  filteredProducts,
  setProducts,
  inputSearch,
  setInputSearch,
}) => {
  return (
    <Cabecalho>
      <Logo />
      <Input
        setMargin={setMargin}
        setAnimation={setAnimation}
        setOpenDiv={setOpenDiv}
        showProducts={showProducts}
        filteredProducts={filteredProducts}
        setProducts={setProducts}
        inputSearch={inputSearch}
        setInputSearch={setInputSearch}
      />
    </Cabecalho>
  );
};
