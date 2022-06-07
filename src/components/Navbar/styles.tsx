import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 4rem;

    position: fixed;
    top: 0;
    left: 0;
`

export const TopBar = styled.div`
    height: 2.5rem;
    
    display: flex;
    justify-content: center;

    background-color: rgba(0, 0, 0, 1);

    p {
        color: #fff;
    }

    i::before {
        content: "\\e674";
    }
    
`
export const BottomBar = styled.div`
    display: flex;
    
    ul {
        width: 100%;

        display: flex;
        justify-content: space-between;

        background-color: #313131;

        li {
            display: flex;
            
            a {
                color: #ffffff;
                font-weight: 600;
                padding: 1rem 0;
            }
        }
    }
`