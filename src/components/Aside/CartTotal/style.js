import styled from "styled-components"

export const BoxTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:15px;
  
  width: 100%;
  height: 85px;

  div{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap:5px;

    width: 93%;
  }

  button{
    width: 93%;
    height: 30px;
  }
`
