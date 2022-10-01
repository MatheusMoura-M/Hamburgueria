import React from "react";
import Logoo from "../../../../public/assets/logo (1).svg";
import { Figure } from "./style";

export const Logo = () => {
  return (
    <Figure>
      <img src={Logoo} alt="Logo" />
    </Figure>
  );
};
