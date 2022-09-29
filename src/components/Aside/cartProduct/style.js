import styled from "styled-components"

export const Card = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap:5px;

  padding: 0.4rem;

  figure{
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--grey-4);
    border-radius: 0.35rem;

    max-width: 65px;
    max-height: 65px;
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
