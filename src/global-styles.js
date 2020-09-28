import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Helvetica Neue', Helvetica, Arial, Sans-serif;
        --webkit-font-smoothing: antialiased;
        --moz-osx-font-smoothing: antialiased;
        background-color: black;
        color: #333333;
        font-size: 16px
    }
`;
