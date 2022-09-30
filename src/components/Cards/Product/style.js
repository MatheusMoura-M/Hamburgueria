import styled from "styled-components"

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  
  width: 31.58%;
  height: 231px;
  
  border: 1px solid var(--grey-4);
  border-radius: 0.4rem;
  
  figure{
    display: flex;
    align-items: center;
    justify-content: center;
    
    background: var(--grey-5);
    border-radius: 0.5rem 0.5rem 0 0;
    
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
  gap:4px;

  width: 100%;
  min-height: 115px;
  
  padding: 0.5rem;
  `
