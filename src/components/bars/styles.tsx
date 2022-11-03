import styled from "styled-components";

export const Tool = styled.header`
    width: 100%;
    height: 44px;
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: #202024;
    box-shadow: 0 0 1px rgb(148, 148, 148);
`
export const LeftTool = styled.div`
    padding: 0 1rem;
    line-height: 1;
    a {
        margin: auto;

        svg {
            fill: white;
        }
    }
`

export const RightTool = styled.div`
    padding: 0 1rem;
    line-height: 1;
    a {
        margin: auto;

        svg {
            width: 24px;
            fill:  white;
        }
    }
`
