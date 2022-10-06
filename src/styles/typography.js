import styled, { css } from "styled-components";

export const NewThemeTitle = styled.h2`
  font-family: var(--font-family);
  font-weight: var(--fontWei-title);
  line-height: var(--lineHei-title);
  opacity: ${(props) => props.animation && "0"};
  animation: ${(props) => props.animation && "appearText 1ms 0.4s forwards;"};
    
  @keyframes appearText {
    to {
      opacity: 1 
    }
  }

  ${({ size }) => {
    switch (size) {
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
`

export const ThemeTitle = styled.h2`
  font-family: var(--font-family);
  font-weight: var(--fontWei-title);
  line-height: var(--lineHei-title);

  ${({ size }) => {
    switch (size) {
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

export const NewThemeParagraph = styled.p`
  font-family: var(--font-family);
  line-height: var(--lineHei-paragraph);
  opacity: ${(props) => props.animation && "0"};
  animation: ${(props) => props.animation && "appearText 1ms 1.5s forwards;"};
  
  @keyframes appearText {
    to {
      opacity: 1 
    }
  }
  
  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          font-size: var(--fontSize-paragraph-2);
          font-weight: var(--fontWei-paragraph-2);
          `
      default:
        return css`
          font-weight: var(--fontWei-paragraph);
          font-size: var(--fontSize-paragraph);
          color: var(--color-primary);
        `
    }
  }}
`;

export const ThemeParagraph = styled.p`
  font-family: var(--font-family);
  line-height: var(--lineHei-paragraph);
  
  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          font-size: var(--fontSize-paragraph-2);
          font-weight: var(--fontWei-paragraph-2);
          `
      default:
        return css`
          font-weight: var(--fontWei-paragraph);
          font-size: var(--fontSize-paragraph);
          color: var(--color-primary);
        `
    }
  }}
`;

export const NewThemeSpan = styled.span`
  font-family: var(--font-family);
  line-height: var(--lineHei-span);
  color: var(--grey-3);
  opacity: ${(props) => props.animation && "0"};
  animation: ${(props) => props.animation && "appearText 1ms 1s forwards;"};
  
  @keyframes appearText {
    to {
      opacity: 1 
    }
  }
  
  ${({ size }) => {
    switch (size) {
      case "big":
        return css`
          font-weight: var(--fontWei-span-2);
          font-size: var(--fontSize-span-2);
          `
      default:
        return css`
          font-weight: var(--fontWei-span);
          font-size: var(--fontSize-span);
          `
    }
  }}
`;

export const ThemeSpan = styled.span`
  font-family: var(--font-family);
  line-height: var(--lineHei-span);
  color: var(--grey-3);

  ${({ size }) => {
    switch (size) {
      case "big":
        return css`
          font-weight: var(--fontWei-span-2);
          font-size: var(--fontSize-span-2);
          `
      default:
        return css`
          font-weight: var(--fontWei-span);
          font-size: var(--fontSize-span);
        `
    }
  }}
`
