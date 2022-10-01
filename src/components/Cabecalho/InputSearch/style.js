import styled from "styled-components";

export const BoxImput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  width: 230px;
  border-radius: .4rem;
  height: 40px;
  margin-right: 4rem;
  background: var(--white);

  transition: .5s;
  :hover{
    transform: scale(1.1);
  }

  input{
    width: 100%;
    height: 100%;
    padding: .3rem 6.5rem .3rem .5rem;
    font-size: var(--fontSize-title-2);
    outline-color: var(--color-primary)
  }

  & > button{
    margin-right: .3rem;
    position: absolute;
    top: .4rem;
    right: .5rem;
  }

  @media (max-width: 540px){
    height: 37px;
    margin: 0;
    width: 80%;
  }
`;
