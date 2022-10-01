import styled from "styled-components"

export const Card = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap:5px;

  padding: 0.4rem;
  
  animation: show ease-in-out 1s 0s 1;

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
  
  height: 65px;
  width: 100px;

  & > h2{
    line-height: 15px;
  }
`
