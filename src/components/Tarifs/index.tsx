import { Container, Titles, Grids, Grid, Image, Price } from './styles'
export default function Tarifs() {
    return (
        <Container>
            <Titles>
                <h4>See Our</h4>
                <h2> Tariffs</h2>
            </Titles>
            <Grids>
                <Grid>
                    <Image><img src="./_tariff-1.png" className="full-width" alt="Tariff" /></Image>
                    <h4>Standart</h4>
                    <p>Standard sedan for a drive around the city at your service</p>
                    <Price>Mzn 100<span>/km</span></Price>
                </Grid>
                <Grid>
                    <Image><img src="./_tariff-2.png" className="full-width" alt="Tariff" /></Image>
                    <h4>Business</h4>
                    <p>Standard sedan for a drive around the city at your service</p>
                    <Price>Mzn 200<span>/km</span></Price>
                </Grid>
                <Grid>
                    <Image><img src="./_tariff-3.png" className="full-width" alt="Tariff" /></Image>
                    <h4 className="red">Vip</h4>
                    <p>Standard sedan for a drive around the city at your service</p>
                    <Price>Mzn 300<span>/km</span></Price>
                </Grid>
            <Grid>
                <Image><img src="./_tariff-4.png" className="full-width" alt="Tariff" /></Image>
                <h4>Bus-minivan</h4>
                <p>Standard sedan for a drive around the city at your service</p>
                <Price>Mzn 400<span>/km</span></Price>
            </Grid>
        </Grids>
        </Container >
    )
}