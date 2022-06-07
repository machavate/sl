import styled from "styled-components";

export const Building = styled.div`
    h1{
        font-weight: bolder;
        font-size: 2rem;
    }

    p {
        text-align: center;
    }
`

export const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    ${Building} {
        
    }
`
