import styled, { css, createGlobalStyle } from "styled-components";
import { BaseTag } from "./components/BaseTag";

export const GlobalStyle = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    button{
        cursor: pointer;
        border: none;
        background: transparent;
    }

    ul, ol, li{
        list-style: none;
    }

    img{
        max-width: 100%;
        max-height: 100%;
    }

    input, select{
        background: transparent;
        border: none;
    } 

    :root{
        --color-primary: #27AE60;
        --color-primary-2: #93D7AF;
        --color-secondary: #EB5757;
        --btn-remove: #ff0000;
        --black: #000000;
        --grey-1: #0a0c0d;
        --grey-2: #333333;
        --grey-3: #828282;
        --grey-4: #E0E0E0;
        --grey-5: #F5F5F5;
        --opaco: rgb(33, 37, 41, 0.5);
        --white: #ffffff;

        --font-family: "Inter", sans-serif;

        --fontWei-title: 700;
        --fontSize-title: 16px;
        --fontSize-title-2: 14px;
        --lineHei-title: 24px;

        --fontWei-paragraph: 600;
        --fontWei-paragraph-2: 500;
        --fontSize-paragraph: 13px;
        --fontSize-paragraph-2: 12px;
        --lineHei-paragraph: 24px;

        --fontWei-span: 400;
        --fontWei-span-2: 600;
        --fontSize-span: 12px;
        --fontSize-span-2: 18px;
        --lineHei-span: 16px;

        --fontWei-button: 500;
        --fontSize-button: 13px;
        --lineHei-button: 17px;
    }

    body{
        background: var(--white);
        min-height: 100vh;
        min-width: 100%;
    }

    h1, h2, h3, h4, h5, h6, p, span, li{
    font-family: 'Inter', sans-serif;
    color: var(--color-white);
    }
`;

export const Main = styled.main`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
`;

export const Container = styled(BaseTag)`
  display: flex;
  flex-direction: row;
  justify-content: center; 
  width: 100%;
  margin: 0 auto;
  padding: 1rem;

  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
                max-width: 400px;
            `
      case "defaul":
        return css`
                max-width: 800px;
            `
      case "large":
        return css`
                max-width: 1100px;
                height: 585px;

                @media (max-width: 970px) {
                    justify-content: flex-start; 
                    flex-direction: column;
                    height: 580px;
                }
            `
      default:
        return false
    }
  }}
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  min-width: 23%;
  max-width: 300px;
  min-height: 300px;
  max-height: 500px;

  margin: 26px auto 0 auto;

  animation: show 1.2s ease 0s 1;

  @media (max-width: 970px){
    min-height: 340px;
    max-height: 45%;
    min-width: 70%;
  }

  @keyframes show {
    0%{
      opacity: 0;
      transform: translateX(-25px);
    }

    100%{
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const DivTitleAside = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.6rem 0.6rem 0 0;

  width: 100%;
  height: 45px;

  background-color: var(--color-primary);

  @media (max-width: 970px){
    min-height: 15%;
  }
`;
