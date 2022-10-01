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

  padding: 5px 2px 15px;

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
    max-height: 300px;

    padding: 10px;

    border-bottom: 2px solid var(--grey-4);

    @media (max-width: 970px){
      min-width: 95%;
    }
  }
`
