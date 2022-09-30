import styled from "styled-components"

export const Card = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap:5px;

  padding: 0.4rem;
  
  animation: show ease 1.2s 0s 1;
  
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
      opacity: 0.5;
      transform: translateX(10px);
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
  gap: 5px;
  
  height: 100%;
  width: 100px;
`
