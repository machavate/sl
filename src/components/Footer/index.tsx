import {Container,Content,Main,Brand, Other} from './styles'
import { MdFacebook, MdMessage, MdPhoneEnabled } from "react-icons/md";

export default function Footer() {
    return (
        <Container>
            <Content>
                <Main>
                    <Brand>
                        <h2>Sl-Taxi</h2>
                    </Brand>
                   
                </Main>
            </Content>
            <Other>
                <Content>
                    <ul>
                        <li><MdFacebook></MdFacebook></li>
                        <li><MdPhoneEnabled></MdPhoneEnabled></li>
                        <li><MdMessage></MdMessage></li>
                    </ul>
                </Content>
            </Other>
        </Container>
    )
}