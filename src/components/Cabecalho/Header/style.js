import styled from "styled-components";

export const Cabecalho = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 60px;
  background: #fffefebd;
  box-shadow: 5px 6px 23px 0px #cd22229e;

  @media (max-width: 540px){
   flex-direction: column;
   justify-content: space-evenly;
   
   height: 80px;
  }
`;
