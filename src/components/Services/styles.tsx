import styled from "styled-components";

export const Container = styled.div`
    padding: 30px 0 100px;
    text-align: center;

   

  @media (min-width: 768px) {
    
  }

  @media (min-width: 1024px) {
 
  }
    
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
`

export const Grid = styled.div`

border: 1px solid #CCCCCC;
    border-radius: 1rem;
    margin: 1rem;
    padding: 1rem;


  @media (min-width: 768px) {
    Grid{
        flex-direction: row;
    }
}

@media (min-width: 1024px) {
    Grid{
        flex-direction: row;
    }
}
    
`

export const Image = styled.div`
    
`