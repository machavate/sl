import { ReactElement } from "react"
import { Container } from './styles'

const Input = (props: any): ReactElement => {
    return (
        <Container {...props}>
            {props.children}
        </Container>
    )
}

export default Input