import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import * as colors from "styles/colors";

const GlobalStyles = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }

    html, body {
        padding: 0;
        margin: 0;
        height: 100%;
        font-size: 10px;
    }

    body{
        color: ${colors.FONT};
        font-size: 1.4rem;
        outline: none;
        line-height: normal;
        overflow-x: hidden;
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    }

    #root {
        height: 100%;
    }

    a{
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }
    ol, ul, li {
        list-style: none;
    }
    img {
        display: block;
        width: 100%;
        height: 100%;
    }
    input, button {
        background-color: transparent;
        padding: 0;
        border: 0;
        outline: none;
    }
`;

export default GlobalStyles;
