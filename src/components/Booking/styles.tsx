import styled from "styled-components"

export const Container = styled.div`
    background-size: cover;
    position: relative;
    background-color: rgba(0,0,0,0.80);
    

`
export const SectionHeader = styled.div`
    margin-bottom: 50px;
`

export const FormGroupDestiny = styled.div`
    label {
	display: block;
	width: 100%;
    }
    
`

export const FormGroup = styled.div`
    
    label{
        color: #fff;
	    font-size: 13px;
	    font-weight: bold;
	    text-transform: uppercase;
	    display: block;
	    margin-bottom: 24px;
    }

    .form_control{
        background-color: transparent;
	    border: 1px solid #fff;
	    border-radius: 6px;
	    color: #cacaca;
	    font-size: 13px;
	    padding: 13px 20px;
	    -webkit-box-shadow: none;
	    -webkit-appearance: none;
	    box-shadow: none;
	    outline: none;
    }
`

export const CarType = styled.div`
    span {
	color: #fff;
	font-size: 13px;
	text-transform: capitalize;
	vertical-align: middle;
    }

    span input[type="submit"]{
        background-color: #f8c12c;
	    border: none;
	    border-radius: 4px;
	    color: #000000;
	    font-size: 13px;
	    font-weight: bold;
	    text-transform: uppercase;
	    padding: 11px 30px 10px;
	    display: inline-block;
	    cursor: pointer;
	    -webkit-transition: all 1s ease 0s;
	    -moz-transition: all 1s ease 0s;
	    -o-transition: all 1s ease 0s;
	    transition: all 1s ease 0s;
    }
`