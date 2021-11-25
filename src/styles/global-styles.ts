import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap');

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: inherit;
        color: inherit;
        outline: none;
    }

    html {
        /* Compensar media rem pra 1rem = 10px */
        font-size: 62.5%;
        font-family: 'Barlow Semi Condensed', sans-serif;
    }

    ul, li {
        list-style: none;
    }

    img {
        width: 100%;
        max-width: 100%;
        display: block;
    }

    body {
        min-height: 100vh;
        background: ${({ theme }) => `radial-gradient(134.34% 134.34% at 50% 0%, ${(theme.gradientes.azulEscuroInicial)} 0%, ${(theme.gradientes.azulEscuroFinal)} 100%);`}
    }
`;
