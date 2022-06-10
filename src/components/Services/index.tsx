import { Container, Title, Grid, Image } from './styles'

export default function Services() {
    return (
        <Container>
            <Title><h2>Our Services</h2></Title>
            <Grid>
                <Image><img src="./_services-1.png" alt="Service" /></Image>
                <h5>Rapid city transfer</h5>
                <p>We will bring you quickly and comfortably to anywhere in your city</p>
            </Grid>
            <Grid>
                <h5>Booking a hotel</h5>
                <p>If you need a comfortable hotel, our operators will book it for you, and take a taxi to the address</p>
            </Grid>
            <Grid>
                <Image><img src="./_services-3.png" alt="Service" /></Image>
                <h5>Airport transfer</h5>
                <p>We will bring you quickly and comfortably to anywhere in your city</p>
            </Grid>
            <Grid>
                <Image><img src="./_services-4.png" alt="Service" /></Image>
                <h5>Baggage transport</h5>
                <p>If you need a comfortable hotel, our operators will book it for you, and take a taxi to the address</p>
            </Grid>
        </Container >
    )
}