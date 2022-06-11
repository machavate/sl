import { ButtonHTMLAttributes, Component, ReactNode } from "react";
import { Container } from "./styles";

export interface ButtonProps extends ButtonHTMLAttributes<any> {

}

export default class Button extends Component<ButtonProps> {

    constructor(props: ButtonProps) {
        super(props)
    }

    render(): ReactNode {
        return (
            <Container {...this.props}>
                {this.props.children}
            </Container>
        )
    }
}

