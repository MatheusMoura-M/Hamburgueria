import styled from "styled-components"

export const Card = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap:5px;

  padding: 0.4rem;
  
  transition: .3s;
  animation: show cubic-bezier(.22,.53,.6,1.6) 1.3s 0s 1;
  
  :hover{
    transition: .4s;
    box-shadow: 5px 5px 5px 1px var(--grey-4);
    transform: translateX(-2px) translateY( -2px);

    button{
      transition: .5s;
      color: var(--btn-remove);
    }
  }

  @media (max-width: 970px) {
      justify-content: space-between;
  }
  
  .content{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 7px;
  }

  figure{
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--grey-4);
    border-radius: 0.35rem;

    max-width: 65px;
    max-height: 65px;
  }

  @keyframes show {
    0%{
      opacity: 0;
      transform: translateX(-25px);
    }

    50%{
      transform: translateX(5px);
    }
    100%{
      opacity: 1;
      transform: translateX(0);
    }
  }
`

export const BoxInfo = styled.div`
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  
  height: 65px;
  width: 100px;

  & > h2{
    line-height: 15px;
  }
`
