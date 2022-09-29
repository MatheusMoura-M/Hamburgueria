import styled from "styled-components"

export const BoxCart = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 200px;
  max-width: 100%;
  max-height: 90%;

  padding: 5px 2px 15px;

  background: var(--grey-5);
  border-radius: 0 0 0.6rem 0.6rem;

  ul{
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: scroll;

    max-width: 100%;
    max-height: 100%;

    padding-bottom: 10px;

    border-bottom: 2px solid var(--grey-4);
  }
`
