import Booking from "../components/Booking"
import Footer from "../components/Footer"
import Services from "../components/Services"
import Tarifs from "../components/Tarifs"
import { Container } from "./styles"

export default function Home() {
    return (
        <Container>
             <Services />
             <Booking/>
             <Tarifs/>
             <Footer/>
        </Container>
    )
}