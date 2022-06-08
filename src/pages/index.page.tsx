import Booking from "../components/Booking"
import Navbar from "../components/Navbar"
import { Container } from "./styles"

export default function Home() {
    return (
        <Container>
             <Navbar />
            <Booking/>
        </Container>
    )
}