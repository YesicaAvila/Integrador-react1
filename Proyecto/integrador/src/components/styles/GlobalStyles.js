import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    :root {
        --medium-beige: #EEE1C5;
        --gradient-grey: linear-gradient(to right, #bdc3c7, #2c3e50);
        --gradient-black: linear-gradient(to right, #000000, #434343);
        --gradient-beige: linear-gradient(to right, #d1913c, #ffd194);
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;
        /* border-style: solid;
        color:red; */
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        padding: 0;
        background: #EEE1C5;
        font-family: 'Cinzel', serif;
        color: white;
        -webkit-tap-highlight-color: transparent;
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
    }

    a:visited {
        color: white;
    }

    li {
        list-style: none;
    }
`;