import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    @font-face {
        font-family: "Inter";
        src: url('/fonts/Inter/Inter-VariableFont_slnt.ttf');
    }

    @font-face {
        font-family: "Roboto";
        src: url('/fonts/Roboto/Roboto-Regular.ttf');
    }

    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        font-size: 1rem;
        font-weight: 400;
        box-sizing: border-box;
    }

    body {
        font-family: Roboto;
        font-size: 1rem;
    }
`