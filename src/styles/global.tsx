import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    @font-face {
        font-family: "Inter";
        src: url('/fonts/Inter/Inter-VariableFont_slnt.ttf');
    }

    @font-face {
        font-family: "Roboto";
        src: url('/fonts/Roboto/Roboto-Regular.ttf');
    }


    @font-face {
        font-family: "Stroke-Gap-Icons";
        src: url('/fonts/Stroke-Gap-Icons/Stroke-Gap-Icons.eot'),
             url('/fonts/Stroke-Gap-Icons/Stroke-Gap-Icons.ttf') format("truetype"),
             url('/fonts/Stroke-Gap-Icons/Stroke-Gap-Icons.woff') format("woff"),
             url('/fonts/Stroke-Gap-Icons/Stroke-Gap-Icons.svg') format("svg");
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

        i{
            margin-right: 8px;

            color: #f8c12c;

            font-family: 'Stroke-Gap-Icons';
            font-style: normal;
            font-weight: normal;
            font-variant: normal;
            font-size: 18px;
            line-height: 1;
            text-transform: none;
            vertical-align: middle;
            -webkit-font-smoothing: antialiased;
        }

        ul {
            li {
                list-style: none;
            }
        }

        a {
            text-decoration: none;
        }
    }

`

export const MaxContainer = styled.div`
    width: 100%;
    max-width: 1320px;

    margin: auto;
`