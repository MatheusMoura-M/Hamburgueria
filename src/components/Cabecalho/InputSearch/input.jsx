import React from "react";
import { BoxImput } from "./style";
import { ButtonGreen } from "../../../styles/buttons";

export const Input = () => {
  return (
    <BoxImput>
      <input type="text" placeholder="Digitar pesquisa" />
      <ButtonGreen size="small">Pesquisar</ButtonGreen>
    </BoxImput>
  );
};
