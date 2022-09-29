import styled, { createGlobalStyle } from "styled-components";

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
    }

    input, select{
        background: transparent;
        border: none;
        outline: none;
    } 

    :root{
        --color-primary: #27AE60;
        --color-primary-2: #93D7AF;
        --color-secondary: #EB5757;
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
        --fontSize-title: 18px;
        --lineHei-title: 24px;

        --fontWei-paragraph: 600;
        --fontSize-paragraph: 14px;
        --lineHei-paragraph: 24px;

        --fontWei-span: 400;
        --fontSize-span: 12px;
        --lineHei-span: 16px;

        --fontWei-button: 500;
        --fontSize-button: 14px;
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

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
`;

export const Aside = styled.aside`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
`;
