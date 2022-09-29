import styled from "styled-components"

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  
  width: 150px;
  padding: 0.5rem;

  border: 1px solid grey;

  figure{
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-height: 100px;
  
    img{
      max-height: 100px;
    }
  }
`

export const BoxInfo = styled.div`
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  min-height: 115px;
`
