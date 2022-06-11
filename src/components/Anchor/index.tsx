import { AnchorHTMLAttributes, Component, ReactNode } from "react";
import { Container } from "./styles";

export interface AnchorProps extends AnchorHTMLAttributes<any> {
    type?: 'button' | string
}

export default class Anchor extends Component<AnchorProps, any> {

    constructor(props: AnchorProps) {
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

