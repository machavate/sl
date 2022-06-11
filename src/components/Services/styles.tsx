import styled from "styled-components";


export const Width = {
    desktop: "1080px",
    tablet: "720px",
    mobile: "1320px"
}

export const Container = styled.div`
    padding: 30px 0 100px;
    text-align: center;
    

    
`


export const Title = styled.div`
        h2{
            color:#FFC61A;
            font-weight: 700;
            h2,h4{
        text-align: center;
    }
    h2{
        margin-top: 40px !important;
    }
        }

    @media(min-width: 720px) {
        
    }
`

export const Grids = styled.div`
    flex-direction: column;
    

    @media(min-width: 720px) {
        display: flex;
        flex-direction: row;
    }
`

export const Grid = styled.div`

    border: 1px solid #CCCCCC;
    border-radius: 1rem;
    margin: 1rem;
    padding: 1rem;

    ${Width.desktop} {
        border: none;
        flex-direction: row;
        display: grid;
    }

    ${Width.tablet} {

    }   

    @media(min-width: 720px){
        flex-direction: row;
}
    
`

export const Image = styled.div`
     ${Width.desktop} {
        width: 20px;
        height: 20px;
}

${Width.tablet} {

}

@media(min-width: 720px){
    width: 10px;
}
`
