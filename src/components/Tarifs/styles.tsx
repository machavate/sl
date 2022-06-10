import styled from "styled-components";
import { Title } from "../Services/styles";

export const Titles = styled.div`

`

export const Grid = styled.div`

    border: 1px solid #CCCCCC;
    border-radius: 1rem;
    margin: 1rem;

    @media(min-width: 1080px) {
        
        flex-direction: row;
    }
`
export const Grids = styled.div`
    
`

export const Image = styled.div`
    height: 170px;
    line-height: 170px;
    justify-content: center;
    
`

export const Price = styled.div`
    font-weight: 700;
    font-size: 38px;
    
`
export const Container = styled.div`
    flex-direction: column;
    padding: 30px 0 100px;
    text-align: center;
    ${Titles}{
        h2,h4{
            text-align: center;
            font-weight: 700;
            margin: 0px 0 20px;
        }
        h4{
            color:#FFC61A;
        }
    }
`

