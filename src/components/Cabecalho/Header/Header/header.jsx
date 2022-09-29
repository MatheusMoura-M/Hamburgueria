import React from "react";
import { Input } from "../../InputSearch/input";
import { Logo } from "../../Logo/logo";
import { Cabecalho } from "./style";

export const Header = () => {
  return (
    <Cabecalho>
      <Logo />
      <Input />
    </Cabecalho>
  );
};
