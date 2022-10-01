import styled from "styled-components"

export const SectionProduct = styled.section`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  margin: 0 auto;
  min-width: 60%;
  max-width: 65%;
  max-height: 534px;
  
  animation: show 1.2s ease 0s 1;

  @media (max-width: 970px){
    min-height: 55%;
    max-height: 56%;
    max-width: 100%;
  }
  
  .boxPesquisa{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    min-height: 10%;
    width: 100%;

    margin-top: 35px;

    animation: show 1.2s ease 0s 1;
  }

  ul{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap ;
    gap: 1rem;

    min-width: 100%;
    min-height: 90%;

    padding: 10px;

    animation: show ease 1.2s 0s 1;
    
    @media (max-width: 970px) {
      overflow-x: auto;
      max-height: 30%;
      flex-wrap: nowrap;
      max-width: 95%;
    }
  }

  @keyframes show {
    0%{
      opacity: 0;
      transform: translateX(-25px);
    }

    50%{
      opacity: 0.5;
      transform: translateX(10px);
    }
    100%{
      opacity: 1;
      transform: translateX(0);
    }
  }
`