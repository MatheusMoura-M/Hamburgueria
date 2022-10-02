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
  
  transition: .8s;
  :hover{
    box-shadow: 8px 8px 10px 1px var(--grey-4);
    transform: translateX(-5px) translateY( -5px);
    
    img{
      animation: zoom 1.2s ease-in-out .2s infinite forwards;
    }
  }

  @media (max-width: 970px) {
      min-width: 250px
    }
  
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

  @keyframes zoom {
    0%{
      transform: rotate(0deg)   scale(1);
    }
    13%{
      transform: rotate(3deg)   scale(1.0375);
    }
    25%{
      transform: rotate(6deg)  scale(1.075);
    }
    37%{
      transform: rotate(3deg)   scale(1.1125);
    }
    50%{
      transform: rotate(0deg)   scale(1.15);
    }
    63%{
      transform: rotate(-3deg)  scale(1.1125);
    }
    75%{
      transform: rotate(-6deg) scale(1.075);
    }
    75%{
      transform: rotate(-3deg)  scale(1.0375);
    }
    100%{
      transform: rotate(0deg)   scale(1);
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

  .animeTitle{

    overflow: hidden;
    position: relative;
    
    &::after{
    animation: textReveal 1s cubic-bezier(0.85, 0, 0.15, 1) forwards;
    background-color: var(--grey-3);
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-105%);
    }
    
    @keyframes textReveal {
      to {
        transform: translateX(101%);
      }
    }
  
  }

  .animeSpan{
    
    overflow: hidden;
    position: relative;
    
    &::after{
    animation: textReveal 1s 0.5s cubic-bezier(0.85, 0, 0.15, 1) forwards;
    background-color: var(--grey-4);
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-105%);
    }
    
    @keyframes textReveal {
      to {
        transform: translateX(101%);
      }
    }
  }

  .animeParagraph{
    overflow: hidden;
    position: relative;

    &::after{
      animation: textReveal 1s 1s cubic-bezier(0.85, 0, 0.15, 1) forwards;
      background-color: var(--color-primary-2);
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: translateX(-105%);
    }

    @keyframes textReveal {
      to {
        transform: translateX(101%);
      }
    }
  }
`
