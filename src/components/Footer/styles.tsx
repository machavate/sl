import styled from "styled-components"

export const Container = styled.div`
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    width: 100%;
    flex-direction: column;
`


export const Content = styled.div`
    display: flex;
    width: 100%;
    max-width: 1320px;
    flex-direction: column;
    margin: auto;
`

export const Main = styled.div`
    display: flex;
    padding: 1rem;
    flex-direction: column;

    @media (min-width:720px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`

export const Brand = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    h2 {
        color: rgba(0, 0, 0, .5);
    }

    @media (min-width: 720px) {
        width: 100%;
    }
`

export const Other = styled.div`
    display: flex;
    height: 4rem;
    width: 100%;
    flex-direction: column;
    background-color: #000000;
    
    ul {
        display: flex;
        gap: 1rem;
        justify-content: space-between;
        li {
            list-style: none;
            font-size: 12px;
            color: yellow;
        }
    }

    @media (min-width: 720px) {
        
        ul {
            flex-direction: row;
            justify-content: space-between;
        }
    }
`

