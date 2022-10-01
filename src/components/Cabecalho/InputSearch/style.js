import styled from "styled-components";

export const BoxImput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 230px;
  border-radius: 0.4rem;
  height: 40px;
  margin-right: 4rem;
  background: var(--white);

  input{
    width: 65%;
    height: 25px;
    margin-left: 5px;
    font-size: var(--fontSize-title-2);
  }

  & > button{
    margin-right: 5px;
  }

  @media (max-width: 540px){
    height: 37px;
    margin: 0;
    width: 80%;
  }
`;
