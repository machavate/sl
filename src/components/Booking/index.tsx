import Button from '../Button'
import { Container, FormGroup } from './styles'

export default function Booking() {
    return (
        <Container>
            <form>
                <FormGroup>
                    <input type="text" id="from" name="from" value="" placeholder="From Address..." />
                </FormGroup>
                <FormGroup>
                    <input type="text" id="to" name="to" value="" placeholder="To..." />
                </FormGroup>
                <FormGroup>
                    <input type="text" id="phone" name="phone" value="" placeholder="Phone Number" aria-required="true" />
                </FormGroup>
                <input type="text" id="text" name="text" value="" placeholder="Date and Time" />
            </form>
        </Container>
    )
}