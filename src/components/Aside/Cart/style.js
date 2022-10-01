import styled from "styled-components"

export const BoxCart = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 100%;
  min-height: 25%;
  max-height: 90%;

  gap:10px;

  padding: 5px 7px 15px 2px;

  background: var(--grey-5);
  border-radius: 0 0 0.6rem 0.6rem;

  @media (max-width: 970px){
    min-height: 75%;
  }


  ul{
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: auto;
    
    max-width: 100%;
    max-height: 250px;
    
    padding: 10px;
        
    ::-webkit-scrollbar {
      width: 0.65rem;
    }
  
    ::-webkit-scrollbar-track {
      box-shadow: inset 1px 0 5px grey; 
      border-radius: 0.65rem;
    }

    ::-webkit-scrollbar-thumb {
      background: var(--color-primary-2);
      border-radius: 0.65rem;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: var(--color-primary);
    }
    
    @media (max-width: 970px){
      min-width: 95%;
    }
  }
`
