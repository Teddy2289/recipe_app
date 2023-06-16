import {createGlobalStyle} from "styled-components"

export const Main = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: Raleway, sans-serif;
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({theme}) => theme.colors.bg_color};

  }

  ;
`
