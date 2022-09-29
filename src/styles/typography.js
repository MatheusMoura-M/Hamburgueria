import styled, {css} from "styled-components";

export const ThemeTitle = styled.h2`
  font-family: var(--font-family);
  font-weight: var(--fontWei-title);
  line-height: var(--lineHei-title);

  ${({size}) => {
    switch(size){
      case "small":
        return css`
          font-size: var(--fontSize-title-2);
        `
      case "default":
        return css`
          font-size: var(--fontSize-title);
        `
      default:
        return false
    }
  }}
`;

export const ThemeParagraph = styled.p`
  font-family: var(--font-family);
  font-weight: var(--fontWei-paragraph);
  font-size: var(--fontSize-paragraph);
  line-height: var(--lineHei-paragraph);
`;

export const ThemeSpan = styled.span`
  font-family: var(--font-family);
  font-weight: var(--fontWei-span);
  font-size: var(--fontSize-span);
  line-height: var(--lineHei-span);
  color: var(--grey-3);
`;
