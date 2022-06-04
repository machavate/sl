import React, { ButtonHTMLAttributes } from "react";
import { ButtonContainer, LinkContainer } from "./styles";

interface ButtonTypes {
    type?: 'submit' | 'reset' | 'button' | 'link'
}

type ButtonProps = ButtonTypes & Pick<ButtonHTMLAttributes<any>, Exclude<keyof ButtonHTMLAttributes<any>, keyof ButtonTypes>>

export default class Button extends React.Component<ButtonProps> {

    constructor(props: ButtonProps) {
        super(props)
    }

    render(): React.ReactNode {

        if (this.props.type === 'link') {
            return (
                <LinkContainer>

                </LinkContainer>
            )
        }

        return (
            <ButtonContainer>

            </ButtonContainer>
        )
    }
}

