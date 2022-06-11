import Button from '../Button'
import Input  from '../Input'
import { Container, Titles, Form } from './styles'

export default function Booking() {
    return (
        <Container>
            <Titles>
                <h6>Choose your car</h6>
                <h3><b>book taxi</b> now</h3>
            </Titles>
            <form>
                <Form>
                    <Input type={'email'} placeholder={'Email'} />
                    <Input type={'text'} placeholder={'phone number'} />
                    <Input type={'text'} placeholder={'From'} />
                    <Input type={'text'} placeholder={'to'} />
                    <Button>Book Now</Button>
                </Form>
            </form>
        </Container>
    )
}