import styled from "styled-components"


export const Form = styled.div`
margin-top: 2rem;
    display: flex;
    flex-direction: column;
    
    input {
        margin: 1rem 1rem;
        padding: 1rem;
        width: inherit;
        background-color: rgba(255, 255, 255, 0);
        border: solid 1px rgb(233, 213, 39);
        color: rgba(255, 255, 255, 1)
    }

    button {
        padding: 1rem;
        margin: .2rem 1rem;
        background-color: rgba(255, 255, 255, 0);
        border: solid 1px rgb(233, 213, 39);
        color: rgb(206, 240, 13);
        border-radius: 2rem;
    }

    @media (min-width: 720px) {
        width: auto;
        flex-direction: row;
        display: flex;
        align-items: center;
        justify-content: center;
        input {
            min-width: 10px;
        }
    }
`


export const Titles = styled.div`
    h3,h6{
        text-align: center;
        color: #ffffff;
    }

    h6{
         font-size: 2rem;
         font-weight: bold;
    }
    @media(min-width: 720px) {
        h3,h6{
        text-align: center;
        color: #ffffff;
    }
  
    }
`
export const Container = styled.div`
    background-color: #000000;
`
