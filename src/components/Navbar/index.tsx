import Link from "next/link";
import { Component, ReactNode } from "react";
import { MaxContainer } from "../../styles/global";
import { BottomBar, Container, TopBar } from "./styles";

export default class Navbar extends Component {

    render(): ReactNode {
        return (
            <Container>
                <TopBar>
                    <MaxContainer>
                        <p><i></i>+258 848 404 231</p>
                    </MaxContainer>
                </TopBar>
                <BottomBar>
                    
                </BottomBar>
            </Container>
        )
    }
}