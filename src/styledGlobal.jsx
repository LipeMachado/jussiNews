import { createGlobalStyle } from "styled-components";

import EinaBold700 from './Assets/Fonts/Eina/EinaBold700.ttf';
import EinaRegular400 from './Assets/Fonts/Eina/EinaRegular400.ttf';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: EinaBold;
        src: url(${EinaBold700});
    }

    @font-face {
        font-family: EinaRegular;
        src: url(${EinaRegular400});
    }
    
    :root {
        --white: #ffffff;
        --background-website: #F4F9F8;
        --blue-opacity: #2ff8681d;
        --green: #00FF95;
        --green-hover-button: #04e788;
        --green-black: #219653;
        --green-opacity-select-nav: #00ff9545;
        --green-opacity: #2ff86814;
        --amber-black: #072D4B;
        --gray: #F4F9F8;
    }
    
    * {
        margin: 0;
        padding: 0;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background-color: var(--background-website);
        font-family: Roboto, sans-serif;
    }
`;