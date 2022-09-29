import styled, { css } from "styled-components";

export const ButtonGreen = styled.button`
  border-radius: 8px;
  background: var(--color-primary);
  border: 2px solid var(--color-primary);
  color: var(--white);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  gap: 10px;

  font-family: var(--font-family);
  font-weight: var(--fontWei-button);
  font-size: var(--fontSize-button);
  line-height: var(--lineHei-button);

  ${({ size }) => {
    switch (size) {
      case "big":
        return css`
           width: 100px;
          height: 35px;
        `;
      case "small":
        return css`
           width: 85px;
          height: 25px;
        `;
      default:
        return false;
    }
  }}
`;

export const ButtonGrey = styled.button`
  border-radius: 8px;
  background: var(--grey-4);
  border: 2px solid var(--grey-4);
  color: var(--grey-3);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  gap: 10px;

  font-family: var(--font-family);
  font-weight: var(--fontWei-button);
  font-size: var(--fontSize-button);
  line-height: var(--lineHei-button);

  ${({ size }) => {
    switch (size) {
      case "big":
        return css`
          width: 120px;
          height: 60px;
        `;
      case "small":
        return css`
          width: 120px;
          height: 40px;
        `;
      default:
        return false;
    }
  }}
`;
