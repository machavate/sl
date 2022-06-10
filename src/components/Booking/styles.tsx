import styled from "styled-components"


export const FormGroup = styled.div`
    
    
`

export const Container = styled.div`
    background-color: #030302;
    
    width: 100%;
    height: 15rem;

  

    form{
            flex: 1;
            align-items: center;
            justify-content: center;
            
       input{
           margin: 1rem;
           flex-direction: column;
           justify-content: center;
           width: 100%;
           
       }
    }

    ${FormGroup}{
        width: 100%;
    }


    @media (min-width: 525px) {
        flex-direction: row;
        input {
            min-width: 320px;
        }
    }
`
