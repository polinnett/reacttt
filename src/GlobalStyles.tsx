import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --dark: black;
        --light: white;
        --buttonColor: #1989f9;;
        --buttonColorDisabled: #66adf4; 
    }

    html, body {
        background-color: var(--theme);
        color: var(--text-color);
    }

    *[data-theme=light] {
        --theme: var(--light);
        --text-color: var(--dark);
        a {
            color: var(--dark);
        }
        button {
            background: var(--buttonColor);
            color: var(--dark);
            &:disabled {
                background: var(--buttonColorDisabled);
            }
        }
        svg path {
            fill: var(--dark);
        }
        thead, tbody, .ant-table-cell {
            background-color: var(--light) !important;
            color: var(--dark) !important;
        }
    }

    *[data-theme=dark] {
        --theme: var(--dark);
        --text-color: var(--light);
        a {
            color: var(--light);
        }
        button {
            background: var(--buttonColorDisabled);
            color: var(--light);
            &:disabled {
                background: var(--buttonColor);
            }
        }
        svg path {
            fill: var(--light);
        }
        thead, tbody, .ant-table-cell {
            background-color: var(--dark) !important;
            color: var(--light) !important;
        }
    }
`;