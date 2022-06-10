import styled from "styled-components"


export const FormGroup = styled.div`
    
    
`

export const Container = styled.div`
    background-color: #030302;
    
    width:100%;
    /* margin-right: 1rem;
    margin-left: 1rem; */
    height: 15rem;
    width: calc(100% - 1rem - 100px);
    margin: auto;

    form{
            flex: 1;
            align-items: center;
            
            
       input{
           margin: 1rem;
           flex-direction: column;
           justify-content: center;
           flex: 1;
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
